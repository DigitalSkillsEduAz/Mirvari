import React from 'react';
import { Mountain, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-white" />
              <span className="font-bold text-lg text-white">Mirvari</span>
            </div>
            <p className="text-sm text-slate-400">
              Соединяем вас с душой Азербайджана через его величественные горы и местных жителей.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Регионы</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Большой Кавказ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Малый Кавказ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карабах</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Талыш</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Стать локал-гидом</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} Mirvari Inc. Все права защищены.
            </p>
          </div>
        </div>
        
        {/* Baku Section Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
             <h4 className="text-white font-semibold mb-2">А как же Баку?</h4>
             <p className="text-sm text-slate-400 max-w-2xl mx-auto">
               Баку — жемчужина Каспия и современный мегаполис. Но мы верим, что настоящая душа страны живет в горах. 
               Используйте Баку как приятное завершение вашего горного приключения. Прогуляйтесь по Ичери-шехер, 
               посмотрите на Пламенные башни и насладитесь ветром Каспия.
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;