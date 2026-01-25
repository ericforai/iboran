'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { SuccessStory } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import { SlideUp } from '@/components/animations'

export const StoryCard: React.FC<{
  className?: string
  doc: SuccessStory
  index?: number
}> = ({ className, doc, index = 0 }) => {
  const { card, link } = useClickableCard({})
  const { slug, title, clientName, industry } = doc

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/70 shadow-sm hover:border-red-100/60 hover:shadow-xl hover:shadow-slate-200/70 transition-colors transition-shadow duration-300 overflow-hidden cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <SlideUp delay={index * 100} duration={500} className="contents">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute -top-20 -right-16 w-48 h-48 bg-slate-100 rounded-full blur-3xl opacity-70 transition-colors duration-300 group-hover:bg-red-100/70" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          {industry && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
              {industry}
            </span>
          )}
          <span className="tracking-[0.2em] text-slate-400">案例</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-4 mb-4 group-hover:text-red-600 transition-colors line-clamp-2">
          <Link href={`/cases/${slug}`} ref={link.ref} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        {clientName && (
          <div className="text-sm text-slate-500">
            客户：{clientName}
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors mt-8">
        <span>阅读完整案例</span>
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </div>
      </SlideUp>
    </article>
  )
}
