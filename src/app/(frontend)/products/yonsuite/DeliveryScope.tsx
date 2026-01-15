'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Info, XCircle } from 'lucide-react'

const scopes = [
  {
    title: '包含内容 (Standard)',
    icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    items: [
      'YonSuite 公有云 SaaS 账号订阅',
      '核心模块配置与上线辅导',
      '标准业财一体化集成方案',
      'YonBuilder 低代码开发环境（标准版）'
    ]
  },
  {
    title: '可选内容 (Add-on)',
    icon: <Info className="w-5 h-5 text-blue-500" />,
    items: [
      '第三方电商/仓储系统深度定制对接',
      '大规模历史数据清洗与迁移服务',
      '特定场景的低代码深度定制开发',
      '高级别 SLA 运维保障服务'
    ]
  },
  {
    title: '不包含内容 (Excluded)',
    icon: <XCircle className="w-5 h-5 text-slate-400" />,
    items: [
      '企业私有服务器硬件及运维费用',
      '基础版账号之外的额外域名/流量费',
      '涉及第三方系统的 Licence 授权费',
      '离线环境部署（YonSuite 仅支持公有云）'
    ]
  }
]

export default function DeliveryScope() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">交付范围与边界检查</h2>
          <p className="text-slate-400 italic">明确边界，拒绝扯皮，确保交付成果可预期。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                {scope.icon}
                <h3 className="text-xl font-bold uppercase tracking-wide">{scope.title}</h3>
              </div>
              <ul className="space-y-4">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-[#0052D9] mt-2 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          * 以上范围基于标准实施方法论，具体以合同附件《交付任务书》为准。
        </div>
      </div>
    </section>
  )
}
