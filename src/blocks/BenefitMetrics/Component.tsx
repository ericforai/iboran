'use client'
import React from 'react'
import { ScaleIn, SlideUp, AnimatedNumber } from '@/components/animations'

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
    <div className="bg-[#002B5B] py-20 px-4 md:px-0 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <ScaleIn className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 uppercase tracking-widest mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
        </ScaleIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics?.map((metric, index) => (
            <SlideUp
              key={index}
              delay={index * 100}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-4 flex justify-center items-baseline group-hover:text-red-400 transition-colors duration-300">
                <AnimatedNumber value={metric.value} />
                {metric.suffix && (
                  <span className="text-2xl md:text-3xl ml-1 text-blue-300 group-hover:text-white transition-colors duration-300">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="text-blue-100 text-lg font-medium max-w-[200px] mx-auto leading-tight">
                {metric.label}
              </p>
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  )
}
