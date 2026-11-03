import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle,
  Database,
  Server,
  Shield,
  Layers,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { education, certification } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#060a12]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            A look into my background, engineering philosophy, and educational credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Engineering Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-white">Java Backend Developer</strong> with <strong className="text-white">3 years and 2 months</strong> of experience building mission-critical enterprise applications using <strong className="text-white">Core Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, and MySQL</strong>.
              </p>
              <p>
                Currently at <strong className="text-white">Intellect Informatics</strong>, I contribute to state-level and national enterprise resource planning (ERP) platforms for Primary Agricultural Credit Societies (PACS). My core responsibilities range from architecting RESTful APIs and automating legacy data validation pipelines to optimizing high-volume database queries.
              </p>
              <p>
                I am passionate about clean backend architecture, reliable database transactions, and automated CI/CD build pipelines using Maven, Jenkins, and Docker with high-coverage JUnit and Mockito test suites.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#0c1322]/80 border border-slate-800 card-hover-glow space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Spring Boot & REST APIs</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clean controller-service-repository patterns with standardized HTTP status contracts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1322]/80 border border-slate-800 card-hover-glow space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Database className="w-4 h-4" />
                  <span>Data & Hibernate ORM</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimized MySQL queries, batch operations, and transaction rollback rules.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1322]/80 border border-slate-800 card-hover-glow space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Spring Security</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Role-Based Access Control (RBAC) and method-level permission enforcement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1322]/80 border border-slate-800 card-hover-glow space-y-1.5">
                <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Automated CI/CD & Testing</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated Jenkins pipelines backed by JUnit and Mockito test verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certification Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-3.5 card-hover-glow">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Formal Education</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">
                  {education.degree}
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  {education.institution}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-2.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {education.location}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">Graduated {education.year}</span>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-2xl bg-[#0c1322] border border-slate-800 space-y-3.5 card-hover-glow">
              <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <span>Professional Certification</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">
                  {certification.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  {certification.issuer} ({certification.duration})
                </p>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  <span className="text-slate-500 font-mono block mb-1">COMPREHENSIVE CURRICULUM:</span>
                  {certification.skills}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
