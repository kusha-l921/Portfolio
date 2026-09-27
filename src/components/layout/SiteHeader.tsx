'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function SiteHeader({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}) {
  const navItems = [
    { id: 'home', label: '01. home' },
    { id: 'about', label: '02. about' },
    { id: 'projects', label: '03. projects' },
    { id: 'skills', label: '04. skills' },
    { id: 'experience', label: '05. experience' },
    { id: 'contact', label: '06. contact' },
  ];

  return (
    <header className="w-full pt-4 pb-3 px-4 sm:px-8 flex items-center justify-between border-b border-border-subtle bg-[#05080E]/90 backdrop-blur-md sticky top-0 z-40 select-none">
      {/* Left: Terminal Prompt Badge */}
      <div className="flex items-center">
        <div className="px-3.5 py-1.5 rounded-lg border border-border-cyan bg-[#0A101A] flex items-center gap-2 font-mono text-xs text-text-primary shadow-cyan-sm">
          <span className="text-cyan-accent font-semibold">kushal@portfolio:~$</span>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 font-mono text-xs">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-1.5 transition-colors duration-150 ${
                isActive
                  ? 'text-cyan-accent font-semibold cyan-glow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-accent shadow-[0_0_8px_#00E5FF]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right: Status Indicator & Resume Button */}
      <div className="flex items-center gap-4">
        {/* System Online Status */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-cyan-accent shadow-[0_0_8px_#00E5FF] animate-pulse" />
          <span className="text-[11px] tracking-wider text-cyan-accent/90 uppercase font-semibold">
            SYSTME ONLINE
          </span>
        </div>

        {/* Resume.PDF Button */}
        <a
          href={RESUME_DATA.personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-lg border border-border-subtle bg-[#0B111A] hover:bg-[#101926] hover:border-border-cyan transition-all font-mono text-xs text-text-primary flex items-center gap-2 shadow-sm"
        >
          <span className="tracking-wider font-semibold">RESUME.PDF</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
        </a>
      </div>
    </header>
  );
}
