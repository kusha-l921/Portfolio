'use client';

import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function WorkingOnWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background guide grid lines
      ctx.strokeStyle = 'rgba(90, 160, 230, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Dynamic waveform
      ctx.beginPath();
      ctx.strokeStyle = '#1687FF';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#38A3FF';
      ctx.shadowBlur = 6;

      for (let x = 0; x < width; x++) {
        // Compound sine wave with solar flare bursts
        const wave1 = Math.sin(x * 0.045 + phase) * 7;
        const wave2 = Math.sin(x * 0.09 - phase * 1.5) * 4;
        const burst = Math.exp(-Math.pow((x - (width / 2 + Math.sin(phase) * 40)) / 25, 2)) * 14;
        const y = height / 2 + wave1 + wave2 - burst;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      phase += 0.055;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const info = PERSONAL_INFO.currentlyWorkingOn;

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4">
      <div className="relative rounded-xl border border-border/50 bg-panel/70 backdrop-blur-md p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden shadow-glass light-sweep-container">
        {/* Terminal prompt label */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted-text">
            <span className="text-electric-blue font-bold">&gt;</span>
            <span className="text-secondary-text">currently_working_on:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary-text tracking-wide">
              {info.project}
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-electric-blue/15 text-bright-blue border border-electric-blue/30">
              {info.model}
            </span>
          </div>
        </div>

        {/* Animated Solar Waveform Canvas */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative flex items-center">
            <canvas
              ref={canvasRef}
              width={160}
              height={36}
              className="w-36 h-9 block rounded"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-bright-blue animate-ping" />
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono">
            <div className="flex flex-col text-right">
              <span className="text-muted-text text-[9px]">EPOCH LATENCY</span>
              <span className="text-success font-semibold">{info.latency}</span>
            </div>
            <div className="h-6 w-px bg-border/40" />
            <div className="flex flex-col text-right">
              <span className="text-muted-text text-[9px]">BENCHMARK</span>
              <span className="text-bright-blue font-semibold">{info.accuracy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
