'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'TES 解决方案支持哪些商旅平台集成？',
    answer: 'TES 原生集成了携程商旅、同程商旅、滴滴企业版等主流平台。通过预置的 API 接口，可以实现订单数据的实时同步、统一支付与对账，无需额外开发。'
  },
  {
    question: '如何保证发票处理的合规性？',
    answer: '系统内置了基于国家税务总局标准的 OCR 识别引擎与验真接口。每张发票在录入时会自动进行真伪核验、重复报销检查以及黑名单校验，确保 100% 合规。'
  },
  {
    question: '支持私有化部署吗？',
    answer: '支持。TES 基于 YonBIP 云原生架构，既支持公有云 SaaS 订阅模式，也支持私有化部署到客户自有的 IDC 或专有云环境，满足大型集团的数据主权要求。'
  },
  {
    question: '实施周期大概需要多久？',
    answer: '标准版实施通常在 4-8 周。其中蓝图配置约 2 周，接口联调与测试约 2-3 周，用户培训与上线准备约 1-2 周。大型定制化项目的周期会根据需求评估而定。'
  },
  {
    question: '银企直联是否支持所有银行？',
    answer: '目前已支持包括工、农、中、建、交在内的 2500+ 家国内银行及部分外资银行。通过银企联组件，可以直接在系统内发起支付指令并获取电子回单。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            常见问题
          </h2>
          <p className="text-slate-600">
            关于系统部署、功能集成与售后服务的解答
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#1F2329] pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-[#0052D9] border-[#0052D9] text-white' : 'text-slate-400'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
