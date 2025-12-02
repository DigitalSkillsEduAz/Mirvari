import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, ArrowRight, Search, Calculator, Sparkles } from 'lucide-react';
import { ROUTES, BUDDIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-slate-900">
            <img 
                src="https://images.unsplash.com/photo-1549463519-7977eb931345?auto=format&fit=crop&w=2070&q=80" 
                alt="Горы Кавказа" 
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-4 font-medium tracking-wide animate-fade-in-up">
            🇦🇿 Открой настоящий Азербайджан
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
            Горы ждут тебя с <br/> <span className="text-sky-400">локал-гидами</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            60% Азербайджана — это горы. Не сидите в городе. Найдите проверенного локал-гида и исследуйте величественный Кавказ, зеленый Карабах и леса Талыша.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
            <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-xs text-slate-500 font-semibold uppercase">Регион</label>
              <select className="w-full text-slate-800 bg-transparent focus:outline-none cursor-pointer">
                <option>Большой Кавказ</option>
                <option>Карабах</option>
                <option>Талыш</option>
                <option>Малый Кавказ</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs text-slate-500 font-semibold uppercase">Когда</label>
              <input type="date" className="w-full text-slate-800 bg-transparent focus:outline-none" />
            </div>
            <Link to="/buddies" className="bg-brand-primary hover:bg-indigo-600 text-white rounded-full px-8 py-3 flex items-center justify-center transition-colors font-medium">
              Поиск <Search size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="mt-4 text-sm text-slate-300 flex items-center justify-center gap-2">
            <span>Также доступно:</span>
            <Link to="/buddies" className="text-white hover:underline flex items-center">
              Туры по Баку <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-16 z-20 mx-4 md:mx-12 rounded-xl shadow-xl border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-brand-primary">4,466м</h3>
            <p className="text-sm text-slate-500">Высочайший пик (Базар-Дюзи)</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-brand-primary">60%</h3>
            <p className="text-sm text-slate-500">Территория гор</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-brand-primary">500+</h3>
            <p className="text-sm text-slate-500">Проверенных локал-гидов</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-brand-primary">4.9</h3>
            <p className="text-sm text-slate-500">Средний рейтинг</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Smart Spend Teaser */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="relative z-10 text-left md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-indigo-100 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles size={12} /> New Feature
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Smart Spend</h2>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                  Не знаете, сколько стоит день в горах? Введите свой бюджет (например, 35 AZN), и наш ИИ моментально составит для вас план: транспорт, еда и развлечения.
                </p>
                <Link to="/smart-spend" className="inline-flex items-center bg-white text-indigo-900 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg">
                  <Calculator size={20} className="mr-2" /> Рассчитать бюджет
                </Link>
             </div>

             <div className="relative z-10 md:w-1/3 w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                   <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                      <span className="text-white font-bold">Ваш План</span>
                      <span className="text-sky-300 font-mono">35 AZN</span>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3 text-indigo-100 text-sm">
                         <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">🚌</div>
                         <span>Автобус в Губу</span>
                      </div>
                      <div className="flex items-center gap-3 text-indigo-100 text-sm">
                         <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center">🥙</div>
                         <span>Кутабы в лесу</span>
                      </div>
                      <div className="flex items-center gap-3 text-indigo-100 text-sm">
                         <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center">⛰️</div>
                         <span>Хайкинг Тенгеалты</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Не просто гид, а друг в горах</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Мы соединяем вас с местными жителями, которые реально живут в горах. Аутентичный опыт, а не туристические ловушки.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "1. Выбери регион", text: "От снежных пиков Гусара до туманных лесов Талыша.", icon: "🏔️" },
              { title: "2. Найди локал-гида", text: "Смотри профили проверенных местных. Читай отзывы и общайся.", icon: "🤝" },
              { title: "3. Открой настоящий Азербайджан", text: "Посети пастушьи стоянки, скрытые водопады и ешь домашнюю еду.", icon: "🇦🇿" }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12">Исследуй Величественные Регионы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1549141974-9584e1b43959?auto=format&fit=crop&w=800&q=80" alt="Большой Кавказ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Большой Кавказ</h3>
                <p className="text-slate-200 mb-4">Дом Базар-Дюзи, Шахдага и древнего села Хыналыг.</p>
                <span className="text-brand-accent font-medium flex items-center">47 Маршрутов <ArrowRight size={16} className="ml-2" /></span>
              </div>
            </div>
            <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1570654621852-9dd24b77430d?auto=format&fit=crop&w=800&q=80" alt="Карабах" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Карабахские горы</h3>
                <p className="text-slate-200 mb-4">Культурное сердце. Шуша, Джыдыр Дюзю и густые леса.</p>
                <span className="text-brand-accent font-medium flex items-center">23 Маршрута <ArrowRight size={16} className="ml-2" /></span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
             <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80" alt="Талыш" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Талышские горы</h3>
                <p className="text-slate-300 text-sm">Субтропические леса и долголетие.</p>
              </div>
            </div>
             <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=800&q=80" alt="Малый Кавказ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">Малый Кавказ</h3>
                <p className="text-slate-300 text-sm">Глубокие ущелья, родники и зеленые долины.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
         <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Популярные Горные Маршруты</h2>
              <p className="text-slate-500 mt-2">Приключения, отобранные нашими лучшими локал-гидами</p>
            </div>
            <Link to="/routes" className="text-brand-primary font-medium hidden md:block">Смотреть все →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ROUTES.slice(0, 3).map(route => (
              <Link to={`/route/${route.id}`} key={route.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 overflow-hidden relative">
                   <img src={route.imageUrl} alt={route.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-800">
                     {route.duration}
                   </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      route.difficulty === 'Сложный' ? 'bg-red-100 text-red-700' :
                      route.difficulty === 'Средний' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>{route.difficulty}</span>
                    <span className="text-xs text-slate-400">{route.region}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-brand-primary transition-colors">{route.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{route.description}</p>
                </div>
              </Link>
            ))}
          </div>
         </div>
      </section>

      {/* Baku CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-64 md:h-auto">
             <img src="https://images.unsplash.com/photo-1539707139363-22877a7605e5?auto=format&fit=crop&w=800&q=80" alt="Баку" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-brand-primary/20"></div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <span className="text-brand-primary font-bold tracking-wider text-sm mb-2 uppercase">ОПЦИЯ ГОРОДА</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">А как же Баку?</h2>
            <p className="text-slate-600 mb-6">
              Уже нагулялись по горам? Завершите свое приключение прогулкой по Старому городу или бульвару. 
              Наши городские локал-гиды готовы показать вам столицу.
            </p>
            <Link to="/buddies" className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-lg font-medium transition-colors w-fit">
              Найти гида в Баку
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary text-white text-center px-4 relative overflow-hidden">
        {/* Abstract mountain bg decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d">
             <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Горы Зовут</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Не будьте типичным туристом. Почувствуйте гостеприимство высокогорных сел.</p>
          <Link to="/buddies" className="bg-white text-brand-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-transform hover:scale-105 shadow-lg inline-block">
            Найти Своего Локал-гида
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;