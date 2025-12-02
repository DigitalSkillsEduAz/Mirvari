
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck, Languages, Award, Check } from 'lucide-react';
import { BUDDIES, REVIEWS } from '../constants';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const buddy = BUDDIES.find(b => b.id === id);

  if (!buddy) {
    return <div className="p-20 text-center">Локал-гид не найден.</div>;
  }

  const buddyReviews = REVIEWS.slice(0, 3); // Mock: normally filter by buddy ID

  // Mountain themed gallery placeholders
  const galleryImages = [
      "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-brand-light">
                  <img src={buddy.imageUrl} alt={buddy.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <div>
                     <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                       {buddy.name}, {buddy.age}
                       {buddy.isVerified && <ShieldCheck className="text-brand-accent" fill="#d1fae5" size={24} />}
                     </h1>
                     <div className="flex flex-col gap-1 mt-1">
                         <p className="text-slate-500 flex items-center"><MapPin size={16} className="mr-1"/> {buddy.location} ({buddy.region})</p>
                         <p className="text-xs text-slate-400 font-medium">Локал-гид с: Февраль 2023</p>
                     </div>
                   </div>
                   <div className="text-right hidden md:block">
                     <div className="flex items-center justify-end gap-1 text-yellow-500">
                       <Star fill="currentColor" size={20} />
                       <span className="text-xl font-bold text-slate-800">{buddy.rating}</span>
                     </div>
                     <p className="text-xs text-slate-400">{buddy.reviewCount} отзывов</p>
                   </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                   {buddy.specializations.map(s => (
                     <span key={s} className="px-3 py-1 bg-indigo-50 text-brand-primary rounded-full text-xs font-bold">{s}</span>
                   ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1"><Languages size={16}/> {buddy.languages.join(', ')}</div>
                  <div className="flex items-center gap-1"><Award size={16}/> {buddy.hikesCompleted} Походов завершено</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Обо мне</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{buddy.bio}</p>
            </div>

            {/* Gallery (Mock) */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Мои приключения в горах</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {galleryImages.map((imgUrl, i) => (
                   <img key={i} src={imgUrl} className="rounded-lg w-full h-32 object-cover hover:opacity-90 transition-opacity cursor-pointer shadow-sm" alt="Gallery" />
                 ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Отзывы</h2>
              <div className="space-y-6">
                {buddyReviews.map(review => (
                  <div key={review.id} className="border-b border-slate-50 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-slate-800">{review.author}</span>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                       {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-600 text-sm italic">"{review.text}"</p>
                    <span className="inline-block mt-2 text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">{review.tourType}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <div className="flex justify-between items-end mb-6">
                 <div>
                   <span className="block text-slate-400 text-xs">Цена от</span>
                   <span className="text-2xl font-bold text-brand-primary">{buddy.pricePerDay} ₼</span>
                 </div>
                 <span className="text-slate-500 text-sm">в день</span>
              </div>

              <button className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl mb-3 hover:bg-indigo-700 transition-colors">
                Запросить бронь
              </button>
              
              <Link to={`/chat/${buddy.id}`} className="block w-full text-center bg-white border border-brand-primary text-brand-primary font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                Написать сообщение
              </Link>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <Check size={16} className="text-green-500 mr-2" /> Документы проверены
                </div>
                 <div className="flex items-center text-sm text-slate-600">
                  <Check size={16} className="text-green-500 mr-2" /> Отвечает за 1 час
                </div>
                 <div className="flex items-center text-sm text-slate-600">
                  <Check size={16} className="text-green-500 mr-2" /> Эксперт региона {buddy.region}
                </div>
              </div>
              
              {!buddy.isCity && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                   <strong>Знаете ли вы?</strong> {buddy.name} живет в горах. Это помогает напрямую поддерживать экономику местных сел.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
