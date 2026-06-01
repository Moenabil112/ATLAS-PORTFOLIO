import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface ContactForm {
  name: string
  organization: string
  email: string
  message: string
}

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact
  const [form, setForm] = useState<ContactForm>({ name: '', organization: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validate = (): boolean => {
    const errs: Partial<ContactForm> = {}
    if (!form.name.trim()) errs.name = ' '
    if (!form.organization.trim()) errs.organization = ' '
    if (!form.email.trim()) errs.email = ' '
    if (!form.message.trim()) errs.message = ' '
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  const inputClass = (field: keyof ContactForm) =>
    `w-full bg-obsidian border px-3 py-2.5 text-sm text-ivory placeholder-sand/30 focus:outline-none focus:border-gold/50 transition-colors ${
      errors[field] ? 'border-red-500/50' : 'border-graphite-mid'
    }`

  return (
    <main className="pt-24 pb-20">
      <div className="page-container">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="section-label mb-4">{t.label}</p>
          <h1 className="heading-xl mb-6 animate-slide-up">{t.title}</h1>
          <p className="body-text text-base">{t.description}</p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-5" noValidate>
            <div>
              <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                {t.form.name} <span className="text-gold/50">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className={inputClass('name')}
                placeholder={t.form.name}
              />
            </div>

            <div>
              <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                {t.form.organization} <span className="text-gold/50">*</span>
              </label>
              <input
                type="text"
                value={form.organization}
                onChange={(e) => setForm((p) => ({ ...p, organization: e.target.value }))}
                className={inputClass('organization')}
                placeholder={t.form.organization}
              />
            </div>

            <div>
              <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                {t.form.email} <span className="text-gold/50">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className={inputClass('email')}
                placeholder="email@organization.com"
              />
            </div>

            <div>
              <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                {t.form.message} <span className="text-gold/50">*</span>
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className={`${inputClass('message')} resize-none`}
                placeholder={t.form.message}
              />
            </div>

            <button type="submit" className="btn-primary">
              {t.form.submit}
            </button>
          </form>
        ) : (
          <div className="max-w-xl border border-gold/20 bg-graphite/40 p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full border border-gold/50 flex items-center justify-center">
                <span className="text-gold text-xs">✓</span>
              </div>
              <p className="text-sm font-medium text-ivory">
                {lang === 'en' ? 'Request received' : lang === 'ar' ? 'تم استلام الطلب' : 'Demande reçue'}
              </p>
            </div>
            <p className="text-xs text-sand/60 leading-relaxed">{t.sent}</p>
          </div>
        )}

        {/* Notice */}
        <div className="mt-12 border-t border-graphite-mid/30 pt-8 max-w-xl">
          <p className="text-xs text-sand/40 leading-relaxed">
            {lang === 'en' && 'This contact form does not constitute an investment solicitation, subscription request, or public offering. All correspondence is treated as institutional and confidential.'}
            {lang === 'ar' && 'لا يمثل نموذج الاتصال هذا دعوة للاستثمار أو طلب اشتراك أو عرضاً عاماً. تُعامل جميع المراسلات باعتبارها مؤسسية وسرية.'}
            {lang === 'fr' && "Ce formulaire de contact ne constitue pas une sollicitation d'investissement, une demande de souscription ou une offre publique. Toute correspondance est traitée comme institutionnelle et confidentielle."}
          </p>
        </div>
      </div>
    </main>
  )
}
