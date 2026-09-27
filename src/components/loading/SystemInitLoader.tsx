'use client';

import React, { useEffect, useState } from 'react';

const MESSAGES = [
  'INITIALIZING SYSTEM',
  'Loading visual engine [Three.js & WebGL]...',
  'Loading AI/ML architectural modules...',
  'Compiling neural graph shaders...',
  'Loading portfolio assets...',
  'SYSTEM READY',
];

export default function SystemInitLoader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        finish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Fast, crisp ~2.2s progress sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finish, 250);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        const currentProgress = Math.min(next, 100);

        const currentStep = Math.min(
          Math.floor((currentProgress / 100) * MESSAGES.length),
          MESSAGES.length - 1
        );
        setStep(currentStep);

        return currentProgress;
      });
    }, 110);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const finish = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] text-primary-text transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
        {/* Futuristic Core Emblem */}
        <div className="relative w-14 h-14 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-lg border border-electric-blue/50 animate-ping opacity-25" />
          <div className="w-10 h-10 rounded border border-bright-blue/80 bg-panel flex items-center justify-center shadow-[0_0_15px_rgba(22,135,255,0.4)]">
            <span className="text-electric-blue font-mono font-bold text-sm tracking-wider">K</span>
          </div>
        </div>

        {/* Technical Status Text */}
        <div className="w-full font-mono text-center">
          <div className="text-xs text-electric-blue tracking-widest font-semibold uppercase mb-1">
            KUSHAL // DIGITAL_ENVIRONMENT_v2.4
          </div>
          <div className="h-6 text-sm text-secondary-text font-mono transition-all duration-150">
            {MESSAGES[step]}
          </div>
        </div>

        {/* Thin Progress Line */}
        <div className="w-full mt-6 h-0.5 bg-border/40 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-electric-blue via-bright-blue to-soft-blue shadow-[0_0_12px_#1687FF] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Telemetry info & skip button */}
        <div className="w-full mt-4 flex items-center justify-between text-[11px] font-mono text-muted-text">
          <span>MEM: 64MB // VRAM: ALLOCATED</span>
          <span className="text-bright-blue font-semibold">{progress}%</span>
        </div>

        <button
          onClick={finish}
          className="mt-8 px-3 py-1 rounded border border-border/50 text-[10px] font-mono text-muted-text hover:text-primary-text hover:border-electric-blue transition-colors duration-150"
        >
          SKIP_INIT [ESC]
        </button>
      </div>
    </div>
  );
}
