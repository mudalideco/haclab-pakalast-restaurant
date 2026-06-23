'use client'
import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 px-4 bg-[var(--surface)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] font-[var(--font-heading)] mb-4">
            Find Us
          </h2>
          <p className="text-[var(--muted)] font-[var(--font-body)]">
            Located in Makindye, open 24/7
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[var(--primary)] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[var(--foreground)] font-[var(--font-heading)]">
                    Location
                  </h3>
                  <p className="text-[var(--muted)] font-[var(--font-body)]">
                    Makindye, Kampala<br />
                    Opposite Makindye Military Barracks
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-[var(--primary)] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[var(--foreground)] font-[var(--font-heading)]">
                    Hours
                  </h3>
                  <p className="text-[var(--muted)] font-[var(--font-body)]">
                    Open 24 hours<br />
                    7 days a week
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[var(--primary)] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-[var(--foreground)] font-[var(--font-heading)]">
                    Contact
                  </h3>
                  <p className="text-[var(--muted)] font-[var(--font-body)]">
                    +256-704-060539<br />
                    orders@pakalast.ug
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="h-80 bg-[var(--background)] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdJY2JZ9kJQZQZQZQZQZQZQZQZQZQZQZQ&q=Makindye,Kampala"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Pakalast Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}