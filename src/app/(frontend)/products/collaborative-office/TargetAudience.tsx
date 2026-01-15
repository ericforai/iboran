'use client'

import { motion } from 'framer-motion'
import { Users, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

const targets = [
  {
    title: '适用对象',
    icon: <Users className="w-6 h-6 text-[#0052D9]" />,
    items: [
      '中大型企事业单位、集团化组织',
      '政府机构、国资背景组织及事业等机构',
      '需要实现“全栈信创”国产化替代的组织',
      '跨区域、异地办公协作需求强烈的企业'
    ],
    bg: 'bg-blue-50/50'
  },
  {
    title: '典型现状与痛点',
    icon: <AlertCircle className="w-6 h-6 text-[#E60012]" />,
    items: [
      '信息孤岛：ERP、HR、财务系统数据互不通，审批繁琐',
      '移动力弱：无法有效集成微信/钉钉，移动办公体验差',
      '业务难定：低代码能力缺失，业务场景变化无法快速响应',
      '纸质依赖：流程不规范，重度依赖纸质签章，效率低下'
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
          <p className="text-slate-600 italic">“如果您正在面临系统碎片化、流程合规性差或信创替代压力，A8 协同管理平台将是您的理想选择。”</p>
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
                如果您是 10 人以下的极小规模组织（仅需即时通讯），或不需要复杂的审批流、集成需求，A8 的强大功能可能会造成资源的“过载”。
                针对此类纯轻量办公需求，我们建议咨询我们的低代码应用包或轻量级协作工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
