'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight, DownloadCloud } from 'lucide-react'

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.1),_transparent_px)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(239,68,68,0.1),_transparent_px)]"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-heading">
            准备好开启 <br />
            <span className="text-blue-400">人力资源管理的数智化新篇章？</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            立即申请专家演示，我们将根据您的企业规模与管理现状，为您定制专属的薪事力 HR & 薪税解决方案。
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-8 text-xl rounded-xl group transition-all">
              立刻预约现场演示
              <MoveRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-8 text-xl rounded-xl">
              下载交付物清单
              <DownloadCloud className="ml-2 h-6 w-6" />
            </Button>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-heading">50,000+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">赋能组织</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-heading">438+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">覆盖城市</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-heading">2-4W</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">快速上线</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-heading">99%以上</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">算薪准确率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
