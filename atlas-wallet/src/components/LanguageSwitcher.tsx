import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../context/LanguageContext'

const langs: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'fr', label: 'FR' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wider">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 transition-colors duration-150 ${
              lang === l.code
                ? 'text-gold border-b border-gold'
                : 'text-sand/60 hover:text-sand'
            }`}
            aria-label={`Switch to ${l.label}`}
          >
            {l.label}
          </button>
          {i < langs.length - 1 && (
            <span className="text-graphite-mid select-none">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
