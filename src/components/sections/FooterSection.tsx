'use client'
import { motion } from "framer-motion"
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons"

export function FooterSection() {
  return (
    <footer className="bg-[var(--foreground)] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-white mb-4 font-[var(--font-heading)]">
              Pakalast Restaurant
            </h3>
            <p className="text-sm text-[var(--muted)] font-[var(--font-body)]">
              Open 24/7 in Makindye, Kampala<br />
              Serving authentic Ugandan cuisine
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-[var(--font-heading)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-[var(--muted)] hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-[var(--muted)] hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-[var(--muted)] hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-[var(--muted)] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-[var(--font-heading)]">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="Facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="Instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors" aria-label="X (Twitter)">
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-[var(--muted)]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[var(--muted)] font-[var(--font-body)]">
            Powered by{' '}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium text-white"
            >
              Haclab Co Ltd
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}