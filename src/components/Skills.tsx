import React from 'react';
import { Server, Database, Cpu, Code, Layers, Terminal, Sparkles } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Core technologies and tools verified from my resume and applied daily in enterprise production systems.
          </p>
        </div>

        {/* 4 Clean Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-4 card-hover-glow"
            >
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-800/80">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getIcon(group.icon)}
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
