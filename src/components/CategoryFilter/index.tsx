'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/utilities/ui'

type Category = {
  id: string
  title: string
  slug: string
}

export const CategoryFilter: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category')

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <Link
        href="/posts"
        className={cn(
          'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200',
          !activeCategory
            ? 'bg-[#E60012] text-white shadow-md'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        )}
      >
        全部
      </Link>
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug
        return (
          <Link
            key={cat.id}
            href={`/posts?category=${cat.slug}`}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-[#E60012] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            {cat.title}
          </Link>
        )
      })}
    </div>
  )
}
