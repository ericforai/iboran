'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DashboardMockup from './DashboardMockup'
import { CheckCircle2, PieChart, Activity, Target, Settings } from 'lucide-react'

const capabilities = [
  {
    id: 'cost-analysis',
    title: '精细成本核算',
    icon: <PieChart className="w-5 h-5" />,
    description: '支持多维度、跨组织的成本归集与分配，实现产品、订单、工序级的精细化成本核算。',
    features: ['支持分项/综合双视图结转', '多币种、多语言核算', '成本组件明细还原'],
    mockupType: 'cost-analysis' as const
  },
  {
    id: 'standard-cost',
    title: '标准成本管理',
    icon: <Target className="w-5 h-5" />,
    description: '建立完整的标准成本体系，通过 PDCA 循环实现事前控制、事中预警与事后分析。',
    features: ['差异自动计算与回摊', '量价偏差深度分析', '多版本模拟估算'],
    mockupType: 'standard-cost' as const
  },
  {
    id: 'smart-closing',
    title: '智能月结平台',
    icon: <Activity className="w-5 h-5" />,
    description: '全领域适配智能月结工作台，通过规则引擎驱动，实现一键式自动化月结。',
    features: ['自动推算阶层顺序', '实时补差匹配结存', '月结异常自动诊断'],
    mockupType: 'smart-closing' as const
  },
  {
    id: 'multi-org',
    title: '多组织协同',
    icon: <Settings className="w-5 h-5" />,
    description: '支持法人架构与管理架构分离，实现集团化企业的成本平行转移与统一管理。',
    features: ['支持独立成本要素表', '跨法人成本协同', '多口径核算分离'],
    mockupType: 'multi-org' as const
  }
]

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id)
  const activeData = capabilities.find(c => c.id === activeTab)!

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            深度解构：数智化管理会计的核心能力
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从基础核算到智能决策，BIP 管理会计为您提供全栈式能力支柱。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {capabilities.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  activeTab === item.id
                    ? 'bg-blue-600 border-blue-600 shadow-lg text-white'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-4 mb-2">
                   <div className={`${activeTab === item.id ? 'text-white' : 'text-blue-600'}`}>
                      {item.icon}
                   </div>
                   <span className="font-bold">{item.title}</span>
                </div>
                <p className={`text-sm ${activeTab === item.id ? 'text-blue-100' : 'text-slate-400'}`}>
                   {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="w-full lg:w-2/3">
             <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                  >
                     <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-slate-900">{activeData.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{activeData.description}</p>
                        <ul className="space-y-3">
                           {activeData.features.map((feature, i) => (
                             <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                             </li>
                           ))}
                        </ul>
                     </div>
                     <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[32px] blur-2xl opacity-50" />
                        <DashboardMockup type={activeData.mockupType} />
                     </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
