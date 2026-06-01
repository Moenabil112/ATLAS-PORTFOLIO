import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Akanil() {
  const { lang } = useLanguage()
  const t = translations[lang].akanil

  return (
    <main className="pt-24 pb-20">
      <div className="page-container">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-label mb-4">{t.label}</p>
          <h1 className="heading-xl mb-3 animate-slide-up">{t.title}</h1>
          <p className="text-gold/70 text-sm font-medium mb-6">{t.subtitle}</p>
          <p className="body-text text-base leading-loose">{t.description}</p>
        </div>

        {/* Logo area */}
        <div className="mb-12 border border-graphite-mid bg-graphite/30 p-8 inline-flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-2 border-gold/50 flex items-center justify-center">
            <span className="text-gold text-2xl font-light tracking-wider">Ak</span>
          </div>
          <div className="text-center">
            <p className="text-ivory font-medium tracking-[0.1em] uppercase">Akanil</p>
            <p className="text-xs text-gold/50 mt-1 tracking-wide">
              {lang === 'en' ? 'Moroccan IP Company' : lang === 'ar' ? 'شركة مغربية لحقوق الملكية الفكرية' : 'Entreprise marocaine de PI'}
            </p>
          </div>
        </div>

        {/* Roles */}
        <section>
          <p className="section-label mb-6">{t.rolesLabel}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.roles.map((role, i) => (
              <div key={i} className="card-institutional p-5 flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold text-[10px] font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-ivory mb-1.5">{role.title}</h3>
                  <p className="text-xs text-sand/60 leading-relaxed">{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
