import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang].nav
  const location = useLocation()

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/facility', label: t.facility },
    { path: '/hyrion', label: t.hyrion },
    { path: '/akanil', label: t.akanil },
    { path: '/atlas-mining', label: t.atlasMining },
    { path: '/offtake', label: t.offtake },
    { path: '/data-room', label: t.dataRoom },
    { path: '/contact', label: t.contact },
  ]

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-sm border-b border-graphite-mid/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-gold/70 flex items-center justify-center group-hover:border-gold transition-colors">
              <span className="text-gold text-xs font-semibold tracking-widest">AW</span>
            </div>
            <span className="text-ivory text-sm font-medium tracking-[0.1em] uppercase">
              Atlas <span className="text-gold">WALLET</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium tracking-wide transition-colors duration-150 ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-sand/60 hover:text-sand'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Language + Mobile */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="xl:hidden text-sand/70 hover:text-sand transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-graphite border-t border-graphite-mid/50 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-sm font-medium tracking-wide border-b border-graphite-mid/30 last:border-0 transition-colors ${
                  isActive(link.path) ? 'text-gold' : 'text-sand/70 hover:text-sand'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
