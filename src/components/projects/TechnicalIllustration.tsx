'use client';

import React from 'react';

export default function TechnicalIllustration({
  type,
  className = 'w-full h-44',
}: {
  type: 'solar' | 'fleet' | 'rewear' | 'vision' | 'swarm' | 'pipeline';
  className?: string;
}) {
  switch (type) {
    case 'solar':
      // Minimal scientific data visualization: solar magnetic flux and spectrogram curves
      return (
        <div className={`relative flex items-center justify-center bg-[#0D1117] rounded-lg p-4 border border-white/5 overflow-hidden ${className}`}>
          <svg viewBox="0 0 320 140" className="w-full h-full text-accent">
            {/* Guide Grid */}
            <line x1="20" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="20" y1="70" x2="300" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="20" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

            {/* Heliophysics Magnetogram Flux Waveform */}
            <path
              d="M 20 90 Q 50 85 80 88 T 140 82 T 180 35 T 220 86 T 260 84 T 300 88"
              fill="none"
              stroke="#2F9BFF"
              strokeWidth="1.8"
            />

            {/* Eruption Flare Peak Horizon */}
            <path
              d="M 170 82 Q 180 25 190 82"
              fill="rgba(47, 155, 255, 0.12)"
              stroke="#5CB5FF"
              strokeWidth="1"
              strokeDasharray="2 2"
            />

            {/* Scientific Anomaly Callout Marker */}
            <circle cx="180" cy="35" r="3" fill="#35C982" />
            <text x="190" y="32" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">
              FLARE PEAK [X-CLASS]
            </text>

            <text x="20" y="15" fill="#5E6975" fontSize="8" fontFamily="var(--font-jetbrains)">
              SDO/AIA 193Å // MAGNETOGRAM TENSOR
            </text>
          </svg>
        </div>
      );

    case 'fleet':
      // Minimal route & network graph
      return (
        <div className={`relative flex items-center justify-center bg-[#0D1117] rounded-lg p-4 border border-white/5 overflow-hidden ${className}`}>
          <svg viewBox="0 0 320 140" className="w-full h-full text-accent">
            {/* Network Edges */}
            <line x1="40" y1="90" x2="110" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <line x1="40" y1="90" x2="120" y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <line x1="110" y1="40" x2="200" y2="50" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <line x1="120" y1="110" x2="210" y2="105" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <line x1="200" y1="50" x2="280" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <line x1="210" y1="105" x2="280" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />

            {/* Optimal Dynamic Path (Highlighted) */}
            <path
              d="M 40 90 L 110 40 L 200 50 L 280 70"
              fill="none"
              stroke="#2F9BFF"
              strokeWidth="2"
            />

            {/* Nodes */}
            {[
              { x: 40, y: 90, label: 'ORIGIN' },
              { x: 110, y: 40, label: 'N1' },
              { x: 120, y: 110, label: 'N2' },
              { x: 200, y: 50, label: 'N3' },
              { x: 210, y: 105, label: 'N4' },
              { x: 280, y: 70, label: 'DEST' },
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.x} cy={node.y} r="4" fill="#0D1117" stroke="#2F9BFF" strokeWidth="1.5" />
                <circle cx={node.x} cy={node.y} r="2" fill="#35C982" />
              </g>
            ))}

            <text x="20" y="15" fill="#5E6975" fontSize="8" fontFamily="var(--font-jetbrains)">
              GRAPH NEURAL NET // DIJKSTRA ROUTE
            </text>
          </svg>
        </div>
      );

    case 'rewear':
      // Minimal circular exchange network
      return (
        <div className={`relative flex items-center justify-center bg-[#0D1117] rounded-lg p-4 border border-white/5 overflow-hidden ${className}`}>
          <svg viewBox="0 0 320 140" className="w-full h-full text-accent">
            {/* Center Circular Loop */}
            <circle cx="160" cy="70" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 120 70 A 40 40 0 0 1 180 32" fill="none" stroke="#2F9BFF" strokeWidth="2" />

            {/* Tri-Node Diagram */}
            <circle cx="160" cy="28" r="4" fill="#2F9BFF" />
            <text x="170" y="31" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">USER</text>

            <circle cx="198" cy="94" r="4" fill="#35C982" />
            <text x="208" y="97" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">SWAP</text>

            <circle cx="122" cy="94" r="4" fill="#5CB5FF" />
            <text x="76" y="97" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">MARKET</text>

            <text x="20" y="15" fill="#5E6975" fontSize="8" fontFamily="var(--font-jetbrains)">
              CIRCULAR TEXTILE TOPOLOGY
            </text>
          </svg>
        </div>
      );

    default:
      // Minimal architecture node diagram
      return (
        <div className={`relative flex items-center justify-center bg-[#0D1117] rounded-lg p-4 border border-white/5 overflow-hidden ${className}`}>
          <svg viewBox="0 0 320 140" className="w-full h-full text-accent">
            <line x1="40" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="60" cy="70" r="5" fill="#0D1117" stroke="#2F9BFF" strokeWidth="1.5" />
            <circle cx="160" cy="70" r="5" fill="#0D1117" stroke="#35C982" strokeWidth="1.5" />
            <circle cx="260" cy="70" r="5" fill="#0D1117" stroke="#5CB5FF" strokeWidth="1.5" />
            <text x="44" y="92" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">INPUT</text>
            <text x="144" y="92" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">ENGINE</text>
            <text x="242" y="92" fill="#9AA6B2" fontSize="9" fontFamily="var(--font-jetbrains)">OUTPUT</text>
          </svg>
        </div>
      );
  }
}
