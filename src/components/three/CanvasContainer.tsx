'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  camera?: {
    position?: [number, number, number];
    fov?: number;
    near?: number;
    far?: number;
  };
  gl?: Record<string, unknown>;
  onCreated?: (state: any) => void;
}

export default function CanvasContainer({
  children,
  className = 'w-full h-full',
  camera = { position: [0, 0, 5], fov: 45 },
  gl = { antialias: true, alpha: true, powerPreference: 'high-performance' },
  onCreated,
}: CanvasContainerProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const glContext =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      if (!glContext) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center bg-transparent ${className}`}>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
          <span>INIT_WEBGL_PIPELINE</span>
        </div>
      </div>
    );
  }

  if (!hasWebGL) {
    return (
      <div className={`flex items-center justify-center p-4 border border-border/40 rounded-xl bg-panel/50 text-xs font-mono text-secondary-text ${className}`}>
        <span>[SYS_FALLBACK]: WebGL disabled or unsupported on current display</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={camera}
        gl={gl as any}
        dpr={[1, 1.75]}
        onCreated={onCreated}
        className="touch-none"
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
