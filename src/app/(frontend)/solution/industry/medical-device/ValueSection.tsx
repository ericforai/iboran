'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '近100%',
    label: '行业准入与监管合规满足',
    description: '全面通过 GMP/GSP 体系验证'
  },
  {
    value: '40%+',
    label: '跨部门业务协同效率提升',
    description: '打通研发与产供销数据孤立'
  },
  {
    value: '60%',
    label: '质量追溯时间大幅缩减',
    description: 'UDI 条码化实现秒级透明定位'
  },
  {
    value: '2Hr',
    label: '企业级 AI 智能体构建',
    description: '快速融合知识库赋能业务场景'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">数智赋能行业价值</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            通过一体化平台建设，助力医疗器械企业在波动的市场环境中回归价值增长。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-[#0052D9] mb-2">{metric.value}</div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-sm text-slate-400">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
