'use client';

import React from 'react';
import CustomCursor from '@/components/navigation/CustomCursor';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#05070A] text-text-primary font-sans antialiased overflow-x-hidden selection:bg-cyan-accent/20 selection:text-white">
      {/* Precision custom cursor */}
      <CustomCursor />

      {/* Main Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
