import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { projectMetrics } from '../data/projectMetrics'
import MetricCard from '../components/MetricCard'
import DisclaimerBox from '../components/DisclaimerBox'

export default function Home() {
  const { lang } = useLanguage()
  const t = translations[lang].home

  const getMetricLabel = (metric: typeof projectMetrics[0]) => {
    if (lang === 'ar') return metric.labelAr
    if (lang === 'fr') return metric.labelFr
    return metric.labelEn
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-graphite/30 pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-deep-green/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <p className="section-label mb-6 animate-fade-in">{t.label}</p>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-ivory mb-4 animate-slide-up">
            Atlas <span className="text-gold">WALLET</span>
          </h1>

          <p className="text-lg md:text-xl text-sand/70 font-light max-w-2xl mb-8 leading-relaxed animate-slide-up">
            {t.subtitle}
          </p>

          <p className="text-sm text-sand/60 max-w-2xl leading-relaxed mb-10 animate-fade-in">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Link to="/facility" className="btn-primary">
              {t.exploreFacility}
            </Link>
            <Link to="/data-room" className="btn-secondary">
              {t.requestAccess}
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-graphite-mid/50 to-transparent" />
      </div>

      {/* Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <p className="section-label">{t.mvpLabel}</p>
            <p className="text-[10px] text-sand/40 italic">{t.mvpNote}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {projectMetrics.map((m) => (
              <MetricCard
                key={m.key}
                value={m.value}
                unit={lang === 'en' ? m.unit : ''}
                label={getMetricLabel(m)}
              />
            ))}
          </div>

          <DisclaimerBox />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-graphite-mid/50 to-transparent" />
      </div>

      {/* Overview Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                path: '/facility',
                label: translations[lang].facility.label,
                title: translations[lang].facility.title,
                desc: lang === 'en'
                  ? 'Controlled site for mineral material processing and production-linked offtake preparation.'
                  : lang === 'ar'
                  ? 'موقع متحكم به لمعالجة المواد المعدنية وإعداد التسليم المرتبط بالإنتاج.'
                  : "Site contrôlé pour le traitement de matières minérales et la préparation de l'offtake.",
                icon: '⬡',
              },
              {
                path: '/hyrion',
                label: translations[lang].hyrion.label,
                title: 'HYRION',
                desc: lang === 'en'
                  ? 'Digital governance layer for evidence, access control, and offtake documentation.'
                  : lang === 'ar'
                  ? 'طبقة حوكمة رقمية للأدلة والتحكم في الوصول وتوثيق التسليم.'
                  : "Couche de gouvernance numérique pour les preuves, le contrôle d'accès et la documentation d'offtake.",
                icon: '◈',
              },
              {
                path: '/offtake',
                label: translations[lang].offtake.label,
                title: translations[lang].offtake.title,
                desc: lang === 'en'
                  ? 'Structured agreement model linked to verified production and controlled documentation.'
                  : lang === 'ar'
                  ? 'نموذج اتفاقية منهجي مرتبط بالإنتاج المُتحقق والتوثيق المتحكم به.'
                  : "Modèle d'accord structuré lié à la production vérifiée et à la documentation contrôlée.",
                icon: '◉',
              },
              {
                path: '/akanil',
                label: translations[lang].akanil.label,
                title: 'Akanil',
                desc: lang === 'en'
                  ? 'Moroccan IP company behind HYRION. Institutional communication, governance, and data-room structuring.'
                  : lang === 'ar'
                  ? 'شركة مغربية لحقوق الملكية الفكرية خلف HYRION. التواصل المؤسسي والحوكمة وهيكلة غرفة البيانات.'
                  : "Entreprise marocaine de PI derrière HYRION. Communication institutionnelle, gouvernance et structuration data room.",
                icon: '▣',
              },
              {
                path: '/atlas-mining',
                label: translations[lang].atlasMining.label,
                title: 'Atlas Mining SARL',
                desc: lang === 'en'
                  ? '22+ years of mining experience. Mining partner connected to the Atlas Green Processing Facility.'
                  : lang === 'ar'
                  ? 'أكثر من 22 عاماً من الخبرة التعدينية. شريك التعدين المرتبط بمنشأة أطلس الخضراء للمعالجة.'
                  : "Plus de 22 ans d'expérience minière. Partenaire minier connecté à l'Atlas Green Processing Facility.",
                icon: '◆',
              },
              {
                path: '/data-room',
                label: translations[lang].dataRoom.label,
                title: translations[lang].dataRoom.title,
                desc: lang === 'en'
                  ? 'Private NDA-based access to project documentation, executive summary, and controlled review process.'
                  : lang === 'ar'
                  ? 'وصول خاص مبني على اتفاقية عدم الإفصاح إلى وثائق المشروع والملخص التنفيذي وعملية المراجعة المتحكم بها.'
                  : "Accès privé basé sur NDA à la documentation du projet, résumé exécutif et processus de révision contrôlé.",
                icon: '◎',
              },
            ].map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className="card-institutional p-5 group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold/50 text-base group-hover:text-gold/80 transition-colors">{card.icon}</span>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold/50 group-hover:text-gold/70 transition-colors">
                    {card.label}
                  </p>
                </div>
                <h3 className="text-sm font-medium text-ivory mb-2 group-hover:text-gold-pale transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-sand/50 leading-relaxed">{card.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[10px] text-gold/40 group-hover:text-gold/60 transition-colors">
                  <span>{translations[lang].shared.readMore}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
