'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

// Organic motion params: lerp 0.05 for smooth inertia
const LERP = 0.05

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ 
      lerp: LERP, 
      smoothWheel: true 
    })
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy()
    }
  }, [])
  
  return <>{children}</>
}