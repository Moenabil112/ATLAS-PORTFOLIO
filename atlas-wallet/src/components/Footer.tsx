import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer
  const tNav = translations[lang].nav

  const links = [
    { path: '/', label: tNav.home },
    { path: '/facility', label: tNav.facility },
    { path: '/hyrion', label: tNav.hyrion },
    { path: '/data-room', label: tNav.dataRoom },
    { path: '/contact', label: tNav.contact },
  ]

  return (
    <footer className="bg-graphite border-t border-graphite-mid/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-gold/50 flex items-center justify-center">
                <span className="text-gold text-xs font-semibold tracking-widest">AW</span>
              </div>
              <span className="text-ivory text-sm font-medium tracking-[0.1em] uppercase">
                Atlas <span className="text-gold">WALLET</span>
              </span>
            </div>
            <p className="text-xs text-sand/50 leading-relaxed max-w-xs">{t.tagline}</p>
            <div className="mt-4 flex gap-2">
              <span className="text-[10px] border border-graphite-mid px-2 py-1 text-sand/40 tracking-wide uppercase">
                {t.privateLabel}
              </span>
              <span className="text-[10px] border border-graphite-mid px-2 py-1 text-sand/40 tracking-wide uppercase">
                {translations[lang].shared.institutional}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold/60 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-sand/50 hover:text-sand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold/60 mb-4">
              Akanil
            </p>
            <p className="text-xs text-sand/50 leading-relaxed">
              Moroccan IP company and digital transformation actor behind HYRION.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-3 text-xs text-gold/70 hover:text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-colors"
            >
              {translations[lang].contact.form.submit} →
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-graphite-mid/30 pt-6">
          <p className="text-[10px] text-sand/35 leading-relaxed mb-3">{t.legal}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] text-sand/35">{t.copyright}</p>
            <p className="text-[10px] text-sand/25 tracking-wide">ATLAS WALLET · AKANIL · HYRION</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
