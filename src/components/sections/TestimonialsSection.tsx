'use client'
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Namubiru",
    text: "Best matoke in Makindye! Always fresh and the portions are generous. Love that they&apos;re open 24/7 for my late shifts.",
    rating: 5
  },
  {
    name: "James Okello",
    text: "Pakalast feels like home. The luwombo reminds me of my mother&apos;s cooking. Great for quick family dinners.",
    rating: 5
  },
  {
    name: "Grace Atim",
    text: "Reliable spot anytime. Their rolex hits the spot at any hour. Pricing is fair for the quality.",
    rating: 4
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-[var(--background)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[var(--muted)] font-[var(--font-body)]">
            Stories from the Makindye community
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 bg-[var(--surface)] shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
<p className="text-[var(--muted)] mb-4 font-[var(--font-body)]">
                 &ldquo;{testimonial.text}&rdquo;
               </p>
              <p className="font-bold text-[var(--foreground)] font-[var(--font-heading)]">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}