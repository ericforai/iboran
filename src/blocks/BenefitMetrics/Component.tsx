import React from 'react'

export type Metric = {
  label: string
  value: string
  suffix?: string
}

export type BenefitMetricsBlockProps = {
  title: string
  metrics: Metric[]
  blockType: 'benefitMetrics'
}

export const BenefitMetricsBlock: React.FC<BenefitMetricsBlockProps> = ({ title, metrics }) => {
  return (
    <div className="container py-12 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics?.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold mb-2">
              {metric.value}{metric.suffix}
            </div>
            <div className="text-blue-100 uppercase tracking-wide text-sm font-semibold">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
