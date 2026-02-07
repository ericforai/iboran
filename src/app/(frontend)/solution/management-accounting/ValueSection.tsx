'use client'

import { motion } from 'framer-motion'

const METRICS = [
  { value: '1日', label: '集团结算周期' },
  { value: '99%以上', label: '成本还原率' },
  { value: '40+', label: '成本组件量' },
  { value: '98%', label: '会计分录自动化' }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#001529] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">助力企业实现卓越经营价值</h2>
          <p className="text-slate-400">通实时、精细、智能的成本管理，驱动企业利润增长与转型升级。</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-5xl lg:text-6xl font-bold text-[#E60012] mb-3">
                {metric.value}
              </div>
              <div className="text-slate-300 font-medium text-lg">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
