import React from 'react';
import { TrendingUp, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { keyImpacts } from '../data/portfolioData';

export const KeyAchievements: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-[#060a12]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Impact & Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Measurable engineering outcomes delivered in enterprise production deployments.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyImpacts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-4 flex flex-col justify-between card-hover-glow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    IMPACT 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
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
