'use client';

import React from 'react';
import { PERSONAL_INFO, ABOUT_INFO } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Small Monospace Label & Large Heading (Requirement 12) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-text mb-2">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary-text">./about</span>
          </div>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text">
            A little about me.
          </h2>
        </div>

        {/* Clean Two-Column Layout (Requirement 12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Short Biography */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-secondary-text leading-relaxed">
            {ABOUT_INFO.biography.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Education: Simple Editorial Layout (Requirement 23) */}
            <div className="pt-6 mt-8 border-t border-white/10">
              <span className="text-xs font-mono text-muted-text uppercase tracking-wider block mb-2">
                Education
              </span>
              <h3 className="text-base sm:text-lg font-bold text-primary-text">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-text font-mono mt-0.5">
                {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.university}
              </p>
              <span className="text-xs text-muted-text font-mono mt-1 block">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          {/* Right Column: Small Information List (Requirement 12) */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">
            {/* FOCUS */}
            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] text-muted-text uppercase tracking-widest block mb-3 font-semibold">
                FOCUS
              </span>
              <ul className="space-y-1.5 text-secondary-text">
                {ABOUT_INFO.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CURRENTLY LEARNING */}
            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] text-muted-text uppercase tracking-widest block mb-3 font-semibold">
                CURRENTLY LEARNING
              </span>
              <ul className="space-y-1.5 text-secondary-text">
                {ABOUT_INFO.learning.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* INTERESTS */}
            <div className="p-5 rounded-lg border border-white/10 bg-[#11161D]">
              <span className="text-[10px] text-muted-text uppercase tracking-widest block mb-3 font-semibold">
                INTERESTS
              </span>
              <ul className="space-y-1.5 text-secondary-text">
                {ABOUT_INFO.interests.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
