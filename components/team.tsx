"use client"

import { Card } from "@/components/ui/card"
import { Linkedin, Github, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Team() {
  const { language } = useLanguage()
  const t = translations[language]
  const teamMembers = t.team.members

  return (
    <section id="team" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-bold">{t.team.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 text-balance">{t.team.title}</h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto text-pretty leading-relaxed">{t.team.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Card className="bg-primary border-2 border-tertiary overflow-hidden group hover:border-accent transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/${member.name.toLowerCase().replace(" ", "-")}.jpg?height=400&width=400&query=${member.name} professional portrait`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cream mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-cream/70 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3">
                    {[Linkedin, Github, Mail].map((Icon, iconIndex) => (
                      <button
                        key={iconIndex}
                        className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                      >
                        <Icon className="w-4 h-4 text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
