import { formatDateTime } from '@/utilities/formatDateTime'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="relative py-16 overflow-hidden bg-white border-b border-slate-100">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-slate-900">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-sm mb-6 flex flex-wrap gap-3">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle, slug: categorySlug } = category
                const titleToUse = categoryTitle || 'Untitled category'

                return (
                  <Link 
                    key={index} 
                    href={`/posts?category=${categorySlug}`}
                    className="px-3 py-1 rounded-full text-xs font-semibold transition-colors border bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-100"
                  >
                    {titleToUse}
                  </Link>
                )
              }
              return null
            })}
          </div>

          <div className="">
            <h1 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1F2329]">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-slate-500">
            {hasAuthors && (
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">作者</p>
                <p className="font-bold text-slate-900">{formatAuthors(populatedAuthors)}</p>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">发布日期</p>
                <time className="font-bold text-slate-900" dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
