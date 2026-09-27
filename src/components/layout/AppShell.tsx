'use client';

import React from 'react';
import CustomCursor from '@/components/navigation/CustomCursor';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F1F1F1] font-sans antialiased overflow-x-hidden selection:bg-[#262626] selection:text-white">
      {/* Precision custom cursor */}
      <CustomCursor />

      {/* Main Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
