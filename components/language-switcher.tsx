"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-slate-blue/20 rounded-full p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full font-semibold transition-colors text-sm ${
          language === "en" ? "bg-accent-cyan text-navy-darkest" : "text-cream hover:text-accent-cyan"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ro")}
        className={`px-3 py-1 rounded-full font-semibold transition-colors text-sm ${
          language === "ro" ? "bg-accent-cyan text-navy-darkest" : "text-cream hover:text-accent-cyan"
        }`}
      >
        RO
      </button>
    </div>
  )
}
