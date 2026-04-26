'use client'

import { motion } from 'framer-motion'
import { Globe, Languages, Clock, TrendingUp } from 'lucide-react'

const metrics = [
  {
    icon: Globe,
    value: '120+',
    label: '国家/地区',
    description: '全球业务覆盖范围',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Languages,
    value: '30+',
    label: '语种支持',
    description: '界面+内容多语',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: Clock,
    value: '2周',
    label: '上线周期',
    description: '海外业务快速部署',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: TrendingUp,
    value: '98.5%+',
    label: '交付成功率',
    description: '供应商OTD指标',
    color: 'text-[#E60012]',
    bgColor: 'bg-red-50',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-300 font-semibold tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            全球化运营业务价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition"
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-slate-300">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Value Points */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">🏢 双数据中心</h4>
            <p className="text-slate-300 text-sm">国内+新加坡双数据中心部署，以保障数据合规与低延迟访问</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">🔒 安全合规</h4>
            <p className="text-slate-300 text-sm">通过等保三级认证，符合GDPR等全球数据隐私法规要求</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">🚀 快速落地</h4>
            <p className="text-slate-300 text-sm">数万企业经营运维经验积累，两周完成一国业务上线</p>
          </div>
        </div>
      </div>
    </section>
  )
}
