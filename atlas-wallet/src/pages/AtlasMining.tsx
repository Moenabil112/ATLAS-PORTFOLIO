import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import DisclaimerBox from '../components/DisclaimerBox'

export default function AtlasMining() {
  const { lang } = useLanguage()
  const t = translations[lang].atlasMining

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

        {/* Geography Banner */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Morocco', 'Saudi Arabia'].map((region, i) => (
            <div key={i} className="border border-graphite-mid bg-graphite/30 p-5 flex items-center gap-4">
              <div className="w-10 h-10 border border-gold/20 bg-obsidian flex items-center justify-center flex-shrink-0">
                <span className="text-gold/60 text-lg">◆</span>
              </div>
              <div>
                <p className="text-xs text-gold/50 tracking-wider uppercase mb-1">
                  {lang === 'en' ? 'Operational Region' : lang === 'ar' ? 'المنطقة التشغيلية' : 'Région opérationnelle'}
                </p>
                <p className="text-sm font-medium text-ivory">
                  {lang === 'ar'
                    ? i === 0 ? 'المغرب' : 'المملكة العربية السعودية'
                    : region}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile */}
        <section>
          <p className="section-label mb-6">{t.profileLabel}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.profile.map((item, i) => (
              <div key={i} className="card-institutional p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-gold/40"></div>
                  <h3 className="text-sm font-medium text-ivory">{item.title}</h3>
                </div>
                <p className="text-xs text-sand/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Indicative disclaimer */}
        <DisclaimerBox />

        {/* Note */}
        <div className="mt-6 border-l-2 border-graphite-mid px-4 py-3">
          <p className="text-xs text-sand/40 italic leading-relaxed">{t.note}</p>
        </div>
      </div>
    </main>
  )
}
