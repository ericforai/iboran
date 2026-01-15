'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utilities/ui'

export const caseCategories = [
  { id: 'all', label: '全部案例' },
  { id: 'manufacturing', label: '智能制造' },
  { id: 'retail', label: '新零售' },
  { id: 'semiconductor', label: '半导体' },
  { id: 'logistics', label: '智慧物流' },
]

export const CaseFilter: React.FC<{
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
  counts?: Record<string, number>
}> = ({ activeCategory, onCategoryChange, className, counts }) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50/80 p-2',
        className,
      )}
    >
      {caseCategories.map((category) => {
        const isActive = activeCategory === category.id
        const count = counts?.[category.id]
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            type="button"
            aria-pressed={isActive}
            className={cn(
              'relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer',
              isActive
                ? 'text-white shadow-lg shadow-red-500/20'
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300',
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-red-600 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
            {typeof count === 'number' && (
              <span
                className={cn(
                  'relative z-10 text-xs px-2 py-0.5 rounded-full border',
                  isActive
                    ? 'bg-white/15 text-white border-white/20'
                    : 'bg-white text-slate-500 border-slate-200',
                )}
              >
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
