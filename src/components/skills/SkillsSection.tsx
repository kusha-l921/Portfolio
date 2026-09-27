'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { SKILL_NODES } from '@/data/portfolioData';
import { SkillNode } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import CardTilt from '@/components/ui/CardTilt';
import { Sparkles, Orbit, Grid, ArrowUpRight, Cpu, Code2, Terminal, Layers } from 'lucide-react';
import { sound } from '@/utils/sound';

const SkillUniverseScene = dynamic(() => import('@/components/three/SkillUniverseScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] md:h-[580px] rounded-2xl border border-border/40 bg-panel/30 flex items-center justify-center">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
        <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
        <span>CALCULATING_ORBITAL_EPHEMERIS...</span>
      </div>
    </div>
  ),
});

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(SKILL_NODES[0]); // default to PyTorch
  const [viewMode, setViewMode] = useState<'3d' | 'matrix'>('3d');

  const categories = ['ALL', 'AI / ML', 'PROGRAMMING', 'BACKEND', 'SYSTEMS', 'TOOLS'] as const;
  const [filterCat, setFilterCat] = useState<string>('ALL');

  const filteredMatrix = SKILL_NODES.filter((s) => {
    if (filterCat === 'ALL') return true;
    return s.category === filterCat;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <SectionHeader
            index="03 / SKILLS"
            tag="KNOWLEDGE ARCHITECTURE"
            title="Technical Universe"
            subtitle="An interactive gravitational system representing proficiency, dependencies, and real-world system deployments."
            className="mb-0"
          />

          {/* View Mode Toggle Switch */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-panel border border-border/50 font-mono text-xs w-fit mb-6 sm:mb-0">
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('3d');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === '3d'
                  ? 'bg-electric-blue text-white shadow-sm'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>3D UNIVERSE</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('matrix');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'matrix'
                  ? 'bg-electric-blue text-white shadow-sm'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>MATRIX</span>
            </button>
          </div>
        </div>

        {viewMode === '3d' ? (
          /* 3D Orbital Universe + Connected Inspector Panel */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
            {/* 3D Universe Viewport */}
            <div className="lg:col-span-8">
              <SkillUniverseScene
                selectedSkill={selectedSkill}
                onSelectSkill={(skill) => {
                  if (skill) {
                    sound.playHover();
                    setSelectedSkill(skill);
                  }
                }}
              />
            </div>

            {/* Live Knowledge Node Inspector Card */}
            <div className="lg:col-span-4">
              {selectedSkill ? (
                <div className="p-6 rounded-2xl border border-electric-blue/40 bg-panel-elevated/85 backdrop-blur-xl shadow-glass space-y-6">
                  {/* Top Node Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/40">
                    <div>
                      <span className="text-[10px] font-mono text-electric-blue uppercase tracking-widest block mb-0.5">
                        {selectedSkill.category}
                      </span>
                      <h3 className="text-2xl font-black text-primary-text">
                        {selectedSkill.name}
                      </h3>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-[10px] text-muted-text block">PROFICIENCY</span>
                      <span className="text-xl font-bold text-success">
                        {selectedSkill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Technical Overview */}
                  <div>
                    <h4 className="text-xs font-mono text-muted-text uppercase tracking-wider mb-2">
                      SYSTEM CAPABILITY & USE:
                    </h4>
                    <p className="text-xs text-secondary-text leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  {/* Connected Projects */}
                  <div>
                    <h4 className="text-xs font-mono text-bright-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      DEPLOYED IN PROJECTS:
                    </h4>
                    <div className="space-y-1.5">
                      {selectedSkill.relatedProjects.map((proj, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-lg bg-panel border border-border/40 text-xs font-mono text-primary-text flex items-center justify-between"
                        >
                          <span>{proj}</span>
                          <span className="text-[10px] text-electric-blue">VERIFIED &gt;</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interlinked Technologies */}
                  <div>
                    <h4 className="text-xs font-mono text-muted-text uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      COUPLED TECHNOLOGIES:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.relatedTech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-panel border border-border/40 text-[11px] font-mono text-secondary-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-2xl border border-dashed border-border/60 bg-panel/30 text-center font-mono text-xs text-muted-text">
                  Hover or click any orbital node in the 3D universe to inspect system dependencies.
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Matrix Grid View */
          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCat(c)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    filterCat === c
                      ? 'bg-electric-blue text-white'
                      : 'bg-panel border border-border/40 text-secondary-text hover:text-primary-text'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMatrix.map((skill) => (
                <CardTilt
                  key={skill.id}
                  className="p-5 rounded-xl border border-border/40 bg-panel/70 hover:border-electric-blue/50 transition-all light-sweep-container"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-electric-blue uppercase">
                      {skill.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-success">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-primary-text mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-secondary-text mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-border/30">
                    {skill.relatedProjects.map((rp, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-panel-elevated text-[10px] font-mono text-muted-text"
                      >
                        {rp}
                      </span>
                    ))}
                  </div>
                </CardTilt>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
