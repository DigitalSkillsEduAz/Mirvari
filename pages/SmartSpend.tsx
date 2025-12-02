import React, { useState } from 'react';
import { generateBudgetPlan } from '../services/geminiService';
import { Wallet, Map, Coffee, ArrowRight, Loader2, Calculator, Sparkles, TrendingUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const SmartSpend: React.FC = () => {
  const [budget, setBudget] = useState<string>('');
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    const amount = parseInt(budget);
    if (!amount || amount <= 0) return;

    setLoading(true);
    setPlan(null);
    
    // Simulate API call or real call
    const result = await generateBudgetPlan(amount);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Rich Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-slate-900 z-0"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
            <Sparkles size={14} className="text-yellow-300" />
            <span>AI-Powered Budgeting</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
            Smart Spend
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-light">
            Введите ваш бюджет на день, и наш ИИ составит идеальный маршрут: от транспорта до местной кухни.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          <div className="p-8 md:p-12">
            <label className="block text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
              Ваш бюджет на день (AZN)
            </label>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1 group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-2xl group-focus-within:text-brand-primary transition-colors">₼</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                  placeholder="35"
                  className="w-full pl-14 pr-6 py-5 text-3xl font-bold text-slate-800 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-primary focus:ring-0 outline-none transition-all placeholder:text-slate-300"
                />
              </div>
              <button
                onClick={handleCalculate}
                disabled={loading || !budget}
                className="bg-brand-primary hover:bg-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 active:translate-y-0 min-w-[160px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : <span className="flex items-center gap-2">Поехали <ArrowRight size={20} /></span>}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {[20, 35, 50, 100].map((val) => (
                <button
                  key={val}
                  onClick={() => setBudget(val.toString())}
                  className="px-5 py-2.5 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-brand-primary rounded-xl text-sm font-semibold transition-all"
                >
                  {val} AZN
                </button>
              ))}
            </div>
          </div>

          {/* Loading State or Results */}
          <div className="bg-slate-50/50 border-t border-slate-100 min-h-[200px]">
            {loading && (
               <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                 <Loader2 size={40} className="animate-spin text-brand-primary mb-4" />
                 <p className="font-medium animate-pulse">Анализируем цены в горах...</p>
               </div>
            )}

            {!plan && !loading && (
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-8 text-center group hover:bg-white transition-colors">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Оптимизация</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Система подберет лучший баланс цены и качества для вашего отдыха.</p>
                </div>
                <div className="p-8 text-center group hover:bg-white transition-colors">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Map size={28} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Логистика</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Реальные маршруты автобусов и цены на такси-шеринг.</p>
                </div>
                <div className="p-8 text-center group hover:bg-white transition-colors">
                  <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Coffee size={28} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">Гастрономия</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Советы, где поесть настоящий кутаб или шашлык недорого.</p>
                </div>
              </div>
            )}

            {plan && !loading && (
              <div className="p-8 md:p-12 bg-white animate-fade-in-up">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Ваш План Дня</h2>
                    <p className="text-slate-500 text-sm mt-1">Рассчитано на {budget} AZN</p>
                  </div>
                  <div className="bg-brand-primary text-white p-3 rounded-xl shadow-lg shadow-indigo-200">
                    <Calculator size={24} />
                  </div>
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-primary prose-strong:text-indigo-700 prose-li:marker:text-brand-accent">
                  <ReactMarkdown>{plan}</ReactMarkdown>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-slate-400 italic">
                    *Цены приблизительные и могут меняться в зависимости от сезона.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                      Скачать
                    </button>
                    <button onClick={() => setPlan(null)} className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200">
                      Новый расчет
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSpend;