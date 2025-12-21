import React from 'react'

export interface NeuStatCardProps {
  number: string
  label: string
  sublabel?: string
  className?: string
}

export function NeuStatCard({ number, label, sublabel, className = '' }: NeuStatCardProps) {
  return (
    <div 
      className={`
        bg-[#E0E5EC] rounded-[32px] p-6 lg:p-8 text-center
        shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
        hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]
        hover:-translate-y-1 
        transition-all duration-300
        ${className}
      `}
    >
      <div className="text-4xl lg:text-5xl font-black text-[#6C63FF] mb-2">
        {number}
      </div>
      <div className="text-base lg:text-lg font-semibold text-[#3D4852]">
        {label}
      </div>
      {sublabel && (
        <div className="text-sm text-[#6B7280] mt-1">
          {sublabel}
        </div>
      )}
    </div>
  )
}
