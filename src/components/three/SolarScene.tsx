'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function ScientificSun({ interactive = true }: { interactive?: boolean }) {
  const sunCoreRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);
  const flaresGroup = useRef<THREE.Group>(null);
  const satelliteRef = useRef<THREE.Group>(null);
  const telemetryRings = useRef<THREE.Group>(null);

  // Generate magnetic active region flare loops
  const flareLoops = useMemo(() => {
    return [
      { radius: 1.18, angle: 0.3, tilt: 0.4, speed: 1.2 },
      { radius: 1.24, angle: 2.1, tilt: -0.6, speed: 0.9 },
      { radius: 1.15, angle: 4.2, tilt: 0.8, speed: 1.5 },
      { radius: 1.28, angle: 5.4, tilt: -0.3, speed: 1.1 },
    ];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Solar differential rotation
    if (sunCoreRef.current) {
      sunCoreRef.current.rotation.y += delta * 0.12;
      sunCoreRef.current.rotation.x = 0.12;
    }

    // Corona plasma breathing pulsation
    if (coronaRef.current) {
      coronaRef.current.rotation.y -= delta * 0.06;
      const s = 1.0 + Math.sin(t * 1.8) * 0.035;
      coronaRef.current.scale.set(s, s, s);
    }

    // Flares dynamic eruption pulse
    if (flaresGroup.current) {
      flaresGroup.current.children.forEach((child, i) => {
        const loop = flareLoops[i];
        if (loop) {
          const pulse = 1.0 + Math.sin(t * loop.speed + loop.angle) * 0.25;
          child.scale.set(pulse, pulse, pulse);
        }
      });
    }

    // Orbiting SDO Satellite
    if (satelliteRef.current) {
      const satAngle = t * 0.45;
      const r = 2.1;
      satelliteRef.current.position.x = Math.cos(satAngle) * r;
      satelliteRef.current.position.z = Math.sin(satAngle) * r;
      satelliteRef.current.position.y = Math.sin(satAngle * 2) * 0.35;
      satelliteRef.current.lookAt(0, 0, 0);
    }

    // Telemetry rings slow spin
    if (telemetryRings.current) {
      telemetryRings.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Intense Solar Lighting */}
      <pointLight position={[0, 0, 0]} intensity={4.5} color="#FF9933" distance={15} />
      <ambientLight intensity={0.25} />

      {/* INNER DENSE PLASMA SUN CORE */}
      <mesh ref={sunCoreRef}>
        <sphereGeometry args={[1.0, 36, 36]} />
        <meshStandardMaterial
          color="#FF7700"
          emissive="#FF4400"
          emissiveIntensity={2.2}
          roughness={0.7}
          metalness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* CHROMOSPHERE TURBULENT WIREFRAME OVERLAY */}
      <mesh rotation={[0.2, 0.4, 0]}>
        <sphereGeometry args={[1.02, 28, 28]} />
        <meshBasicMaterial
          color="#FFCC00"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* CORONAL GLOW LAYER */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial
          color="#FFAA33"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ACTIVE REGION MAGNETIC FLARE LOOPS */}
      <group ref={flaresGroup}>
        {flareLoops.map((loop, idx) => (
          <group
            key={idx}
            rotation={[loop.tilt, loop.angle, 0]}
            position={[
              Math.cos(loop.angle) * 0.9,
              Math.sin(loop.tilt) * 0.6,
              Math.sin(loop.angle) * 0.9,
            ]}
          >
            {/* Magnetic Arch Ring */}
            <Ring args={[0.18, 0.22, 24]} rotation={[Math.PI / 2, 0, 0]}>
              <meshBasicMaterial
                color="#FFDD55"
                transparent
                opacity={0.75}
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
              />
            </Ring>
            {/* High-energy flare ejection point */}
            <mesh position={[0, 0.22, 0]}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
          </group>
        ))}
      </group>

      {/* SCIENTIFIC TELEMETRY DATA ORBITS */}
      <group ref={telemetryRings}>
        {/* Heliographic Equatorial Grid */}
        <Ring args={[1.65, 1.66, 64]} rotation={[Math.PI / 2.3, 0, 0]}>
          <meshBasicMaterial color="#1687FF" transparent opacity={0.35} side={THREE.DoubleSide} />
        </Ring>

        {/* Polar Axis Coordinate Marker */}
        <Ring args={[2.0, 2.01, 64]} rotation={[0.3, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#38A3FF" transparent opacity={0.2} side={THREE.DoubleSide} />
        </Ring>
      </group>

      {/* SDO / AIA ORBITAL RESEARCH SATELLITE */}
      <group ref={satelliteRef}>
        {/* Main Probe Chassis */}
        <mesh>
          <boxGeometry args={[0.14, 0.1, 0.1]} />
          <meshStandardMaterial color="#0B1118" metalness={0.9} roughness={0.2} emissive="#1687FF" emissiveIntensity={0.4} />
        </mesh>
        {/* Solar Panel Left */}
        <mesh position={[-0.18, 0, 0]}>
          <boxGeometry args={[0.2, 0.08, 0.01]} />
          <meshStandardMaterial color="#1687FF" emissive="#1687FF" emissiveIntensity={1.2} />
        </mesh>
        {/* Solar Panel Right */}
        <mesh position={[0.18, 0, 0]}>
          <boxGeometry args={[0.2, 0.08, 0.01]} />
          <meshStandardMaterial color="#1687FF" emissive="#1687FF" emissiveIntensity={1.2} />
        </mesh>
        {/* Sensor Optical Aperture pointing at Sun */}
        <mesh position={[0, 0, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.05, 12]} />
          <meshBasicMaterial color="#32D583" />
        </mesh>
      </group>
    </group>
  );
}

export default function SolarScene({ className = 'h-[360px] md:h-[440px]' }: { className?: string }) {
  return (
    <div className={`w-full relative rounded-2xl border border-border/40 bg-panel/30 overflow-hidden ${className}`}>
      <CanvasContainer camera={{ position: [0, 0.8, 3.8], fov: 45 }}>
        <ScientificSun />
      </CanvasContainer>

      {/* Scientific Telemetry Overlay */}
      <div className="absolute top-3 left-4 pointer-events-none text-[10px] font-mono text-muted-text flex flex-col gap-0.5">
        <span className="text-warning flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-warning animate-ping" />
          SDO/AIA 193Å // CORONAL ACTIVE REGION 3664
        </span>
        <span className="text-secondary-text">FLUX: X2.8 CLASSIFICATION PREDICTED</span>
      </div>

      <div className="absolute bottom-3 right-4 pointer-events-none text-[9px] font-mono text-muted-text bg-panel/80 px-2 py-1 rounded border border-border/40">
        MAGNETOHYDRODYNAMIC TENSOR SIMULATION
      </div>
    </div>
  );
}
