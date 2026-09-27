'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { X, Github, ExternalLink, Activity, Cpu, Layers, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import ArchitecturePipeline from './ArchitecturePipeline';
import { sound } from '@/utils/sound';

const SolarScene = dynamic(() => import('@/components/three/SolarScene'), { ssr: false });
const FleetScene = dynamic(() => import('@/components/three/FleetScene'), { ssr: false });
const ReWearScene = dynamic(() => import('@/components/three/ReWearScene'), { ssr: false });

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderProject3DHero = () => {
    switch (project.sceneType) {
      case 'solar':
        return <SolarScene className="h-[380px] sm:h-[460px]" />;
      case 'fleet':
        return <FleetScene className="h-[380px] sm:h-[460px]" />;
      case 'rewear':
        return <ReWearScene className="h-[380px] sm:h-[460px]" />;
      default:
        return <SolarScene className="h-[380px] sm:h-[460px]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-2xl border border-electric-blue/40 bg-panel shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 px-6 py-4 border-b border-border/40 bg-panel-elevated/95 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-electric-blue/15 border border-electric-blue/40 text-[11px] font-mono text-bright-blue font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted-text hidden sm:inline">
              SYS_ID: // {project.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-1.5 rounded-lg border border-border/50 text-secondary-text hover:text-primary-text hover:border-electric-blue transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">SOURCE</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-3 py-1.5 rounded-lg bg-electric-blue hover:bg-bright-blue text-white text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg hover:bg-panel-elevated border border-border/40 text-muted-text hover:text-primary-text transition-colors"
              title="Close modal [ESC]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* Project 3D Hero */}
          <div className="relative">
            {renderProject3DHero()}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/40 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-text tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-mono text-bright-blue mt-1">
                  {project.tagline}
                </p>
              </div>
              <div className="font-mono text-xs text-muted-text text-left sm:text-right">
                MODEL: <span className="text-primary-text font-bold">{project.model}</span>
              </div>
            </div>
          </div>

          {/* Project Architecture Animation Pipeline (Requirement 32) */}
          <ArchitecturePipeline />

          {/* Key Quantitative Results Cards */}
          <div>
            <h3 className="text-xs font-mono text-muted-text uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-electric-blue" />
              VERIFIED BENCHMARKS & RESULTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.results.map((r, i) => (
                <div key={i} className="p-4 rounded-xl border border-border/40 bg-panel-elevated/40">
                  <div className="text-2xl font-mono font-black text-bright-blue mb-1">
                    {r.value}
                  </div>
                  <div className="text-xs font-bold text-primary-text mb-1">
                    {r.metric}
                  </div>
                  <div className="text-[11px] text-muted-text leading-tight">
                    {r.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Content Grid: Overview, Problem, Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30">
              <h4 className="text-xs font-mono font-bold text-electric-blue uppercase tracking-wider mb-2">
                OVERVIEW
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30">
              <h4 className="text-xs font-mono font-bold text-warning uppercase tracking-wider mb-2">
                THE PROBLEM
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30">
              <h4 className="text-xs font-mono font-bold text-success uppercase tracking-wider mb-2">
                OUR APPROACH
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Dataset & Architecture Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30 space-y-3">
              <h4 className="text-xs font-mono font-bold text-bright-blue uppercase tracking-wider">
                DATASET & PREPROCESSING
              </h4>
              <p className="text-xs text-secondary-text leading-relaxed">
                {project.dataset}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30 space-y-3">
              <h4 className="text-xs font-mono font-bold text-bright-blue uppercase tracking-wider">
                TECH STACK & RUNTIME
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-panel border border-border/50 text-xs font-mono text-secondary-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges & Future Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30">
              <h4 className="text-xs font-mono font-bold text-secondary-text uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-warning" />
                KEY ENGINEERING CHALLENGES
              </h4>
              <ul className="space-y-2 text-xs text-secondary-text">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-electric-blue font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-border/40 bg-panel-elevated/30">
              <h4 className="text-xs font-mono font-bold text-secondary-text uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-bright-blue" />
                FUTURE EXPANSION ROADMAP
              </h4>
              <ul className="space-y-2 text-xs text-secondary-text">
                {project.futureWork.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-success font-bold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
