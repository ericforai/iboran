'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Users, Settings, FolderKanban, BrainCircuit } from 'lucide-react'

const scenarios = [
  {
    title: '人力共享运营',
    icon: Users,
    problem: '人力资源管理分散，各单位重复建设，员工服务体验差，HR事务性工作繁重，无法聚焦战略人力资源管理',
    solution: '五位一体实现分层分级、全员感知的人力共享运营：业务管理、共享运营、自助服务、数据分析、角色门户一体化建设',
    outcome: '从改善管理效率到实现人才价值提升，实现全员自助、简单体验、智能服务，HR从事务型向战略型转型',
  },
  {
    title: '设备全生命周期',
    icon: Settings,
    problem: '设备台账碎片化，编码不统一，设备管理与生产、供应、财务脱节，无法实现设备全生命周期精细化管理',
    solution: 'IOT+点检定修，建立设备的两棵树管理，实现设备编码五码合一（物资、设备、功能位置、分类、资产），设备履历化管理',
    outcome: '设备五码合一实现管理与业务财务一体化，履历化全生命周期管理从投用、点巡检、保养、检修、维修到报废',
  },
  {
    title: '项目物资一体化',
    icon: FolderKanban,
    problem: '项目管理与物资、资产、财务割裂，工程进度、材料消耗、成本归集难以协同，项目全生命周期管控困难',
    solution: '实现项目物资资产财务一体化全生命周期管理：前期管理、立项、预算、进度、合同、物资、验收、决算转固全流程贯通',
    outcome: '一图一表可视化管理，实现材料成本、资金需求、施工进度、安全质量的全过程管控',
  },
  {
    title: '智能生产运营',
    icon: BrainCircuit,
    problem: '生产调度依赖人工经验，设备故障被动维修，缺乏预测性分析，生产运营智能化水平不足',
    solution: '基于大数据分析、深度学习、人工智能实现数据驱动的科学决策：智能计划、智能调度、预测性维护、数字孪生',
    outcome: '实现设备预测性维护、AI故障诊断、智能运维，某煤矿通过智能设备运维减少非计划停产37次，累计减少影响产量11.6万吨',
  },
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <scenario.icon size={18} />
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* Scenario Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Problem-Solution-Outcome */}
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-2">
                  😣 行业痛点
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  💡 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* Right: Visual Placeholder */}
            <div className="bg-gradient-to-br from-slate-100 to-amber-50 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = scenarios[activeTab].icon
                    return <IconComponent size={40} className="text-amber-600" />
                  })()}
                </div>
                <p className="text-lg font-bold text-[#1F2329]">{scenarios[activeTab].title}</p>
                <p className="text-sm text-slate-500 mt-2">能源行业核心场景</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
