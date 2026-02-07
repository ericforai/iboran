import React from 'react'
import Link from 'next/link'
import { ArrowRight, Trophy } from 'lucide-react'
import type { SuccessStory } from '@/payload-types'

interface Props {
  stories: SuccessStory[]
}

export const SuccessStoriesSection: React.FC<Props> = ({ stories }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">见证价值，赋能成长</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            赋能 500+ 企业数智化转型，用真实的交付结果证明专业价值。
          </p>
        </div>

        {stories.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="group p-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl hover:from-[#0052D9]/20 hover:to-[#0052D9]/5 transition-all duration-500"
              >
                <div className="bg-white p-8 lg:p-10 rounded-[calc(1.5rem-1px)] h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052D9] font-bold text-xl">
                      {story.clientName?.charAt(0) || 'B'}
                    </div>
                    <div>
                      <div className="font-bold text-[#1F2329] text-lg">{story.clientName}</div>
                      <div className="text-sm text-[#0052D9] font-semibold">{story.industry || '行业头部企业'}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1F2329] mb-6 leading-snug group-hover:text-[#0052D9] transition-colors">
                    {story.title}
                  </h3>
                  
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
                    <Link 
                      href={`/cases/${story.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#E60012] transition-colors"
                    >
                      查看详细记录 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#F7F8FA] rounded-3xl p-16 text-center border-2 border-dashed border-slate-200">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Trophy className="w-8 h-8 text-slate-300" />
             </div>
             <p className="text-slate-500 font-medium">标杆案例正在整理中，敬请期待...</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link 
            href="/cases" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1F2329] text-white font-bold rounded-xl hover:bg-black transition-all shadow-xl shadow-slate-200"
          >
            获取更多成功经验
          </Link>
        </div>
      </div>
    </section>
  )
}
