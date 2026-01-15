'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Building2, HelpCircle } from 'lucide-react'

const targets = [
  {
    title: '适用对象',
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    items: [
      '处于快速成长期的中大型企业集团',
      '具有多级组织、跨地域经营特征的企业',
      '追求业务数字化、管理敏捷化的转型企业',
      '对信创安全、合规管控有刚性需求的单位'
    ]
  },
  {
    title: '典型症状',
    icon: <HelpCircle className="w-6 h-6 text-orange-500" />,
    items: [
      '组织形态复杂，财务/人力服务手段滞后',
      '系统繁多却不互通，数据孤岛严重',
      '产业链协同差，无法实时支撑经营决策',
      '旧有 IT 架构臃肿，维护成本高且不安全'
    ]
  },
  {
    title: '不适用情况',
    icon: <XCircle className="w-6 h-6 text-slate-400" />,
    items: [
      '纯单体组织且业务极其单一的企业',
      '对云端部署有极端排斥或特殊物理隔离需求',
      '初创期、暂无规范化管理流程的小型团队'
    ]
  }
]

export default function TargetAudience() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">精准匹配您的经营需求</h2>
          <p className="text-lg text-slate-600">明确适用边界，确保 U8 cloud 能在最适宜的土壤中创造最大的业务增量。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, idx) => (
            <motion.div
              key={target.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${
                idx === 1 ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100'
              } hover:shadow-lg transition-shadow`}
            >
              <div className="mb-6">{target.icon}</div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-6">{target.title}</h3>
              <ul className="space-y-4">
                {target.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                    <span className="text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-[#E60012]/5 border border-[#E60012]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Building2 className="w-8 h-8 text-[#E60012]" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#1F2329]">已有 [6000]+ 企业通过 U8 cloud 实现数智飞跃</div>
              <div className="text-slate-500">涵盖制药、生物科技、新材料、羊绒纺织等多个成长型行业。</div>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
            立即进行匹配度分析
          </button>
        </div>
      </div>
    </section>
  )
}
