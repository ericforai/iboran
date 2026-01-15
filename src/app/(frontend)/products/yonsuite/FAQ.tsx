'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'YonSuite 的上线周期一般是多久？',
    answer: '作为纯公有云 SaaS 模式，YonSuite 部署极快。标准业财一体化模块最快支持 1 个月完成实施并上线使用，具体周期视业务复杂度而定。'
  },
  {
    question: '作为 SaaS 产品，是否支持个性化定制？',
    answer: '支持。YonSuite 内置了强大的 YonBuilder 低代码开发平台，企业可以基于标准功能进行快速扩展、流程定制或开发全新的业务应用。'
  },
  {
    question: 'YonSuite 如何支持企业的全球化经营？',
    answer: '我们提供全球化的多语言、多币种、多会计准则及合规性支持。出海企业可以在单一平台上统一管控全球各地的分支机构业务。'
  },
  {
    question: '系统的安全性如何保障？',
    answer: 'YonSuite 通过了国家三级等保认证及多项国际安全认证，采用金融级数据加密技术，并支持精细化的 RBAC 权限管控模型。'
  },
  {
    question: 'YonSuite 的收费模式是怎样的？',
    answer: '采用灵活的 SaaS 订阅收费模式，主要由账号费（按并发/用户数）及模块费、实施咨询费构成。企业可以按需订阅，降低初期 IT 投入。'
  },
  {
    question: '如何与我们现有的第三方系统（如电商、MES）对接？',
    answer: 'YonSuite 通过内置的集成中心（LINK）提供开放的 API 接口。我们拥有 500+ 标准适配器，可快速对接主流电商平台、银行系统及工业软件。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HelpCircle className="w-10 h-10 text-[#0052D9] mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">常见问题解答 (FAQ)</h2>
          <p className="text-slate-600 italic">为您解答关于实施周期、费用及技术架构的常见疑问。</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-100 rounded-xl overflow-hidden hover:border-blue-100 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-[#1F2329] pr-8">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-[#0052D9] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 bg-white">
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
