import React from 'react';
import {
  FolderGit2,
  CheckCircle2,
  TrendingUp,
  Building,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Major platforms delivered at Intellect Informatics for state and national cooperative credit initiatives.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-6 card-hover-glow"
            >
              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
                      Featured Project 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-300 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 self-start md:self-auto space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Building className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.impactMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center"
                  >
                    <p className="text-lg sm:text-xl font-bold text-emerald-400">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Key Technical Contributions:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {project.keyHighlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-500 font-mono mr-2">TECH STACK:</span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800 hover:border-emerald-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
