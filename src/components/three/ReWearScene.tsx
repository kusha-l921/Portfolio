'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring, Float } from '@react-three/drei';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function CircularEcosystem() {
  const centralCubeRef = useRef<THREE.Mesh>(null);
  const orbitalRingRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Nodes in the circular loop
  const nodes = useMemo(() => {
    return [
      { label: 'USER', angle: 0, color: '#1687FF' },
      { label: 'SWAP', angle: (2 * Math.PI) / 3, color: '#32D583' },
      { label: 'MARKET', angle: (4 * Math.PI) / 3, color: '#38A3FF' },
    ];
  }, []);

  const particleCount = 45;
  const [particleData] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const angles = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      angles[i] = (i / particleCount) * Math.PI * 2;
      const r = 1.35 + (Math.random() - 0.5) * 0.15;
      pos[i * 3] = Math.cos(angles[i]) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      pos[i * 3 + 2] = Math.sin(angles[i]) * r;
    }
    return [pos, angles];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Central woven cube slow multi-axis float
    if (centralCubeRef.current) {
      centralCubeRef.current.rotation.y += delta * 0.5;
      centralCubeRef.current.rotation.x = Math.sin(t * 0.8) * 0.2;
    }

    // Circular nodes slow rotation
    if (orbitalRingRef.current) {
      orbitalRingRef.current.rotation.y += delta * 0.3;
    }

    // Circulating particles
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const currAngle = (i / particleCount) * Math.PI * 2 + t * 0.8;
        const r = 1.35;
        pos[i * 3] = Math.cos(currAngle) * r;
        pos[i * 3 + 2] = Math.sin(currAngle) * r;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0.4, 0, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 2, 2]} intensity={2.2} color="#1687FF" />

      {/* CENTRAL TEXTILE / REWEAR FIBER NODE */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh ref={centralCubeRef}>
          <octahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial
            color="#101722"
            emissive="#1687FF"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial
            color="#32D583"
            emissive="#32D583"
            emissiveIntensity={1.8}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* CIRCULAR FLOW RING TRACK */}
      <Ring args={[1.34, 1.36, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#1687FF" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>

      {/* THREE CIRCULAR NODES */}
      <group ref={orbitalRingRef}>
        {nodes.map((node, i) => {
          const x = Math.cos(node.angle) * 1.35;
          const z = Math.sin(node.angle) * 1.35;
          return (
            <group key={i} position={[x, 0, z]}>
              <mesh>
                <sphereGeometry args={[0.13, 16, 16]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={1.8}
                />
              </mesh>
              <mesh>
                <ringGeometry args={[0.17, 0.19, 24]} />
                <meshBasicMaterial color={node.color} transparent opacity={0.6} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* CIRCULATING DATA/TEXTILE TRANSACTION PARTICLES */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particleData}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#38A3FF"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ReWearScene({ className = 'h-[260px]' }: { className?: string }) {
  return (
    <div className={`w-full relative rounded-xl border border-border/40 bg-panel/30 overflow-hidden ${className}`}>
      <CanvasContainer camera={{ position: [0, 1.6, 3.2], fov: 45 }}>
        <CircularEcosystem />
      </CanvasContainer>

      <div className="absolute top-3 left-3 pointer-events-none text-[9px] font-mono text-muted-text flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        <span>CIRCULAR_METRIC: 12.4k DIVERTED</span>
      </div>

      <div className="absolute bottom-2 right-3 pointer-events-none text-[9px] font-mono text-secondary-text bg-panel/80 px-2 py-0.5 rounded border border-border/30">
        P2P FABRIC SWAP NETWORK
      </div>
    </div>
  );
}
