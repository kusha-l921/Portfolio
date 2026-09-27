'use client';

import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

interface NetworkNodeData {
  id: string;
  label: string;
  category: string;
  position: [number, number, number];
  connections: string[];
}

const NETWORK_NODES: NetworkNodeData[] = [
  { id: 'ai', label: 'AI', category: 'Foundation', position: [0, 0.4, 0.2], connections: ['ml', 'vision', 'research'] },
  { id: 'ml', label: 'ML', category: 'Core Engine', position: [-1.4, 0.9, -0.3], connections: ['ai', 'systems', 'learning'] },
  { id: 'vision', label: 'Computer Vision', category: 'Perception', position: [1.5, 0.8, -0.2], connections: ['ai', 'projects'] },
  { id: 'systems', label: 'Systems', category: 'Infrastructure', position: [-1.6, -0.7, 0.3], connections: ['ml', 'projects', 'learning'] },
  { id: 'research', label: 'Research', category: 'Exploration', position: [0.2, 1.4, -0.5], connections: ['ai', 'learning'] },
  { id: 'projects', label: 'Projects', category: 'Production', position: [1.3, -0.8, 0.4], connections: ['vision', 'systems'] },
  { id: 'learning', label: 'Learning', category: 'Continuous', position: [-0.3, -1.2, -0.2], connections: ['systems', 'research', 'ml'] },
];

function NeuralNetworkGraph({ onSelectNode, activeNodeId }: { onSelectNode?: (id: string | null) => void; activeNodeId: string | null }) {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Synaptic pulse offsets
  const pulses = useRef<{ start: THREE.Vector3; end: THREE.Vector3; progress: number; speed: number }[]>([]);

  // Generate connection line data
  const connections = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3; fromId: string; toId: string }[] = [];
    const nodeMap = new Map(NETWORK_NODES.map((n) => [n.id, n]));

    NETWORK_NODES.forEach((node) => {
      node.connections.forEach((targetId) => {
        const target = nodeMap.get(targetId);
        if (target && node.id < targetId) {
          lines.push({
            start: new THREE.Vector3(...node.position),
            end: new THREE.Vector3(...target.position),
            fromId: node.id,
            toId: target.id,
          });
        }
      });
    });

    // Initialize pulse particles
    pulses.current = lines.map((l) => ({
      start: l.start.clone(),
      end: l.end.clone(),
      progress: Math.random(),
      speed: 0.4 + Math.random() * 0.4,
    }));

    return lines;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle global floating & mouse parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.4 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * 0.3 + Math.cos(state.clock.elapsedTime * 0.2) * 0.08,
      0.04
    );

    // Update pulse progresses
    pulses.current.forEach((p) => {
      p.progress += delta * p.speed;
      if (p.progress > 1) p.progress = 0;
    });
  });

  const selectedOrHovered = hoveredNode || activeNodeId;

  return (
    <group ref={groupRef}>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 4]} intensity={2.5} color="#1687FF" />
      <pointLight position={[-3, 2, -1]} intensity={1.5} color="#38A3FF" />

      {/* SYNAPTIC CONNECTION LINES */}
      {connections.map((conn, idx) => {
        const isConnectedToHovered =
          selectedOrHovered &&
          (conn.fromId === selectedOrHovered || conn.toId === selectedOrHovered);
        const isDimmed = selectedOrHovered && !isConnectedToHovered;

        const points = [conn.start, conn.end];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <group key={idx}>
            {/* The Synapse Tube/Line */}
            <primitive object={new THREE.Line(
              lineGeom,
              new THREE.LineBasicMaterial({
                color: isConnectedToHovered ? '#38A3FF' : '#1687FF',
                transparent: true,
                opacity: isConnectedToHovered ? 0.95 : isDimmed ? 0.12 : 0.45,
                linewidth: 2,
              })
            )} />

            {/* Traveling Signal Pulse Node */}
            <mesh
              position={conn.start.clone().lerp(conn.end, pulses.current[idx]?.progress || 0)}
            >
              <sphereGeometry args={[isConnectedToHovered ? 0.065 : 0.04, 8, 8]} />
              <meshBasicMaterial
                color={isConnectedToHovered ? '#75C2FF' : '#38A3FF'}
                transparent
                opacity={isDimmed ? 0.2 : 0.9}
              />
            </mesh>
          </group>
        );
      })}

      {/* NEURAL NETWORK NODES */}
      {NETWORK_NODES.map((node) => {
        const isSelected = selectedOrHovered === node.id;
        const isRelated =
          selectedOrHovered &&
          (node.id === selectedOrHovered ||
            node.connections.includes(selectedOrHovered) ||
            NETWORK_NODES.find((n) => n.id === selectedOrHovered)?.connections.includes(node.id));
        const isFaded = selectedOrHovered && !isRelated;

        return (
          <Float key={node.id} speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <group
              position={node.position}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredNode(node.id);
                onSelectNode?.(node.id);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredNode(null);
                onSelectNode?.(null);
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectNode?.(node.id);
              }}
              scale={isSelected ? 1.35 : isRelated ? 1.1 : isFaded ? 0.85 : 1}
            >
              {/* Outer Glow Halo Ring */}
              <mesh>
                <sphereGeometry args={[0.26, 16, 16]} />
                <meshStandardMaterial
                  color="#1687FF"
                  emissive="#1687FF"
                  emissiveIntensity={isSelected ? 1.6 : isRelated ? 0.9 : 0.2}
                  wireframe
                  transparent
                  opacity={isSelected ? 0.8 : isFaded ? 0.15 : 0.4}
                />
              </mesh>

              {/* Inner Solid Core */}
              <mesh>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial
                  color={isSelected ? '#75C2FF' : '#38A3FF'}
                  emissive={isSelected ? '#38A3FF' : '#1687FF'}
                  emissiveIntensity={isSelected ? 2.5 : isFaded ? 0.3 : 1.2}
                />
              </mesh>

              {/* Node Label Text */}
              <Text
                position={[0, 0.36, 0]}
                fontSize={0.16}
                color={isSelected ? '#F4F8FF' : isFaded ? '#536579' : '#91A4B8'}
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_ad06vqTrSStoU.woff"
              >
                {node.label}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

export default function NeuralNetworkScene({
  onSelectNode,
  activeNodeId = null,
}: {
  onSelectNode?: (id: string | null) => void;
  activeNodeId?: string | null;
}) {
  return (
    <div className="w-full h-[400px] md:h-[480px] relative rounded-2xl border border-border/40 bg-panel/40 backdrop-blur-md overflow-hidden">
      <CanvasContainer camera={{ position: [0, 0, 4.3], fov: 48 }} className="w-full h-full">
        <NeuralNetworkGraph onSelectNode={onSelectNode} activeNodeId={activeNodeId} />
      </CanvasContainer>

      {/* Floating Instructions HUD */}
      <div className="absolute top-3 left-4 pointer-events-none text-[10px] font-mono text-muted-text flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
        <span>NEURAL_TOPOLOGY_LAYER // INTERACTIVE</span>
      </div>

      <div className="absolute bottom-3 right-4 pointer-events-none text-[10px] font-mono text-secondary-text bg-panel-elevated/70 px-2 py-1 rounded border border-border/50">
        HOVER NODES TO TRACE ACTIVATION PATHS
      </div>
    </div>
  );
}
