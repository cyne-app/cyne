'use client';

import { useCallback } from 'react';

import { useTheme } from 'next-themes';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export function AiParticlesBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          color: {
            value: isDark ? '#AAAAAA' : '#666666',
          },
          links: {
            color: isDark ? '#999999' : '#444444',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
              parallax: {
                enable: true,
                force: 50,
                smooth: 10,
              },
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
              speed: 1,
            },
          },
        },
        detectRetina: true,
        background: {
          color: 'transparent',
        },
      }}
      className="absolute inset-0 h-full w-full"
    />
  );
}
