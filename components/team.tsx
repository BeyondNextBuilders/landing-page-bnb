"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import getTeamMembers from "@/constants/team_members"

export function Team() {
  const { language } = useLanguage()
  const t = translations[language]
  const teamMembers = getTeamMembers()

  return (
    <section id="team" className="py-24 bg-secondary relative">
      <div className="flex-col mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-bold">{t.team.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 text-balance">{t.team.title}</h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto text-pretty leading-relaxed">{t.team.description}</p>
        </div>
        {/* Team Member Cards */}
        <div className="justify-items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center">
            {teamMembers.map((member) => (
              <a
                key={member.name}
                href={member.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-md"
              >
                <Card className="bg-primary w-full border-2 border-tertiary overflow-hidden group hover:border-accent transition-all duration-300 hover:shadow-2xl cursor-pointer">
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={member.image_url}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cream mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.title}</p>
                    <p className="text-cream/70 text-sm mb-4 leading-relaxed">{member.description}</p>
                    <div className="inline-flex w-9 h-9 rounded-full bg-accent/10 group-hover:bg-accent/20 items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
