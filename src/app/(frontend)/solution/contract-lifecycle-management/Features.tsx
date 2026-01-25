'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PenTool, Key, ShieldCheck, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import CLMDashboardMockup from './CLMDashboardMockup'

type CLMViewType = 'drafting' | 'review' | 'signing' | 'monitoring'

const features: Array<{
  id: string
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
  viewType: CLMViewType
}> = [
  {
    id: 'drafting',
    icon: PenTool,
    title: '智能起草与范本',
    description: '通过标准范本库与权限控制，从源头规范合同文本。支持 Office 在线协同编辑与水印防伪。',
    bullets: ['标准范本库管理', '在线协同编辑', '条款参数化填充', '自动版本比对'],
    viewType: 'drafting'
  },
  {
    id: 'review',
    icon: ShieldCheck,
    title: 'AI 智能合规审查',
    description: '基于 NLP 技术的智能审查引擎，自动识别合同中的风险条款、金额错误与合规漏洞。',
    bullets: ['关键条款自动抽取', '相对方资信扫描', '风险合规预警', '审查意见协同'],
    viewType: 'review'
  },
  {
    id: 'signing',
    icon: Key,
    title: '全集成电子签约',
    description: '无缝集成电子签章服务，支持多方远程会签、身份实名认证与时间戳固化。',
    bullets: ['多方远程签署', 'CA 数字证书认证', '签署身份核验', '防篡改技术'],
    viewType: 'signing'
  },
  {
    id: 'monitoring',
    icon: BarChart3,
    title: '全过程履约监控',
    description: '打破“签完即忘”，实现合同条款的刚性执行管控，自动关联收付款计划与发票。',
    bullets: ['收付款计划提醒', '发票三单匹配', '履约进度看板', '变更中止管理'],
    viewType: 'monitoring'
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            全场景数智化合同管理能力
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从合同起草到履约归档，YonBIP CLM 提供全链路的智能化支持，让合同管理不仅合规，更创造价值。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                  activeTab === idx 
                    ? 'bg-blue-50 border-blue-200 shadow-md transform scale-[1.02]' 
                    : 'bg-white border-slate-100 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeTab === idx ? 'bg-[#0052D9] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <feature.icon size={20} />
                  </div>
                  <h3 className={`font-bold text-lg ${activeTab === idx ? 'text-[#0052D9]' : 'text-slate-700'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${activeTab === idx ? 'text-slate-600' : 'text-slate-500'}`}>
                  {feature.description}
                </p>
                <AnimatePresence>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="grid grid-cols-2 gap-2">
                        {feature.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Visual Area */}
          <div className="lg:w-2/3">
            <div className="sticky top-24">
              <div className="bg-slate-100 rounded-2xl p-2 border border-slate-200 shadow-xl">
                 <AnimatePresence mode='wait'>
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                       <CLMDashboardMockup type={features[activeTab].viewType} />
                    </motion.div>
                 </AnimatePresence>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/50 blur-3xl rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
