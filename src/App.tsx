import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { KeyAchievements } from './components/KeyAchievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 relative font-sans selection:bg-indigo-500/20 selection:text-indigo-800 antialiased">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 indigo-ambient-bg pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero Section - Exact Design 02 Match */}
        <Hero />

        {/* 2. About Me, Education & Certifications */}
        <About />

        {/* 3. Skills Matrix */}
        <Skills />

        {/* 4. Professional Experience */}
        <Experience />

        {/* 5. Enterprise Projects */}
        <Projects />

        {/* 6. Measurable Impact & Key Achievements */}
        <KeyAchievements />

        {/* 7. Contact Details & Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
