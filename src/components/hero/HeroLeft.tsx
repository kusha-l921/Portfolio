'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Settings, Atom } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function HeroLeft({
  onViewProjects,
}: {
  onViewProjects: () => void;
}) {
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWavePhase((p) => (p + 0.1) % (Math.PI * 2));
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center space-y-5 max-w-xl">
      {/* Terminal prompt: > whoami */}
      <div className="flex items-center gap-2 font-mono text-xs text-cyan-accent">
        <span>&gt;</span>
        <span className="font-semibold tracking-wider">whoami</span>
      </div>

      {/* Name with blinking underscore: Kushal_ */}
      <div className="flex items-baseline gap-1">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-text-primary">
          Kushal
        </h1>
        <span className="text-4xl sm:text-5xl font-mono text-cyan-accent animate-pulse font-light">
          _
        </span>
      </div>

      {/* Subtitles */}
      <div className="text-xs sm:text-sm font-mono text-text-secondary tracking-wide">
        {Array.isArray(RESUME_DATA.personal.subtitles)
          ? RESUME_DATA.personal.subtitles.join('  |  ')
          : RESUME_DATA.personal.subtitles}
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-primary leading-[1.15] tracking-tight">
        Building{' '}
        <span className="text-cyan-accent cyan-glow">
          intelligent systems
        </span>{' '}
        for a better tomorrow.
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
        {RESUME_DATA.personal.description}
      </p>

      {/* Two Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* View Projects Button */}
        <button
          onClick={onViewProjects}
          className="px-5 py-2.5 rounded-lg bg-cyan-accent hover:bg-cyan-bright text-[#05080E] font-mono text-xs sm:text-sm font-bold shadow-[0_0_16px_rgba(0,229,255,0.4)] transition-all flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          <span>View Projects</span>
        </button>

        {/* Download Resume Button */}
        <a
          href={RESUME_DATA.personal.resumeUrl}
          download="Kushal_Patel_Resume.pdf"
          className="px-5 py-2.5 rounded-lg border border-border-cyan bg-[#090F18] hover:bg-[#0E1724] text-text-primary font-mono text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
        >
          <Download className="w-4 h-4 text-cyan-accent" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* currently_working_on Banner */}
      <div className="pt-3 space-y-2">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-accent">
          <span>&gt;</span>
          <span className="text-text-secondary">currently_working_on</span>
        </div>

        {/* Card with gear icon and animated waveform */}
        <div className="p-3 rounded-lg border border-border-cyan bg-[#080D16] flex items-center justify-between gap-4 max-w-md shadow-cyan-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded border border-border-cyan bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
              <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <span className="font-mono text-xs font-semibold text-text-primary">
              Solar Flare Prediction
            </span>
          </div>

          {/* Animated Cyan Waveform */}
          <div className="relative w-28 h-6 flex items-center">
            <svg viewBox="0 0 100 24" className="w-full h-full">
              <path
                d={`M 0 12 Q 15 ${12 + Math.sin(wavePhase) * 6} 30 12 T 60 ${
                  12 + Math.cos(wavePhase * 1.5) * 8
                } T 85 ${12 - Math.sin(wavePhase * 2) * 6} T 100 12`}
                fill="none"
                stroke="#00E5FF"
                strokeWidth="1.8"
                className="drop-shadow-[0_0_4px_#00E5FF]"
              />
            </svg>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping absolute right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
