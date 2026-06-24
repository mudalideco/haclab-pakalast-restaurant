'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Shield, Wallet, Star } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with care, using traditional recipes passed down through generations.',
  },
  {
    icon: Shield,
    title: 'Always Fresh',
    description: 'We source the freshest local ingredients daily from Makindye markets.',
  },
  {
    icon: Wallet,
    title: 'Affordable Prices',
    description: 'Great food does not have to cost a fortune. We keep our prices fair for the community.',
  },
  {
    icon: Star,
    title: 'Community Favorite',
    description: 'Trusted by locals and visitors alike for authentic Ugandan hospitality.',
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-[#121416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Choose Pakalast
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            We go beyond just serving food. We create an experience that keeps you coming back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E2022] p-8 rounded-lg text-center hover:bg-[#2A2C2E] transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
