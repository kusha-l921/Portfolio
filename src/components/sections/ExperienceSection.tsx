'use client';

import React from 'react';
import { Briefcase, Trophy, Users, Award } from 'lucide-react';
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

  const { achievements } = RESUME_DATA;

  return (
    <section id="experience" className="py-6 sm:py-8 scroll-mt-20">
      {/* Requirement 8: Animated Subtle Section Divider */}
      <div className="section-divider mb-6 sm:mb-8 divider-active" />

      <div className="space-y-6">
        {/* Terminal label */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
          <span className="text-[#888888]">&gt;</span>
          <span className="text-[#A0A0A0]">experience.log</span>
          <span className="text-[#262626]">/</span>
          <span className="text-[#555555]">technical-journey</span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F1F1]">
            Engineering &amp; Research Journey
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#888888]">
            Applied machine learning, deep learning architectures, and edge systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-3.5 pt-1">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-6 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-[#161616]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#F1F1F1] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#141414] border border-[#222222] text-[#A0A0A0]">
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#888888] mt-0.5">
                    {exp.domain}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#555555] shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed mt-4">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5 text-xs text-[#888888]">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#555555] mt-0.5">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-[#161616] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#070707] border border-[#1A1A1A] font-mono text-[11px] text-[#666666] group-hover:text-[#A0A0A0] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Honors & Wins Subsection */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#666666]">
            <span className="text-[#888888]">&gt;</span>
            <span className="text-[#A0A0A0]">honors.list</span>
            <span className="text-[#262626]">/</span>
            <span className="text-[#555555]">hackathons</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-[#E0E0E0]">
            National Hackathon Wins
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-[#0D0D0D] border border-[#1C1C1C] hover:border-[#2C2C2C] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#141414] border border-[#222222] font-mono text-xs text-[#E0E0E0] font-medium">
                      <Trophy className="w-3.5 h-3.5 text-[#888888]" />
                      {item.award}
                    </span>
                    <span className="font-mono text-xs text-[#555555]">{item.date}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#F1F1F1]">
                      {item.title}
                    </h4>
                    <p className="font-mono text-xs text-[#666666] mt-0.5">
                      {item.organizer}
                    </p>
                  </div>

                  <p className="text-xs text-[#888888] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#161616] flex items-center justify-between font-mono text-xs text-[#666666]">
                  <span className="flex items-center gap-1 text-[#888888]">
                    <Users className="w-3.5 h-3.5 text-[#666666]" />
                    <span>{item.award.includes('Winner') ? '1,000+ Participants' : '250+ Teams'}</span>
                  </span>
                  <span className="text-[#888888]">National Level</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
