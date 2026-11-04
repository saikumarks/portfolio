import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { keyImpacts } from '../data/portfolioData';

export const KeyAchievements: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Impact & Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Measurable engineering outcomes delivered in enterprise production deployments.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyImpacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/60 hover:shadow-md hover:border-indigo-200 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    IMPACT 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-indigo-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
