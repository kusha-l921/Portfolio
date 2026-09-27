'use client';

import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function MiniatureSmartCity({ hovered = false }: { hovered?: boolean }) {
  const cityRef = useRef<THREE.Group>(null);
  const vehiclesRef = useRef<THREE.Group>(null);
  const routeBeamRef = useRef<THREE.Line>(null);

  // Generate building skyline grid
  const buildings = useMemo(() => {
    const list: { pos: [number, number, number]; size: [number, number, number]; height: number }[] = [];
    const gridSize = 4;
    const spacing = 0.65;

    for (let x = -gridSize / 2; x <= gridSize / 2; x++) {
      for (let z = -gridSize / 2; z <= gridSize / 2; z++) {
        // Leave main avenues open for roads
        if (Math.abs(x) === 0 || Math.abs(z) === 0) continue;

        const h = 0.4 + Math.random() * 1.2;
        list.push({
          pos: [x * spacing, h / 2, z * spacing],
          size: [spacing * 0.72, h, spacing * 0.72],
          height: h,
        });
      }
    }
    return list;
  }, []);

  // Generate autonomous vehicles moving along roads
  const vehicles = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      axis: i % 2 === 0 ? 'x' : 'z',
      lane: (i % 2 === 0 ? (i - 1) * 0.65 : (i - 2) * 0.65) * 0.5,
      speed: 0.6 + Math.random() * 0.6,
      progress: Math.random() * 4 - 2,
      color: i === 0 ? '#32D583' : '#1687FF',
    }));
  }, []);

  // Optimal route path coordinates
  const optimalRoutePoints = useMemo(() => {
    return [
      new THREE.Vector3(-1.8, 0.05, 0),
      new THREE.Vector3(-0.65, 0.05, 0),
      new THREE.Vector3(-0.65, 0.05, -1.3),
      new THREE.Vector3(0.65, 0.05, -1.3),
      new THREE.Vector3(0.65, 0.05, 1.2),
      new THREE.Vector3(1.8, 0.05, 1.2),
    ];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const speedMult = hovered ? 1.8 : 1.0;

    // Slow isometric platform rotation
    if (cityRef.current) {
      cityRef.current.rotation.y = THREE.MathUtils.lerp(
        cityRef.current.rotation.y,
        0.785 + (hovered ? Math.sin(t * 0.6) * 0.15 : 0),
        0.04
      );
    }

    // Vehicle animations
    if (vehiclesRef.current) {
      vehiclesRef.current.children.forEach((mesh, idx) => {
        const v = vehicles[idx];
        if (!v) return;
        v.progress += delta * v.speed * speedMult;
        if (v.progress > 2.2) v.progress = -2.2;

        if (v.axis === 'x') {
          mesh.position.set(v.progress, 0.05, v.lane);
        } else {
          mesh.position.set(v.lane, 0.05, v.progress);
        }
      });
    }
  });

  const routeGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(optimalRoutePoints);
  }, [optimalRoutePoints]);

  return (
    <group ref={cityRef} rotation={[0.55, 0.785, 0]} position={[0, -0.2, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.8} color="#F4F8FF" />
      <pointLight position={[0, 2, 0]} intensity={2.5} color="#1687FF" distance={8} />

      {/* Ground Cyber Base Plate */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[4.2, 0.1, 4.2]} />
        <meshStandardMaterial color="#0B1118" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Road Grid Overlay */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.0, 4.0]} />
        <meshStandardMaterial
          color="#080C12"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Isometric Buildings */}
      {buildings.map((b, i) => (
        <group key={i} position={b.pos}>
          {/* Main Building Body */}
          <mesh>
            <boxGeometry args={b.size} />
            <meshStandardMaterial
              color="#101722"
              metalness={0.85}
              roughness={0.2}
              emissive="#1687FF"
              emissiveIntensity={0.12}
            />
          </mesh>

          {/* Roof Edge Glow Accent */}
          <mesh position={[0, b.size[1] / 2, 0]}>
            <boxGeometry args={[b.size[0] * 1.02, 0.015, b.size[2] * 1.02]} />
            <meshStandardMaterial
              color="#38A3FF"
              emissive="#1687FF"
              emissiveIntensity={hovered ? 1.5 : 0.8}
            />
          </mesh>
        </group>
      ))}

      {/* HIGHLIGHTED OPTIMAL ROUTE BEAM */}
      <primitive
        object={
          new THREE.Line(
            routeGeometry,
            new THREE.LineBasicMaterial({
              color: hovered ? '#32D583' : '#38A3FF',
              linewidth: 3,
            })
          )
        }
      />

      {/* Route Delivery Nodes (Pulsing Checkpoints) */}
      {optimalRoutePoints.map((pt, idx) => (
        <mesh key={idx} position={[pt.x, pt.y + 0.06, pt.z]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color={idx === optimalRoutePoints.length - 1 ? '#32D583' : '#1687FF'} />
        </mesh>
      ))}

      {/* AUTONOMOUS DELIVERY PODS (VEHICLES) */}
      <group ref={vehiclesRef}>
        {vehicles.map((v, i) => (
          <mesh key={i} position={[0, 0.05, 0]}>
            <boxGeometry args={[0.12, 0.06, 0.08]} />
            <meshStandardMaterial
              color={v.color}
              emissive={v.color}
              emissiveIntensity={hovered ? 2.5 : 1.4}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function FleetScene({ className = 'h-[260px]' }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`w-full relative rounded-xl border border-border/40 bg-panel/30 overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CanvasContainer camera={{ position: [0, 2.5, 4.2], fov: 42 }}>
        <MiniatureSmartCity hovered={hovered} />
      </CanvasContainer>

      <div className="absolute top-3 left-3 pointer-events-none text-[9px] font-mono text-muted-text flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${hovered ? 'bg-success animate-ping' : 'bg-electric-blue'}`} />
        <span>DIGITAL_TWIN: {hovered ? 'ROUTE_OPTIMIZING' : 'PATROLLING'}</span>
      </div>

      <div className="absolute bottom-2 right-3 pointer-events-none text-[9px] font-mono text-secondary-text bg-panel/80 px-2 py-0.5 rounded border border-border/30">
        40k EDGES // A* ENGINE
      </div>
    </div>
  );
}
