'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Search, TrendingUp, TrendingDown, Users, ArrowUpRight } from 'lucide-react'

const Point = ({ title, problem, result, icon: Icon, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group p-10 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
  >
    <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={64} className="text-blue-600" />
    </div>
    
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
    </div>

    <div className="space-y-6">
      <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={16} className="text-amber-600" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700/80">现状与痛点</span>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed font-medium">{problem}</p>
      </div>

      <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 group-hover:translate-x-1.5 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={16} className="text-emerald-600 rotate-180" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700/80">产品化成果</span>
        </div>
        <p className="text-slate-900 font-bold text-lg leading-relaxed">{result}</p>
      </div>
    </div>
  </motion.div>
)

export const PainPoints = () => {
  return (
    <section id="pain-points" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            我们解决什么问题？
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            从经验型作业向数据驱动、标准协同的体系化经营转型。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Point 
            title="机会分散、判断靠经验"
            problem="标讯来源多、信息碎片化，筛选慢、错判成本高。仅靠人工盯盘，容易错失关键商机。"
            result="统一聚合结构化呈现，结合推荐评分模型，按行业特征调参，让一线更早聚焦高价值机会。"
            icon={Search}
            delay={0.1}
          />
          <Point 
            title="协作风险高、质量不可控"
            problem="版本混乱、责任不清、临期救火频繁。一个小细节疏忽，就可能导致合规废标。"
            result="标准投、任务流与文档协同；AI 合规与评分把风险前置，彻底消除低级失误。"
            icon={Users}
            delay={0.2}
          />
          <Point 
            title="知识难复用、经营难复盘"
            problem="资产散落；费用台账混乱；赢率难解释。管理者难以掌握真实全局数据反馈。"
            result="资产库标签沉淀；资源运营台账追综；经营看板把“为什么赢/输”讲得透彻清楚。"
            icon={TrendingDown}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
