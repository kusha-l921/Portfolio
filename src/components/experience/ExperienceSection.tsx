'use client';

import React from 'react';
import { EXPERIENCES, ACHIEVEMENTS } from '@/data/portfolioData';
import { Check } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (Requirement 22) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-text mb-2">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary-text">./experience</span>
          </div>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text">
            The journey so far.
          </h2>
          <p className="mt-3 text-secondary-text text-sm sm:text-base max-w-xl">
            A chronological timeline of engineering leadership, internships, and applied research.
          </p>
        </div>

        {/* Simple Vertical Timeline (Requirement 22) */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 my-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Small Blue Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#080A0D] bg-accent transition-transform duration-200 group-hover:scale-125" />

              {/* Date & Organization Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2 font-mono text-xs">
                <span className="text-accent font-semibold">
                  [{exp.year}] {exp.period}
                </span>
                <span className="text-muted-text">
                  {exp.location}
                </span>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl font-bold text-primary-text mb-0.5">
                {exp.role}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-secondary-text mb-3">
                {exp.organization}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-4 max-w-2xl">
                {exp.description}
              </p>

              {/* Key Contributions */}
              <ul className="space-y-1.5 text-xs text-secondary-text mb-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tooling Tags */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#11161D] border border-white/5 text-muted-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements / Certifications Grid (Requirement 24) */}
        <div className="pt-16 mt-16 border-t border-white/5">
          <div className="mb-8">
            <span className="text-xs font-mono text-muted-text uppercase tracking-widest block mb-1">
              RECOGNITION & HONORS
            </span>
            <h3 className="text-2xl font-bold text-primary-text">
              Certifications & Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-lg border border-white/10 bg-[#11161D] hover:border-accent/40 hover:-translate-y-1 transition-all duration-200 group font-mono"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {ach.badge}
                  </span>
                  <span className="text-[11px] text-muted-text">
                    {ach.date}
                  </span>
                </div>

                <h4 className="text-sm font-sans font-bold text-primary-text group-hover:text-white transition-colors mb-1">
                  {ach.title}
                </h4>
                <p className="text-[11px] text-muted-text mb-2">
                  Issuer: {ach.issuer}
                </p>
                <p className="text-xs text-secondary-text font-sans leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
