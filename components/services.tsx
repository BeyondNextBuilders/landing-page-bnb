"use client"

import { Card } from "@/components/ui/card"
import { Code2, Smartphone, Cloud, Database, Shield, Workflow } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const iconMap = [Code2, Smartphone, Cloud, Database, Shield, Workflow]

export function Services() {
  const { language } = useLanguage()
  const t = translations[language]
  const serviceItems = t.services.items

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/services-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-bold">{t.services.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {serviceItems.map((service, index) => {
            const IconComponent = iconMap[index]
            return (
              <div key={index}>
                <Card className="p-8 bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl group h-full">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
