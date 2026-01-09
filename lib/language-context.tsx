"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { Language } from "./translations"

interface LanguageContextType {
  language: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language: Language = "en"

  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
