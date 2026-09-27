'use client';

import React, { useState, useEffect } from 'react';
import { Database, Filter, Brain, Cpu, BarChart3, CloudUpload } from 'lucide-react';

const PIPELINE_STAGES = [
  { id: 'data', label: 'DATA', sub: 'SDO / AIA Ingest', icon: Database },
  { id: 'prep', label: 'PREPROCESSING', sub: 'MHD Gradient Tensor', icon: Filter },
  { id: 'model', label: 'MODEL', sub: 'Spatiotemporal ViT', icon: Brain },
  { id: 'training', label: 'TRAINING', sub: 'Distributed DDP', icon: Cpu },
  { id: 'eval', label: 'EVALUATION', sub: 'TSS & ROC-AUC', icon: BarChart3 },
  { id: 'deploy', label: 'DEPLOYMENT', sub: 'TensorRT / LEO CubeSat', icon: CloudUpload },
];

export default function ArchitecturePipeline() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full my-6 p-5 rounded-xl border border-border/50 bg-panel-elevated/40 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
          END-TO-END AUTONOMOUS ARCHITECTURE PIPELINE
        </span>
        <span className="text-[10px] font-mono text-bright-blue">
          ACTIVE_STAGE: [{PIPELINE_STAGES[activeStage].label}]
        </span>
      </div>

      {/* Pipeline Node Flow */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
        {PIPELINE_STAGES.map((stage, idx) => {
          const isActive = idx === activeStage;
          const isPassed = idx < activeStage;
          const Icon = stage.icon;

          return (
            <div
              key={stage.id}
              className={`relative p-3 rounded-lg border text-center transition-all duration-300 ${
                isActive
                  ? 'border-bright-blue bg-electric-blue/15 shadow-[0_0_15px_rgba(22,135,255,0.3)] scale-[1.03]'
                  : isPassed
                  ? 'border-border/60 bg-panel/80'
                  : 'border-border/30 bg-panel/30 opacity-60'
              }`}
            >
              {/* Node Icon */}
              <div className="w-7 h-7 mx-auto mb-1.5 rounded-md flex items-center justify-center text-xs">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-bright-blue animate-bounce' : isPassed ? 'text-success' : 'text-muted-text'
                  }`}
                />
              </div>

              {/* Node Label */}
              <div className="text-[11px] font-mono font-bold text-primary-text">
                {stage.label}
              </div>
              <div className="text-[9px] font-mono text-muted-text mt-0.5 truncate">
                {stage.sub}
              </div>

              {/* Connector pulse line to next node on desktop */}
              {idx < PIPELINE_STAGES.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-border/40 z-10">
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-bright-blue animate-ping absolute -top-0.5 left-1/2 -translate-x-1/2" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
