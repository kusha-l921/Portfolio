'use client';

import React, { useRef, useState, useCallback } from 'react';

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max 3 degrees per spec
  onClick?: () => void;
}

export default function CardTilt({
  children,
  className = '',
  maxTilt = 3,
  onClick,
}: CardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [transitionStyle, setTransitionStyle] = useState<string>('transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransitionStyle('transform 0.1s ease-out');
      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`
      );
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTransitionStyle('transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)');
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: transitionStyle,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
