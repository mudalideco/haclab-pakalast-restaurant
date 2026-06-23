'use client'
import { motion } from "framer-motion"
import { Clock, Utensils, Heart, Truck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Open 24/7",
    description: "Always available when you need us - day or night"
  },
  {
    icon: Utensils,
    title: "Authentic Ugandan",
    description: "Traditional recipes made with local ingredients"
  },
  {
    icon: Heart,
    title: "Hearty Portions",
    description: "Satisfying meals that fill you up"
  },
  {
    icon: Truck,
    title: "Quick Service",
    description: "Fast and friendly - perfect for busy schedules"
  }
]

export function ValuePropsSection() {
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
            Why Choose Pakalast?
          </h2>
          <p className="text-[var(--muted)] font-[var(--font-body)]">
            Your reliable neighborhood restaurant
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 mb-4">
                <feature.icon className="h-6 w-6 text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[var(--foreground)] font-[var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--muted)] font-[var(--font-body)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}