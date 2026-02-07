'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Wallet, Users, BarChart3 } from 'lucide-react'

const tabs = [
  {
    id: 'control',
    label: '精细化管控',
    icon: LayoutDashboard,
    title: '多层级 WBS 与全过程控制',
    desc: '告别粗放式管理，通过 WBS 将项目拆解为可执行、可监控的最小单元，实现从立项到交付的全过程透视。',
    features: [
      { title: '三维 WBS 分解', desc: '支持按资金、预算、执行三个维度建立 WBS，满足不同角色的管理需求。' },
      { title: '滚动预算控制', desc: '支持年度预算与项目全生命周期预算的双重控制，灵活应对变更。' },
      { title: '里程碑管理', desc: '关键节点强控，以保障交付物质量与进度符合预期，降低交付风险。' }
    ]
  },
  {
    id: 'finance',
    label: '业财一体化',
    icon: Wallet,
    title: '无预算不支出，不仅是口号',
    desc: '彻底打通业务与财务的围墙，实现业务发生即财务核算的实时联动，让成本数据真实、准确、及时。',
    features: [
      { title: '智能成本归集', desc: '工时、报销、采购无缝关联项目，人工费、间接费自动分摊。' },
      { title: '银企直联支付', desc: '审批通过后直接驱动网银付款，资金流向全程可追溯。' },
      { title: '自动开票与回款', desc: '根据项目进度自动触发开票申请，回款自动核销应收账款。' }
    ]
  },
  {
    id: 'resource',
    label: '资源与协同',
    icon: Users,
    title: '最大化人才效能',
    desc: '人才是项目型企业的核心资产。通过数字化手段优化资源配置，提升团队协作效率。',
    features: [
      { title: '全员移动工时', desc: '支持移动端随时随地填报工时，自动计算项目人工成本。' },
      { title: '跨项目资源调度', desc: '可视化的资源负荷视图，避免人员闲置或过度负荷。' },
      { title: '绩效量化评估', desc: '基于项目贡献度的客观绩效数据，激发团队自驱力。' }
    ]
  },
  {
    id: 'risk',
    label: '经营与风控',
    icon: BarChart3,
    title: '数据驱动经营决策',
    desc: '从“事后财务核算”转向“事中经营分析”，让每一个项目都成为盈利单元。',
    features: [
      { title: '实时 P&L 看板', desc: '无需等到月底，随时查看项目单体的收入、成本与毛利。' },
      { title: '现金流监控', desc: '两金（应收、存货）专项分析，加速资金周转，降低坏账风险。' },
      { title: '合规风险预警', desc: '内嵌 IPO 合规控制点，自动识别经营过程中的异常风险。' }
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
            全场景数智化能力矩阵
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于用友 YonBIP 强大的技术底座，为您构建 &quot;PaaS + SaaS&quot; 一体化的项目管理平台。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Tabs Navigation (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-[#E60012] text-white border-[#E60012] shadow-lg shadow-red-100'
                    : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                  <tab.icon size={24} />
                </div>
                <div>
                  <div className="font-bold text-lg">{tab.label}</div>
                  <div className={`text-xs mt-1 ${activeTab === tab.id ? 'text-white/80' : 'text-slate-400'}`}>
                    {tab.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area (Right) */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#F7F8FA] rounded-2xl p-8 md:p-12 h-full"
                  >
                    <div className="mb-8">
                       <h3 className="text-2xl font-bold text-[#1F2329] mb-4">{tab.title}</h3>
                       <p className="text-slate-600 leading-relaxed text-lg">{tab.desc}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {tab.features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                          <h4 className="font-bold text-[#1F2329] mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E60012] rounded-full"></div>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {feature.desc}
                          </p>
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
