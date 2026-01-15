'use client'

import { AlertTriangle, ServerCrash, Smartphone, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PainPoints() {
  const points = [
    {
      icon: AlertTriangle,
      title: "原厂服务终止",
      description: "部分老版本产品已停止原厂维护，面临安全漏洞、法律法规更新滞后等风险，系统稳定性难以保障。"
    },
    {
      icon: ServerCrash,
      title: "系统孤岛与性能瓶颈",
      description: "传统架构难以支撑高并发业务，数据分散在不同系统中，形成信息孤岛，无法实时支持经营决策。"
    },
    {
      icon: Smartphone,
      title: "移动化与协同缺失",
      description: "缺乏原生移动应用支持，难以满足现代企业随时随地办公的需求，内外部协同效率低下。"
    },
    {
      icon: Zap,
      title: "难以响应业务创新",
      description: "僵化的系统架构难以适应快速变化的业务模式，新业务上线周期长，制约企业创新发展。"
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">传统 ERP 面临的挑战</h2>
          <p className="text-lg text-slate-600">
            随着数字经济的发展，传统 ERP 系统在支撑企业快速应变、智能决策方面逐渐显现不足
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
