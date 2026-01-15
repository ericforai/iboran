'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Scale, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: TrendingUp,
    title: '高标准 · 统一规范',
    description: '制定企业级主数据管理体系，统一定义数据标准。消除“数出多门”，确保各业务系统间数据语言的一致性。'
  },
  {
    icon: CheckCircle,
    title: '高质量 · 黄金数据',
    description: '通过智能清洗与严格的准入规则，消除重复与错误数据。打造企业“黄金数据”，为经营分析与AI决策提供精准底座。'
  },
  {
    icon: Scale,
    title: '高效率 · 互联互通',
    description: '自动化分发与实时同步机制，打通OA、ERP、CRM等系统孤岛。支持移动端审批与协作，大幅提升数据流转效率。'
  }
]

export function ValueSection() {
  return (
    <section className="py-24 bg-blue-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            数据驱动价值创造
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            用友 BIP MDM 不仅解决数据治理难题，更致力于挖掘数据资产的潜在价值
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-200">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
