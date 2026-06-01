import { useLanguage } from '../context/LanguageContext'
import { disclaimerEn, disclaimerAr, disclaimerFr } from '../data/projectMetrics'

interface DisclaimerBoxProps {
  customText?: string
}

export default function DisclaimerBox({ customText }: DisclaimerBoxProps) {
  const { lang } = useLanguage()

  let text = customText
  if (!text) {
    if (lang === 'ar') text = disclaimerAr
    else if (lang === 'fr') text = disclaimerFr
    else text = disclaimerEn
  }

  return (
    <div className="border-l-2 border-gold/30 bg-graphite/50 px-4 py-3 mt-6">
      <p className="text-xs text-sand/50 leading-relaxed">{text}</p>
    </div>
  )
}
