'use client';

import React, { createContext, useContext, useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const animate = () => {
      lenis.raf(performance.now());
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <SmoothScrollContext.Provider value={null}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll(): Lenis | null {
  return useContext(SmoothScrollContext);
}
