import { useState } from 'react'

interface GovernanceCardProps {
  title: string
  icon: string
  summary: string
  detail: string
  index: number
}

export default function GovernanceCard({ title, icon, summary, detail, index }: GovernanceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`border transition-all duration-300 cursor-pointer ${
        expanded
          ? 'border-gold/50 bg-graphite'
          : 'border-graphite-mid hover:border-gold/25 bg-graphite/50'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4 p-5">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gold/30 bg-obsidian mt-0.5">
          <span className="text-gold text-sm">{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-xs text-gold/60 font-medium tracking-wider uppercase mr-3">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-medium text-ivory">{title}</span>
            </div>
            <svg
              className={`w-4 h-4 text-gold/50 flex-shrink-0 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="text-xs text-sand/60 mt-2 leading-relaxed">{summary}</p>
        </div>
      </div>

      {expanded && (
        <div className="px-5 pb-5 pt-0 border-t border-gold/10 mt-0 animate-fade-in">
          <p className="text-sm text-sand/80 leading-relaxed pt-4">{detail}</p>
        </div>
      )}
    </div>
  )
}
