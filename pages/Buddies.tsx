import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck } from 'lucide-react';
import { BUDDIES } from '../constants';
import { Region } from '../types';

const Buddies: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'Все'>('Все');
  
  const filteredBuddies = selectedRegion === 'Все' 
    ? BUDDIES 
    : BUDDIES.filter(b => b.region === selectedRegion);

  // Sorting: Put Mountain buddies first, City buddies last
  const sortedBuddies = [...filteredBuddies].sort((a, b) => {
    if (a.isCity === b.isCity) return 0;
    return a.isCity ? 1 : -1;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Познакомься с Локал-гидами</h1>
          <p className="text-slate-500">Проверенные местные жители из сел Азербайджана, готовые показать вам свой дом.</p>
        </div>
      </div>

      <div className="sticky top-16 z-30 bg-white shadow-sm border-b border-slate-100 px-4 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-2 min-w-max">
          <button 
            onClick={() => setSelectedRegion('Все')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Все' ? 'bg-brand-dark text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Все регионы
          </button>
          <button 
            onClick={() => setSelectedRegion('Большой Кавказ')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Большой Кавказ' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Большой Кавказ
          </button>
          <button 
            onClick={() => setSelectedRegion('Карабахские горы')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Карабахские горы' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Карабах
          </button>
          <button 
            onClick={() => setSelectedRegion('Талышские горы')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Талышские горы' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Талыш
          </button>
          <button 
            onClick={() => setSelectedRegion('Малый Кавказ')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Малый Кавказ' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Малый Кавказ
          </button>
          <div className="w-px bg-slate-300 mx-2"></div>
           <button 
            onClick={() => setSelectedRegion('Баку и Абшерон')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedRegion === 'Баку и Абшерон' ? 'bg-slate-800 text-white' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            Баку
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBuddies.map(buddy => (
            <div key={buddy.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all flex flex-col">
              <div className="p-6 flex flex-col items-center border-b border-slate-50 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-slate-50">
                  <img src={buddy.imageUrl} alt={buddy.name} className="w-full h-full object-cover" />
                </div>
                {buddy.isVerified && (
                   <span className="absolute top-6 right-6 text-brand-accent" title="Verified ID">
                     <ShieldCheck size={24} fill="#d1fae5" />
                   </span>
                )}
                <h3 className="text-xl font-bold text-slate-800">{buddy.name}, {buddy.age}</h3>
                <div className="flex items-center text-slate-500 text-sm mt-1">
                  <MapPin size={14} className="mr-1" />
                  {buddy.location}
                </div>
                <div className="mt-3 flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-slate-700">{buddy.rating}</span>
                  <span className="text-slate-400 text-xs">({buddy.hikesCompleted} походов)</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                 <div className="mb-4">
                   <p className="text-sm font-semibold text-brand-primary mb-2 uppercase tracking-wide">{buddy.region}</p>
                   <div className="flex flex-wrap gap-2">
                     {buddy.specializations.slice(0, 3).map((spec, idx) => (
                       <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{spec}</span>
                     ))}
                   </div>
                 </div>
                 
                 <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div>
                     <span className="text-lg font-bold text-slate-800">{buddy.pricePerDay} ₼</span>
                     <span className="text-xs text-slate-400">/день</span>
                   </div>
                   <Link to={`/buddy/${buddy.id}`} className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors">
                     Профиль
                   </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buddies;