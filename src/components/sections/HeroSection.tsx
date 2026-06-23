'use client'
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 min-h-[90vh] bg-[var(--background)]">
      <motion.div 
        className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] font-[var(--font-heading)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Open 24/7 — Authentic Ugandan Flavors Anytime
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-[var(--muted)] max-w-2xl font-[var(--font-body)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your neighborhood spot in Makindye serving hearty portions of local favorites, from sunrise to sunset.
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--primary)] px-8 text-sm font-medium text-white shadow-lg transition-all hover:opacity-90"
          >
            View Our Menu
          </a>
        </div>
      </motion.div>
    </section>
  )
}