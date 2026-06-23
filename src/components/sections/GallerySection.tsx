'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  "https://images.unsplash.com/photo-1547592938-61d99cb1a2b5?w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  "https://images.unsplash.com/photo-1546069901-ba6c1392a4d2?w=600&q=80",
  "https://images.unsplash.com/photo-1562967916-eb82227de43a?w=600&q=80",
  "https://images.unsplash.com/photo-1512621067550-c2c7b8c8c8c8?w=600&q=80"
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
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative h-64">
                <Image
                  src={image}
                  alt={`Food item ${index + 1}`}
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