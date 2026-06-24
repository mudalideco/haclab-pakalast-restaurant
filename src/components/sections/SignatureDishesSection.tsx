'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const dishes = [
  {
    name: 'Matoke & Groundnut Stew',
    description: 'Steamed green bananas served in a rich, groundnut-infused stew with tender beef.',
    price: '15,000 UGX',
  },
  {
    name: 'Rolex Deluxe',
    description: 'A signature Ugandan street food: an egg omelette rolled in a warm chapati.',
    price: '8,000 UGX',
  },
  {
    name: 'Luwombo Chicken',
    description: 'Slow-cooked chicken in a traditional banana-leaf wrap with a savory peanut sauce.',
    price: '18,000 UGX',
  },
  {
    name: "Goat's Meat BBQ",
    description: 'Tender, marinated goat meat grilled over charcoal with a side of kachumbari.',
    price: '20,000 UGX',
  },
]

export function SignatureDishesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="menu" className="py-24 bg-[#121416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Chef&apos;s Signature Selection
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Handpicked favorites from our kitchen, made with love and local ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E2022] p-8 rounded-lg hover:bg-[#2A2C2E] transition-colors"
            >
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {dish.name}
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {dish.description}
              </p>
              <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                {dish.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
