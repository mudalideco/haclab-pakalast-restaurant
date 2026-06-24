'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Sun, Moon, Coffee } from 'lucide-react'

const experiences = [
  {
    time: 'Early Morning (5am - 9am)',
    title: 'Sunrise Breakfast',
    description: 'Start your day with a hot cup of chai and a freshly made Rolex or Katogo.',
    icon: Coffee,
  },
  {
    time: 'Lunch Hour (12pm - 3pm)',
    title: 'Midday Feast',
    description: 'Enjoy a hearty plate of matoke, posho, or rice with your choice of stew.',
    icon: Sun,
  },
  {
    time: 'Evening (6pm - 9pm)',
    title: 'Sunset Dinner',
    description: 'Wind down with our signature luwombo or grilled meats under the stars.',
    icon: Clock,
  },
  {
    time: 'Late Night (10pm - 5am)',
    title: 'Midnight Snack',
    description: 'The kitchen never sleeps. Grab a late-night snack or a full meal anytime.',
    icon: Moon,
  },
]

export function Experience247Section() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-[#121416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The 24/7 Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            No matter the hour, a warm plate is waiting for you. See what you can enjoy around the clock.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E2022] p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {exp.title}
                </h3>
              </div>
              <p className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                {exp.time}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
