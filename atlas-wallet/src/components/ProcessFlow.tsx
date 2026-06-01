interface ProcessFlowProps {
  steps: string[]
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="overflow-x-auto py-2">
      <div className="flex items-center gap-0 min-w-max">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-gold/50 bg-graphite flex items-center justify-center mb-2">
                <span className="text-gold text-xs font-semibold">{i + 1}</span>
              </div>
              <div className="text-center px-3">
                <span className="text-xs font-medium text-sand/80 whitespace-nowrap">{step}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mb-6 mx-1">
                <div className="h-px w-6 bg-gold/30"></div>
                <svg className="w-3 h-3 text-gold/40 -ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
