
import { Message, ChatSession } from '../types';
import { BUDDIES } from '../constants';

const STORAGE_KEY = 'mirvari_chats';

// Load all chats from local storage
const loadChats = (): Record<string, Message[]> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

// Save chats to local storage
const saveChats = (chats: Record<string, Message[]>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
};

export const getChatHistory = (buddyId: string): Message[] => {
  const chats = loadChats();
  return chats[buddyId] || [];
};

export const getChatSessions = (): ChatSession[] => {
  const chats = loadChats();
  return Object.keys(chats).map(buddyId => {
    const messages = chats[buddyId];
    const lastMsg = messages[messages.length - 1];
    // Mock unread count logic (e.g., messages from buddy that are very new)
    const unread = messages.filter(m => m.senderId === buddyId && !m.isRead).length;
    
    return {
      buddyId,
      lastMessage: lastMsg,
      unreadCount: unread
    };
  }).sort((a, b) => (b.lastMessage?.timestamp || 0) - (a.lastMessage?.timestamp || 0));
};

export const sendMessage = (buddyId: string, text: string): Message => {
  const chats = loadChats();
  const newMessage: Message = {
    id: Date.now().toString(),
    senderId: 'user',
    text,
    timestamp: Date.now(),
    isRead: true
  };

  if (!chats[buddyId]) {
    chats[buddyId] = [];
  }
  chats[buddyId].push(newMessage);
  saveChats(chats);
  
  // Trigger simulated reply
  setTimeout(() => simulateReply(buddyId), 2000 + Math.random() * 2000);
  
  return newMessage;
};

const simulateReply = (buddyId: string) => {
  const chats = loadChats();
  const buddy = BUDDIES.find(b => b.id === buddyId);
  if (!buddy) return;

  const responses = [
    `Салам! Спасибо за сообщение. Я сейчас в горах, но скоро отвечу детально.`,
    `Привет! Да, конечно. Маршрут на ${buddy.region} доступен. Какая дата вас интересует?`,
    `Здравствуйте! Я могу организовать это. Мой тариф ${buddy.pricePerDay} AZN в день.`,
    `Отличный выбор! В этом сезоне там очень красиво.`,
    `Да, снаряжение я предоставляю.`,
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  const reply: Message = {
    id: (Date.now() + 1).toString(),
    senderId: buddyId,
    text: randomResponse,
    timestamp: Date.now(),
    isRead: false
  };

  if (!chats[buddyId]) chats[buddyId] = [];
  chats[buddyId].push(reply);
  saveChats(chats);
  
  // Dispatch a custom event so the UI can update if it's open
  window.dispatchEvent(new CustomEvent('chat-updated', { detail: { buddyId } }));
};

export const markAsRead = (buddyId: string) => {
  const chats = loadChats();
  if (chats[buddyId]) {
    chats[buddyId].forEach(m => {
      if (m.senderId === buddyId) m.isRead = true;
    });
    saveChats(chats);
  }
};
