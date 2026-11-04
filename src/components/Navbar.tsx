import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-indigo-950/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand - Exact 1:1 Match to Design 02 */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Indigo SK Badge */}
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold text-sm tracking-wide shadow-md shadow-indigo-500/25 group-hover:bg-indigo-700 transition-colors">
              SK
            </div>
            
            {/* Name and Designation */}
            <div className="leading-tight">
              <div className="text-base font-bold text-slate-900 tracking-tight">
                <span>Kotturu </span>
                <span className="text-indigo-600 group-hover:text-indigo-700 transition-colors">Saikumar</span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium">
                Java Backend Engineer
              </p>
            </div>
          </a>

          {/* Center Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 transition-colors relative py-1 hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA: Resume (PDF) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={personalInfo.resumeUrl}
              download="Kotturu_Saikumar_Java_Backend_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all transform hover:-translate-y-0.5"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              href={personalInfo.resumeUrl}
              download="Kotturu_Saikumar_Java_Backend_Developer_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
