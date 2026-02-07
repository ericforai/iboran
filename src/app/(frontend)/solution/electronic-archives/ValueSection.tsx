'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, Users, Zap } from 'lucide-react'

const metrics = [
  {
    value: '99%',
    label: '调档查询效率提升',
    description: '从传统的 0.5 天缩短至秒级获取，随时随地在线查阅。',
    icon: Zap,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    value: '33%',
    label: '档案管理费用减少',
    description: '通过去纸化管理，大幅降低库房租赁、纸张及人力维护成本。',
    icon: TrendingUp,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    value: '80%',
    label: '在线审计效率提升',
    description: '电子档案在线利用全流程监管，支持远程审计与智能化抽凭。',
    icon: Users,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    value: '99%以上',
    label: '档案安全性保障',
    description: '多重加密与备份机制，通过四性检测，以保障数据永不丢失。',
    icon: ShieldCheck,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
]

export default function ValueSection() {
  return (
    <section className="py-32 bg-[#0052D9] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">释放档案数据价值</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            通过数智化手段，我们将静止的档案转化为流动的知识资产，助力企业降本增效、保值增值。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${metric.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-bold text-blue-100 mb-4 whitespace-nowrap">{metric.label}</div>
              <p className="text-sm text-blue-200/80 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
