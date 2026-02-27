'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'U8 cloud 主要核心价值是什么？',
    a: '核心价值在于推动企业敏捷经营、轻量化管理、简化 IT 投入。通过云原生架构，解决成长型集团多组织协同难题，实现账务合并与资金集中管控。'
  },
  {
    q: 'U8 cloud 如何支持集团化管控？',
    a: '提供统一的组织建模体系，支持多准则、多币种、跨地域核算。覆盖从合并报表、资金计划到协同办公的全场景集团管控决策。'
  },
  {
    q: '产品的信创适配情况如何？',
    a: 'U8 cloud 是全栈信创 ERP 的先行者，已与鲲鹏、飞腾、统信、龙芯等国产厂商实现深度互认证，拥有 68+ 项互认证证书，满足金融、国资等敏感行业的合规要求。'
  },
  {
    q: '是否能与其他办公或营销系统集成？',
    a: '充分支持。通过 610+ 个标准面向生态的 OpenAPI，支持与用友 BIP、YonSuite 及第三方 CRM、电商、主流办公软件（如飞书、钉钉）快速集成。'
  },
  {
    q: 'U8 cloud 适合多大规模的企业？',
    a: '主要针对具有多组织特征、需要数智化转型的“成长型集团”企业。它既能满足复杂业务的深度应用，又能保持云服务的灵活性与快速交付特性。'
  },
  {
    q: '实施周期通常需要多久？',
    a: '根据业务复杂程度，标准化的模块实施通常在 2-4 个月左右。采用敏捷交付模式，核心场景（如财务协同）最快可实现月度级上线。'
  }
]

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)
  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052D9] text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>常见问题回答</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-6">您关心的，<br/>我们都有专业解答</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              这里的回答涵盖了实施周期、信创合规、集成能力等高频咨询点。如果您有更具体的业务场景需求，欢迎直接咨询行业专家。
            </p>
            <button
              onClick={handleOpenConsult}
              className="px-8 py-3 border-2 border-[#E60012] text-[#E60012] font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              在线咨询专家
            </button>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all ${
                  activeIdx === idx ? 'bg-slate-50 border-blue-200' : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    activeIdx === idx ? 'text-[#0052D9]' : 'text-[#1F2329]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full border transition-all ${
                    activeIdx === idx ? 'bg-[#0052D9] border-[#0052D9] text-white' : 'bg-transparent border-slate-200 text-slate-400'
                  }`}>
                    {activeIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                        {faq.a}
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
