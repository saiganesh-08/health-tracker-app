import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function AnimatedBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#e8f5e9' },
        particles: {
          number: { value: 30 },
          color: { value: '#66bb6a' },
          shape: { type: 'circle' },
          opacity: { value: 0.4 },
          size: { value: 6, random: true },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}
