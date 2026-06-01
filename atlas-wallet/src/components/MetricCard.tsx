interface MetricCardProps {
  value: string
  unit: string
  label: string
}

export default function MetricCard({ value, unit, label }: MetricCardProps) {
  return (
    <div className="border border-graphite-mid hover:border-gold/30 transition-all duration-300 p-6 bg-graphite">
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-3xl font-light text-gold tracking-tight">{value}</span>
        {unit && <span className="text-sm text-sand/60 font-medium">{unit}</span>}
      </div>
      <p className="text-xs text-sand/70 leading-relaxed uppercase tracking-wide font-medium">{label}</p>
    </div>
  )
}
