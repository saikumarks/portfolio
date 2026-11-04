import React from 'react';
import {
  ArrowDownToLine,
  Mail,
  Code2,
  ShieldCheck,
  Layers,
  Calendar,
  Zap,
  BarChart3,
  BadgeCheck,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Bio & Action Buttons (Exact Design 02 Match) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Top Greeting Badge: 👋 Hello, I'm */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/80 border border-amber-200/60 text-xs font-semibold text-slate-800">
              <span className="text-sm">👋</span>
              <span>Hello, I'm</span>
            </div>

            {/* Giant Title Typography */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.05]">
                <div className="text-slate-900">Kotturu</div>
                <div className="text-indigo-600">Saikumar</div>
              </h1>

              {/* Subtitle Line */}
              <p className="text-xl font-bold text-slate-800 pt-2">
                Java Backend Developer
              </p>

              {/* 3+ Years Experience Pill (On its own line below subtitle, matching Design 02) */}
              <div className="pt-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50/80 border border-indigo-200">
                  <BadgeCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>3+ Years Experience</span>
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md pt-1">
              Building scalable and secure backend systems for enterprise applications, with a focus on performance, reliability, and clean architecture.
            </p>

            {/* Action Buttons: Solid Indigo + Outline (Matching Design 02) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={personalInfo.resumeUrl}
                download="Kotturu_Saikumar_Java_Backend_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pure Mountain Image + 3 Floating Feature Cards (No artificial background shapes) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
            
            <div className="relative w-full max-w-[560px] flex items-center justify-center">
              
              {/* Circular Mountain Graphic (Clean, pure photograph without any weird background blobs) */}
              <div className="relative shrink-0 mr-auto sm:mr-0 sm:-ml-8 lg:-ml-12">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden shadow-2xl shadow-indigo-950/15 border-4 border-white relative group">
                  <img
                    src="/hero-mountain.jpg"
                    alt="Snow-capped mountain peak with sunset alpenglow and misty evergreen forest"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* 3 Floating Feature Cards - Stacked Right & Floating Cleanly */}
              <div className="absolute right-0 sm:-right-2 lg:-right-4 flex flex-col gap-3.5 sm:gap-4 w-[210px] sm:w-[250px] md:w-[270px] lg:w-[285px] z-20">
                
                {/* Card 1: Backend Development */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/70 hover:shadow-xl hover:border-indigo-200 transition-all flex items-center gap-3 sm:gap-3.5 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight">
                      Backend Development
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Java, Spring Boot, JPA
                    </p>
                  </div>
                </div>

                {/* Card 2: Secure & Reliable */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/70 hover:shadow-xl hover:border-indigo-200 transition-all flex items-center gap-3 sm:gap-3.5 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight">
                      Secure & Reliable
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Spring Security, Best Practices
                    </p>
                  </div>
                </div>

                {/* Card 3: Enterprise Systems */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/70 hover:shadow-xl hover:border-indigo-200 transition-all flex items-center gap-3 sm:gap-3.5 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight">
                      Enterprise Systems
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      ERP, Banking, PACS
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Hero Stats Strip - Clean, open horizontal layout matching Design 02 */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-100/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Stat 1: 3+ Years Experience */}
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                  3+ Years
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Experience
                </p>
              </div>
            </div>

            {/* Stat 2: 2 ERPs Production Platforms */}
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                  2 ERPs
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Production Platforms
                </p>
              </div>
            </div>

            {/* Stat 3: 20% Processing Speedup */}
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                  20%
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Processing Speedup
                </p>
              </div>
            </div>

            {/* Stat 4: 25% Faster Integration */}
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                  25%
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Faster Integration
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
