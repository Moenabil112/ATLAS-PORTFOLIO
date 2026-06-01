import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface AccessCodeGeneratorProps {
  code: string
}

export default function AccessCodeGenerator({ code }: AccessCodeGeneratorProps) {
  const { lang } = useLanguage()
  const t = translations[lang].dataRoom

  return (
    <div className="border border-gold/30 bg-graphite p-6 mt-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse"></div>
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold/80">
          {t.accessCodeTitle}
        </span>
      </div>

      <p className="text-xs text-sand/70 mb-4">{t.accessGranted}</p>

      <div className="bg-obsidian border border-gold/20 px-5 py-4 mb-4 inline-flex">
        <span className="text-xl font-mono font-medium tracking-[0.25em] text-gold">{code}</span>
      </div>

      <p className="text-xs text-sand/50 leading-relaxed">{t.accessCodeNote}</p>
    </div>
  )
}
