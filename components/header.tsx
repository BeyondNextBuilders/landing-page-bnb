"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-darkest/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 opacity-[0.82]">
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/images/e3336064-4664-466c-9fbb-a4f5e5dade95.png"
                alt="BNB Solutions"
                className="h-20 w-auto md:h-24"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["services", "team", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-cream font-semibold hover:text-accent-cyan transition-colors text-lg relative group"
              >
                {t.nav[section as keyof typeof t.nav]}
                <span className="absolute bottom-0 left-0 h-0.5 bg-accent-cyan w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <div>
              <LanguageSwitcher />
            </div>
            <div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent-cyan text-navy-darkest hover:bg-accent-cyan/90 font-bold text-lg px-6 py-6"
              >
                {t.nav.getStarted}
              </Button>
            </div>
          </nav>

          <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-slate-blue">
            <div className="flex flex-col gap-4 py-4">
              {["services", "team", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-cream font-semibold hover:text-accent-cyan transition-colors text-left text-lg"
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
              <div>
                <LanguageSwitcher />
              </div>
              <div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent-cyan text-navy-darkest hover:bg-accent-cyan/90 font-bold w-full"
                >
                  {t.nav.getStarted}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
