import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import DataRoomForm from '../components/DataRoomForm'

export default function PrivateDataRoom() {
  const { lang } = useLanguage()
  const t = translations[lang].dataRoom

  return (
    <main className="pt-24 pb-20">
      <div className="page-container">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="section-label mb-4">{t.label}</p>
          <h1 className="heading-xl mb-3 animate-slide-up">{t.title}</h1>
          <p className="text-gold/70 text-sm font-medium">{t.subtitle}</p>
        </div>

        {/* Section A: Executive Summary */}
        <section className="mb-12">
          <div className="border border-graphite-mid bg-graphite/30 p-6">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-12 border border-gold/30 bg-obsidian flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs font-medium">PDF</span>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-ivory mb-1">{t.execSummaryTitle}</h2>
                  <p className="text-xs text-sand/60 leading-relaxed max-w-sm">{t.execSummaryDesc}</p>
                </div>
              </div>
              <a
                href="/docs/atlas-wallet-executive-summary.pdf"
                download
                className="btn-secondary text-xs whitespace-nowrap"
              >
                {t.downloadExec}
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Section B–D: Form, NDA, Access Code */}
        <section>
          <DataRoomForm />
        </section>
      </div>
    </main>
  )
}
