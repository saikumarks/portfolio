import React from 'react';
import { Briefcase, Building, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#060a12]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Professional track record delivering real-time, state and national cooperative banking software.
          </p>
        </div>

        {/* Experience Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-6 card-hover-glow">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {experience.role}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-emerald-400">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{experience.location}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                Present
              </span>
            </div>
          </div>

          {/* Project Mandate */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-emerald-400 font-mono block mb-1">
              PROJECT DOMAIN & MANDATE:
            </span>
            {experience.domain}
          </div>

          {/* Core Responsibilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              Core Responsibilities & Technical Contributions:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              {experience.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Technologies Used in this Role:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
