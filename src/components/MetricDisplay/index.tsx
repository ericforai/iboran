'use client'
import React from 'react'

export type MetricProps = {
  label: string
  value: string
  suffix?: string
  className?: string
}

export const MetricDisplay: React.FC<MetricProps> = ({ label, value, suffix, className }) => {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-center">
        <span className="text-4xl md:text-5xl font-black text-gray-900">{value}</span>
        {suffix && <span className="text-xl md:text-2xl ml-1 text-gray-500 font-bold">{suffix}</span>}
      </div>
      <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  )
}
