import React from 'react'
import Link from 'next/link'
import { ArrowRight, Layout } from 'lucide-react'
import type { IndustrySolution } from '@/payload-types'
import { Media } from '@/components/Media'

interface Props {
  solutions: IndustrySolution[]
}

export const IndustrySolutionsSection: React.FC<Props> = ({ solutions }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">行业深耕，场景赋能</h2>
            <div className="w-16 h-1 bg-[#E60012] mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600">
              基于用友产品底座，结合泊冉 14 年实施经验，为半导体、装备制造及医疗等行业提供专属方案。
            </p>
          </div>
          <Link href="/solution" className="hidden md:flex items-center gap-1 text-[#0052D9] font-bold hover:underline mb-2">
            全部行业方案 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {solutions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item) => (
              <Link 
                key={item.id} 
                href={`/solution/${item.slug}`}
                className="group block bg-[#F7F8FA] rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-[#0052D9]/20 transition-all duration-500"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                   {item.coverImage ? (
                      <Media resource={item.coverImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                        <Layout className="w-12 h-12 text-slate-400 opacity-30" />
                      </div>
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-[#0052D9] transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {item.summary}
                  </p>
                  <div className="flex items-center text-xs font-bold text-[#0052D9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    了解详细方案 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-[#F7F8FA] rounded-3xl p-16 text-center border-2 border-dashed border-slate-200">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Layout className="w-8 h-8 text-slate-400" />
             </div>
             <p className="text-slate-500 font-medium">行业方案正在同步上传中，敬请期待...</p>
          </div>
        )}

        <div className="mt-12 md:hidden text-center">
           <Link href="/solution" className="inline-flex items-center gap-1 text-[#0052D9] font-bold">
            查看全部方案 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
