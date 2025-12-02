
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const linkClass = (path: string) => `
    block px-3 py-2 rounded-md text-base font-medium transition-colors
    ${isActive(path) 
      ? 'text-brand-primary bg-indigo-50' 
      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'}
  `;

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile menu button (Left) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Left Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
             <Link to="/" className={location.pathname === '/' ? 'text-brand-primary font-medium' : 'text-slate-600 hover:text-brand-primary'}>Главная</Link>
             <Link to="/buddies" className={isActive('/buddies') ? 'text-brand-primary font-medium' : 'text-slate-600 hover:text-brand-primary'}>Найти локал-гида</Link>
          </div>

          {/* Logo (Centered) */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-4xl tracking-tighter text-slate-900">
                 M<span className="relative inline-block">
                   ı
                   <span className="absolute top-[0.16em] left-1/2 -translate-x-1/2 w-[0.2em] h-[0.2em] bg-sky-500 rounded-full"></span>
                 </span>rvari
              </span>
            </Link>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
            <Link to="/smart-spend" className={`flex items-center gap-2 ${isActive('/smart-spend') ? 'text-brand-primary font-medium' : 'text-slate-600 hover:text-brand-primary'}`}>
              <Calculator size={18} />
              Smart Spend
            </Link>
            
            <Link to="/chat" className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${isActive('/chat') ? 'bg-indigo-50 text-brand-primary' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MessageSquare size={18} />
              <span className="font-medium">Сообщения</span>
            </Link>
          </div>

          {/* Mobile Spacer */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className={linkClass('/')}>Главная</Link>
            <Link to="/buddies" onClick={() => setIsOpen(false)} className={linkClass('/buddies')}>Найти локал-гида</Link>
            <Link to="/smart-spend" onClick={() => setIsOpen(false)} className={linkClass('/smart-spend')}>Smart Spend</Link>
            <Link to="/chat" onClick={() => setIsOpen(false)} className={linkClass('/chat')}>Сообщения</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
