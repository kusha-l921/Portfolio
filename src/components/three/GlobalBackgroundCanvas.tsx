'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasContainer from './CanvasContainer';

function BackgroundNetwork() {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);

  const count = 75; // Sparse, high-performance data points
  const maxDistance = 2.4;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [pos, vel];
  }, [count]);

  const maxLines = (count * (count - 1)) / 2;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Subtle mouse parallax
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      mouse.x * 0.35,
      0.03
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      mouse.y * 0.25,
      0.03
    );

    // Update point positions
    let vertexCount = 0;
    const posAttr = groupRef.current.children[0] as THREE.Points;
    if (posAttr && posAttr.geometry) {
      const p = posAttr.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        p[i * 3] += velocities[i * 3];
        p[i * 3 + 1] += velocities[i * 3 + 1];
        p[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary bounce
        if (Math.abs(p[i * 3]) > 9) velocities[i * 3] *= -1;
        if (Math.abs(p[i * 3 + 1]) > 7) velocities[i * 3 + 1] *= -1;
        if (Math.abs(p[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
      }
      posAttr.geometry.attributes.position.needsUpdate = true;

      // Calculate connections
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = p[i * 3] - p[j * 3];
          const dy = p[i * 3 + 1] - p[j * 3 + 1];
          const dz = p[i * 3 + 2] - p[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22; // very faint line

            linePositions[vertexCount * 3] = p[i * 3];
            linePositions[vertexCount * 3 + 1] = p[i * 3 + 1];
            linePositions[vertexCount * 3 + 2] = p[i * 3 + 2];

            linePositions[(vertexCount + 1) * 3] = p[j * 3];
            linePositions[(vertexCount + 1) * 3 + 1] = p[j * 3 + 1];
            linePositions[(vertexCount + 1) * 3 + 2] = p[j * 3 + 2];

            // Subtle electric blue color
            const r = 0.08, g = 0.52, b = 1.0;
            lineColors[vertexCount * 3] = r * alpha;
            lineColors[vertexCount * 3 + 1] = g * alpha;
            lineColors[vertexCount * 3 + 2] = b * alpha;

            lineColors[(vertexCount + 1) * 3] = r * alpha;
            lineColors[(vertexCount + 1) * 3 + 1] = g * alpha;
            lineColors[(vertexCount + 1) * 3 + 2] = b * alpha;

            vertexCount += 2;
          }
        }
      }

      if (linesGeometryRef.current) {
        linesGeometryRef.current.setDrawRange(0, vertexCount);
        linesGeometryRef.current.attributes.position.needsUpdate = true;
        linesGeometryRef.current.attributes.color.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Data points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#38A3FF"
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Connecting neural lines */}
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function GlobalBackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
      <CanvasContainer camera={{ position: [0, 0, 7], fov: 60 }}>
        <BackgroundNetwork />
      </CanvasContainer>
    </div>
  );
}
