'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import { Media } from '@/components/Media'
import type { IndustrySolution } from '@/payload-types'

export const SolutionCard: React.FC<{
  className?: string
  doc: IndustrySolution
}> = ({ className, doc }) => {
  const { card, link } = useClickableCard({})
  const { slug, title, summary, coverImage } = doc

  return (
    <article
      className={cn(
        'group border border-border rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative aspect-video overflow-hidden">
        {coverImage && typeof coverImage !== 'string' ? (
          <Media 
            resource={coverImage} 
            size="33vw" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-200">
            No Image
          </div>
        )}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          行业方案
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/solutions/${slug}`} ref={link.ref} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        {summary && (
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
            {summary}
          </p>
        )}
        <div className="flex items-center text-blue-600 font-semibold text-sm">
          了解更多
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  )
}
