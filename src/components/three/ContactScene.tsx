'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Ring } from '@react-three/drei';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function CommunicationPrism({
  isFocused = false,
  isSubmitted = false,
}: {
  isFocused?: boolean;
  isSubmitted?: boolean;
}) {
  const outerPrismRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const speedMult = isSubmitted ? 3.0 : isFocused ? 1.8 : 0.8;

    if (outerPrismRef.current) {
      outerPrismRef.current.rotation.y += delta * 0.4 * speedMult;
      outerPrismRef.current.rotation.x = Math.sin(t * 0.6) * 0.25;
      
      const mat = outerPrismRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = isSubmitted
          ? 2.5 + Math.sin(t * 8) * 1.0
          : isFocused
          ? 1.5
          : 0.6;
      }
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.7 * speedMult;
      innerCoreRef.current.rotation.z += delta * 0.3 * speedMult;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.25 * speedMult;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x += delta * 0.2 * speedMult;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight
        position={[0, 0, 0]}
        intensity={isSubmitted ? 5.0 : isFocused ? 3.5 : 2.0}
        color={isSubmitted ? '#32D583' : '#1687FF'}
        distance={10}
      />

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* OUTER GLASS PRISM (Icosahedron / Holographic Facets) */}
        <mesh ref={outerPrismRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#0B1118"
            emissive={isSubmitted ? '#32D583' : '#1687FF'}
            emissiveIntensity={isSubmitted ? 2.5 : isFocused ? 1.4 : 0.7}
            wireframe={true}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* SEMI-TRANSPARENT INNER FACET SHELL */}
        <mesh>
          <icosahedronGeometry args={[1.16, 0]} />
          <meshPhysicalMaterial
            color="#080C12"
            transmission={0.9}
            opacity={0.35}
            transparent
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>

        {/* HIGH-ENERGY INNER COMMUNICATION QUANTUM CORE */}
        <mesh ref={innerCoreRef}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color={isSubmitted ? '#32D583' : '#38A3FF'}
            emissive={isSubmitted ? '#32D583' : '#1687FF'}
            emissiveIntensity={isSubmitted ? 3.5 : isFocused ? 2.5 : 1.5}
          />
        </mesh>

        {/* SIGNAL RINGS */}
        <group ref={ringRef1}>
          <Ring args={[1.5, 1.52, 48]} rotation={[Math.PI / 3, 0, 0]}>
            <meshBasicMaterial
              color={isSubmitted ? '#32D583' : '#38A3FF'}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </Ring>
        </group>

        <group ref={ringRef2}>
          <Ring args={[1.75, 1.765, 48]} rotation={[-Math.PI / 4, 0.4, 0]}>
            <meshBasicMaterial
              color={isSubmitted ? '#32D583' : '#1687FF'}
              transparent
              opacity={0.25}
              side={THREE.DoubleSide}
            />
          </Ring>
        </group>
      </Float>
    </group>
  );
}

export default function ContactScene({
  isFocused = false,
  isSubmitted = false,
  className = 'h-[360px] md:h-[460px]',
}: {
  isFocused?: boolean;
  isSubmitted?: boolean;
  className?: string;
}) {
  return (
    <div className={`w-full relative rounded-2xl border border-border/40 bg-panel/30 overflow-hidden ${className}`}>
      <CanvasContainer camera={{ position: [0, 0, 3.8], fov: 45 }}>
        <CommunicationPrism isFocused={isFocused} isSubmitted={isSubmitted} />
      </CanvasContainer>

      {/* Status Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none text-[10px] font-mono flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            isSubmitted
              ? 'bg-success animate-ping'
              : isFocused
              ? 'bg-bright-blue animate-pulse'
              : 'bg-electric-blue'
          }`}
        />
        <span className={isSubmitted ? 'text-success font-semibold' : 'text-muted-text'}>
          {isSubmitted
            ? 'CONNECTION ESTABLISHED // PACKET_RECEIVED'
            : isFocused
            ? 'QUANTUM_NODE: TRANSMISSION_BUFFER_ACTIVE'
            : 'SIGNAL_RECEIVER: LISTENING'}
        </span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none text-[9px] font-mono text-muted-text bg-panel/80 px-2 py-1 rounded border border-border/40">
        FREQUENCY: 1420.405 MHz // ENCRYPTED
      </div>
    </div>
  );
}
