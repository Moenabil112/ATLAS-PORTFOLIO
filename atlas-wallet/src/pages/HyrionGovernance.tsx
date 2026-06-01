import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import GovernanceCard from '../components/GovernanceCard'

export default function HyrionGovernance() {
  const { lang } = useLanguage()
  const t = translations[lang].hyrion

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

        {/* Governance Notice */}
        <div className="mb-8 flex items-start gap-3 border border-deep-green-soft/20 bg-deep-green/10 px-4 py-3">
          <span className="text-deep-green-soft mt-0.5">◈</span>
          <p className="text-xs text-sand/60 leading-relaxed">
            {lang === 'en' && 'HYRION is a private governance methodology owned by Akanil. It is not a public platform, exchange, blockchain system, or securities infrastructure.'}
            {lang === 'ar' && 'HYRION منهجية حوكمة خاصة تمتلكها أكانيل. ليست منصة عامة أو بورصة أو نظام بلوكتشين أو بنية تحتية للأوراق المالية.'}
            {lang === 'fr' && "HYRION est une méthodologie de gouvernance privée détenue par Akanil. Ce n'est pas une plateforme publique, une bourse, un système blockchain ou une infrastructure de valeurs mobilières."}
          </p>
        </div>

        {/* Governance Layers */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <p className="section-label">{t.layersLabel}</p>
            <p className="text-[10px] text-sand/40 italic">{t.expandHint}</p>
          </div>
          <div className="flex flex-col gap-3">
            {t.layers.map((layer, i) => (
              <GovernanceCard
                key={i}
                index={i}
                title={layer.title}
                icon={layer.icon}
                summary={layer.summary}
                detail={layer.detail}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
