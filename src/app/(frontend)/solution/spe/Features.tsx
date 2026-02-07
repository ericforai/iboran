'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Activity, PieChart, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type DashboardType = 'modeling' | 'budgeting' | 'control' | 'analysis'

const tabs: Array<{
  id: DashboardType
  label: string
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}> = [
  {
    id: 'modeling',
    label: '多维建模与平台',
    icon: Database,
    title: 'BIP 自研多维数据库 (M-OLAP)',
    description: '基于自主研发的 MDS 高性能多维数据库引擎，实现财务核算到经营分析的实时映射。',
    details: [
      '亿级数据瞬间卷积计算 < 1秒，性能提升 10倍以上',
      '支持从法人组织到管理纬度的全量镜像与灵活建模',
      '内存占用降低 60%，支持超大规模并发与复杂计算'
    ]
  },
  {
    id: 'budgeting',
    label: '全面预算管理',
    icon: Layers,
    title: '全场景预算编制与模拟',
    description: '覆盖战略目标分解、全面预算编制与多版滚动预测，支持业务与财务深度合一。',
    details: [
      '支持多层级、多版本的沙箱模拟，评估不同战略的影响',
      '内置 AI 智能预测模型，基于历史趋势精准预测未来指标',
      '全可视化的规则配置，实现从业务计划到财务预算的联动'
    ]
  },
  {
    id: 'control',
    label: '执行与控制',
    icon: Activity,
    title: '刚柔并济的预算控制中台',
    description: '构建统一的预算控制中心，打通采购、费用、生产等全链路，实现事前与事中看板级管控。',
    details: [
      '支持立项、合同、订单到支付的全链路实时刚性控制',
      '跨系统规则统一维护，多系统调用实现一致性管控策略',
      '全链路单据追溯，从分析结果可直接穿透至原始单据'
    ]
  },
  {
    id: 'analysis',
    label: '经营分析与归因',
    icon: PieChart,
    title: '业财融合的深度价值挖掘',
    description: '透过财务数据看业务，实现多维度的经营分析与智能归因，辅助科学决策与绩效锚定。',
    details: [
      '提供智能归因分析：自动识别报表异常波动背后的业务动因',
      '高管驾驶舱：集成利润模拟测算，支持敏感性分析',
      '分析结果直接关联考核，以保障 PDCA 闭环管理落地'
    ]
  }
]

import SPEDashboardMockup from './SPEDashboardMockup'

export default function Features() {
  const [activeTab, setActiveTab] = useState<DashboardType>(tabs[0].id)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            五位一体的核心能力
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-slate-600">
            基于技术底座与业务场景的深度融合，打造可成长的企业绩效管理平台
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Tab Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#E60012] text-white shadow-lg shadow-red-100'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-white text-slate-400'
                }`}>
                  <tab.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-10"
                  >
                    {/* Content Section */}
                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-slate-100">
                        <tab.icon className="w-8 h-8 text-[#E60012]" />
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl font-bold text-[#1F2329] mb-6">
                        {tab.title}
                      </h3>
                      <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        {tab.description}
                      </p>

                      <div className="grid md:grid-cols-1 gap-6">
                        {tab.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0052D9] flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-700 text-lg font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Mockup Section - Linked to Tab */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-2xl p-2 shadow-2xl border border-slate-200 overflow-hidden"
                    >
                      <SPEDashboardMockup type={tab.id} />
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
