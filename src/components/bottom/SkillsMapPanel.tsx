'use client';

import React, { useState } from 'react';

interface SkillNode {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  color: string;
  svgIcon: React.ReactNode;
}

const NODES: SkillNode[] = [
  {
    id: 'python',
    name: 'Python',
    x: 50,
    y: 18,
    color: '#3776AB',
    svgIcon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.825H3.9S0 5.79 0 11.94c0 6.14 3.402 5.92 3.402 5.92h2.03v-2.85s-.11-3.4 3.34-3.4h5.75s3.23.05 3.23-3.13V3.13S18.17 0 11.91 0zm-3.2 1.74a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.825h8.106s3.9.444 3.9-5.707c0-6.14-3.402-5.92-3.402-5.92h-2.03v2.85s.11 3.4-3.34 3.4H9.472s-3.23-.05-3.23 3.13v5.36S5.83 24 12.09 24zm3.2-1.74a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#387EB8"/>
      </svg>
    ),
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    x: 82,
    y: 35,
    color: '#EE4C2C',
    svgIcon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#EE4C2C">
        <path d="M12.72 0a11.97 11.97 0 0 0-4.08.72l1.62 1.62a9.69 9.69 0 0 1 2.46-.36c5.34 0 9.72 4.38 9.72 9.72s-4.38 9.72-9.72 9.72-9.72-4.38-9.72-9.72c0-.96.15-1.92.42-2.82L1.8 7.26A11.97 11.97 0 0 0 .72 11.7C.72 18.3 6.12 23.7 12.72 23.7s12-5.4 12-12-5.4-11.7-12-11.7zm1.38 4.26l-1.68 1.68 2.82 2.82H8.7v2.4h6.54l-2.82 2.82 1.68 1.68 5.7-5.7-5.7-5.7z"/>
      </svg>
    ),
  },
  {
    id: 'linux',
    name: 'Linux',
    x: 80,
    y: 78,
    color: '#FCC624',
    svgIcon: (
      <span className="text-xs">🐧</span>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    x: 50,
    y: 86,
    color: '#FFFFFF',
    svgIcon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white"/>
        <path d="M115.898 54H128V126H115.898V54Z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    x: 18,
    y: 78,
    color: '#2496ED',
    svgIcon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 2.714h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.118a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m0-2.714h2.118a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185h-2.118a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m-2.929 2.714h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.17a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m0-2.714h2.118a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.17a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186M23.977 12.32c-.385-.593-1.632-.71-2.48-.25-.336-.93-1.16-1.417-2.385-1.373-.048-.002-.097-.002-.145 0-.62-.95-1.748-1.503-3.155-1.503h-.002V8.98a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v.215H8.099V6.29a.185.185 0 00-.185-.185H5.795a.186.186 0 00-.186.185v2.899H2.24a.186.186 0 00-.185.186v1.888c0 .102.083.185.185.185h2.118v.215H.186A.186.186 0 000 11.853c0 2.212.836 4.316 2.355 5.924C4.333 19.866 7.377 21 10.603 21c7.228 0 12.443-4.385 13.374-8.68z"/>
      </svg>
    ),
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    x: 20,
    y: 35,
    color: '#5C3EE8',
    svgIcon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="#EA212D" strokeWidth="2"/>
        <circle cx="7" cy="16" r="4" stroke="#54AC3B" strokeWidth="2"/>
        <circle cx="17" cy="16" r="4" stroke="#0072C6" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function SkillsMapPanel({
  onSelectSkill,
}: {
  onSelectSkill: (skillId: string) => void;
}) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="w-full h-full p-4 rounded-lg border border-border-cyan bg-[#080D16] flex flex-col justify-between shadow-sm select-none">
      {/* Window Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-subtle font-mono text-[11px] text-text-muted">
        <span className="text-cyan-accent font-semibold">/skills.map()</span>
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
        </div>
      </div>

      {/* SVG Radial Graph */}
      <div className="relative flex-1 w-full min-h-[190px] flex items-center justify-center">
        {/* Connecting Lines from Center (50%, 52%) to Each Node */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          {NODES.map((node) => {
            const isHighlighted = activeNode === node.id;
            return (
              <line
                key={node.id}
                x1="50%"
                y1="52%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={isHighlighted ? '#00E5FF' : 'rgba(0, 229, 255, 0.35)'}
                strokeWidth={isHighlighted ? '2' : '1.2'}
                strokeDasharray={isHighlighted ? 'none' : '2 2'}
                className="transition-all duration-200"
              />
            );
          })}
        </svg>

        {/* Central Core Node: [ AI / ML ] */}
        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-3.5 py-1.5 rounded-md border border-cyan-accent bg-[#07101B] shadow-[0_0_14px_rgba(0,229,255,0.4)] text-cyan-accent font-mono text-xs font-bold tracking-wider">
          AI / ML
        </div>

        {/* Outer Orbiting Technology Nodes */}
        {NODES.map((node) => {
          const isHighlighted = activeNode === node.id;

          return (
            <div
              key={node.id}
              onClick={() => onSelectSkill(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-2.5 py-1 rounded-md border transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-mono text-[11px] shadow-sm ${
                isHighlighted
                  ? 'border-cyan-accent bg-[#0E1B2C] text-white shadow-cyan-sm scale-105'
                  : 'border-border-cyan bg-[#090F19] text-text-primary hover:border-cyan-accent'
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              <div className="shrink-0">{node.svgIcon}</div>
              <span className="font-medium">{node.name}</span>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] text-text-muted">
        <span>CORE // MULTI-MODAL RADIAL TOPOLOGY</span>
        <span className="text-cyan-accent">CONNECTED: 6 NODES</span>
      </div>
    </div>
  );
}
