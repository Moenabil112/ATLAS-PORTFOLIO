import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function NotFound() {
  const { lang } = useLanguage()
  const tNav = translations[lang].nav

  const msg = {
    en: { heading: 'Page Not Found', body: 'The page you are looking for does not exist or is not publicly accessible.', back: 'Return Home' },
    ar: { heading: 'الصفحة غير موجودة', body: 'الصفحة التي تبحث عنها غير موجودة أو غير متاحة للعموم.', back: 'العودة إلى الرئيسية' },
    fr: { heading: 'Page introuvable', body: "La page que vous recherchez n'existe pas ou n'est pas accessible publiquement.", back: 'Retour à l\'accueil' },
  }[lang]

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        <p className="section-label mb-4">404</p>
        <h1 className="heading-xl mb-4">{msg.heading}</h1>
        <p className="body-text mb-8">{msg.body}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">{msg.back}</Link>
          <Link to="/contact" className="btn-secondary">{tNav.contact}</Link>
        </div>
      </div>
    </main>
  )
}
