'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop"
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 bg-[var(--surface)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-4">
            Food Gallery
          </h2>
          <p className="text-[var(--muted)] font-[var(--font-body)]">
            A glimpse of our delicious offerings
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative h-80">
                <Image
                  src={image}
                  alt={`Restaurant food dish ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}