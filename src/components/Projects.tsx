import React from 'react';
import {
  FolderGit2,
  Building,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Major platforms delivered at Intellect Informatics for state and national cooperative credit initiatives.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/60 hover:shadow-md hover:border-indigo-200 transition-all space-y-6"
            >
              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-bold">
                      Featured Project 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-600 font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start md:self-auto space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-slate-800">
                    <Building className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{project.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.overview}
              </p>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                {project.impactMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-center"
                  >
                    <p className="text-lg sm:text-xl font-black text-indigo-600">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Key Technical Contributions:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {project.keyHighlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mr-2">TECH STACK:</span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
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
