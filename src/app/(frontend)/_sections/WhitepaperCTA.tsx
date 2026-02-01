'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, Download, Plus } from 'lucide-react'
import { SlideUp } from '@/components/animations'

export const WhitepaperCTA = () => {
  return (
    <section className="h-screen flex flex-col justify-center py-24 bg-white relative overflow-hidden isolate snap-start snap-always">
      {/* Precision Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0052D9 1px, transparent 1px), linear-gradient(to bottom, #0052D9 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-slate-950 rounded-[48px] p-8 lg:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border border-white/5 isolate max-w-6xl mx-auto">
          {/* Internal Texture & Light */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
          }}></div>

          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/[0.07] blur-[150px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Visual: Industrial Book Mockup V2 */}
            <SlideUp className="w-full lg:w-[450px] flex justify-center">
              <Link href="/whitepapers/business-finance-strategic-restructuring" className="relative group/book block">
                {/* Immersive Shadow */}
                <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] opacity-0 group-hover/book:opacity-100 transition-opacity duration-1000"></div>

                <div
                  className="relative w-72 h-[410px] bg-white rounded-r-3xl shadow-[40px_40px_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden border-l-[20px] border-blue-600 transition-all duration-700 hover:-translate-y-2.5 hover:-rotate-2"
                >
                   {/* Book Content: Technical Ledger Style */}
                   <div className="p-10 flex-1 flex flex-col relative">
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                            <BookOpen className="w-7 h-7 text-blue-600" strokeWidth={2.5} />
                         </div>
                         <div className="text-[10px] font-mono font-black text-slate-300 rotate-90 origin-right tracking-widest">单元 09B 数据集</div>
                      </div>

                      <div className="font-heading font-black text-3xl lg:text-4xl text-slate-950 leading-[0.95] mb-8 tracking-tighter text-left">
                        业财一体化<br />
                        <span className="text-blue-600 italic">转型实践</span><br />
                        指南报告
                      </div>

                      <div className="flex items-center gap-2 mb-12">
                         <div className="w-8 h-px bg-blue-600/30"></div>
                         <div className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-widest">
                           泊冉实验室 v3.0
                         </div>
                      </div>

                      <div className="mt-auto space-y-5">
                         <div className="h-px bg-slate-100 w-full relative">
                            <Plus size={10} className="absolute -top-1.5 -left-1.5 text-slate-200" />
                         </div>
                         <div className="flex justify-between items-center font-mono text-[10px] font-black text-slate-400">
                            <div className="flex items-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                               <span>2024年发布</span>
                            </div>
                            <span className="text-blue-600">立即获取</span>
                         </div>
                      </div>
                   </div>

                   {/* Spine Detail */}
                   <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-r border-slate-100/50"></div>
                </div>

                {/* Secondary HUD Element */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl hidden lg:block">
                   <div className="text-[9px] font-mono font-black text-blue-400 uppercase tracking-widest mb-1">核心增长指标</div>
                   <div className="text-lg font-heading font-black text-white">+32% 投资回报</div>
                </div>
              </Link>
            </SlideUp>

            {/* Content: Prestige Copywriting */}
            <div className="flex-1 text-center lg:text-left text-white relative">
              <SlideUp className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
                <div className="px-3 py-1 bg-white/10 border border-white/10 rounded-md text-[10px] font-mono font-black text-blue-400 uppercase tracking-[0.2em]">知识资产 A01</div>
                <div className="h-px w-12 bg-white/10"></div>
              </SlideUp>

              <SlideUp delay={100} as="h2" className="text-5xl lg:text-7xl font-heading font-black mb-10 leading-[0.95] tracking-tighter">
                深度避坑：<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">14年行业交付</span>实录
              </SlideUp>

              <SlideUp delay={200} as="p" className="text-slate-400 text-xl lg:text-2xl mb-14 max-w-2xl leading-relaxed font-medium">
                覆盖半导体、新零售、装备制造、消费品、专业服务等 5 大行业的 20+ 真实案例。为您梳理出&quot;业财一体&quot;落地的 5 大核心红线与技术方案建议。
              </SlideUp>

              <SlideUp delay={300} className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                 <Link href="/whitepapers/business-finance-strategic-restructuring" className="group relative px-12 py-5 bg-blue-600 text-white font-mono font-black rounded-xl flex items-center gap-4 overflow-hidden shadow-[0_20px_50px_rgba(0,82,217,0.4)] active:scale-95 transition-all uppercase tracking-tighter border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    免费获取指南
                    <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" strokeWidth={3} />
                 </Link>

                 <div className="flex items-center gap-5 py-3 px-8 bg-white/5 border border-white/10 rounded-[20px] backdrop-blur-sm group/stats cursor-default">
                    <div className="flex -space-x-2.5">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden ring-2 ring-white/5">
                            <div className="w-full h-full bg-gradient-to-br from-blue-600/40 to-indigo-600/40"></div>
                         </div>
                       ))}
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white text-lg font-heading font-black leading-none">1,480+</span>
                       <span className="text-slate-500 text-[9px] font-mono font-black uppercase tracking-widest mt-1">位管理者已同步</span>
                    </div>
                 </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
