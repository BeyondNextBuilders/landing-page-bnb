import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { Services } from "@/components/services"
import { ValueProposition } from "@/components/value-proposition"
import { Portfolio } from "@/components/portfolio"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Services />
      <ValueProposition />
      <Portfolio />
      <Benefits />
      {/* <Testimonials /> */}
      <CtaSection />
      <Footer />
    </main>
  )
}
