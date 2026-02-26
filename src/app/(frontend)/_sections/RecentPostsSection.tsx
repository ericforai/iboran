'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Post } from '@/payload-types'

interface Props {
  posts: Post[]
}

const formatDateStable = (value?: string | null) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toISOString().slice(0, 10)
}

export const RecentPostsSection: React.FC<Props> = ({ posts }) => {
  const latestPost = posts[0]

  return (
    <section className="py-14 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 md:mb-16 border-b border-black pb-4 md:pb-6">
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-black uppercase">
            泊冉观察
          </h2>
          <Link 
            href="/posts" 
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#E60012] transition-colors mt-4 md:mt-0"
          >
            查看全部
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile: show latest 1 only */}
        {posts.length > 0 ? (
          <>
            {latestPost ? (
              <div className="md:hidden">
                <article className="group flex flex-col h-full border-t border-gray-200 pt-4 hover:border-black transition-colors duration-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E60012]">
                      {typeof latestPost.categories?.[0] === 'object' && latestPost.categories?.[0]
                        ? latestPost.categories[0].title
                        : '深度分析'}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {formatDateStable(latestPost.createdAt)}
                    </span>
                  </div>

                  <Link href={`/posts/${latestPost.slug}`} className="block mb-3">
                    <h3 className="text-xl font-bold text-black leading-[1.2] group-hover:text-[#0052D9] transition-colors line-clamp-3">
                      {latestPost.title}
                    </h3>
                  </Link>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow font-medium">
                    {latestPost.meta?.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/posts/${latestPost.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:text-[#E60012] transition-colors"
                    >
                      阅读报告
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              </div>
            ) : null}

            {/* Desktop/tablet: keep multi-card layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-7 md:gap-y-12">
              {posts.map((post) => {
              const firstCategory = post.categories?.[0]
              const categoryTitle =
                typeof firstCategory === 'object' && firstCategory ? firstCategory.title : '深度分析'
              return (
              <article 
                key={post.id}
                className="group flex flex-col h-full border-t border-gray-200 pt-4 md:pt-6 hover:border-black transition-colors duration-500"
              >
                {/* Meta Header */}
                <div className="flex justify-between items-center mb-3 md:mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E60012]">
                      {categoryTitle}
                   </span>
                   <span className="text-[10px] font-mono text-gray-400">
                      {formatDateStable(post.createdAt)}
                   </span>
                </div>

                {/* Title */}
                <Link href={`/posts/${post.slug}`} className="block mb-4">
                   <h3 className="text-xl md:text-2xl font-bold text-black leading-[1.2] group-hover:text-[#0052D9] transition-colors line-clamp-3">
                      {post.title}
                   </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 md:mb-8 line-clamp-4 flex-grow font-medium">
                   {post.meta?.description}
                </p>

                {/* Footer Action */}
                <div className="mt-auto">
                   <Link 
                     href={`/posts/${post.slug}`}
                     className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:text-[#E60012] transition-colors"
                   >
                      阅读报告
                      <ArrowUpRight className="w-3 h-3" />
                   </Link>
                </div>
                </article>
              )})}
            </div>
          </>
        ) : (
          <div className="py-12 md:py-20 text-center border-y border-dashed border-gray-200">
             <p className="text-gray-400 font-mono text-sm">暂无观察报告</p>
          </div>
        )}

        <div className="mt-16 md:hidden text-center">
           <Link href="/posts" className="inline-block border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            查看全部文章
          </Link>
        </div>
      </div>
    </section>
  )
}
