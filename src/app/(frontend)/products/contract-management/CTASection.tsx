'use client'

import { useState } from 'react'
import { ArrowRight, Download, CalendarCheck, MessageSquare, ShieldCheck } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[3rem] bg-[#E60012] overflow-hidden p-8 md:p-16 lg:p-20 shadow-[0_20px_50px_rgba(230,0,18,0.3)]">
          {/* Enhanced Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 border-[60px] border-white/5 blur-sm" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-700" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <ShieldCheck size={12} className="text-red-200" />
                Next-Gen Compliance
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5.5xl font-bold mb-8 leading-[1.15]">
                准备好为您的组织<br/>
                构建<span className="text-red-100 underline decoration-white/30 underline-offset-8">数智化合同体系</span>吗？
              </h2>
              <p className="text-red-100 text-lg mb-12 max-w-xl leading-relaxed opacity-90">
                立预约资深交付顾问进行 1 对 1 深度演示，并获取为您行业定制的《合同管理数智化交付方案及对标清单》。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-5 bg-white text-[#E60012] rounded-2xl font-bold hover:bg-red-50 transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 active:scale-95"
                >
                  <CalendarCheck size={20} />
                  预约专家视频演示
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={handleOpenConsult} className="px-10 py-5 bg-white/10 text-white border border-white/30 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95">
                  <Download size={20} />
                  获取交付价值清单
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-white/15 transition-all duration-500 hover:translate-y-[-4px]">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-red-100" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">架构咨询</h4>
                <p className="text-red-100/80 text-sm leading-relaxed">
                  协助梳理企业合同全生命周期架构与业务系统集成逻辑。
                </p>
              </div>
              
              <div className="group p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 hover:bg-white/15 transition-all duration-500 hover:translate-y-[-4px] mt-0 sm:mt-12">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <CalendarCheck className="text-red-100" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">落地演示</h4>
                <p className="text-red-100/80 text-sm leading-relaxed">
                  展示真实业务场景下的法务合规管控与履约闭环流程。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trusted By Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center gap-10">
            <div className="relative">
               <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200 -z-10" />
               <span className="bg-white px-6 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                 Trusted by Industry Leaders
               </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
              <div className="group relative">
                <div className="text-2xl font-black italic tracking-tighter text-slate-800 transition-colors group-hover:text-blue-600">CORPORATE</div>
              </div>
              <div className="group relative">
                <div className="text-2xl font-black italic tracking-tighter text-slate-800 transition-colors group-hover:text-red-600">ENTERPRISE</div>
              </div>
              <div className="group relative">
                <div className="text-2xl font-black italic tracking-tighter text-slate-800 transition-colors group-hover:text-indigo-600">GLOBAL_INC</div>
              </div>
              <div className="group relative">
                <div className="text-2xl font-black italic tracking-tighter text-slate-800 transition-colors group-hover:text-emerald-600">GROUP_CO</div>
              </div>
              <div className="group relative">
                <div className="text-2xl font-black italic tracking-tighter text-slate-800 transition-colors group-hover:text-orange-600">TECH_SYS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}
