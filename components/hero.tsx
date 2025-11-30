"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-darkest">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/digital-tech-circuit-board-grid-pattern-blue.jpg')`,
            backgroundSize: "800px 800px",
            animation: "drift 20s linear infinite",
          }}
        />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/tech-nodes-network-lines-cyan-blue.jpg')`,
            backgroundSize: "600px 600px",
            animation: "drift-reverse 25s linear infinite",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-darkest via-navy-dark to-slate-blue/50" />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent-cyan/10 border-2 border-accent-cyan/30 rounded-full px-6 py-3 mb-8">
            <div>
              <Zap className="w-5 h-5 text-accent-cyan" />
            </div>
            <span className="text-accent-cyan text-base font-bold">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 text-balance leading-tight">
            {t.hero.title} <span className="text-accent-cyan">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
          </h1>

          <p className="text-xl md:text-2xl text-cream/90 mb-12 text-pretty leading-relaxed max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-accent-cyan text-navy-darkest hover:bg-accent-cyan/90 font-bold text-lg px-8 py-6 group"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream hover:bg-cream hover:text-navy-darkest font-bold text-lg px-8 py-6 bg-transparent"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                  }
                }}
              >
                {t.hero.exploreServices}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { value: "50+", label: t.hero.projectsDelivered },
              { value: "98%", label: t.hero.clientSatisfaction },
              { value: "24/7", label: t.hero.supportAvailable },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">{stat.value}</div>
                <div className="text-cream/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes drift-reverse {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, -50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  )
}
