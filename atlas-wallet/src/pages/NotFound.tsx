import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const copy = {
  en: {
    label: 'Page Not Found',
    heading: 'This page does not exist.',
    body: 'The address you entered is not part of this interface, or access to this section is restricted to qualified institutional users.',
    back: 'Return to Home',
    explore: 'Explore the Interface',
    navTitle: 'Available Sections',
  },
  ar: {
    label: 'الصفحة غير موجودة',
    heading: 'هذه الصفحة غير موجودة.',
    body: 'العنوان الذي أدخلته ليس جزءاً من هذه الواجهة، أو أن الوصول إلى هذا القسم مقتصر على المستخدمين المؤسسيين المؤهلين.',
    back: 'العودة إلى الرئيسية',
    explore: 'استكشاف الواجهة',
    navTitle: 'الأقسام المتاحة',
  },
  fr: {
    label: 'Page introuvable',
    heading: "Cette page n'existe pas.",
    body: "L'adresse que vous avez saisie ne fait pas partie de cette interface, ou l'accès à cette section est réservé aux utilisateurs institutionnels qualifiés.",
    back: "Retour à l'accueil",
    explore: "Explorer l'interface",
    navTitle: 'Sections disponibles',
  },
}

export default function NotFound() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const tNav = translations[lang].nav

  const quickLinks = [
    { path: '/facility', label: tNav.facility, icon: '⬡' },
    { path: '/hyrion', label: tNav.hyrion, icon: '◈' },
    { path: '/data-room', label: tNav.dataRoom, icon: '◎' },
    { path: '/contact', label: tNav.contact, icon: '▣' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Top decorative rule */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold/40">
            Atlas WALLET
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* 404 hero */}
        <div className="mb-10">
          <div className="relative inline-block mb-6">
            <span className="text-[8rem] md:text-[12rem] font-light leading-none text-graphite-mid select-none">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-[8rem] md:text-[12rem] font-light leading-none text-gold/10 select-none pointer-events-none">
              404
            </span>
          </div>

          <p className="section-label mb-3">{t.label}</p>
          <h1 className="text-2xl md:text-3xl font-light text-ivory mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-sm text-sand/60 leading-relaxed max-w-lg">
            {t.body}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-14">
          <Link to="/" className="btn-primary">{t.back}</Link>
          <Link to="/contact" className="btn-secondary">{t.explore}</Link>
        </div>

        {/* Quick nav */}
        <div>
          <p className="section-label mb-4">{t.navTitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="card-institutional p-4 group flex flex-col gap-2"
              >
                <span className="text-gold/40 group-hover:text-gold/70 transition-colors text-base">
                  {link.icon}
                </span>
                <span className="text-xs text-sand/60 group-hover:text-sand transition-colors leading-snug">
                  {link.label}
                </span>
                <span className="text-[10px] text-gold/30 group-hover:text-gold/50 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-14">
          <div className="h-px bg-gradient-to-r from-transparent via-graphite-mid/50 to-transparent" />
          <p className="text-[10px] text-sand/25 mt-4 tracking-wide">
            ATLAS WALLET · PRIVATE INSTITUTIONAL INTERFACE · AKANIL
          </p>
        </div>

      </div>
    </main>
  )
}
