'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const menuItems = [
  {
    name: "Matoke",
    description: "Traditional steamed green bananas with beef stew",
    price: "UGX 15,000",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Luwombo",
    description: "Steamed fish or chicken in banana leaves with vegetables",
    price: "UGX 18,000",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Rolex",
    description: "Chapati rolled with eggs, vegetables and meat",
    price: "UGX 8,000",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Posho",
    description: "Maize meal porridge with beans and vegetables",
    price: "UGX 12,000",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop"
  }
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-[var(--surface)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-[var(--muted)] font-[var(--font-body)]">
            Traditional Ugandan favorites made fresh daily
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden bg-[var(--background)] shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-xl mb-2 text-[var(--foreground)] font-[var(--font-heading)]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-3 font-[var(--font-body)]">
                    {item.description}
                  </p>
                  <span className="font-bold text-lg text-[var(--primary)] font-[var(--font-heading)]">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}