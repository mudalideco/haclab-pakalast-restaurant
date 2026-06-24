'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription (e.g., send to a backend or mail service)
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <section className="py-24 bg-[#1E2022]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-[#2D6A4F] flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Stay in the Loop
          </h2>
          <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Subscribe to our newsletter for exclusive deals, new menu items, and community updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-[#121416] border border-[#2A2C2E] focus:outline-none focus:border-[#2D6A4F] text-white placeholder-gray-500"
              style={{ fontFamily: 'var(--font-body)' }}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#2D6A4F] hover:bg-[#366e56] text-white font-bold rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
