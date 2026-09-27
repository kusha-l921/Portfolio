'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO, ABOUT_DETAILS } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import CardTilt from '@/components/ui/CardTilt';
import { GraduationCap, Award, Compass, Cpu, Brain, Network, Terminal, CheckCircle2 } from 'lucide-react';

const NeuralNetworkScene = dynamic(() => import('@/components/three/NeuralNetworkScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[480px] rounded-2xl border border-border/40 bg-panel/30 flex items-center justify-center">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
        <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" />
        <span>CONSTRUCTING_SYNAPSE_MATRIX...</span>
      </div>
    </div>
  ),
});

export default function AboutSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const pillars = [
    {
      id: 'who-i-am',
      nodeId: 'ai',
      title: 'WHO I AM',
      icon: Brain,
      content: ABOUT_DETAILS.whoIAm,
      tag: 'IDENTITY & ORIGIN',
    },
    {
      id: 'what-i-build',
      nodeId: 'systems',
      title: 'WHAT I BUILD',
      icon: Cpu,
      content: ABOUT_DETAILS.whatIBuild,
      tag: 'SYSTEMS & PIPELINES',
    },
    {
      id: 'what-learning',
      nodeId: 'learning',
      title: 'WHAT I AM LEARNING',
      icon: Compass,
      content: ABOUT_DETAILS.whatIAmLearning,
      tag: 'FRONTIER EXPLORATION',
    },
    {
      id: 'my-approach',
      nodeId: 'research',
      title: 'MY APPROACH',
      icon: Network,
      content: ABOUT_DETAILS.myApproach,
      tag: 'ENGINEERING PRINCIPLES',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01 / ABOUT"
          tag="ENGINEERING IDENTITY"
          title="Building systems. Learning continuously."
          subtitle="Combining theoretical machine learning rigor with production-grade distributed systems to solve high-stakes physical and digital problems."
        />

        {/* Two-Column Grid: 3D Neural Network Graph on Left, Content Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive 3D Neural Network */}
          <div className="lg:col-span-6 space-y-4">
            <NeuralNetworkScene
              onSelectNode={(id) => setSelectedNodeId(id)}
              activeNodeId={selectedNodeId}
            />

            {/* Interactive Feedback HUD */}
            <div className="p-4 rounded-xl border border-border/40 bg-panel/50 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-muted-text">FOCUSED SYNAPSE:</span>
                <span className="text-bright-blue font-semibold uppercase">
                  {selectedNodeId || 'ALL_NODES_ACTIVE'}
                </span>
              </div>
              <span className="text-[10px] text-muted-text">FEEDBACK: REAL-TIME</span>
            </div>
          </div>

          {/* 4 Architectural Content Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const isHighlighted = selectedNodeId === pillar.nodeId;
              const Icon = pillar.icon;

              return (
                <CardTilt
                  key={pillar.id}
                  className={`p-5 rounded-xl border transition-all duration-300 light-sweep-container ${
                    isHighlighted
                      ? 'border-bright-blue bg-panel-elevated shadow-[0_0_20px_rgba(22,135,255,0.25)]'
                      : 'border-border/40 bg-panel/60 hover:border-border/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-muted-text uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-mono font-bold text-primary-text mb-2 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-secondary-text leading-relaxed">
                    {pillar.content}
                  </p>
                </CardTilt>
              );
            })}
          </div>
        </div>

        {/* Education: Technical Signal-Line Aesthetic (Requirement 24) */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl border border-border/50 bg-panel/40 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-electric-blue mb-1">
                  <span>ACADEMIC FOUNDATION</span>
                  <span className="text-muted-text">•</span>
                  <span>{PERSONAL_INFO.education.period}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-text">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-sm text-secondary-text mt-1">
                  {PERSONAL_INFO.education.institution} —{' '}
                  <span className="text-muted-text">{PERSONAL_INFO.education.affiliation}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs">
              <div className="px-4 py-2 rounded-xl bg-panel-elevated border border-border/60 text-right">
                <span className="text-muted-text text-[10px] block">CUMULATIVE GPA</span>
                <span className="text-lg font-bold text-success">{PERSONAL_INFO.education.gpa}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-panel-elevated border border-border/60 text-right">
                <span className="text-muted-text text-[10px] block">STATUS</span>
                <span className="text-sm font-bold text-bright-blue">ACTIVE SCHOLAR</span>
              </div>
            </div>
          </div>

          {/* Technical Coursework Signal Tags */}
          <div className="mt-6">
            <span className="text-[11px] font-mono text-muted-text uppercase tracking-wider block mb-3">
              CORE RIGOROUS COURSEWORK:
            </span>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.education.coursework.map((course) => (
                <div
                  key={course}
                  className="px-3 py-1 rounded-lg bg-panel-elevated/70 border border-border/40 text-xs font-mono text-secondary-text flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-electric-blue" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
