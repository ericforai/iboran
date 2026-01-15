'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Workflow, GitBranch, Briefcase, FileText, Database, Settings, ShieldCheck } from 'lucide-react'

const tabs = [
  {
    id: 'planning',
    label: '需求与规划',
    icon: GitBranch,
    title: "精准掌控产品方向",
    desc: "打通市场洞察到产品规划的链路，构建以客户为中心的产品创新体系。",
    details: [
      { icon: FileText, text: "结构化需求管理，全程可追溯" },
      { icon: Database, text: "市场竞争分析与产品组合规划" },
      { icon: Layers, text: "IPD 流程固化，确保商业成功" }
    ],
    metric: { value: "25%", label: "需求实现率提升" }
  },
  {
    id: 'design',
    label: '产品设计 PDM',
    icon: Layers,
    title: "高效协同设计平台",
    desc: "深度集成主流 CAD 工具，实现机电软多学科异地协同设计。",
    details: [
      { icon: Briefcase, text: "图文档与 BOM 一体化管理" },
      { icon: Workflow, text: "零部件分类管理与标准化重用" },
      { icon: Settings, text: "多版本管理，确保数据准确唯一" }
    ],
    metric: { value: "80%", label: "数据查找时间减少" }
  },
  {
    id: 'project',
    label: '项目管理',
    icon: Briefcase,
    title: "研发进度透明可视",
    desc: "基于项目计划驱动任务分发，实时监控研发进度、资源与风险。",
    details: [
      { icon: Layers, text: "WBS 任务分解与甘特图监控" },
      { icon: ShieldCheck, text: "研发交付物完整性检查" },
      { icon: Database, text: "工时统计与研发成本核算" }
    ],
    metric: { value: "40%", label: "项目按时交付率提升" }
  },
  {
    id: 'change',
    label: '工艺与变更',
    icon: Workflow,
    title: "闭环变更与制造衔接",
    desc: "打通设计到制造的最后一公里，确保变更准确执行，降低废品率。",
    details: [
      { icon: Settings, text: "EBOM 到 MBOM 的自动转换" },
      { icon: FileText, text: "CMII 标准工程变更闭环管理" },
      { icon: Truck, text: "工艺路线规划与工序卡片管理" }
    ],
    metric: { value: "30%", label: "变更周期大幅缩短" }
  }
]

import { Truck } from 'lucide-react'

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            端到端的核心研发能力
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Header */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab.id === tab.id
                    ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-200'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#0052D9]'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-[#F7F8FA] rounded-2xl p-8 md:p-12 min-h-[400px] flex items-center relative overflow-hidden">
             
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E60012]/5 skew-x-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0052D9]/5 rounded-full blur-3xl"></div>

            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10"
              >
                {/* Left: Text Content */}
                <div>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#0052D9] shadow-sm mb-6">
                    <activeTab.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1F2329] mb-4">
                    {activeTab.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {activeTab.desc}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {activeTab.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0052D9]">
                          <detail.icon size={14} />
                        </div>
                        <span className="text-slate-700 font-medium">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Metric Card / Visual */}
                <div className="flex justify-center">
                  <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center border-t-4 border-[#E60012]">
                     <div className="text-6xl font-black text-[#1F2329] mb-4">
                       {activeTab.metric.value}
                     </div>
                     <div className="text-slate-500 font-bold mb-6">
                       {activeTab.metric.label}
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: activeTab.metric.value.replace('+', '')}}
                         transition={{ delay: 0.4, duration: 1 }}
                         className="h-full bg-[#E60012]"
                       />
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
