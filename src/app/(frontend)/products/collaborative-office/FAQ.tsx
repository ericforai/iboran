'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'A8 协同平台的典型实施周期是多久？',
    answer: '标准模块上线通常需要 1-2 个月。如果涉及复杂的异构系统集成（如 ERP 对接）或大规模的 CAP 业务定制，周期通常在 3-6 个月。我们将根据您的具体蓝图进行分期规划交付。'
  },
  {
    question: '系统是否支持国产软硬件环境（信创适配）？',
    answer: 'A8 协同平台已实现全栈信创适配，支持包括中科方德、中标麒麟等国产 OS，华为鲲鹏、龙芯、飞腾等国产芯片，以及达梦、人大金仓、人大金仓等国产数据库，确保政务及国资组织的安全办公需求。'
  },
  {
    question: 'CAP 低代码平台能实现哪些业务应用？',
    answer: 'CAP 平台具备极强的灵活性，无需编程即可搭建人事管理、合同审批、费控管理、采购申请、供应商协同等多种业务应用，并能与 A8 原生的流程引擎无缝打通。'
  },
  {
    question: '如何解决与现有 ERP/HR 系统的“信息孤岛”问题？',
    answer: '提供的协同集成平台（CIP）预置了丰富的集成插件，支持主数据同步、单点登录（SSO）、消息穿透及双向数据流转，可将 OA 作为企业的统一工作入口（Portal）。'
  },
  {
    question: '移动端支持哪些接入方式？',
    answer: '除了原生的移动办公平台 M3 外，我们还支持通过微协同套件直接与企业微信、钉钉、飞书、华为云 WeLink 等主流移动办公平台集成，实现“一套后台，多端入口”。'
  },
  {
    question: '系统的扩展性如何，能够支撑集团级管理吗？',
    answer: 'A8 专为中大型、集团化组织设计，具备多级组织架构支撑、一人多岗处理、集团公文管理等大型组织特性，并支持私有云集群部署，可支撑数万人的高并发同步使用。'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052D9] text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>常见问题解答</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">关于 A8 交付的常见疑问</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden hover:border-slate-200 transition-colors">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-[#1F2329] leading-tight pr-8">{faq.question}</span>
                {activeIndex === idx ? (
                  <Minus className="w-5 h-5 text-[#E60012] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-50 bg-slate-50/30">
                      {faq.answer}
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
