'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'BIP 管理会计如何实现“财管分离”？',
    answer: '通过事项会计中台，对每一笔业务事项进行独立捕获。财务会计基于法定会计准则进行外报处理，管理会计则基于管理口径的成本中心、要素和规则进行内部核算。两者在事项层实现同源分流，互不干扰，以保障外报合规的同时支撑内部精准决策。'
  },
  {
    question: '支持多币种和跨国企业的核算吗？',
    answer: '充分支持。系统具备全领域拉通的多币种（组织币、账簿币、集团币、全局币）折算和同步核算能力，满足全球布局企业在不同国家、不同币种环境下的数据报告与合并诉求。'
  },
  {
    question: '实施周期大概需要多久？',
    answer: '视企业的业务复杂程度而定。通常标准版实施周期为 3-4 个月。对于跨国大型集团且涉及复杂系统集成的项目，周期通常在 6 个月左右。泊冉会通过成熟的交付模型缩短落地路径。'
  },
  {
    question: '是否可以集成现有的 MES 或 CRM 系统？',
    answer: '是的。BIP 管理会计通过事项中台提供标准的 OpenAPI 与 EDI 适配器，可以快速打通主流 MES、CRM、SRM 等业务云，实现真正的“业务发生即财务发生”。'
  },
  {
    question: '数据安全和隐私如何保障？',
    answer: '系统通过等保三级认证，支持细粒度的数据权限设置（到行、到维度）。所有敏感数据传输均经过强加密处理，并提供全生命周期的审计日志记录。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
             常见问题解答
          </h2>
          <p className="text-slate-500">
             消除疑虑，快速开启您的数智化管理会计之旅。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-200 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                   <div className="flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-bold text-slate-800">{faq.question}</span>
                   </div>
                   <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                   {openIndex === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                        <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-0">
                           <div className="pt-4">
                              {faq.answer}
                           </div>
                        </div>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
