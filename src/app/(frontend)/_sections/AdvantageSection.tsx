'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SlideUp, StaggerContainer } from '@/components/animations'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export const AdvantageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const advantages = [
    {
      number: '14',
      unit: '年',
      label: '行业深耕经验',
      desc: '专注中大型企业信息化建设与业财一体化转型'
    },
    {
      number: '100',
      unit: '位',
      label: '资深技术专才',
      desc: '全栈实施交付能力，顾问式服务保障项目成功'
    },
    {
      number: '500',
      unit: '家',
      label: '集团客户信赖',
      desc: '长期服务于多家世界500强与大型国有企业'
    },
    {
      number: '30',
      unit: '项',
      label: '自主技术专利',
      desc: '坚持技术自研，引领行业数智化解决方案底座'
    }
  ]

  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-20 bg-[#0B0C15] relative overflow-hidden isolate snap-start snap-always">
      {/* Deep Future Digital Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}></div>
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <StaggerContainer staggerDelay={0.1} className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Section Header */}
          <div className="lg:w-[420px]">
            <SlideUp delay={0} duration={0.8} className="flex items-center gap-4 mb-8" as="div">
              <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></div>
                CORE CAPABILITIES 02
              </div>
              <div className="h-px w-8 bg-white/10"></div>
            </SlideUp>

            <SlideUp delay={0.1} duration={0.8} as="h2" className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter leading-[1] mb-8 lg:mb-10">
              专业交付<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                定义
              </span>标准
            </SlideUp>

            <SlideUp delay={0.2} duration={0.8} as="p" className="text-base sm:text-lg lg:text-xl text-slate-400 font-medium leading-relaxed mb-8 lg:mb-10 max-w-md">
              我们不仅提供工具，更通过深厚的行业积淀与技术实操，为您打造具备核心竞争力的数智化引擎。
            </SlideUp>

            <SlideUp delay={0.3} duration={0.8} className="pt-10 border-t border-white/5 flex flex-col gap-4" as="div">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-4 text-slate-500 hover:text-cyan-400 group transition-colors"
               >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
                     <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">预约交付专家咨询</span>
               </button>
            </SlideUp>
          </div>

          {/* Advantage Ledger Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map((adv, idx) => (
              <SlideUp
                key={idx}
                delay={0.4 + idx * 0.1}
                duration={0.6}
                as="div"
                className="p-6 sm:p-8 lg:p-12 bg-white/[0.03] border border-white/10 rounded-[20px] sm:rounded-[32px] backdrop-blur-sm hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2"
              >
                {/* HUD Index */}
                <div className="absolute top-0 right-0 p-6 font-mono text-[9px] font-bold text-slate-600 uppercase tracking-widest z-0 flex items-center gap-2">
                   <div className="w-1 h-1 bg-cyan-500/40 rounded-full"></div>
                   DATA_INDEX_0{idx + 1}
                </div>

                <div className="flex items-baseline gap-2 mb-8 relative z-10">
                   <span className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      {adv.number}
                   </span>
                   <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{adv.unit}</span>
                </div>

                <div className="relative z-10">
                   <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                      {adv.label}
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-cyan-500/20 transition-colors"></div>
                   </h3>
                   <p className="text-slate-400 font-medium leading-relaxed text-sm lg:text-base">{adv.desc}</p>
                </div>

                {/* Hover Reveal Detail */}
                <div className="mt-8 pt-6 border-t border-white/[0.02] flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
                   <div className="text-[8px] font-mono font-bold text-cyan-500/80 uppercase tracking-widest italic tracking-widest">VERIFIED_STATUS: PASS</div>
                </div>

                {/* Background Glow on Hover */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-[60px] rounded-full transition-all duration-700"></div>
              </SlideUp>
            ))}
          </div>
         
          <DemoRequestModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            source="AdvantageSection_DeliveryConsultation" 
          />
        </StaggerContainer>
      </div>
    </section>
  )
}
