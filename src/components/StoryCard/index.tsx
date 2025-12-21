'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { SuccessStory } from '@/payload-types'

export const StoryCard: React.FC<{
  className?: string
  doc: SuccessStory
}> = ({ className, doc }) => {
  const { card, link } = useClickableCard({})
  const { slug, title, clientName, industry } = doc

  return (
    <article
      className={cn(
        'group relative p-8 border border-border rounded-xl bg-white hover:border-red-200 hover:shadow-lg transition-all duration-300',
        className,
      )}
      ref={card.ref}
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <svg className="w-24 h-24 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C14.2262 14 16.017 15.7909 16.017 18V21H14.017ZM14.017 3C16.2262 3 18.017 4.79086 18.017 7V10C18.017 11.1046 18.9125 12 20.017 12H23.017V14H20.017C17.8079 14 16.017 12.2091 16.017 10V7C16.017 5.89543 15.1216 5 14.017 5H11.017V3H14.017ZM4.01703 14H1.01703V12H4.01703C5.1216 12 6.01703 11.1046 6.01703 10V7C6.01703 4.79086 7.80789 3 10.017 3H13.017V5H10.017C8.91246 5 8.01703 5.89543 8.01703 7V10C8.01703 12.2091 6.22617 14 4.01703 14ZM10.017 21H7.01703V19H10.017C11.1216 19 12.017 18.1046 12.017 17V14H14.017V17C14.017 19.2091 12.2262 21 10.017 21Z" />
        </svg>
      </div>
      
      <div className="mb-6">
        <span className="text-red-600 text-xs font-bold uppercase tracking-widest bg-red-50 px-2 py-1 rounded">
          Success Story
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-blue-600 font-bold text-sm mb-1">{clientName}</h4>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/success-stories/${slug}`} ref={link.ref} className="after:absolute after:inset-0">
              {title}
            </Link>
          </h3>
        </div>
        
        {industry && (
          <div className="flex items-center text-gray-500 text-sm italic">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {industry}
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center text-gray-400 font-medium group-hover:text-blue-600 transition-colors">
        <span className="text-sm">Read Full Story</span>
        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </article>
  )
}
