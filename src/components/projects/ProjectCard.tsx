'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowUpRight, Github, ExternalLink, Cpu, Sparkles, Activity } from 'lucide-react';
import { Project } from '@/types';
import CardTilt from '@/components/ui/CardTilt';
import { sound } from '@/utils/sound';

const SolarScene = dynamic(() => import('@/components/three/SolarScene'), { ssr: false });
const FleetScene = dynamic(() => import('@/components/three/FleetScene'), { ssr: false });
const ReWearScene = dynamic(() => import('@/components/three/ReWearScene'), { ssr: false });

export default function ProjectCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const render3DPreview = () => {
    switch (project.sceneType) {
      case 'solar':
        return <SolarScene className="h-[280px] sm:h-[340px]" />;
      case 'fleet':
        return <FleetScene className="h-[220px]" />;
      case 'rewear':
        return <ReWearScene className="h-[220px]" />;
      default:
        return null;
    }
  };

  return (
    <CardTilt
      maxTilt={project.featured ? 2 : 3}
      className={`group relative rounded-2xl border transition-all duration-300 light-sweep-container flex flex-col justify-between overflow-hidden cursor-pointer ${
        project.gridSpan || 'col-span-12 lg:col-span-6'
      } ${
        isHovered
          ? 'border-bright-blue/80 bg-panel-elevated shadow-[0_0_30px_rgba(22,135,255,0.2)]'
          : 'border-border/40 bg-panel/70'
      }`}
      onClick={() => {
        sound.playClick();
        onOpenModal(project);
      }}
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          sound.playHover();
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="p-5 sm:p-7 flex flex-col h-full justify-between"
      >
        <div>
          {/* Card Top Header: Category & Quick Links */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-electric-blue/15 text-bright-blue border border-electric-blue/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-warning/15 text-warning border border-warning/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  FLAGSHIP
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border/40 text-muted-text hover:text-primary-text hover:border-electric-blue transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-border/40 text-muted-text hover:text-bright-blue hover:border-bright-blue transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* 3D Scene Interactive Preview (If Applicable) */}
          {render3DPreview() && (
            <div className="mb-5 transition-transform duration-500 group-hover:scale-[1.02]">
              {render3DPreview()}
            </div>
          )}

          {/* Title and Tagline */}
          <div className="space-y-1 mb-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-text tracking-tight group-hover:text-bright-blue transition-colors duration-200 flex items-center gap-2">
                <span>{project.title}</span>
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-text group-hover:text-bright-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </div>
            <p className="text-xs sm:text-sm font-mono text-secondary-text">
              {project.tagline}
            </p>
          </div>

          {/* Concise Overview */}
          <p className="text-xs sm:text-sm text-secondary-text/90 line-clamp-3 leading-relaxed mb-5">
            {project.overview}
          </p>
        </div>

        {/* Bottom Card Footer: Key Stats and Tech Stack */}
        <div className="pt-4 border-t border-border/30 space-y-3">
          {/* Key Metric Badges */}
          <div className="grid grid-cols-3 gap-2">
            {project.stats.map((stat, i) => (
              <div key={i} className="p-2 rounded-lg bg-panel-elevated/60 border border-border/30 text-center">
                <span className="text-[9px] font-mono text-muted-text block uppercase truncate">
                  {stat.label}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-bright-blue">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-panel text-muted-text border border-border/40 group-hover:text-secondary-text transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="text-[10px] font-mono text-muted-text">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </CardTilt>
  );
}
