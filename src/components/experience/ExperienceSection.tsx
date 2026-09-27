'use client';

import React, { useState } from 'react';
import { EXPERIENCES, ACHIEVEMENTS } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import CardTilt from '@/components/ui/CardTilt';
import { Briefcase, Award, CheckCircle2, ChevronRight, Sparkles, Terminal, FileText, ExternalLink } from 'lucide-react';
import { sound } from '@/utils/sound';

export default function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04 / EXPERIENCE"
          tag="CAREER TRAJECTORY"
          title="The Journey & Signals"
          subtitle="Engineering timeline spanning autonomous AI research leadership, high-scale machine learning systems internships, and scientific research."
        />

        {/* Vertical Signal Path Timeline (Requirement 36) */}
        <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Signal Line & Milestones (Left Column) */}
          <div className="lg:col-span-4 relative pl-6 border-l-2 border-border/50 space-y-10">
            {/* Animated Travelling Signal Beam along line */}
            <div className="absolute -left-[3px] top-0 w-1.5 h-16 bg-gradient-to-b from-transparent via-bright-blue to-transparent rounded-full shadow-[0_0_12px_#38A3FF] animate-scanline" />

            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeExpId;

              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveExpId(exp.id);
                  }}
                  className={`group cursor-pointer relative transition-all duration-200 ${
                    isActive ? 'scale-[1.02]' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Waypoint Indicator on Line */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-electric-blue border-white shadow-[0_0_12px_#1687FF]'
                        : 'bg-panel border-border/80 group-hover:border-electric-blue'
                    }`}
                  />

                  {/* Year & Role Heading */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-electric-blue">
                      [{exp.year}]
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-panel-elevated border border-border/40 text-muted-text">
                      {exp.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-primary-text group-hover:text-bright-blue transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-secondary-text font-mono">
                    {exp.organization}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Expanded Experience Detail Viewport (Right Column) */}
          <div className="lg:col-span-8">
            {EXPERIENCES.map((exp) => {
              if (exp.id !== activeExpId) return null;

              return (
                <CardTilt
                  key={exp.id}
                  className="p-6 sm:p-8 rounded-2xl border border-electric-blue/40 bg-panel-elevated/70 backdrop-blur-xl shadow-glass light-sweep-container"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-electric-blue mb-1">
                        <span>{exp.period}</span>
                        <span className="text-muted-text">•</span>
                        <span>{exp.location}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-primary-text">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-bright-blue mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-[10px] text-muted-text block">SIGNAL STRENGTH</span>
                      <span className="text-xl font-bold text-success">
                        {exp.signalStrength}%
                      </span>
                    </div>
                  </div>

                  {/* Role Narrative */}
                  <p className="mt-6 text-sm text-secondary-text leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Contributions / Impact */}
                  <div className="mt-6 space-y-3">
                    <h5 className="text-xs font-mono text-muted-text uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                      KEY VERIFIED CONTRIBUTIONS & MILESTONES:
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-electric-blue font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Employed */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest block mb-2">
                      ENVIRONMENT & TOOLING:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-panel border border-border/40 text-xs font-mono text-secondary-text"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardTilt>
              );
            })}
          </div>
        </div>

        {/* Achievements / Certifications Section (Requirement 37) */}
        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-electric-blue mb-1">
                <span>04.1 // RECOGNITION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-text">
                Certifications & Research Honors
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <CardTilt
                key={ach.id}
                className="p-6 rounded-2xl border border-border/40 bg-panel/60 hover:border-electric-blue/60 transition-all light-sweep-container flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-electric-blue/15 text-bright-blue border border-electric-blue/30">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-muted-text">
                      {ach.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-primary-text mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs font-mono text-secondary-text mb-3">
                    Issued by: <span className="text-primary-text">{ach.issuer}</span>
                    {ach.credentialId && (
                      <span className="text-muted-text ml-2">[{ach.credentialId}]</span>
                    )}
                  </p>

                  <p className="text-xs text-secondary-text leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/30 space-y-1">
                  {ach.highlights.map((h, i) => (
                    <div key={i} className="text-[11px] text-muted-text flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-electric-blue" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </CardTilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
