'use client';

import React from 'react';

export default function AmbientBackground() {
  return (
    <div
      className="ambient-blue-backdrop"
      aria-hidden="true"
    >
      <div className="ambient-light-primary" />
      <div className="ambient-light-secondary" />
    </div>
  );
}
