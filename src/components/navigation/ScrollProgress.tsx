'use client';

import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: '00 // HOME' },
  { id: 'about', label: '01 // ABOUT' },
  { id: 'projects', label: '02 // WORK' },
  { id: 'skills', label: '03 // SKILLS' },
  { id: 'experience', label: '04 // JOURNEY' },
  { id: 'contact', label: '05 // CONTACT' },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = window.scrollY;
      const pct = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setProgress(pct * 100);

      // Detect active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6 pointer-events-auto">
      {/* Background Track Line */}
      <div className="relative w-0.5 h-64 bg-border/40 rounded-full overflow-hidden flex flex-col justify-start">
        {/* Progress Fill Line */}
        <div
          className="w-full bg-gradient-to-b from-electric-blue via-bright-blue to-soft-blue shadow-[0_0_8px_#1687FF]"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Section Waypoints */}
      <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div
              key={sec.id}
              className="group relative flex items-center justify-center pointer-events-auto cursor-pointer"
              onClick={() => {
                const el = document.getElementById(sec.id);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Waypoint Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-electric-blue scale-125 shadow-[0_0_10px_#1687FF]'
                    : 'bg-muted-text/50 hover:bg-secondary-text scale-100'
                }`}
              />

              {/* Waypoint Tooltip */}
              <div className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded bg-panel-elevated/90 border border-border/60 text-[9px] font-mono text-secondary-text whitespace-nowrap">
                {sec.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
