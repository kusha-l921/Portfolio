'use client';

import React, { useState, useEffect } from 'react';

const STAGES = [
  { id: 'data', label: 'DATA', detail: 'SDO / AIA Ingest' },
  { id: 'prep', label: 'PREPROCESSING', detail: 'Tensor Calibration' },
  { id: 'model', label: 'MODEL', detail: 'Spatiotemporal ViT' },
  { id: 'training', label: 'TRAINING', detail: 'Distributed DDP' },
  { id: 'eval', label: 'EVALUATION', detail: 'TSS & ROC-AUC' },
  { id: 'output', label: 'OUTPUT', detail: 'Early Warning Signal' },
];

export default function ArchitecturePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STAGES.length);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full my-6 p-5 rounded-lg border border-white/10 bg-[#0D1117] font-mono">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 text-[11px] text-muted-text">
        <span className="text-secondary-text">ARCHITECTURE PIPELINE</span>
        <span className="text-accent text-[10px]">STEP_{activeStep + 1} / {STAGES.length}</span>
      </div>

      {/* Sequential Pipeline Flow (Requirement 19) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <div
              key={stage.id}
              className={`p-3 rounded border text-center transition-all duration-300 relative ${
                isActive
                  ? 'border-accent bg-accent/10 shadow-sm'
                  : isPassed
                  ? 'border-white/15 bg-white/[0.02]'
                  : 'border-white/5 opacity-50'
              }`}
            >
              {/* Step Number */}
              <span className="text-[9px] text-muted-text block mb-1">
                0{idx + 1}
              </span>

              {/* Step Label */}
              <span className={`text-xs font-bold block ${isActive ? 'text-white' : 'text-secondary-text'}`}>
                {stage.label}
              </span>

              {/* Subtitle */}
              <span className="text-[10px] text-muted-text mt-0.5 block truncate">
                {stage.detail}
              </span>

              {/* Small Traveling Blue Signal Indicator on active node */}
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-accent absolute top-2 right-2 animate-ping" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
