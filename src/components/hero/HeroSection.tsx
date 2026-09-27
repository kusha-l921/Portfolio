'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowDown, Cpu, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import WorkingOnWave from './WorkingOnWave';
import { sound } from '@/utils/sound';

// Dynamically import 3D HeroScene to avoid any SSR issues
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] md:h-[580px] lg:h-[660px] flex items-center justify-center">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
        <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
        <span>BOOTING_3D_WORKSTATION...</span>
      </div>
    </div>
  ),
});

export default function HeroSection({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-blue/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Main Two-Column Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Content Hierarchy */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center">
            {/* Terminal prompt label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel border border-border/60 text-xs font-mono text-muted-text mb-6 w-fit shadow-sm">
              <span className="text-electric-blue font-bold">&gt;</span>
              <span className="text-secondary-text">whoami</span>
              <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse ml-1" />
            </div>

            {/* Name and Technical Subtitle */}
            <div className="space-y-1 mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-primary-text leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs sm:text-sm font-mono text-bright-blue font-semibold tracking-wide">
                <span>AI/ML ENGINEER</span>
                <span className="text-muted-text">•</span>
                <span>PROBLEM SOLVER</span>
                <span className="text-muted-text">•</span>
                <span>BUILDER</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mt-3 mb-5 leading-tight">
              Building intelligent systems{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-bright-blue to-soft-blue">
                for a better tomorrow.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Call to Actions & Terminal Trigger */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-bright-blue hover:from-bright-blue hover:to-soft-blue text-white font-mono text-xs sm:text-sm font-bold tracking-wider shadow-[0_0_25px_rgba(22,135,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                data-cursor="open"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-xl bg-panel hover:bg-panel-elevated text-secondary-text hover:text-primary-text font-mono text-xs sm:text-sm font-medium border border-border/60 hover:border-electric-blue/60 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <Sparkles className="w-4 h-4 text-electric-blue" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="px-3.5 py-3 rounded-xl bg-panel-elevated/50 hover:bg-panel border border-border/40 text-muted-text hover:text-bright-blue font-mono text-xs transition-colors flex items-center gap-1.5"
                title="Launch Terminal HUD"
              >
                <Terminal className="w-3.5 h-3.5 text-electric-blue" />
                <span className="hidden sm:inline">CLI_MODE</span>
              </button>
            </div>

            {/* Quick Stats Line */}
            <div className="mt-10 pt-6 border-t border-border/30 grid grid-cols-3 gap-4 max-w-md font-mono text-xs">
              <div>
                <span className="text-muted-text text-[10px] block">ENGINEERING GPA</span>
                <span className="text-primary-text font-bold text-sm">9.42 / 10.0</span>
              </div>
              <div>
                <span className="text-muted-text text-[10px] block">SPECIALIZATION</span>
                <span className="text-bright-blue font-bold text-sm">B.Tech AI/ML</span>
              </div>
              <div>
                <span className="text-muted-text text-[10px] block">AFFILIATION</span>
                <span className="text-secondary-text font-bold text-sm">Univ of Mumbai</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Computational Workstation */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <HeroScene scrollY={scrollY} />
          </div>
        </div>
      </div>

      {/* Currently Working On Waveform Banner */}
      <WorkingOnWave />
    </section>
  );
}
