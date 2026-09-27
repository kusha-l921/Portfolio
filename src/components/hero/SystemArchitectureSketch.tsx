'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, Network, ArrowDown, Check } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  details: string;
}

const NODES: Node[] = [
  { id: 'python', label: 'Python / CUDA', category: 'Foundation', x: 200, y: 40, details: 'Core ML runtime & GPU acceleration' },
  { id: 'pytorch', label: 'PyTorch / Models', category: 'Framework', x: 200, y: 130, details: 'Vision Transformers & Deep Learning' },
  { id: 'systems', label: 'Systems & Inference', category: 'Optimization', x: 200, y: 220, details: 'TensorRT, ONNX & Distributed DDP' },
  { id: 'solar', label: 'Solar Flare System', category: 'Project', x: 70, y: 310, details: 'Heliophysics early warning' },
  { id: 'fleet', label: 'Autonomous Fleet', category: 'Project', x: 200, y: 310, details: 'Dynamic graph routing' },
  { id: 'rewear', label: 'ReWear AI Engine', category: 'Project', x: 330, y: 310, details: 'Computer vision classification' },
];

export default function SystemArchitectureSketch() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-xl border border-white/10 bg-[#11161D] relative shadow-subtle font-mono select-none">
      {/* Small Technical Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 text-[11px] text-muted-text">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-secondary-text">system_architecture.sketch</span>
        </div>
        <span className="text-[10px] text-muted-text">FLOW: ACTIVE</span>
      </div>

      {/* Interactive SVG Diagram */}
      <div className="relative w-full h-[360px] flex items-center justify-center">
        <svg
          viewBox="0 0 400 360"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {/* Connection Lines */}
          {/* Node 1 to Node 2 */}
          <line
            x1="200"
            y1="64"
            x2="200"
            y2="108"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* Node 2 to Node 3 */}
          <line
            x1="200"
            y1="154"
            x2="200"
            y2="198"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Node 3 to Project Branches */}
          <path
            d="M 200 244 L 200 270 L 70 270 L 70 292"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />
          <line
            x1="200"
            y1="244"
            x2="200"
            y2="292"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />
          <path
            d="M 200 244 L 200 270 L 330 270 L 330 292"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />

          {/* Traveling Signal Pulse Dot */}
          {activeSignal === 0 && (
            <circle cx="200" cy="86" r="3" fill="#2F9BFF" className="animate-pulse" />
          )}
          {activeSignal === 1 && (
            <circle cx="200" cy="176" r="3" fill="#2F9BFF" className="animate-pulse" />
          )}
          {activeSignal === 2 && (
            <circle cx="200" cy="256" r="3" fill="#2F9BFF" className="animate-pulse" />
          )}
          {activeSignal === 3 && (
            <>
              <circle cx="70" cy="282" r="2.5" fill="#2F9BFF" />
              <circle cx="200" cy="282" r="2.5" fill="#2F9BFF" />
              <circle cx="330" cy="282" r="2.5" fill="#2F9BFF" />
            </>
          )}

          {/* Diagram Nodes */}
          {NODES.map((node) => {
            const isHovered = hoveredNode?.id === node.id;
            const isProject = node.category === 'Project';
            const width = isProject ? 116 : 160;
            const height = 40;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x - width / 2}, ${node.y - height / 2})`}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              >
                {/* Node Box */}
                <rect
                  width={width}
                  height={height}
                  rx="6"
                  fill="#0D1117"
                  stroke={isHovered ? '#2F9BFF' : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-colors duration-200"
                />

                {/* Node Dot Indicator */}
                <circle
                  cx={14}
                  cy={height / 2}
                  r="3"
                  fill={isHovered ? '#2F9BFF' : 'rgba(255, 255, 255, 0.3)'}
                />

                {/* Node Label Text */}
                <text
                  x={24}
                  y={height / 2 + 4}
                  fill={isHovered ? '#F2F5F8' : '#9AA6B2'}
                  fontSize={isProject ? 9.5 : 11}
                  fontFamily="var(--font-jetbrains)"
                  fontWeight={isHovered ? '600' : '400'}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Node Details Inspection Footer */}
      <div className="mt-2 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-muted-text">
        <span className="truncate">
          {hoveredNode ? (
            <span className="text-secondary-text">
              <span className="text-accent font-semibold">{hoveredNode.label}</span>: {hoveredNode.details}
            </span>
          ) : (
            'Hover any node to inspect architecture layer'
          )}
        </span>
        <span className="text-[10px] text-muted-text shrink-0 ml-2">v2.1</span>
      </div>
    </div>
  );
}
