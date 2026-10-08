'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectStackItem from './ProjectStackItem';

const FILTERS = ['All', 'AI / ML', 'Computer Vision', 'Systems'] as const;

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

  // For N projects, the transition from project 0 to project N-1 completes at (count - 1) / count.
  // The final project then remains comfortably settled and centered for the remaining progress interval.
  const lastSettlePoint = count > 1 ? (count - 1) / count : 1;
  const maxOffsetVw = count > 1 ? (count - 1) * 100 : 0;

  const trackX = useTransform(
    progressToUse,
    count > 1 ? [0, lastSettlePoint, 1] : [0, 1],
    count > 1 ? ['0vw', `-${maxOffsetVw}vw`, `-${maxOffsetVw}vw`] : ['0vw', '0vw']
  );

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

      {/* Responsive Presentation: Desktop/Tablet Horizontal Stage vs Mobile Vertical Flow */}
      {isMobile ? (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <ProjectStackItem
              key={project.id}
              project={project}
              index={index}
              total={count}
              onSelectProject={setActiveModalProject}
            />
          ))}
        </div>
      ) : (
        <div
          ref={stageRef}
          className="projects-horizontal-stage"
          style={{
            position: 'relative',
            width: '100%',
            height: `${Math.max(1, count) * 100}svh`,
          }}
        >
          <div
            className="projects-horizontal-viewport"
            style={{
              position: 'sticky',
              top: 0,
              height: '100svh',
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <motion.div
              className="projects-horizontal-track"
              style={{
                display: 'flex',
                width: `${Math.max(1, count) * 100}vw`,
                height: '100%',
                x: trackX,
                willChange: 'transform',
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-horizontal-slide"
                  style={{
                    width: '100vw',
                    minWidth: '100vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    padding: 'clamp(64px, 8.5vh, 80px) clamp(1rem, 2.5vw, 2.5rem) 1.5rem',
                  }}
                >
                  <ProjectStackItem
                    project={project}
                    index={index}
                    total={count}
                    onSelectProject={setActiveModalProject}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

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
