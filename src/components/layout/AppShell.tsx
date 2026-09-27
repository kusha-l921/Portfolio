'use client';

import React from 'react';
import CustomCursor from '@/components/navigation/CustomCursor';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#05080E] text-text-primary font-sans antialiased overflow-x-hidden selection:bg-cyan-accent/25 selection:text-white">
      {/* Precision custom cursor */}
      <CustomCursor />

      {/* Main Page Layout */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
