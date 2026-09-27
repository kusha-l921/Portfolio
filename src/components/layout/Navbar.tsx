'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'me' }: NavbarProps) {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / winHeight) * 100)));
      }

      // Determine active section based on scroll position
      const sections = ['contact', 'skills', 'projects', 'experience', 'me'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setCurrentSection(sectionId === 'skills' ? 'projects' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setCurrentSection(id);
    }
  };

  const navLinks = [
    { id: 'me', label: '/me' },
    { id: 'projects', label: '/projects' },
    { id: 'experience', label: '/experience' },
    { id: 'contact', label: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <nav
          className={`relative flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
              : 'bg-[#0B0B0B]/70 backdrop-blur-sm border-[#161616]'
          }`}
        >
          {/* Brand / Avatar */}
          <a
            href="#me"
            onClick={(e) => scrollTo('me', e)}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[#222222] bg-[#050505] flex items-center justify-center">
              <Image
                src="/images/character_composite.png"
                alt="Kushal Patel"
                width={32}
                height={32}
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F1F1F1] group-hover:text-white transition-colors">
                Kushal Patel
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-[#666666] leading-tight">
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Core Navigation Items: /me, /projects, /experience, /contact */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#050505] border border-[#161616]">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollTo(link.id, e)}
                  className={`relative px-2.5 sm:px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-medium bg-[#1A1A1A] border border-[#282828]'
                      : 'text-[#888888] hover:text-[#D4D4D4] border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Status indicator + Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-[#666666]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#888888] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A0A0A0]"></span>
              </span>
              <span>online</span>
            </div>

            <a
              href={RESUME_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-mono text-[11px] text-[#D4D4D4] hover:text-white bg-[#101010] hover:bg-[#161616] border border-[#1E1E1E] hover:border-[#2C2C2C] transition-all duration-200"
            >
              <span>resume.pdf</span>
              <ArrowUpRight className="w-3 h-3 text-[#888888]" />
            </a>
          </div>

          {/* Requirement 7: Subtle Grayscale Scroll Progress Indicator Line at the Bottom of Navbar */}
          <div className="absolute -bottom-px left-6 right-6 h-[1px] bg-[#141414] overflow-hidden rounded-full pointer-events-none">
            <div
              className="h-full bg-[#3A3A3A] transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
