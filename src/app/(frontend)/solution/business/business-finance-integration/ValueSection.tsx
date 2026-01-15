'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target, Layers } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: '70%',
    label: '月结周期缩短',
    desc: '实现从月结到“随结”，快速响应市场变化',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Layers,
    value: '10x',
    label: '核算颗粒度提升',
    desc: '支持明细至物料、客商、员工的多维追踪',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: Target,
    value: '99.9%',
    label: '自动稽核通过率',
    desc: '减少人为干预，保障业财数据合规性',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: TrendingUp,
    value: '35%',
    label: '经营决策效率提升',
    desc: '基于实时的管理报表，快速洞察价值洼地',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            为您带来<span className="text-[#0052D9]">显著</span>的经营价值
          </h2>
          <p className="text-slate-500 text-lg">
            数据驱动决策，连接赋能成长。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all text-center"
            >
              <div className={`w-14 h-14 ${metric.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className={`w-7 h-7 ${metric.color}`} />
              </div>
              <div className={`text-4xl font-black ${metric.color} mb-2 tracking-tight`}>
                {metric.value}
              </div>
              <div className="text-lg font-bold text-slate-800 mb-4">
                {metric.label}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
