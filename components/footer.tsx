"use client"

import Link from "next/link"
import { Linkedin, Github, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-primary border-t-2 border-tertiary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img
              src="/images/e3336064-4664-466c-9fbb-a4f5e5dade95.png"
              alt="BNB Solutions"
              className="h-16 md:h-20 w-auto mb-4"
            />
            <p className="text-cream/70 leading-relaxed max-w-md">
              Building innovative software solutions that drive business growth and digital transformation.
            </p>
          </div>

          <div>
            <h3 className="text-cream font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["services", "team", "contact"].map((section) => (
                <li key={section}>
                  <Link href={`#${section}`} className="text-cream/70 hover:text-accent transition-colors">
                    {t.nav[section as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/109443643/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary pt-8 text-center">
          <p className="text-cream/60">
            © {new Date().getFullYear()} BNB Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
