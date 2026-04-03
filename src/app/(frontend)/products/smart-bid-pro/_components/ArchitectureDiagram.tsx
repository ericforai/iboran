'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CloudDownload, 
  Database, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Cpu,
  ArrowRight
} from 'lucide-react'

const Node = ({ icon: Icon, label, description, color, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white border border-slate-100 p-6 rounded-3xl flex flex-col items-center text-center gap-3 group hover:border-blue-300 transition-all shadow-sm hover:shadow-lg"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-1 group-hover:scale-110 shadow-lg shadow-black/5 transition-transform`}>
      <Icon size={28} className="text-white" />
    </div>
    <span className="font-extrabold text-slate-900 text-base whitespace-nowrap tracking-tight">{label}</span>
    <span className="text-xs text-slate-500 leading-tight font-medium">{description}</span>
  </motion.div>
)

const Arrow = ({ delay }: { delay: number }) => (
  <div className="flex-1 flex items-center justify-center px-4 min-w-[30px]">
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="w-full h-[2px] bg-blue-100 flex items-center justify-center relative"
    >
      <motion.div 
        animate={{ x: ['-100%', '300%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400/10 blur-lg rounded-full"
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <ArrowRight size={12} className="text-blue-200" />
      </div>
    </motion.div>
  </div>
)

export const ArchitectureDiagram = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-col items-center bg-transparent overflow-hidden relative">
      {/* Container Background Decoration */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 0)', backgroundSize: '32px 32px' }} 
      />

      {/* Layer 1: Data Ingestion */}
      <div className="flex items-center w-full max-w-4xl relative z-10">
        <Node 
          icon={CloudDownload} 
          label="全网智能采集" 
          description="标讯详情自动深度清洗" 
          color="bg-blue-600"
          delay={0.1}
        />
        <Arrow delay={0.4} />
        <div className="flex flex-col items-center gap-6 relative">
             <Node 
                icon={Cpu} 
                label="智投 AI 引擎" 
                description="机会 BAR 模型量化评分" 
                color="bg-blue-500"
                delay={0.6}
            />
        </div>
        <Arrow delay={0.9} />
        <Node 
          icon={Layers} 
          label="投标任务中心" 
          description="PDCA 闭环标准作业" 
          color="bg-indigo-600"
          delay={1.1}
        />
      </div>

      {/* Vertical Linkage */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '48px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="w-[2px] bg-blue-100 my-4"
      />

      {/* Layer 2: Asset & Insight */}
      <div className="flex items-center w-full max-w-5xl justify-center gap-12 mt-2 relative z-10">
        <Node 
          icon={Database} 
          label="组织知识资产" 
          description="全生命周期沉淀与复用" 
          color="bg-emerald-600"
          delay={1.4}
        />
        <Node 
          icon={ShieldCheck} 
          label="安全审计管控" 
          description="多级权限与操作可审计" 
          color="bg-slate-800"
          delay={1.6}
        />
        <Node 
          icon={TrendingUp} 
          label="经营深度洞察" 
          description="竞对分析与多维看板报告" 
          color="bg-amber-600"
          delay={1.8}
        />
      </div>

      <div className="mt-8 text-blue-400 text-[12px] font-extrabold uppercase tracking-[0.3em] opacity-40">
        Enterprise Bid Intelligence Architecture
      </div>
    </div>
  )
}
