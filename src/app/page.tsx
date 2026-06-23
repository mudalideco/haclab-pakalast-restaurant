import { HeroSection } from "@/components/sections/HeroSection"
import { HeaderSection } from "@/components/sections/HeaderSection"
import { ValuePropsSection } from "@/components/sections/ValuePropsSection"
import { MenuSection } from "@/components/sections/MenuSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { LocationSection } from "@/components/sections/LocationSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <ValuePropsSection />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}