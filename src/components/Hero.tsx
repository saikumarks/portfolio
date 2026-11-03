import React, { useState } from 'react';
import {
  FileDown,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Copy,
  ChevronRight,
  Briefcase,
  Layers,
  Database,
  Shield,
  Check,
  Building,
  Sparkles,
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs text-slate-300 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-sans">Hyderabad / Remote</span>
            </div>

            {/* Headline */}
            <div>
              <p className="text-sm font-semibold text-emerald-400 font-mono tracking-wider uppercase mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Kotturu <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Saikumar</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-200">
                Java Backend Developer <span className="text-emerald-400 font-mono text-lg font-normal">| 3+ Years Experience</span>
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I specialize in building secure, high-throughput enterprise backend applications using <strong className="text-white font-semibold">Core Java, Spring Boot, Spring Security, Hibernate/JPA</strong>, and <strong className="text-white font-semibold">MySQL</strong>. Currently engineering mission-critical cooperative banking ERP systems at <strong className="text-white font-semibold">Intellect Informatics</strong>.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Core Java',
                'Spring Boot',
                'Spring Security',
                'Hibernate (ORM)',
                'Spring Data JPA',
                'MySQL',
                'RESTful APIs',
                'JUnit & Mockito',
                'Jenkins CI/CD',
                'Docker',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={personalInfo.resumeUrl}
                download="Kotturu_Saikumar_Java_Backend_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <span>View ERP Projects</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Email:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-sans"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Phone:</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-sans"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={copyPhone}
                  className="p-1 hover:text-white transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-200 font-sans">{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Experience & Stack Showcase Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-2xl space-y-5 relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Experience Snapshot</h3>
                    <p className="text-[11px] text-slate-400 font-mono">Backend Engineering</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  3.2 Years Total
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-500 font-mono text-[10px] uppercase block">CURRENT ORGANIZATION</span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Intellect Informatics, Hyderabad
                  </p>
                  <p className="text-slate-400">Java Developer (Backend) • 08/2023 – Present</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-500 font-mono text-[10px] uppercase block">CORE PROJECTS DELIVERED</span>
                  <div className="mt-1.5 space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">Data Capturing Tool (DCT)</span>
                      <span className="text-[10px] font-mono text-emerald-400">AP State ERP</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span className="font-semibold text-slate-200">National Level PACS Software</span>
                      <span className="text-[10px] font-mono text-cyan-400">Banking ERP</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-500 font-mono text-[10px] uppercase block mb-1">PROVEN IMPACT</span>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="text-base font-bold text-emerald-400">20%</p>
                      <p className="text-[10px] text-slate-400">Processing Speedup</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="text-base font-bold text-cyan-400">25%</p>
                      <p className="text-[10px] text-slate-400">Faster Integration</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Stats Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c1322] border border-slate-800 card-hover-glow text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
