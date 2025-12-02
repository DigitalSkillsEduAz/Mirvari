
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Search, MoreVertical, CheckCheck } from 'lucide-react';
import { BUDDIES } from '../constants';
import { getChatSessions, getChatHistory, sendMessage, markAsRead } from '../services/chatService';
import { Message, ChatSession } from '../types';

const Chat: React.FC = () => {
  const { buddyId } = useParams<{ buddyId: string }>();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeBuddy = buddyId ? BUDDIES.find(b => b.id === buddyId) : null;

  const refreshData = () => {
    setSessions(getChatSessions());
    if (buddyId) {
      setMessages(getChatHistory(buddyId));
      markAsRead(buddyId);
    }
  };

  useEffect(() => {
    refreshData();
    
    // Listen for simulated replies
    const handleUpdate = (e: CustomEvent) => {
        if (e.detail?.buddyId === buddyId || !buddyId) {
            refreshData();
        }
    };
    window.addEventListener('chat-updated' as any, handleUpdate);
    return () => window.removeEventListener('chat-updated' as any, handleUpdate);
  }, [buddyId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !buddyId) return;
    sendMessage(buddyId, input);
    setInput('');
    refreshData();
  };

  // If on mobile and no buddy selected, show list. If buddy selected, show chat.
  // On desktop, show both.
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 h-[calc(100vh-64px)]">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex border border-slate-200">
        
        {/* Sidebar (Chat List) */}
        <div className={`${buddyId ? 'hidden md:flex' : 'flex'} w-full md:w-80 flex-col border-r border-slate-100 bg-slate-50`}>
          <div className="p-4 border-b border-slate-200 bg-white">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Сообщения</h2>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Поиск..." 
                className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-primary"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {sessions.length === 0 && (
                <div className="p-6 text-center text-slate-500 text-sm">
                    У вас пока нет активных диалогов. Найдите гида в разделе <Link to="/buddies" className="text-brand-primary underline">Поиск</Link>.
                </div>
            )}
            {sessions.map(session => {
              const buddy = BUDDIES.find(b => b.id === session.buddyId);
              if (!buddy) return null;
              
              return (
                <div 
                  key={session.buddyId}
                  onClick={() => navigate(`/chat/${session.buddyId}`)}
                  className={`p-4 flex items-center gap-3 hover:bg-white cursor-pointer transition-colors border-b border-slate-100 ${buddyId === session.buddyId ? 'bg-white border-l-4 border-l-brand-primary' : 'border-l-4 border-l-transparent'}`}
                >
                  <img src={buddy.imageUrl} alt={buddy.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-slate-800 truncate">{buddy.name}</h4>
                      {session.lastMessage && (
                        <span className="text-xs text-slate-400">
                            {new Date(session.lastMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 truncate">
                      {session.lastMessage ? session.lastMessage.text : 'Начните общение'}
                    </p>
                  </div>
                  {session.unreadCount > 0 && (
                      <span className="bg-brand-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {session.unreadCount}
                      </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`${!buddyId ? 'hidden md:flex' : 'flex'} flex-1 flex-col bg-slate-100`}>
          {activeBuddy ? (
            <>
              {/* Chat Header */}
              <div className="bg-white p-4 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
                <div className="flex items-center gap-3">
                  <button onClick={() => navigate('/chat')} className="md:hidden text-slate-500">
                    <ArrowLeft />
                  </button>
                  <img src={activeBuddy.imageUrl} alt={activeBuddy.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-800">{activeBuddy.name}</h3>
                    <span className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span> Онлайн
                    </span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png")' }}>
                <div className="text-center text-xs text-slate-400 my-4">
                  Вы начали общение с {activeBuddy.name}. Договоритесь о лучшем горном походе!
                </div>
                {messages.map(msg => {
                    const isMe = msg.senderId === 'user';
                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm relative ${
                                isMe 
                                    ? 'bg-brand-primary text-white rounded-tr-none' 
                                    : 'bg-white text-slate-800 rounded-tl-none'
                            }`}>
                                <p className="text-sm">{msg.text}</p>
                                <div className={`text-[10px] mt-1 flex justify-end items-center gap-1 ${isMe ? 'text-indigo-200' : 'text-slate-400'}`}>
                                    {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                    {isMe && <CheckCheck size={12} />}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Напишите сообщение..." 
                    className="flex-1 bg-slate-100 border-none rounded-full px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:outline-none"
                  />
                  <button 
                    onClick={handleSend}
                    className="bg-brand-primary text-white p-3 rounded-full hover:bg-indigo-600 transition-colors shadow-lg hover:scale-105 active:scale-95"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
               <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                   <Send size={40} className="text-slate-400" />
               </div>
               <p className="text-lg font-medium">Выберите диалог, чтобы начать общение</p>
               <p className="text-sm max-w-xs text-center mt-2">Здесь вы можете обсуждать детали вашего путешествия с гидами.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
