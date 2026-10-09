'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectStackItem from './ProjectStackItem';

const FILTERS = ['All', 'AI / ML', 'Computer Vision', 'Systems'] as const;

// Individual Overlapping Project Layer
// All layers share the exact same pinned viewport center coordinates.
// Card 0 starts in place (zIndex 1). Subsequent cards (zIndex k+1) slide in from the right (105% -> 0%)
// directly on top of the previous card, while the card underneath subtly scales to 0.97 and darkens.
interface ProjectOverlapLayerProps {
  project: Project;
  index: number;
  total: number;
  progress: any;
  isMobile: boolean;
  shouldReduceMotion: boolean;
  onSelectProject: (p: Project) => void;
}

function ProjectOverlapLayer({
  project,
  index,
  total,
  progress,
  isMobile,
  shouldReduceMotion,
  onSelectProject,
}: ProjectOverlapLayerProps) {
  const totalTransitions = Math.max(1, total - 1);
  const unit = 1 / (totalTransitions + 0.35);

  // 1. Incoming translation (x)
  const enterStart = index > 0 ? (index - 1) * unit : 0;
  const enterEnd = index > 0 ? index * unit : 0;

  const xInput =
    index === 0
      ? [0, 1]
      : enterStart === 0
        ? [0, enterEnd, 1]
        : [0, enterStart, enterEnd, 1];

  const xOutput =
    index === 0
      ? ['0%', '0%']
      : enterStart === 0
        ? ['105%', '0%', '0%']
        : ['105%', '105%', '0%', '0%'];

  const x = useTransform(progress, xInput, xOutput);

  // 2. Outgoing depth effect (scale down to 0.97 and subtle darkening overlay when next card covers this one)
  const hasNext = index < total - 1;
  const exitStart = index * unit;
  const exitEnd = Math.min(0.999, (index + 1) * unit);

  const scaleInput =
    !hasNext
      ? [0, 1]
      : exitStart === 0
        ? [0, exitEnd, 1]
        : [0, exitStart, exitEnd, 1];

  const scaleOutput =
    !hasNext
      ? [1, 1]
      : exitStart === 0
        ? [1, 0.97, 0.97]
        : [1, 1, 0.97, 0.97];

  const scale = useTransform(progress, scaleInput, scaleOutput);

  // Subtle darkening overlay
  const overlayInput =
    !hasNext
      ? [0, 1]
      : exitStart === 0
        ? [0, exitEnd, 1]
        : [0, exitStart, exitEnd, 1];

  const overlayOutput =
    !hasNext
      ? [0, 0]
      : exitStart === 0
        ? [0, 0.22, 0.22]
        : [0, 0, 0.22, 0.22];

  const overlayOpacity = useTransform(progress, overlayInput, overlayOutput);

  return (
    <motion.div
      className="project-overlap-layer"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: isMobile
          ? '66px 16px 12px'
          : 'clamp(64px, 8.5vh, 80px) clamp(1rem, 2.5vw, 2.5rem) 1.5rem',
        zIndex: index + 1,
        x: shouldReduceMotion ? '0%' : x,
        scale: shouldReduceMotion ? 1 : scale,
        willChange: 'transform',
      }}
    >
      <ProjectStackItem
        project={project}
        index={index}
        total={total}
        overlayOpacity={hasNext && !shouldReduceMotion ? overlayOpacity : undefined}
        onSelectProject={onSelectProject}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  const count = filteredProjects.length;

  const stageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.7,
  });

  const progressToUse = shouldReduceMotion ? scrollYProgress : smoothProgress;

  const handleFilterChange = (f: string) => {
    setSelectedFilter(f);
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        const targetScroll = window.scrollY + rect.top - 70;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  // Synchronized Dual-Input Handler: Translates horizontal input (trackpad deltaX, Shift+wheel, horizontal swipe)
  // directly into equivalent vertical document scroll through the Projects stage, keeping useScroll progress
  // as the single unified source of truth.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      // Allow modal interaction without intercepting
      if (activeModalProject) return;

      const isShift = e.shiftKey && Math.abs(e.deltaY) > 0;
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2;

      // Only handle horizontal input; preserve standard vertical wheel scroll
      if (!isShift && !isHorizontal) {
        return;
      }

      const rawDelta = isHorizontal ? e.deltaX : e.deltaY;
      if (Math.abs(rawDelta) === 0) return;

      // Normalize deltaMode (0 = pixels, 1 = lines, 2 = pages)
      let multiplier = 1;
      if (e.deltaMode === 1) {
        multiplier = 28;
      } else if (e.deltaMode === 2) {
        multiplier = window.innerHeight;
      }

      const deltaPx = rawDelta * multiplier;

      // Calculate geometry of Projects stage
      const rect = stage.getBoundingClientRect();
      const stageTop = window.scrollY + rect.top;
      const stageHeight = stage.offsetHeight;
      const stageMaxScroll = stageTop + stageHeight - window.innerHeight;
      const currentScrollY = window.scrollY;

      // Starting boundary: backward input must not scroll unexpectedly
      if (currentScrollY <= stageTop && deltaPx < 0) {
        e.preventDefault();
        return;
      }

      // Ending boundary: forward input allows natural continuation into subsequent sections
      if (currentScrollY >= stageMaxScroll && deltaPx > 0) {
        e.preventDefault();
        const maxStep = 120;
        const clampedDelta = Math.min(Math.abs(deltaPx), maxStep) * Math.sign(deltaPx);
        window.scrollBy({ top: clampedDelta, behavior: 'auto' });
        return;
      }

      // Active stage range: prevent horizontal browser actions and advance shared vertical scroll
      e.preventDefault();

      const maxStep = 120;
      const clampedDelta = Math.min(Math.abs(deltaPx), maxStep) * Math.sign(deltaPx);
      const targetScrollY = Math.max(
        stageTop,
        Math.min(stageMaxScroll + window.innerHeight, currentScrollY + clampedDelta)
      );

      window.scrollTo({
        top: targetScrollY,
        behavior: 'auto',
      });
    };

    // Touch gesture handling: supports horizontal finger swipe without conflicting with vertical page scrolling
    let touchStartX = 0;
    let touchStartY = 0;
    let touchLocked: 'horizontal' | 'vertical' | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || activeModalProject) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchLocked = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || activeModalProject) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = currentX - touchStartX;
      const dy = currentY - touchStartY;

      if (!touchLocked) {
        if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
          if (Math.abs(dx) > Math.abs(dy) * 1.25) {
            touchLocked = 'horizontal';
          } else {
            touchLocked = 'vertical';
          }
        }
      }

      // Prioritize reliable vertical scrolling on mobile
      if (touchLocked !== 'horizontal') {
        return;
      }

      const rect = stage.getBoundingClientRect();
      const stageTop = window.scrollY + rect.top;
      const stageMaxScroll = stageTop + stage.offsetHeight - window.innerHeight;
      const currentScrollY = window.scrollY;

      const swipeDelta = -dx;

      if (currentScrollY <= stageTop && swipeDelta < 0) {
        return;
      }
      if (currentScrollY >= stageMaxScroll && swipeDelta > 0) {
        return;
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      touchStartX = currentX;
      const touchStep = Math.min(Math.abs(swipeDelta * 1.5), 60) * Math.sign(swipeDelta);
      window.scrollBy({
        top: touchStep,
        behavior: 'auto',
      });
    };

    const handleTouchEnd = () => {
      touchLocked = null;
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    stage.addEventListener('touchstart', handleTouchStart, { passive: true });
    stage.addEventListener('touchmove', handleTouchMove, { passive: false });
    stage.addEventListener('touchend', handleTouchEnd, { passive: true });
    stage.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      stage.removeEventListener('wheel', handleWheel);
      stage.removeEventListener('touchstart', handleTouchStart);
      stage.removeEventListener('touchmove', handleTouchMove);
      stage.removeEventListener('touchend', handleTouchEnd);
      stage.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [count, activeModalProject]);

  return (
    <section id="projects" className="section" style={{ position: 'relative', paddingBottom: '3.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.25rem' }}>
          <div className="terminal-label">
            <span>&gt; projects/</span>
          </div>

          <h2 className="section-title">Selected Work</h2>
          <p className="section-desc">
            A collection of production experiments, neural architectures, and edge systems.
          </p>

          {/* Monochrome Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            {FILTERS.map((f) => {
              const isActive = selectedFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '6px',
                    backgroundColor: isActive ? 'var(--text-white)' : 'var(--bg-card)',
                    color: isActive ? 'var(--bg-body)' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--text-white)' : 'var(--border-card)',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-white)';
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-card)';
                    }
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pinned Overlapping Card Deck Stage */}
      <div
        ref={stageRef}
        className="projects-overlap-stage"
        style={{
          position: 'relative',
          width: '100%',
          height: `${Math.max(1, count) * 100}svh`,
        }}
      >
        <div
          className="projects-overlap-viewport"
          style={{
            position: 'sticky',
            top: 0,
            height: '100svh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectOverlapLayer
              key={project.id}
              project={project}
              index={index}
              total={count}
              progress={progressToUse}
              isMobile={isMobile}
              shouldReduceMotion={!!shouldReduceMotion}
              onSelectProject={setActiveModalProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <style jsx global>{`
        @media (max-width: 860px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .project-preview-wrapper {
            min-height: 230px !important;
          }
        }
      `}</style>
    </section>
  );
}
