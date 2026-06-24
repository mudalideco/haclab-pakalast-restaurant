'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open 24 hours a day, 7 days a week, including all public holidays. You can visit us anytime!',
  },
  {
    question: 'Do you offer delivery services?',
    answer: 'Yes, we offer delivery within Makindye and surrounding areas. Delivery is free for orders above 30,000 UGX.',
  },
  {
    question: 'Can I book a table for a large group?',
    answer: 'Absolutely! We welcome large groups. Please call us at +256-704-060539 in advance so we can prepare the best seating for you.',
  },
  {
    question: 'Do you have vegetarian options?',
    answer: 'Yes, we have a variety of vegetarian dishes including matoke, beans, and fresh vegetable stews.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, mobile money (MTN & Airtel), and major debit/credit cards.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="py-24 bg-[#121416]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Got questions? We have got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E2022] rounded-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6" style={{ fontFamily: 'var(--font-body)' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
