'use client'
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)] border-b border-[var(--muted)]/20">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-[var(--primary)] font-[var(--font-heading)]">
          Pakalast
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#menu" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
            Menu
          </Link>
          <Link href="#about" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
            About
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
        </nav>
        
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden bg-[var(--surface)] border-t border-[var(--muted)]/20 p-4">
          <div className="flex flex-col gap-4">
            <Link href="#menu" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link href="#about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}