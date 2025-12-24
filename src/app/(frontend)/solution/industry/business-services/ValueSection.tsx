interface Metric {
  value: string
  label: string
  description?: string
}

interface ValueSectionProps {
  metrics: Metric[]
}

export default function ValueSection({ metrics }: ValueSectionProps) {
  return (
    <section className="py-20 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center pt-8 md:pt-0 px-4">
              <div className="text-4xl md:text-5xl font-bold text-[#E60012] mb-2 font-mono">
                {metric.value}
              </div>
              <div className="text-lg font-bold mb-2 text-white">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-sm text-slate-400">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
