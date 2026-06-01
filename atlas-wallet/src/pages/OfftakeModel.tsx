import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import ProcessFlow from '../components/ProcessFlow'
import { Link } from 'react-router-dom'

export default function OfftakeModel() {
  const { lang } = useLanguage()
  const t = translations[lang].offtake

  return (
    <main className="pt-24 pb-20">
      <div className="page-container">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-label mb-4">{t.label}</p>
          <h1 className="heading-xl mb-6 animate-slide-up">{t.title}</h1>
          <p className="body-text text-base leading-loose">{t.description}</p>
        </div>

        {/* Flow */}
        <section className="mb-12">
          <p className="section-label mb-6">{t.flowLabel}</p>
          <div className="border border-graphite-mid bg-graphite/30 p-6">
            <ProcessFlow steps={t.steps} />
          </div>
        </section>

        {/* Key Points */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                en: { t: 'Qualification First', d: 'Only qualified institutional partners may enter the offtake process. Qualification requires NDA compliance and institutional review.' },
                ar: { t: 'التأهيل أولاً', d: 'يمكن للشركاء المؤسسيين المؤهلين فقط الدخول في عملية التسليم. يتطلب التأهيل الامتثال لاتفاقية عدم الإفصاح والمراجعة المؤسسية.' },
                fr: { t: "Qualification d'abord", d: "Seuls les partenaires institutionnels qualifiés peuvent entrer dans le processus d'offtake. La qualification exige la conformité NDA et l'examen institutionnel." },
              },
              {
                en: { t: 'Production-Linked', d: 'Offtake arrangements are linked to verified production outputs from the Atlas Green Processing Facility, not speculative projections.' },
                ar: { t: 'مرتبط بالإنتاج', d: 'ترتبط ترتيبات التسليم بمخرجات الإنتاج المُتحقق من منشأة أطلس الخضراء للمعالجة، وليس بتوقعات افتراضية.' },
                fr: { t: 'Lié à la production', d: "Les arrangements d'offtake sont liés aux sorties de production vérifiées de l'Atlas Green Processing Facility, non à des projections spéculatives." },
              },
              {
                en: { t: 'HYRION Controlled', d: 'All documentation, evidence, and commercial steps are governed through the HYRION governance layer before any settlement preparation.' },
                ar: { t: 'محكوم بـ HYRION', d: 'تُدار جميع الوثائق والأدلة والخطوات التجارية من خلال طبقة حوكمة HYRION قبل أي إعداد للتسوية.' },
                fr: { t: 'Contrôlé par HYRION', d: "Toute la documentation, les preuves et les étapes commerciales sont régies par la couche de gouvernance HYRION avant toute préparation de règlement." },
              },
              {
                en: { t: 'Formal Agreements Required', d: 'No commercial step proceeds without formal legal agreements, independent due diligence, and technical validation.' },
                ar: { t: 'تُشترط الاتفاقيات الرسمية', d: 'لا تمضي أي خطوة تجارية دون اتفاقيات قانونية رسمية وفحص واجب مستقل وتحقق فني.' },
                fr: { t: 'Accords formels requis', d: "Aucune étape commerciale ne se poursuit sans accords juridiques formels, due diligence indépendante et validation technique." },
              },
            ].map((item, i) => {
              const c = lang === 'ar' ? item.ar : lang === 'fr' ? item.fr : item.en
              return (
                <div key={i} className="card-institutional p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 bg-gold/40"></div>
                    <h3 className="text-sm font-medium text-ivory">{c.t}</h3>
                  </div>
                  <p className="text-xs text-sand/60 leading-relaxed">{c.d}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border border-gold/20 bg-graphite/40 p-5">
          <div className="flex items-start gap-3">
            <span className="text-gold/40 mt-0.5 flex-shrink-0">⚠</span>
            <p className="text-xs text-sand/60 leading-relaxed">{t.disclaimer}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/data-room" className="btn-secondary text-sm">
            {translations[lang].home.requestAccess}
          </Link>
          <Link to="/hyrion" className="btn-secondary text-sm">
            {translations[lang].nav.hyrion}
          </Link>
        </div>
      </div>
    </main>
  )
}
