'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Cloud, Cpu, Share2 } from 'lucide-react'

const specs = [
  {
    title: '部署与部署',
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { label: '部署模式', value: '纯公有云 SaaS' },
      { label: '服务可用性', value: '99.95% SLA' },
      { label: '扩容能力', value: '弹性自动伸缩' }
    ]
  },
  {
    title: '安全保障',
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { label: '等保认证', value: '三级等保' },
      { label: '数据加密', value: 'AES-256 / SSL' },
      { label: '权限管控', value: '多级 RBAC 模型' }
    ]
  },
  {
    title: '技术底座',
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { label: '核心架构', value: 'iuap 云原生底座' },
      { label: '微服务群', value: '高性能微服务治理' },
      { label: '开发平台', value: 'YonBuilder 低代码' }
    ]
  },
  {
    title: '连接集成',
    icon: <Share2 className="w-6 h-6" />,
    items: [
      { label: 'API 接口', value: 'OpenAPI 标准' },
      { label: '集成中心', value: 'LINK 集成能力' },
      { label: '适配器', value: '500+ 标准适配器' }
    ]
  }
]

export default function TechSpecs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">技术规格与集成能力</h2>
          <p className="text-slate-600">领先的云原生架构，确保系统高性能、高可靠与强扩展性。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100/50 flex items-center justify-center text-[#0052D9] mb-6">
                {spec.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-6">{spec.title}</h3>
              <div className="space-y-4">
                {spec.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="font-semibold text-[#1F2329]">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
