'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Ring } from '@react-three/drei';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function FuturisticWorkstation({ scrollY }: { scrollY: number }) {
  const { mouse } = useThree();
  const mainGroup = useRef<THREE.Group>(null);
  const laptopGroup = useRef<THREE.Group>(null);
  const screenMesh = useRef<THREE.Mesh>(null);
  const globeRef = useRef<THREE.Group>(null);
  const floatingPanelRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const dataNodesRef = useRef<THREE.Group>(null);

  // Generate neural nodes floating around workstation
  const nodes = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      pos: [
        (Math.sin((i / 14) * Math.PI * 2) * 2.1) + (Math.random() - 0.5) * 0.4,
        (Math.cos((i / 14) * Math.PI * 2) * 1.3) + 0.3,
        (Math.sin(i * 1.5) * 1.2) - 0.5,
      ] as [number, number, number],
      scale: 0.04 + (i % 3) * 0.02,
      speed: 0.5 + (i % 4) * 0.2,
    }));
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (mainGroup.current) {
      // Mouse Parallax with smooth lerp
      const targetX = mouse.x * 0.5;
      const targetY = mouse.y * 0.35;
      
      // Scroll-based transformation: shifts backward, rotates, scales slightly
      const scrollFactor = Math.min(scrollY / 800, 1.2);
      const targetZ = -scrollFactor * 2.8;
      const targetRotY = targetX * 0.4 - scrollFactor * 0.35;
      const targetRotX = -targetY * 0.25 + scrollFactor * 0.2;

      mainGroup.current.position.x = THREE.MathUtils.lerp(mainGroup.current.position.x, -targetX * 0.8, 0.06);
      mainGroup.current.position.y = THREE.MathUtils.lerp(mainGroup.current.position.y, targetY * 0.6 - scrollFactor * 0.4, 0.06);
      mainGroup.current.position.z = THREE.MathUtils.lerp(mainGroup.current.position.z, targetZ, 0.06);
      
      mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, targetRotY, 0.06);
      mainGroup.current.rotation.x = THREE.MathUtils.lerp(mainGroup.current.rotation.x, targetRotX, 0.06);
    }

    // Screen holographic pulse
    if (screenMesh.current) {
      const mat = screenMesh.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 0.85 + Math.sin(t * 2.5) * 0.15;
      }
    }

    // Floating wireframe globe rotation
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.35;
      globeRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    }

    // Floating code panel gentle sway
    if (floatingPanelRef.current) {
      floatingPanelRef.current.position.y = 1.1 + Math.sin(t * 1.5) * 0.08;
      floatingPanelRef.current.rotation.z = Math.sin(t * 0.8) * 0.03;
    }

    // Tech ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
      ringRef.current.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.5) * 0.05;
    }

    // Data nodes pulse
    if (dataNodesRef.current) {
      dataNodesRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={mainGroup} position={[0, -0.2, 0]}>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 4, 3]} intensity={3.5} color="#1687FF" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={1.8} color="#38A3FF" distance={8} />
      <directionalLight position={[0, 5, 2]} intensity={1.2} color="#F4F8FF" />

      {/* COMPUTATIONAL WORKSTATION */}
      <group ref={laptopGroup} position={[0, -0.6, 0]}>
        {/* Base Body (Matte Obsidian Glass) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.07, 1.7]} />
          <meshStandardMaterial
            color="#0B1118"
            metalness={0.88}
            roughness={0.22}
            emissive="#080C12"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Base Rim Bevel (Electric Blue Glow Line) */}
        <mesh position={[0, 0.038, 0]}>
          <boxGeometry args={[2.52, 0.015, 1.72]} />
          <meshStandardMaterial
            color="#1687FF"
            emissive="#1687FF"
            emissiveIntensity={1.4}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Keyboard Bay Grid / Sensor Area */}
        <mesh position={[0, 0.042, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.2, 1.0]} />
          <meshStandardMaterial
            color="#101722"
            metalness={0.9}
            roughness={0.3}
            wireframe
          />
        </mesh>

        {/* Illuminated Trackpad */}
        <mesh position={[0, 0.042, 0.65]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.7, 0.45]} />
          <meshStandardMaterial
            color="#0B1118"
            emissive="#1687FF"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Workstation Screen (Angled 108 degrees) */}
        <group position={[0, 0.04, -0.82]} rotation={[0.26, 0, 0]}>
          {/* Screen Outer Lid */}
          <mesh position={[0, 0.8, 0]}>
            <boxGeometry args={[2.5, 1.6, 0.04]} />
            <meshStandardMaterial
              color="#0B1118"
              metalness={0.92}
              roughness={0.15}
            />
          </mesh>

          {/* Screen Display Frame Bezel */}
          <mesh position={[0, 0.8, 0.022]}>
            <planeGeometry args={[2.42, 1.52]} />
            <meshStandardMaterial
              color="#05070B"
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>

          {/* Holographic Glowing Screen Surface */}
          <mesh ref={screenMesh} position={[0, 0.8, 0.024]}>
            <planeGeometry args={[2.34, 1.44]} />
            <meshStandardMaterial
              color="#080C12"
              emissive="#1687FF"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.4}
            />
          </mesh>

          {/* Holographic Screen Code Overlay Lines */}
          {Array.from({ length: 8 }).map((_, idx) => (
            <mesh
              key={idx}
              position={[-0.9 + (idx % 2) * 0.1, 1.25 - idx * 0.11, 0.026]}
            >
              <planeGeometry args={[0.6 + (idx * 0.14) % 0.8, 0.028]} />
              <meshBasicMaterial
                color={idx === 1 ? '#32D583' : idx === 4 ? '#75C2FF' : '#38A3FF'}
                transparent
                opacity={0.85}
              />
            </mesh>
          ))}

          {/* Holographic Neural Heatmap Box on Screen */}
          <mesh position={[0.55, 0.82, 0.026]}>
            <planeGeometry args={[0.85, 0.85]} />
            <meshStandardMaterial
              color="#101722"
              emissive="#1687FF"
              emissiveIntensity={0.3}
              wireframe
            />
          </mesh>
        </group>
      </group>

      {/* FLOATING 3D HOLOGRAPHIC GLOBE / DATA SPHERE (RIGHT SIDE) */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        <group ref={globeRef} position={[1.8, 0.6, 0.2]}>
          {/* Wireframe Globe Sphere */}
          <mesh>
            <sphereGeometry args={[0.68, 20, 20]} />
            <meshStandardMaterial
              color="#1687FF"
              emissive="#1687FF"
              emissiveIntensity={0.6}
              wireframe
              transparent
              opacity={0.45}
            />
          </mesh>
          {/* Inner Solid Pulsing Core */}
          <mesh>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshStandardMaterial
              color="#38A3FF"
              emissive="#38A3FF"
              emissiveIntensity={1.2}
              transparent
              opacity={0.6}
            />
          </mesh>
          {/* Mini Orbiting Satellite Node */}
          <mesh position={[0.9, 0, 0]}>
            <boxGeometry args={[0.07, 0.07, 0.07]} />
            <meshStandardMaterial color="#32D583" emissive="#32D583" emissiveIntensity={1.5} />
          </mesh>
        </group>
      </Float>

      {/* FLOATING CODE & DEPLOYMENT PANEL (LEFT SIDE) */}
      <Float speed={1.7} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={floatingPanelRef} position={[-1.9, 0.8, 0.4]} rotation={[0, 0.28, -0.05]}>
          {/* Glass Card Backdrop */}
          <mesh>
            <planeGeometry args={[1.4, 0.95]} />
            <meshStandardMaterial
              color="#0B1118"
              transparent
              opacity={0.85}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
          {/* Glass Card Border */}
          <mesh position={[0, 0, 0.005]}>
            <planeGeometry args={[1.42, 0.97]} />
            <meshStandardMaterial
              color="#1687FF"
              emissive="#1687FF"
              emissiveIntensity={0.8}
              wireframe
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* Status Bar Indicator */}
          <mesh position={[-0.45, 0.32, 0.015]}>
            <circleGeometry args={[0.04, 16]} />
            <meshBasicMaterial color="#32D583" />
          </mesh>
          {/* Content Lines */}
          <mesh position={[0.05, 0.32, 0.015]}>
            <planeGeometry args={[0.8, 0.035]} />
            <meshBasicMaterial color="#91A4B8" transparent opacity={0.8} />
          </mesh>
          <mesh position={[-0.1, 0.18, 0.015]}>
            <planeGeometry args={[0.95, 0.03]} />
            <meshBasicMaterial color="#38A3FF" transparent opacity={0.9} />
          </mesh>
          <mesh position={[-0.2, 0.04, 0.015]}>
            <planeGeometry args={[0.75, 0.03]} />
            <meshBasicMaterial color="#75C2FF" transparent opacity={0.7} />
          </mesh>
          <mesh position={[0, -0.12, 0.015]}>
            <planeGeometry args={[1.05, 0.08]} />
            <meshBasicMaterial color="#101722" />
          </mesh>
          <mesh position={[-0.2, -0.26, 0.015]}>
            <planeGeometry args={[0.65, 0.03]} />
            <meshBasicMaterial color="#32D583" transparent opacity={0.8} />
          </mesh>
        </group>
      </Float>

      {/* ORBITAL GYROSCOPE RINGS */}
      <group ref={ringRef} position={[0, 0.2, -0.4]}>
        <Ring args={[2.5, 2.52, 64]}>
          <meshBasicMaterial color="#1687FF" transparent opacity={0.25} side={THREE.DoubleSide} />
        </Ring>
        <Ring args={[2.8, 2.815, 64]} rotation={[0.4, 0.2, 0]}>
          <meshBasicMaterial color="#38A3FF" transparent opacity={0.18} side={THREE.DoubleSide} />
        </Ring>
      </group>

      {/* FLOATING NEURAL DATA NODES */}
      <group ref={dataNodesRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={node.pos}>
            <sphereGeometry args={[node.scale, 12, 12]} />
            <meshStandardMaterial
              color={i % 4 === 0 ? '#32D583' : '#38A3FF'}
              emissive={i % 4 === 0 ? '#32D583' : '#1687FF'}
              emissiveIntensity={1.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function HeroScene({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div className="w-full h-[460px] md:h-[580px] lg:h-[660px] relative cursor-grab active:cursor-grabbing">
      <CanvasContainer
        camera={{ position: [0, 0.3, 4.4], fov: 42 }}
        className="w-full h-full"
      >
        <FuturisticWorkstation scrollY={scrollY} />
      </CanvasContainer>

      {/* Sleek Technical HUD Corner Coordinates */}
      <div className="absolute top-4 right-4 pointer-events-none text-[10px] font-mono text-muted-text flex flex-col items-end gap-0.5">
        <span className="text-electric-blue/80 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
          SYS_RENDER_CORE // 60FPS
        </span>
        <span>LAT: 19.0760° N, LON: 72.8777° E</span>
        <span className="text-[9px] text-muted-text/60">WORKSTATION_STATE: ACTIVE</span>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none text-[10px] font-mono text-muted-text flex items-center gap-2">
        <span className="px-1.5 py-0.5 rounded border border-border/40 bg-panel/60 text-secondary-text">
          PARALLAX: ENABLED
        </span>
        <span className="text-muted-text/70">ROTATION_DAMPED: 0.06</span>
      </div>
    </div>
  );
}
