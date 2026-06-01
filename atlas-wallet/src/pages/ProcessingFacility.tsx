import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import ProcessFlow from '../components/ProcessFlow'

export default function ProcessingFacility() {
  const { lang } = useLanguage()
  const t = translations[lang].facility

  return (
    <main className="pt-24 pb-20">
      <div className="page-container">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-label mb-4">{t.label}</p>
          <h1 className="heading-xl mb-6 animate-slide-up">{t.title}</h1>
          <p className="body-text text-base leading-loose">{t.description}</p>
        </div>

        {/* Process Flow */}
        <section className="mb-16">
          <div className="border border-graphite-mid p-6 bg-graphite/30">
            <p className="section-label mb-6">{t.processLabel}</p>
            <ProcessFlow steps={t.steps} />
          </div>
        </section>

        {/* Features */}
        <section>
          <p className="section-label mb-6">{t.featuresLabel}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.features.map((feature, i) => (
              <div key={i} className="card-institutional p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-deep-green-soft/60"></div>
                  <h3 className="text-sm font-medium text-ivory">{feature.title}</h3>
                </div>
                <p className="text-xs text-sand/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
