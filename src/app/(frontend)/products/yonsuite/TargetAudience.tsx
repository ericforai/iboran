'use client'

import { motion } from 'framer-motion'
import { Users, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

const targets = [
  {
    title: '适用对象',
    icon: <Users className="w-6 h-6 text-[#0052D9]" />,
    items: [
      '高成长型企业（Mid-market Growth Enterprises）',
      '跨区域、全球化经营的创新企业',
      '追求业财税费票一体化管理的企业',
      '需要快速响应市场变化的电商/零售企业'
    ],
    bg: 'bg-blue-50/50'
  },
  {
    title: '管理现状与痛点',
    icon: <AlertCircle className="w-6 h-6 text-[#E60012]" />,
    items: [
      '系统碎片化：ERP、HR、CRM 各自独立，形成数据孤岛',
      '效率低下：大量手工记账、报销、对账，耗时费力',
      '合规风险：财税管理不规范，难以应对全球化合规要求',
      '难以支撑创新：传统 ERP 架构僵化，无法快速上线新业务'
    ],
    bg: 'bg-red-50/50'
  }
]

export default function TargetAudience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">适用群体与典型现状</h2>
          <p className="text-slate-600 italic">“如果您正在面临系统碎片化、合规性风险或业务响应慢的问题，YonSuite 将是您的理想选择。”</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl ${target.bg} border border-slate-100`}
            >
              <div className="flex items-center gap-3 mb-6">
                {target.icon}
                <h3 className="text-xl font-bold text-[#1F2329]">{target.title}</h3>
              </div>
              <ul className="space-y-4">
                {target.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    {idx === 0 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Not Applicable Situation */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-slate-200 rounded-lg p-2 mt-1">
              <AlertCircle className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <h4 className="font-bold text-[#1F2329] mb-2 text-lg">不适用情况</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                如果您是极小规模的初创个体（无需业财一体化），或需要高度深度定制、无法接受标准化 SaaS 迭代的项目，YonSuite 可能并不完全契合。
                针对此类需求，我们建议咨询我们的私有化部署方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
