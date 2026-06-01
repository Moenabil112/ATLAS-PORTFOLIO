import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'ar' | 'fr'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  dir: 'ltr',
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLang
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir: lang === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
