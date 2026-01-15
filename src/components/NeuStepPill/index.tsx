'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

export interface NeuStepPillProps {
  icon: LucideIcon
  title: string
  isActive?: boolean
  onClick?: () => void
  color?: string
  className?: string
}

export function NeuStepPill({ 
  icon: Icon, 
  title, 
  isActive = false, 
  onClick, 
  color = '#6C63FF',
  className = '' 
}: NeuStepPillProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-2xl 
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 focus:ring-offset-[#E0E5EC]
        ${isActive 
          ? 'shadow-[inset_6px_6px_10px_rgba(0,0,0,0.15),inset_-6px_-6px_10px_rgba(255,255,255,0.3)] scale-[0.98]' 
          : 'shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] hover:-translate-y-1'
        }
        ${className}
      `}
      style={{ 
        backgroundColor: isActive ? color : '#E0E5EC'
      }}
    >
      <Icon 
        className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : ''}`}
        style={{ color: isActive ? 'white' : color }}
      />
      <span 
        className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#3D4852]'}`}
      >
        {title}
      </span>
    </button>
  )
}
