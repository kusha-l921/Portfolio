'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Minus, Square, X, CheckSquare, Square as UncheckedSquare } from 'lucide-react';

export default function HeroVisual() {
  const [progress, setProgress] = useState(78);

  useEffect(() => {
    // Subtle breathing pulse for progress
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 80 ? 76 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center select-none">
      {/* Cyan Backlight Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-cyan-accent/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating daily.log Window (Left) */}
      <div className="absolute left-0 sm:-left-4 top-4 z-20 w-44 sm:w-52 p-3 rounded-lg border border-border-cyan bg-[#090E17]/95 backdrop-blur-md font-mono text-[11px] shadow-cyan-sm">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-border-subtle text-[10px] text-text-muted">
          <span className="text-cyan-accent/90">daily.log</span>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          </div>
        </div>

        {/* Code Content */}
        <div className="space-y-1 text-text-secondary">
          <p className="flex items-center gap-1 text-cyan-accent/80">
            <span>&gt;</span>
            <span className="text-text-primary">learn()</span>
          </p>
          <p className="flex items-center gap-1 text-cyan-accent/80">
            <span>&gt;</span>
            <span className="text-text-primary">build()</span>
          </p>
          <p className="flex items-center gap-1 text-cyan-accent/80">
            <span>&gt;</span>
            <span className="text-text-primary">improve()</span>
          </p>
          <p className="flex items-center gap-1 text-cyan-accent/80">
            <span>&gt;</span>
            <span className="text-text-primary">repeat()</span>
          </p>
          <p className="text-text-muted text-[10px] pt-0.5">
            &gt; // progress...
          </p>

          {/* Progress Bar */}
          <div className="mt-1.5 pt-1.5 border-t border-border-subtle flex items-center justify-between gap-2 text-[10px]">
            <div className="flex-1 h-2 rounded bg-[#05080E] border border-border-subtle overflow-hidden p-[1px]">
              <div
                className="h-full bg-cyan-accent rounded-sm transition-all duration-500 shadow-[0_0_6px_#00E5FF]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-cyan-accent font-semibold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Floating Handwritten Text (Center-Left) */}
      <div className="absolute left-4 sm:left-2 bottom-16 sm:bottom-24 z-20 font-handwritten text-sm sm:text-base text-cyan-bright/90 -rotate-6 leading-tight drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] pointer-events-none">
        <p>A better</p>
        <p>version of</p>
        <p>myself,</p>
        <p>everyday.</p>
      </div>

      {/* Center Character Illustration */}
      <div className="relative z-10 w-[300px] sm:w-[380px] md:w-[440px] h-[300px] sm:h-[380px] md:h-[440px] flex items-center justify-center">
        {/* Glow halo around character */}
        <div className="absolute inset-4 rounded-full border border-cyan-accent/20 bg-cyan-accent/5 filter blur-sm" />

        <div className="relative w-full h-full">
          <Image
            src="/images/character_composite.png"
            alt="Kushal digital avatar illustration"
            fill
            className="object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]"
            priority
          />
        </div>

        {/* Floating open book / ground shadow baseline */}
        <div className="absolute -bottom-2 w-4/5 h-6 bg-gradient-to-t from-[#05080E] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating goals.txt Window (Right) */}
      <div className="absolute right-0 sm:-right-2 top-8 z-20 w-48 sm:w-56 p-3 rounded-lg border border-border-cyan bg-[#090E17]/95 backdrop-blur-md font-mono text-[11px] shadow-cyan-sm">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-border-subtle text-[10px] text-text-muted">
          <span className="text-cyan-accent/90">goals.txt</span>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          </div>
        </div>

        {/* Goals Checklist */}
        <div className="space-y-1.5 text-text-secondary text-[11px]">
          <div className="flex items-center gap-2 text-text-primary">
            <CheckSquare className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
            <span>Build impactful projects</span>
          </div>
          <div className="flex items-center gap-2 text-text-primary">
            <CheckSquare className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
            <span>Grow in AI/ML</span>
          </div>
          <div className="flex items-center gap-2 text-text-primary">
            <CheckSquare className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
            <span>Stay consistent</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <UncheckedSquare className="w-3.5 h-3.5 text-text-muted shrink-0" />
            <span>Make a positive impact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
