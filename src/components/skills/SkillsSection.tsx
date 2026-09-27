'use client';

import React, { useState } from 'react';
import { SKILL_GROUPS, PROJECTS } from '@/data/portfolioData';
import { SkillItem } from '@/types';
import { ArrowUpRight } from 'lucide-react';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header (Requirement 20) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-text mb-2">
            <span className="text-accent">&gt;</span>
            <span className="text-secondary-text">./skills</span>
          </div>
          <div className="w-12 h-px bg-white/20 mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text">
            Tools I work with.
          </h2>
          <p className="mt-3 text-secondary-text text-sm sm:text-base max-w-xl">
            A comprehensive toolchain across deep learning research, systems architecture, and production deployment.
          </p>
        </div>

        {/* Grouped Skills Matrix (Requirement 20 & 21) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="space-y-4">
              <span className="font-mono text-xs text-muted-text uppercase tracking-widest block pb-2 border-b border-white/10 font-semibold">
                {group.category}
              </span>

              <div className="space-y-2">
                {group.skills.map((skill) => {
                  const isHovered = hoveredSkill?.id === skill.id;
                  const isRelated =
                    hoveredSkill &&
                    (hoveredSkill.relatedTech.includes(skill.name) ||
                      skill.relatedTech.includes(hoveredSkill.name));
                  const isDimmed = hoveredSkill && !isHovered && !isRelated;

                  return (
                    <div
                      key={skill.id}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? 'border-accent bg-[#141B24]'
                          : isRelated
                          ? 'border-accent/40 bg-[#11161D]'
                          : isDimmed
                          ? 'border-white/5 bg-[#0D1117] opacity-40'
                          : 'border-white/10 bg-[#11161D] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isHovered
                              ? 'text-accent font-semibold'
                              : isRelated
                              ? 'text-[#5CB5FF]'
                              : 'text-primary-text'
                          }`}
                        >
                          {skill.name}
                        </span>

                        {/* Subtle Indicator (Requirement 21) */}
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            isHovered
                              ? 'bg-accent scale-125'
                              : isRelated
                              ? 'bg-[#5CB5FF]'
                              : 'bg-transparent'
                          }`}
                        />
                      </div>

                      <p className="text-[11px] text-muted-text mt-1 line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Relationship Map: Highlights Related Projects (Requirement 21) */}
        <div className="mt-12 p-5 rounded-xl border border-white/10 bg-[#0D1117] font-mono text-xs">
          <div className="flex items-center justify-between mb-3 text-muted-text">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>RELATIONSHIP MAP // ACTIVE INSPECTION:</span>
            </span>
            <span className="text-accent font-semibold">
              {hoveredSkill ? hoveredSkill.name : 'ALL TOOLS NOMINAL'}
            </span>
          </div>

          {hoveredSkill ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-text text-[11px]">COUPLED PROJECTS:</span>
                {hoveredSkill.relatedProjects.map((pName) => (
                  <span
                    key={pName}
                    className="px-2.5 py-1 rounded bg-[#161D26] border border-accent/40 text-accent font-semibold text-[11px]"
                  >
                    {pName}
                  </span>
                ))}
              </div>
              <div className="text-muted-text text-[11px] shrink-0">
                LINKED TECH: {hoveredSkill.relatedTech.join(', ')}
              </div>
            </div>
          ) : (
            <p className="text-secondary-text text-[11px] pt-1">
              Hover any skill above to inspect interconnected projects and related technologies.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
