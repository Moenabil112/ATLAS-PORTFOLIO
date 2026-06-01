import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import AccessCodeGenerator from '../components/AccessCodeGenerator'

function generateAccessCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'ATLAS-'
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

interface FormState {
  fullName: string
  organization: string
  position: string
  email: string
  phone: string
  country: string
  institutionType: string
  purpose: string
  confirmed: boolean
}

const emptyForm: FormState = {
  fullName: '',
  organization: '',
  position: '',
  email: '',
  phone: '',
  country: '',
  institutionType: '',
  purpose: '',
  confirmed: false,
}

export default function PrivateDataRoom() {
  const { lang } = useLanguage()
  const t = translations[lang].dataRoom
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({})

  const validate = (): boolean => {
    const required: (keyof FormState)[] = [
      'fullName', 'organization', 'position', 'email', 'country', 'institutionType', 'purpose',
    ]
    const newErrors: Partial<Record<keyof FormState, boolean>> = {}
    let valid = true
    required.forEach((field) => {
      if (!form[field]) {
        newErrors[field] = true
        valid = false
      }
    })
    if (!form.confirmed) {
      newErrors.confirmed = true
      valid = false
    }
    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setAccessCode(generateAccessCode())
    setSubmitted(true)
  }

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-obsidian border px-3 py-2.5 text-sm text-ivory placeholder-sand/30 focus:outline-none focus:border-gold/50 transition-colors ${
      errors[field] ? 'border-red-500/60' : 'border-graphite-mid'
    }`

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

        {/* Section B: Access Form */}
        {!submitted ? (
          <section className="mb-12">
            <h2 className="heading-md mb-2">{t.accessFormTitle}</h2>
            <p className="text-xs text-sand/60 mb-8">{t.accessFormDesc}</p>

            <form onSubmit={handleSubmit} className="max-w-2xl space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.fullName} <span className="text-gold/50">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className={inputClass('fullName')}
                    placeholder={t.form.fullName}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
                </div>
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.organization} <span className="text-gold/50">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    className={inputClass('organization')}
                    placeholder={t.form.organization}
                  />
                  {errors.organization && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.position} <span className="text-gold/50">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.position}
                    onChange={(e) => handleChange('position', e.target.value)}
                    className={inputClass('position')}
                    placeholder={t.form.position}
                  />
                  {errors.position && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
                </div>
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.email} <span className="text-gold/50">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="email@organization.com"
                  />
                  {errors.email && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={inputClass('phone')}
                    placeholder="+1 ..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                    {t.form.country} <span className="text-gold/50">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => handleChange('country', e.target.value)}
                    className={inputClass('country')}
                    placeholder={t.form.country}
                  />
                  {errors.country && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                  {t.form.institutionType} <span className="text-gold/50">*</span>
                </label>
                <select
                  value={form.institutionType}
                  onChange={(e) => handleChange('institutionType', e.target.value)}
                  className={`${inputClass('institutionType')} appearance-none cursor-pointer`}
                >
                  <option value="" disabled className="bg-graphite">
                    — {t.form.institutionType} —
                  </option>
                  {t.form.institutionTypes.map((type, i) => (
                    <option key={i} value={type} className="bg-graphite">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.institutionType && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
              </div>

              <div>
                <label className="block text-xs text-sand/70 mb-1.5 font-medium">
                  {t.form.purpose} <span className="text-gold/50">*</span>
                </label>
                <textarea
                  rows={3}
                  value={form.purpose}
                  onChange={(e) => handleChange('purpose', e.target.value)}
                  className={`${inputClass('purpose')} resize-none`}
                  placeholder={t.form.purpose}
                />
                {errors.purpose && <p className="text-[10px] text-red-400/70 mt-1">{t.form.required}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm"
                  checked={form.confirmed}
                  onChange={(e) => handleChange('confirmed', e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-gold border-graphite-mid bg-obsidian cursor-pointer"
                />
                <label htmlFor="confirm" className="text-xs text-sand/60 leading-relaxed cursor-pointer">
                  {t.form.confirm}
                </label>
              </div>
              {errors.confirmed && <p className="text-[10px] text-red-400/70">{t.form.required}</p>}

              <button type="submit" className="btn-primary mt-2">
                {t.form.submit}
              </button>
            </form>
          </section>
        ) : (
          <section className="mb-12 animate-fade-in">
            {/* Section C: NDA */}
            <div className="border border-graphite-mid bg-graphite/30 p-6 mb-6">
              <h2 className="heading-md mb-3">{t.ndaTitle}</h2>
              <p className="text-sm text-sand/70 mb-5">{t.ndaPrepared}</p>
              <a
                href="/docs/atlas-wallet-nda-template.pdf"
                download
                className="btn-secondary text-xs"
              >
                {t.downloadNda}
              </a>
            </div>

            {/* Section D: Access Code */}
            <AccessCodeGenerator code={accessCode} />
          </section>
        )}
      </div>
    </main>
  )
}
