'use client'
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-[var(--background)]">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-4">
            Order or Inquire
          </h2>
<p className="text-[var(--muted)] font-[var(--font-body)]">
             We&apos;re ready to serve you anytime
           </p>
        </motion.div>
        
        <motion.div
          className="rounded-xl p-8 bg-[var(--surface)] shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--foreground)] font-[var(--font-heading)]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--muted)]/20 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--foreground)] font-[var(--font-heading)]">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--muted)]/20 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--foreground)] font-[var(--font-heading)]">
                Message
              </label>
              <textarea
                placeholder="What would you like to order or ask?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[var(--muted)]/20 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--primary)] px-8 text-sm font-medium text-white shadow-lg transition-all hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}