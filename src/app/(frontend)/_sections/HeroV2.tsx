'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Trophy, ShieldCheck, Zap, Globe2 } from 'lucide-react'
import { DashboardPreviewV2 } from './DashboardPreviewV2'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const HeroV2 = () => {
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 500], [0, -40])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-12 lg:pb-24 overflow-hidden bg-[#020617] isolate text-white">
      {/* 1. Multi-Dimensional Mesh Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Animated Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Primary Mesh Gradient */}
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/15 blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>

        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">

            {/* Left Column: Brand & Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-start text-left w-full"
            >
               {/* Branded Badge Layer */}
               <motion.div variants={fadeInUp} className="group cursor-default">
                 <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 group-hover:border-cyan-500/30 transition-all duration-500">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black tracking-[0.2em] text-cyan-400">泊冉软件</span>
                      <span className="w-px h-3 bg-white/20"></span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-400">用友铂金级合作伙伴</span>
                    </div>
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                    </div>
                 </div>
               </motion.div>

               <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                 <h1 className="text-4xl sm:text-5xl lg:text-[76px] font-bold leading-[1.05] lg:leading-[0.9] tracking-[-0.04em] text-white">
                   您的业财数据<br className="hidden lg:block" /> 
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-shimmer bg-[length:200%_100%]">
                     打通了吗？
                   </span>
                 </h1>
                 
                 <p className="text-base lg:text-[19px] text-slate-400 font-normal leading-relaxed max-w-xl">
                   14年深耕 <span className="text-white font-semibold underline decoration-cyan-500/30 underline-offset-4">半导体、新零售、装备制造</span> 三大行业。服务超过 500+ 企业，其中 80% 的增长来自老客户的口碑传承。
                 </p>
               </motion.div>

               {/* Value Grid */}
               <motion.div
                 variants={fadeInUp}
                 className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 w-full max-w-xl"
               >
                 {[
                   { t: '业财数据打通', d: '消除系统孤岛，实时对账' },
                   { t: '财务共享建设', d: '标准化流程，降本增效' },
                   { t: '供应链协同', d: '上下游打通，敏捷响应' },
                   { t: '遗留系统迁移', d: '平滑过渡，核心资产零流失' },
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-1 group">
                     <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)] group-hover:scale-150 transition-transform"></div>
                        <span className="text-sm font-bold text-slate-200">{item.t}</span>
                     </div>
                     <span className="text-[11px] text-slate-500 font-medium pl-3">{item.d}</span>
                   </div>
                 ))}
               </motion.div>

               {/* Action Tier */}
               <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 relative z-20 w-full mb-16">
                  <Link href="/contact" className="group relative w-full sm:w-auto">
                     <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition duration-500"></div>
                     <div className="relative px-8 py-4 bg-white text-slate-950 font-black text-[13px] tracking-widest uppercase rounded-xl flex items-center justify-center gap-3 shadow-2xl active:scale-[0.98] transition-all">
                       <span>免费诊断企业现状</span>
                       <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </div>
                  </Link>

                  <Link href="/solution" className="group px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white font-black text-[13px] tracking-widest uppercase rounded-xl hover:bg-white/[0.08] hover:border-white/[0.2] active:scale-[0.98] transition-all flex items-center justify-center gap-2 backdrop-blur-md relative overflow-hidden w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span>查看行业方案</span>
                  </Link>
               </motion.div>

               {/* Refined Honor Badges */}
               <motion.div
                 variants={fadeInUp}
                 className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/[0.05] w-full"
               >
                  {[
                    { l: "高新技术企业", i: <Trophy size={14} className="text-amber-500" /> },
                    { l: "科技型中小企业", i: <Zap size={14} className="text-cyan-400" /> },
                    { l: "专精特新企业", i: <ShieldCheck size={14} className="text-emerald-500" /> },
                    { l: "技术中心认定", i: <Globe2 size={14} className="text-indigo-400" /> }
                  ].map((honor, i) => (
                    <div key={i} className="flex flex-col gap-2 group cursor-default">
                       <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                            {honor.i}
                          </div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider group-hover:text-slate-300 transition-colors whitespace-nowrap">{honor.l}</span>
                       </div>
                    </div>
                  ))}
               </motion.div>
            </motion.div>

           {/* Right Column: Dashboard Visual (Lg+ only) */}
           <motion.div
             initial={{ opacity: 0, x: 100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-full h-full hidden lg:flex items-center justify-center"
           >
              <motion.div
                 style={{ y: y2 }}
                 className="relative w-[110%] group"
              >
                 {/* Hyper-Glow Background */}
                 <div className="absolute -inset-[40px] bg-indigo-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 
                 {/* Main Dashboard Container */}
                 <div className="relative rounded-2xl border border-white/[0.1] shadow-[0_0_80px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_100px_rgba(79,70,229,0.15)] transition-all duration-700">
                    <DashboardPreviewV2 />
                    
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                 </div>
                 
                 {/* floating decorative elements */}
                 <div className="absolute -top-10 -right-10 w-24 h-24 border border-white/[0.05] rounded-full animate-pulse-slow"></div>
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-white/[0.03] rounded-full animate-pulse-slow delay-700"></div>
              </motion.div>
           </motion.div>

        </div>
      </div>
    </section>
  )
}
