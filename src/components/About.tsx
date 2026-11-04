import React from 'react';
import {
  GraduationCap,
  Award,
  Database,
  Server,
  Shield,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { education, certification } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            A look into my background, engineering philosophy, and educational credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Engineering Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/60 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-slate-900 font-semibold">Java Backend Developer</strong> with <strong className="text-slate-900 font-semibold">3 years and 2 months</strong> of experience engineering mission-critical enterprise applications using <strong className="text-indigo-600 font-semibold">Core Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, and MySQL</strong>.
              </p>
              <p>
                Currently at <strong className="text-slate-900 font-semibold">Intellect Informatics</strong>, I contribute to state-level and national enterprise resource planning (ERP) platforms for Primary Agricultural Credit Societies (PACS). My core responsibilities range from architecting high-throughput RESTful APIs and automating legacy data validation pipelines to optimizing high-volume database queries.
              </p>
              <p>
                I am passionate about clean backend architecture, reliable database transactions, and automated CI/CD build pipelines using Maven, Jenkins, and Docker with high-coverage JUnit and Mockito test suites.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Server className="w-4 h-4" />
                  </div>
                  <span>Spring Boot & REST APIs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean controller-service-repository patterns with standardized HTTP status contracts.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Database className="w-4 h-4" />
                  </div>
                  <span>Data & Hibernate ORM</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Optimized MySQL queries, batch operations, and transaction rollback rules.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Spring Security</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Role-Based Access Control (RBAC) and method-level permission enforcement.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="p-2 rounded-lg bg-indigo-50">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Automated CI/CD & Testing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated Jenkins pipelines backed by JUnit and Mockito test verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certification Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/60 space-y-4 hover:border-indigo-200 transition-all">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>Formal Education</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  {education.year}
                </span>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {education.degree}
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  {education.institution}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm shadow-slate-200/60 space-y-4 hover:border-indigo-200 transition-all">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Award className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>Professional Certification</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  {certification.duration}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {certification.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  {certification.issuer}
                </p>
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    CURRICULUM HIGHLIGHTS:
                  </span>
                  {certification.skills}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
