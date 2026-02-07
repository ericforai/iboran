'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: '低代码开发平台适合构建复杂的企业级应用吗？',
    answer: '非常合适。YonBuilder 支持"零代码、低代码、全代码"的一体化开发模式。对于轻量级应用，业务人员可以通过零代码快速搭建；对于复杂的核心业务系统，专业开发者可以利用低代码+全代码的方式进行深度定制，同时平台提供微服务架构、容器化部署等企业级能力支撑。'
  },
  {
    question: '如果平台功能不满足需求，支持自定义代码扩展吗？',
    answer: '支持。YonBuilder 提供了强大的脚本引擎和插件扩展机制。前端支持编写 JS 逻辑，后端支持 Java/Python/NodeJS 等语言编写业务逻辑，同时可以通过 Open API 对接外部系统能力，以保障能够满足 绝大部分的个性化需求。'
  },
  {
    question: '平台的数据安全性如何保障？',
    answer: '平台遵循企业级安全标准构建。在数据层面，提供字段级加密、脱敏存储；在传输层面，全链路 HTTPS 加密；在访问层面，支持细粒度的 RBAC 权限控制和多因素认证。此外，YonBuilder 已通过等保三级、ISO27001 等多项安全认证。'
  },
  {
    question: '是否支持私有化部署？',
    answer: '支持。YonBuilder 提供公有云、私有云、混合云等多种部署模式。对于对数据主权有严格要求的企业，可以选择私有化部署方案，将平台部署在企业内部的数据中心，同时依然享受云原生的技术红利。'
  },
  {
    question: '如何与企业现有的 ERP 或 OA 系统集成？',
    answer: 'YonBuilder 内置了 Integration Studio（融合集成平台），预置了 300+ 通用连接器（如 SAP、Salesforce、用友全系产品等）。通过可视化的集成流编排，可以零代码实现异构系统间的数据同步与业务协同。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            常见问题解答
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#E60012] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
