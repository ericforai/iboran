'use client'

import { motion } from 'framer-motion'
import { ServerCrash, FileQuestion,  GitFork } from 'lucide-react'

const painPoints = [
  {
    icon: ServerCrash,
    title: '数据孤岛林立',
    description: '各业务系统（ERP, CRM, SRM）数据独立存储，客户、物料等关键主数据编码不一致，导致跨系统协同困难，报表统计口径无法统一。',
    delay: 0
  },
  {
    icon: FileQuestion,
    title: '数据质量堪忧',
    description: '缺乏统一的录入规范与校验机制，系统中充斥着重复、错误、缺失的脏数据，严重影响经营分析准确性，误导管理层决策。',
    delay: 0.1
  },
  {
    icon: GitFork,
    title: '标准缺乏治理',
    description: '缺乏企业级的主数据管理制度与流程，数据变更随意，缺乏版本管理与全生命周期追溯，合规性风险高，资产价值难以沉淀。',
    delay: 0.2
  }
]

export function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            您的企业是否也面临这些 <span className="text-blue-600">数据挑战</span>？
          </h2>
          <p className="text-lg text-slate-600">
            在数字化转型的深水区，主数据不仅仅是IT问题，更是影响业务效率与决策质量的关键瓶颈。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: point.delay }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
