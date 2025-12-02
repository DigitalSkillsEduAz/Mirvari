import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Activity, Info, CheckCircle, ShieldCheck } from 'lucide-react';
import { ROUTES } from '../constants';

const RouteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const route = ROUTES.find(r => r.id === id);

  if (!route) {
    return <div className="p-20 text-center">Маршрут не найден. <Link to="/" className="text-blue-500">На главную</Link></div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img src={route.imageUrl} alt={route.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link to="/" className="text-white/80 hover:text-white mb-4 inline-flex items-center"><ArrowLeft size={16} className="mr-2"/> Назад к маршрутам</Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-brand-primary px-3 py-1 rounded text-xs font-bold text-white uppercase">{route.region}</span>
            <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
               route.difficulty === 'Сложный' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-slate-900'
            }`}>{route.difficulty}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{route.title}</h1>
          <div className="flex items-center gap-6 text-white/90">
             <span className="flex items-center"><Calendar size={18} className="mr-2"/> {route.duration}</span>
             {route.maxAltitude && <span className="flex items-center"><Activity size={18} className="mr-2"/> Макс. Высота: {route.maxAltitude}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Об этом приключении</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {route.description}
            <br/><br/>
            Это не просто тур, это погружение в местную среду. Вас будет сопровождать проверенный локал-гид из этого региона, который знает местность досконально.
          </p>

          {route.itinerary && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Программа тура</h3>
              <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
                {route.itinerary.map((day, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-0 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {day.day}
                    </span>
                    <h4 className="font-bold text-lg text-slate-800">{day.title}</h4>
                    <p className="text-slate-600 mt-2">{day.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {route.requirements && (
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Info size={20} className="mr-2 text-brand-primary"/> Требования
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {route.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <CheckCircle size={16} className="mr-2 text-brand-accent" /> {req}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <div className="text-center mb-6">
               <span className="text-slate-500 text-sm">Цена от</span>
               <div className="text-3xl font-bold text-brand-primary">{route.priceEstimate} ₼</div>
               <span className="text-slate-400 text-xs">с человека (прим.)</span>
            </div>
            
            <button className="w-full bg-brand-primary hover:bg-indigo-700 text-white font-bold py-4 rounded-xl mb-4 transition-colors">
              Найти гида для маршрута
            </button>
            <p className="text-center text-xs text-slate-400 mb-6">
              Цена зависит от конкретного локал-гида и размера группы.
            </p>

            <hr className="border-slate-100 mb-6" />

            <h4 className="font-bold text-sm text-slate-800 mb-3">Почему этот маршрут?</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5 text-brand-primary shrink-0"/> Аутентичные горные села</li>
              <li className="flex items-start"><Activity size={16} className="mr-2 mt-0.5 text-brand-primary shrink-0"/> Невероятные виды Кавказа</li>
              <li className="flex items-start"><ShieldCheck size={16} className="mr-2 mt-0.5 text-brand-primary shrink-0"/> Безопасность с местными экспертами</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDetail;