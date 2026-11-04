import React from 'react';
import { Cpu, Code, Layers, Database, Terminal } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Core technologies and tools verified from my resume and applied daily in enterprise production systems.
          </p>
        </div>

        {/* 4 Clean Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-indigo-200 transition-all space-y-4"
            >
              <div className="flex items-center gap-3 pb-3.5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center shrink-0">
                  {getIcon(group.icon)}
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700 transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-indigo-100/70 text-indigo-800 font-semibold border border-indigo-200/60">
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
