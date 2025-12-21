import React from 'react'
import Link from 'next/link'
import { ArrowRight, PenTool } from 'lucide-react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

interface Props {
  posts: Post[]
}

export const RecentPostsSection: React.FC<Props> = ({ posts }) => {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">泊冉观察</h2>
            <div className="w-16 h-1 bg-[#E60012] mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600">
              深度解析半导体、装备制造及企业数字化转型的实战洞察与行业发现。
            </p>
          </div>
          <Link href="/posts" className="hidden md:flex items-center gap-1 text-[#0052D9] font-bold hover:underline mb-2">
            查看更多深度洞察 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/posts/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                  {post.meta?.image ? (
                    <Media resource={post.meta.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <PenTool className="w-12 h-12 text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4">
                    {post.categories?.map((cat: any, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-blue-50 text-[10px] font-bold text-[#0052D9] uppercase tracking-wider">
                        {typeof cat === 'object' ? cat.title : '资讯'}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4 line-clamp-2 group-hover:text-[#0052D9] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-8 flex-grow">
                    {post.meta?.description}
                  </p>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {new Date(post.createdAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0052D9] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-100 shadow-sm">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-slate-300" />
             </div>
             <p className="text-slate-500 font-medium">深度解析文章正在创作中，敬请期待...</p>
          </div>
        )}

        <div className="mt-12 md:hidden text-center">
           <Link href="/posts" className="inline-flex items-center gap-1 text-[#0052D9] font-bold">
            查看更多见解 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
