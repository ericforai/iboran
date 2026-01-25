'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Post } from '@/payload-types'

interface Props {
  posts: Post[]
}

export const RecentPostsSection: React.FC<Props> = ({ posts }) => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-black pb-6">
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-black uppercase">
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

        {/* Text-First Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => {
              const firstCategory = post.categories?.[0]
              const categoryTitle =
                typeof firstCategory === 'object' && firstCategory ? firstCategory.title : '深度分析'
              return (
              <article 
                key={post.id}
                className="group flex flex-col h-full border-t border-gray-200 pt-6 hover:border-black transition-colors duration-500"
              >
                {/* Meta Header */}
                <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E60012]">
                      {categoryTitle}
                   </span>
                   <span className="text-[10px] font-mono text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                   </span>
                </div>

                {/* Title */}
                <Link href={`/posts/${post.slug}`} className="block mb-4">
                   <h3 className="text-2xl font-bold text-black leading-[1.2] group-hover:text-[#0052D9] transition-colors line-clamp-3">
                      {post.title}
                   </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-4 flex-grow font-medium">
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
        ) : (
          <div className="py-20 text-center border-y border-dashed border-gray-200">
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
