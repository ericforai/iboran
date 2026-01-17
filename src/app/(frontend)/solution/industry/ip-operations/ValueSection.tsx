'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Zap, Coins } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '1000%',
    label: '对账效率提升',
    desc: '自动结算引擎，告别 Excel',
    color: 'green'
  },
  {
    icon: Clock,
    value: '-40%',
    label: 'SKU 孵化周期',
    desc: '在线审批，版本可追溯',
    color: 'blue'
  },
  {
    icon: Zap,
    value: '-70%',
    label: '产品研发周期',
    desc: 'AI 辅助设计，快速出样稿',
    color: 'purple'
  },
  {
    icon: Coins,
    value: '+30%',
    label: '资金回笼率',
    desc: '自动催款，凭证自动生成',
    color: 'red'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1F2329] to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              可量化的业务价值
            </h2>
            <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              泊冉 IP 运营数智化解决方案，让每一个环节都可测量、可优化
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group"
            >
              <div className={`w-16 h-16 mx-auto bg-${metric.color}-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className={`text-${metric.color}-400`} size={32} />
              </div>
              
              <div className={`text-5xl font-bold mb-2 text-${metric.color}-400`}>
                {metric.value}
              </div>
              
              <div className="text-lg font-semibold text-white mb-2">
                {metric.label}
              </div>
              
              <p className="text-sm text-slate-400">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
