import { HeroSection } from "@/components/sections/HeroSection"
import { HeaderSection } from "@/components/sections/HeaderSection"
import { ValuePropsSection } from "@/components/sections/ValuePropsSection"
import { MenuSection } from "@/components/sections/MenuSection"
import { SignatureDishesSection } from "@/components/sections/SignatureDishesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { Experience247Section } from "@/components/sections/Experience247Section"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { LocationSection } from "@/components/sections/LocationSection"
import { NewsletterSection } from "@/components/sections/NewsletterSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <ValuePropsSection />
        <AboutSection />
        <SignatureDishesSection />
        <MenuSection />
        <Experience247Section />
        <GallerySection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <LocationSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
