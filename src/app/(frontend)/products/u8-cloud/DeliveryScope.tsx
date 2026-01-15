'use client'

import { motion } from 'framer-motion'
import { Check, Info, AlertCircle } from 'lucide-react'

const scopes = [
  {
    category: '标准包含服务',
    icon: <Check className="w-5 h-5 text-green-500" />,
    items: [
      '标准云 ERP 模块部署（财务/供应链/人力等）',
      '集团组织架构及多组织协同策略配置',
      '常用报表与管理看板的标准模板导入',
      '核心岗位的标准操作流程培训 (SOP)',
      '上线初期（1个月）的驻场/远程伴随服务'
    ]
  },
  {
    category: '增值/可选服务',
    icon: <Info className="w-5 h-5 text-blue-500" />,
    items: [
      '复杂第三方系统的定制化 API 深度集成',
      '老旧系统历史数据的全量精细化清洗迁移',
      '基于 YonBuilder 的个性化业务流程二次开发',
      '异地多地中心的灾备架构规划与部署',
      '长期派驻式 IT 咨询与驻场运维保障'
    ]
  },
  {
    category: '不包含/界定边界',
    icon: <AlertCircle className="w-5 h-5 text-slate-400" />,
    items: [
      '企业内部局域网、服务器硬件环境的搭建',
      '非 U8 cloud 系统本身故障的第三方代维',
      '涉及到非数智化转型范围的业务战略咨询',
      '非约定的、临时增加的大型功能定制需求'
    ]
  }
]

export default function DeliveryScope() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">界定清晰，减少扯皮</h2>
          <p className="text-lg text-slate-600">我们始终坚持“透明交付”，明确每一分投入所对应的颗粒度，确保项目按期保质上线。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <motion.div
              key={scope.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#1F2329] mb-8 flex items-center gap-3">
                {scope.icon}
                {scope.category}
              </h3>
              <ul className="space-y-4">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm lg:text-base leading-relaxed">
                    <div className="mt-2 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm italic">
          * 详细交付清单以最终签署的《项目实施方案》为准。
        </div>
      </div>
    </section>
  )
}
