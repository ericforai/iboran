'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ClipboardList, Wrench, Cpu, BarChart3, ChevronRight } from 'lucide-react'
import EAMDashboardMockup from './EAMDashboardMockup'

const tabs = [
  {
    id: 'registry',
    title: '资产台账管理',
    desc: '全员、全栈、全域的数字化资产地图。从基础资产卡片到复杂的特种设备、基础设施分类，实现资产位置、状态与责任人的实时全景追踪。',
    icon: <ClipboardList size={22} />,
    metrics: ['盘点效率提升 90%', '账实一致率 100%'],
    features: ['RFID/二维码快速入库', '多维度分类体系', '资产全路径轨迹树']
  },
  {
    id: 'maintenance',
    title: '智能运行维护',
    desc: '从“坏了才修”到“预防为主”。基于工况与运行时间自动触发多级维保计划，闭环工单体系确保维护作业标准化，显著延长资产使用寿命。',
    icon: <Wrench size={22} />,
    metrics: ['非计划停机下降 25%', '维修响应提速 50%'],
    features: ['预防性维保计划', '备品备件联动管理', '移动化执行工单']
  },
  {
    id: 'inspection',
    title: '移动巡检与安全',
    desc: '消除现场管理盲区。移动化巡检工具结合标准化检查清单，实现异常实时捕捉与即时通报，确保特种设备与关键节点的运行合规与安全。',
    icon: <Cpu size={22} />,
    metrics: ['安全事故减少 15%', '巡检质量 100% 留痕'],
    features: ['拍照/视频存证', '离线巡检功能', '隐患自动转工单']
  },
  {
    id: 'analysis',
    title: '资产运营分析',
    desc: '数据驱动，价值量化。全维度分析资产投资回报、运维成本、利用率及折旧情况，为大修、改造或退役报废提供科学决策依据。',
    icon: <BarChart3 size={22} />,
    metrics: ['资产利用率提升 18%', '运维成本降低 12%'],
    features: ['ROI 投资收益分析', '设备健康度打分', '多组织对标看板']
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1F2329] mb-4"
          >
            全生命周期核心管理能力
          </motion.h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            YonBIP EAM 通过“资产+运维+IoT+AI”四位一体架构，构建企业数智化管理底座。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group p-6 text-left rounded-2xl border transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-white border-blue-100 shadow-xl shadow-blue-50/50' 
                    : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab === tab.id ? 'bg-[#0052D9] text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {tab.icon}
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${
                    activeTab === tab.id ? 'text-slate-900' : 'text-slate-600'
                  }`}>
                    {tab.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
                  activeTab === tab.id ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {tab.desc}
                </p>
                {activeTab === tab.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-4 border-t border-slate-100 mt-4 space-y-2"
                  >
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">典型价值指标</div>
                    <div className="flex flex-wrap gap-2">
                      {tab.metrics.map((m, i) => (
                        <span key={i} className="text-[11px] font-bold text-[#E60012] bg-red-50 px-2 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content: Mockup Integration */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="bg-slate-900 rounded-[2rem] p-4 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/20 rounded-b-xl z-20" />
              <div className="rounded-[1.5rem] overflow-hidden">
                <EAMDashboardMockup activeTab={activeTab} />
              </div>
            </div>

            {/* Feature Pills */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {tabs.find(t => t.id === activeTab)?.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <ChevronRight size={14} className="text-[#0052D9]" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

