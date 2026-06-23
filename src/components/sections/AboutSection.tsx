'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-[var(--background)]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248366103-0174c6d4f6c9?w=800&q=80"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-6">
              Our Story
            </h2>
            <p className="text-[var(--muted)] mb-4 font-[var(--font-body)]">
              Pakalast Restaurant has been serving the Makindye community for years, bringing families together over authentic Ugandan cuisine. Our name means &quot;lasting&quot; or &quot;enduring&quot; - a promise of consistent quality and welcome.
            </p>
            <p className="text-[var(--muted)] mb-4 font-[var(--font-body)]">
              We believe in using fresh, local ingredients and traditional cooking methods. Every dish tells a story of Uganda&apos;s rich culinary heritage, prepared with love and served with pride.
            </p>
            <p className="text-[var(--muted)] font-[var(--font-body)]">
              Whether you&apos;re grabbing a quick meal during your lunch break or enjoying a late-night dinner, our doors are always open for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}