'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, BrainCircuit, Activity, PieChart, Layers } from 'lucide-react'

const tabs = [
  {
    id: 'modeling',
    label: '多维建模与平台',
    icon: Database,
    title: 'BIP 自研多维数据库 (M-OLAP)',
    description: '基于自主研发的 MDS 高性能多维数据库引擎，提供灵活的多维数据建模能力。',
    details: [
      '亿级数据卷积计算 < 1秒，内存占用降低 60%',
      '支持多业态、多层级、全球化企业的复杂组织建模',
      '类 Excel 的全可视化的规则配置，无需编写代码'
    ]
  },
  {
    id: 'budgeting',
    label: '全面预算编制',
    icon: Layers,
    title: '全场景预算编制体系',
    description: '覆盖业务计划、财务预算、资金预算等全类型预算编制，支持多版滚动预测。',
    details: [
      '支持年度、季度、月度等多种滚动预测模式',
      '内置多种预测模型（历史均值、增长率、回归分析等）',
      '灵活定义的编报流程，支持即时审批与协作'
    ]
  },
  {
    id: 'control',
    label: '执行与控制',
    icon: Activity,
    title: '刚柔并济的预算控制中台',
    description: '构建统一的预算控制中心，打通采购、商旅、费控等异构系统，实现事前、事中控制。',
    details: [
      '支持刚性控制、柔性预警等多种控制策略',
      '实时预算扣减与释放，确保预算执行准确性',
      '全链路单据联查，从凭借可追溯至原始业务单据'
    ]
  },
  {
    id: 'analysis',
    label: '经营分析与考核',
    icon: PieChart,
    title: '业财融合的深度经营分析',
    description: '打破数据孤岛，实现财务结果到业务动因的层层钻取分析，辅助科学决策。',
    details: [
      '支持目标利润模拟测算（敏感性分析）',
      '预置多套高管驾驶舱与分析模型',
      '分析结果直接关联绩效考核，形成管理闭环'
    ]
  },
  {
    id: 'ai',
    label: 'AI 智能助理',
    icon: BrainCircuit,
    title: 'YonGPT 赋能的数智化体验',
    description: '深度融合大模型能力，提供对话式数据查询与智能归因，重构交互体验。',
    details: [
      '自然语言交互：用人话查数据，秒级生成图表',
      '智能归因分析：自动识别异常波动背后的业务原因',
      '智能看板推送：千人千面的数据服务'
    ]
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

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

          {/* Tab Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 h-full"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                      <tab.icon className="w-8 h-8 text-[#E60012]" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1F2329] mb-4">
                      {tab.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {tab.description}
                    </p>

                    <div className="space-y-4">
                      {tab.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0052D9] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
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
