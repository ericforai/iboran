'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, TrendingUp, Clock, Target } from 'lucide-react'

const cases = [
  {
    logo: '钢铁行业头部企业 H 公司',
    title: '从“手工对账”到“一日结账”的跨越',
    challenge: '超大规模集团架构，法人与管理账套混杂，成本核算周期长达 10 天。',
    solution: '应用 BIP 管理会计，建立财管分离体系，上线 40 个成本组件及智能月结平台。',
    result: '结账效率提升 80%+，反倾销审计报告出具速度缩短至 1 天，管理精度提升 300%。',
    highlights: ['多层卷积计算', '分项结转还原'],
    metrics: { value: '1 DAY', label: '结账周期' }
  },
  {
    logo: '离散制造业某领军企业',
    title: '精准洞察每一道工序的获利能力',
    challenge: '产品种类繁多，材料价波动剧烈，传统核算无法精准归集。',
    challengeDesc: '传统 ERP 仅能实现简单的成品核算，无法支撑精细化的成本管控与 PDCA 循环。',
    solution: '上线标准成本管理模块，打通 MES 与 BIP，实现实时成本差异分析与自动回摊。',
    result: '单台产品成本核算精度从 85% 提升至 99.5%，有效支撑了销售定价与降本决策。',
    highlights: ['标准成本差异分析', 'MES 深度集成'],
    metrics: { value: '99.5%', label: '核算准确率' }
  }
]

export default function CustomerStories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
             先行者的选择：赋能管理精细化转型
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
             从钢铁巨人到制造精兵，泊冉助力各行业领军者构建可信的数据决策体系。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {cases.map((item, i) => (
             <motion.div
               key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 rounded-[48px] p-8 md:p-12 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
             >
                <div className="mb-8 flex justify-between items-start">
                   <div className="p-4 bg-white rounded-2xl shadow-sm text-sm font-bold text-blue-600">
                      {item.logo}
                   </div>
                   <Quote className="w-12 h-12 text-blue-200" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                   {item.title}
                </h3>
                <div className="space-y-6 mb-10">
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">面临挑战</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.challenge}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">核心成效</p>
                      <p className="text-slate-800 font-medium leading-relaxed">{item.result}</p>
                   </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-8">
                   <div className="flex gap-2">
                      {item.highlights.map((h, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">
                           {h}
                        </span>
                      ))}
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{item.metrics.label}</p>
                      <p className="text-2xl font-bold text-blue-700">{item.metrics.value}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
