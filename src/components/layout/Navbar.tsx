'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'me' }: NavbarProps) {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['fun', 'projects', 'me'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setCurrentSection(sectionId);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B1016]/90 backdrop-blur-md border-border-cyan shadow-lg shadow-black/40'
              : 'bg-[#0B1016]/70 backdrop-blur-sm border-border-subtle'
          }`}
        >
          {/* Brand / Avatar */}
          <a
            href="#me"
            onClick={(e) => scrollTo('me', e)}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-border-cyan bg-[#05070A] flex items-center justify-center">
              <Image
                src="/images/character_composite.png"
                alt="Kushal Patel"
                width={32}
                height={32}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-text-primary group-hover:text-cyan-accent transition-colors">
                Kushal Patel
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-text-muted leading-tight">
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Core Navigation Items: /me, /projects, /fun */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-[#05070A]/80 border border-border-subtle">
            <a
              href="#me"
              onClick={(e) => scrollTo('me', e)}
              className={`relative px-2.5 sm:px-3.5 py-1 text-xs sm:text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                currentSection === 'me'
                  ? 'text-cyan-accent font-semibold bg-cyan-accent/10 border border-border-cyan'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              /me
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollTo('projects', e)}
              className={`relative px-2.5 sm:px-3.5 py-1 text-xs sm:text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                currentSection === 'projects'
                  ? 'text-cyan-accent font-semibold bg-cyan-accent/10 border border-border-cyan'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              /projects
            </a>
            <a
              href="#fun"
              onClick={(e) => scrollTo('fun', e)}
              className={`relative px-2.5 sm:px-3.5 py-1 text-xs sm:text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                currentSection === 'fun'
                  ? 'text-cyan-accent font-semibold bg-cyan-accent/10 border border-border-cyan'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              /fun
            </a>
          </div>

          {/* Right Action: Status indicator + Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>online</span>
            </div>

            <a
              href={RESUME_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-mono text-[11px] text-text-primary bg-[#0E1520] hover:bg-cyan-accent/10 border border-border-subtle hover:border-cyan-accent/40 transition-all duration-200"
            >
              <span>resume.pdf</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-accent" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
