'use client';

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SKILL_NODES } from '@/data/portfolioData';
import { SkillNode } from '@/types';
import CanvasContainer from './CanvasContainer';

function OrbitalUniverse({
  selectedSkill,
  onSelectSkill,
}: {
  selectedSkill: SkillNode | null;
  onSelectSkill: (skill: SkillNode | null) => void;
}) {
  const systemRef = useRef<THREE.Group>(null);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Time tracking for orbits
  const orbitAngles = useRef<Map<string, number>>(new Map());

  // Distinct orbital radii
  const orbits = [2.2, 3.4, 4.6, 5.8];

  useFrame((state, delta) => {
    const isPaused = hoveredSkillId !== null;

    if (systemRef.current) {
      // Gentle tilt of the universe
      systemRef.current.rotation.x = 0.55;
    }

    // Advance orbits if not hovered
    SKILL_NODES.forEach((node) => {
      let currentAngle = orbitAngles.current.get(node.id) || (Math.random() * Math.PI * 2);
      if (!isPaused || hoveredSkillId === node.id) {
        currentAngle += delta * (node.speed * 0.4);
      }
      orbitAngles.current.set(node.id, currentAngle);
    });
  });

  const activeNode = SKILL_NODES.find((s) => s.id === (hoveredSkillId || selectedSkill?.id));

  return (
    <group ref={systemRef} position={[0, -0.2, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={4.0} color="#1687FF" distance={14} />

      {/* CENTRAL AI/ML SUPERCORE */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <group>
          {/* Outer Pulsing Corona */}
          <mesh>
            <sphereGeometry args={[0.92, 24, 24]} />
            <meshStandardMaterial
              color="#1687FF"
              emissive="#1687FF"
              emissiveIntensity={0.8}
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>

          {/* Inner Core */}
          <mesh>
            <sphereGeometry args={[0.65, 24, 24]} />
            <meshStandardMaterial
              color="#38A3FF"
              emissive="#1687FF"
              emissiveIntensity={2.5}
            />
          </mesh>

          {/* Core Label */}
          <Text
            position={[0, 0, 0.75]}
            fontSize={0.22}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_ad06vqTrSStoU.woff"
          >
            AI / ML CORE
          </Text>
        </group>
      </Float>

      {/* CONCENTRIC ORBITAL RINGS */}
      {orbits.map((radius, idx) => (
        <group key={idx}>
          <Ring args={[radius - 0.015, radius + 0.015, 96]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial
              color="#1687FF"
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
            />
          </Ring>
        </group>
      ))}

      {/* ORBITING TECHNOLOGY NODES */}
      {SKILL_NODES.map((node) => {
        const angle = orbitAngles.current.get(node.id) || 0;
        const x = Math.cos(angle) * node.orbitRadius;
        const z = Math.sin(angle) * node.orbitRadius;

        const isHovered = hoveredSkillId === node.id || selectedSkill?.id === node.id;
        const isRelated =
          activeNode &&
          (activeNode.relatedTech.some((t) => node.name.toLowerCase().includes(t.toLowerCase())) ||
            node.relatedTech.some((t) => activeNode.name.toLowerCase().includes(t.toLowerCase())));

        return (
          <group
            key={node.id}
            position={[x, 0, z]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredSkillId(node.id);
              onSelectSkill(node);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHoveredSkillId(null);
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelectSkill(node);
            }}
          >
            {/* Hover halo ring */}
            {isHovered && (
              <Ring args={[node.size * 1.5, node.size * 1.65, 32]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#38A3FF" side={THREE.DoubleSide} />
              </Ring>
            )}

            {/* Glowing Tech Sphere Node */}
            <mesh scale={isHovered ? 1.5 : isRelated ? 1.25 : 1}>
              <sphereGeometry args={[node.size, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? '#75C2FF' : isRelated ? '#32D583' : node.color}
                emissive={isHovered ? '#38A3FF' : isRelated ? '#32D583' : node.color}
                emissiveIntensity={isHovered ? 3.0 : isRelated ? 1.8 : 1.1}
              />
            </mesh>

            {/* Floating Text Label */}
            <Text
              position={[0, node.size + 0.28, 0]}
              fontSize={0.18}
              color={isHovered ? '#FFFFFF' : isRelated ? '#32D583' : '#91A4B8'}
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_ad06vqTrSStoU.woff"
            >
              {node.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillUniverseScene({
  selectedSkill,
  onSelectSkill,
}: {
  selectedSkill: SkillNode | null;
  onSelectSkill: (skill: SkillNode | null) => void;
}) {
  return (
    <div className="w-full h-[480px] md:h-[580px] relative rounded-2xl border border-border/40 bg-panel/30 overflow-hidden cursor-crosshair">
      <CanvasContainer camera={{ position: [0, 4.2, 7.5], fov: 46 }}>
        <OrbitalUniverse selectedSkill={selectedSkill} onSelectSkill={onSelectSkill} />
      </CanvasContainer>

      {/* Orbit Universe HUD */}
      <div className="absolute top-4 left-4 pointer-events-none text-[10px] font-mono text-muted-text flex flex-col gap-1">
        <span className="text-electric-blue flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
          ORBITAL_KNOWLEDGE_SPHERE // 4 TIERS
        </span>
        <span>RADII: 2.2AU (CORE) → 5.8AU (TOOLS)</span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] font-mono text-secondary-text bg-panel-elevated/80 px-2.5 py-1 rounded border border-border/40">
        HOVER ANY ORBITAL NODE TO LOCK FOCUS & INSPECT DEPENDENCIES
      </div>
    </div>
  );
}
