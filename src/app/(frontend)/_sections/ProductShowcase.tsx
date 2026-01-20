'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Truck, 
  Users, 
  Code, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Plus 
} from 'lucide-react'
import { NeuCard } from '@/components/ui/neu-card'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const ProductShowcase = () => {
  return (
    <section className="min-h-screen lg:h-screen flex items-center py-16 lg:py-12 bg-white relative overflow-hidden isolate snap-start snap-always">
      {/* Precision Blueprint Grid Background (Masterpiece Scale) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0052D9 1px, transparent 1px), linear-gradient(to bottom, #0052D9 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Warm Ambient Light */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-orange-100/[0.4] blur-[150px] -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header: Compact Industrial Layout */}
        <motion.div 
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-5xl mb-12" // Reduced from mb-32
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <div className="group relative flex h-6 items-center gap-2 px-3 border border-blue-600/20 bg-blue-50/80 rounded-md overflow-hidden backdrop-blur-sm cursor-default hover:border-blue-600/40 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-linear"></div>
               <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
               <span className="text-[11px] font-mono font-black text-blue-600 uppercase tracking-[0.2em] relative z-10">核心产品矩阵</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-slate-200 to-transparent"></div>
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">AI智能底座</div>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-[1] sm:leading-[0.95] lg:leading-[0.9] mb-6 text-physical">
            全场景业财融合 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 italic px-3">数智化</span>
            产品方阵
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed max-w-full">
            基于用友顶级技术底座，深度融合“业财合一”管理思想。通过工业级实施交付，构建企业全局数据中枢。
          </motion.p>
        </motion.div>

        {/* Technical Grid: High Density "Command Deck" Mode */}
        <motion.div 
           initial="initial"
           whileInView="animate"
           viewport={{ once: true, margin: "-50px" }}
           variants={staggerContainer}
           className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto lg:h-[500px]"
        >
          {/* LEFT COLUMN: ERP CORE (40%) */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 relative group h-full">
             <NeuCard variant="dark" className="h-full p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                {/* Bg Tech */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/0 to-slate-900/0"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white shadow-lg ring-1 ring-white/10">
                      <Layers size={28} strokeWidth={2} />
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono font-bold text-blue-200 border border-white/5 backdrop-blur-md">
                      CORE BUSINESS
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-black text-white mb-2 tracking-tight text-physical">ERP 与业务系统</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                    平台型能力 · 企业核心业务底座
                  </p>

                  <div className="space-y-4">
                    {[
                      { name: '用友 BIP', desc: '先进成熟的企业软件与智能服务平台', href: '/products/bip' },
                      { name: '用友 YonSuite', desc: '成长型企业商业创新全场景 SaaS', href: '/products/yonsuite' },
                      { name: '集团财务共享解决方案', desc: '推动财务从管控型向价值创造型转型', href: '/solution/financial-shared-services' }
                    ].map((item, i) => (
                      <Link href={item.href} key={i} className="group/item flex flex-col hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                        <div className="flex items-center gap-2 text-white font-bold text-base mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:bg-blue-400 transition-colors"></span>
                          {item.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-70 transition-opacity ml-1" />
                        </div>
                        <div className="pl-3.5 text-slate-500 text-xs group-hover/item:text-slate-400 transition-colors">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
             </NeuCard>
          </motion.div>

          {/* RIGHT COLUMN: COLLAB & DATA (60%) */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 flex flex-col gap-5 h-full">
            
            {/* ROW 1: Collaboration & Process (Card 02) */}
            <NeuCard variant="raised" className="flex-1 p-6 relative overflow-hidden bg-slate-50 border-white/60 hover:bg-white transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100/50">
                    <Users size={20} strokeWidth={2} />
                  </div>
                  <div>
                     <h3 className="text-xl font-heading font-black text-slate-900 leading-none">协同与流程平台</h3>
                     <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">组织与流程能力 · 落地执行</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                   {[
                     { name: '协同办公 (COP)', href: '/products/collaborative-office' },
                     { name: 'BPM 流程引擎', href: '/products/bpm' },
                     { name: '企业门户', href: '/products/enterprise-portal' },
                     { name: '项目协同管理', href: '/products/project-collaboration' },
                     { name: '合同管理系统', href: '/products/contract-management' },
                     { name: '采购管理', href: '/products/procurement-management' }
                   ].map((item, i) => (
                     <Link href={item.href} key={i} className="bg-white border border-slate-200/60 rounded-lg px-3 py-2 text-xs font-bold text-slate-600 shadow-sm flex items-center gap-2 hover:border-indigo-200 hover:text-indigo-700 transition-colors group">
                        <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors"></div>
                        {item.name}
                     </Link>
                   ))}
                </div>
              </div>
            </NeuCard>

            {/* ROW 2: Data & Integration (Card 03) */}
            <NeuCard variant="inset" className="flex-1 p-6 relative overflow-hidden bg-emerald-50/30 border-emerald-100/50">
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 bg-emerald-100/50 rounded-lg flex items-center justify-center text-emerald-700 shadow-sm border border-emerald-200/50">
                     <Zap size={20} strokeWidth={2} />
                   </div>
                   <div>
                      <h3 className="text-xl font-heading font-black text-slate-900 leading-none">数据与开发集成平台</h3>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">数据驱动 · 连接与智能 · 敏捷创新</span>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                   {[
                     { icon: Cloud, label: 'AI智能平台', href: '/solution/business/aip-intelligent-apps' },
                     { icon: Layers, label: '主数据治理', href: '/products/mdm' },
                     { icon: Code, label: 'Link集成平台', href: '/products/ipaas' },
                     { icon: ShieldCheck, label: 'BI数据中台', href: '/products/bi-data' }
                   ].map((item, i) => (
                     <Link href={item.href} key={i} className="bg-white border border-emerald-100/50 rounded-xl p-3 flex flex-col gap-2 items-start hover:shadow-md transition-all hover:bg-emerald-50/50 group">
                        <item.icon size={16} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-800 transition-colors">{item.label}</span>
                     </Link>
                   ))}
                 </div>
               </div>
            </NeuCard>
            
          </motion.div>
        </motion.div>




      </div>
    </section>
  )
}
