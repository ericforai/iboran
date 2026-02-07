'use client'

import { motion } from 'framer-motion'

const METRICS = [
  { value: '40%', label: '运营成本降低' },
  { value: '80%', label: '核算效率提升' },
  { value: '99%', label: '业务处理准确率' },
  { value: '99%以上', label: '合规风险管控' }
]

export default function ValueSection() {
  return (
    <section className="py-20 bg-[#001529] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#E60012] mb-2">
                {metric.value}
              </div>
              <div className="text-slate-300 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
