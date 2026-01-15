'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Workflow, Combine } from 'lucide-react'

export default function GlobalIntroduction() {
  const values = [
    {
      title: "AI-Driven (AI 驱动)",
      desc: "内置 YonGPT 企业级大模型，将 AI 深度融入业务场景，实现智能决策与自动化执行。",
      icon: Brain,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Data-Driven (数据驱动)",
      desc: "HTAP 超融合数据架构，支撑亿级数据实时处理，实现全量、全要素、全时空的实时感知。",
      icon: Database,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Process-Native (流程原生)",
      desc: "打破部门孤岛，以原生一体的业务流程连接研供产销服，支撑敏捷创新与组织变革。",
      icon: Workflow,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Integrated (一体化)",
      desc: "技术与业务融合、数据与智能融合，提供从底层架构到应用场景的高标准原生一致性。",
      icon: Combine,
      color: "text-red-600",
      bg: "bg-red-50"
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-6">
            数智使能 商业创新
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            YonBIP 不仅仅是一个 ERP，它是数字经济时代的企业商业创新平台。
            通过“AI X 数据 X 流程”的深度融合，助力企业从信息化走向数智化，重塑竞争优势。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
