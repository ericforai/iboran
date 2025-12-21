import React from 'react'
import { LucideIcon } from 'lucide-react'

export interface NeuFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function NeuFeatureCard({ icon: Icon, title, description, className = '' }: NeuFeatureCardProps) {
  return (
    <div 
      className={`
        group bg-[#E0E5EC] p-8 rounded-[32px]
        shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]
        hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]
        hover:-translate-y-1 
        transition-all duration-300
        ${className}
      `}
    >
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4 mb-4">
        {/* Inset Icon Well */}
        <div 
          className="
            w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center
            shadow-[inset_8px_8px_16px_rgb(163,177,198,0.7),inset_-8px_-8px_16px_rgba(255,255,255,0.6)]
            group-hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]
            transition-all duration-300
          "
        >
          <Icon className="w-6 h-6 text-[#6C63FF]" />
        </div>
        
        <h3 className="text-xl font-bold text-[#3D4852]">
          {title}
        </h3>
      </div>
      
      <p className="text-[#6B7280] leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  )
}
