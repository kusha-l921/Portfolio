'use client';

import React from 'react';
import { Briefcase, ArrowUpRight, Cpu, Layers, Terminal } from 'lucide-react';
import { RESUME_DATA } from '@/data/portfolioData';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'solar-research',
      period: '2026 — Present',
      badge: 'Ongoing Research',
      role: 'AI/ML Engineering & Heliophysics Forecasting',
      domain: 'Spatiotemporal Vision Transformers & Satellite Imagery',
      description:
        'Collaborated on a deep learning framework predicting severe solar flares from NASA SDO and NOAA extreme ultraviolet magnetograms. Formulated cross-attention sequential transformers and explainability heatmaps.',
      highlights: [
        'Curated and preprocessed an extensive time-series dataset of 87,600 solar images spanning over a decade.',
        'Engineered cross-attention mechanisms across sequential frames for early flare detection 24–48h prior to eruption.',
        'Integrated XAI visual attention saliency maps to identify spatial drift regions in production inference.',
      ],
      technologies: ['Vision Transformer', 'Sunpy', 'PyTorch', 'XAI', 'Python'],
    },
    {
      id: 'edge-cv',
      period: 'September 2026',
      badge: 'Edge AI Systems',
      role: 'Computer Vision & Edge Pipeline Engineering',
      domain: 'Unsupervised Low-Power CPU Image Processing',
      description:
        'Designed training-free agricultural vision pipelines optimized for low-power edge CPUs with strict memory constraints.',
      highlights: [
        'Engineered an unsupervised pipeline on low-power CPUs achieving 35.8ms latency (27.9 FPS) with 68MB RAM usage.',
        'Implemented CIELAB color modeling and MAD outlier detection, outperforming classical baselines with 83.35% Foliage IoU (+71% relative gain).',
        'Built an optical stress harness across 5 lighting regimes, maintaining 62.3% LRS with 3.07% MASD severity drift.',
      ],
      technologies: ['Computer Vision', 'Edge Computing', 'CIELAB', 'Statistical Modeling'],
    },
    {
      id: 'forensic-ml',
      period: 'September 2026',
      badge: 'Systems & ML',
      role: 'Digital Forensics & ML Carving Pipeline',
      domain: 'Swin Transformers & High-Throughput Rust Backend',
      description:
        'Built an ML-driven file carving engine integrated into a high-performance Rust backend to classify and reconstruct non-contiguous disk fragments.',
      highlights: [
        'Trained a Swin Transformer V2 model achieving ~93% accuracy classifying orphaned, headerless 4KB blocks across 10+ file formats.',
        'Exported models to ONNX Runtime to achieve <8ms inference per block during live disk scans.',
        'Implemented probabilistic graph reassembly to reconstruct non-contiguous file fragments without headers.',
      ],
      technologies: ['Swin Transformer', 'PyTorch', 'ONNX Runtime', 'Rust', 'Python'],
    },
  ];

  return (
    <section className="py-12 border-t border-border-subtle scroll-mt-20">
      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-cyan-accent">&gt;</span>
          <span className="text-text-secondary">experience.log</span>
          <span className="text-border-cyan">/</span>
          <span className="text-text-muted">technical-journey</span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
            Engineering &amp; Research Journey
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Practical systems, deep learning architectures, and edge deployments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4 pt-2">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl bg-[#0B1016] border border-border-subtle hover:border-border-cyan/40 transition-all duration-300 shadow-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-border-subtle/50">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-accent/10 border border-border-cyan text-cyan-accent">
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                    {exp.domain}
                  </p>
                </div>
                <span className="font-mono text-xs text-text-muted shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5 text-xs text-text-secondary">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-accent mt-0.5">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-border-subtle/40 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#05070A] border border-border-subtle font-mono text-[11px] text-text-muted hover:text-cyan-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
