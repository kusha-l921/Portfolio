'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import SystemArchitectureSketch from './SystemArchitectureSketch';

export default function HeroSection({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Technical Label (Requirement 3 & 8) */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-text mb-4">
              <span className="text-accent">&gt;</span>
              <span className="text-secondary-text">whoami</span>
            </div>

            {/* Horizontal Line Drawing Accent */}
            <div className="w-16 h-px bg-white/20 mb-6" />

            {/* Large Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary-text tracking-tight leading-none mb-3">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitles: AI/ML Engineer • Builder • Problem Solver */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-muted-text mb-6">
              {PERSONAL_INFO.subtitles.map((sub, idx) => (
                <React.Fragment key={sub}>
                  <span className="text-secondary-text">{sub}</span>
                  {idx < PERSONAL_INFO.subtitles.length - 1 && (
                    <span className="text-white/20">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Main Statement (Requirement 8) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-text tracking-tight leading-snug mb-5 max-w-xl">
              I build intelligent systems that solve real-world problems.
            </h2>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-secondary-text leading-relaxed max-w-lg mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* Buttons (Requirement 8) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="px-5 py-2.5 rounded-md bg-[#2F9BFF] hover:bg-[#5CB5FF] text-white font-mono text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
                data-cursor="open"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link
                href="/resume"
                className="px-4 py-2.5 rounded-md bg-[#11161D] hover:bg-[#161D26] text-secondary-text hover:text-primary-text border border-white/10 hover:border-white/20 font-mono text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-4 h-4 text-muted-text" />
              </Link>

              <button
                onClick={onOpenTerminal}
                className="p-2.5 rounded-md border border-white/10 hover:border-white/20 text-muted-text hover:text-secondary-text transition-colors"
                title="Open interactive terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Subtle Technical Architecture Visual (Requirement 9) */}
          <div className="lg:col-span-5 flex justify-center">
            <SystemArchitectureSketch />
          </div>
        </div>
      </div>
    </section>
  );
}
