'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, FolderKanban, Factory, Calculator, Shield } from 'lucide-react'

const scenarios = [
  {
    icon: FolderKanban,
    title: '项目全生命周期管理',
    problem: 'CDMO企业多项目并行，项目进度分散在各部门，无法实时掌握项目整体情况，项目延期频发，客户投诉增加',
    solution: '建立统一项目管理平台，从项目立项、WBS分解、资源分配、进度跟踪到结项验收全流程在线管理，支持多级项目汇报和预警机制',
    outcome: '项目交付周期缩短30%，项目可视化程度达100%，客户满意度显著提升',
  },
  {
    icon: Factory,
    title: '多组织协同生产',
    problem: '跨地域、跨工厂协同生产，生产进度难以同步，物料配套不及时，生产计划频繁变更导致资源浪费',
    solution: '实现跨组织生产订单协同，统一排产平台，物料需求联动，生产进度实时同步，变更自动触发计划调整',
    outcome: '跨组织协同效率提升40%，物料配套及时率达95%+，生产计划执行率大幅提高',
  },
  {
    icon: Calculator,
    title: '精细化成本核算',
    problem: '项目成本核算复杂，跨组织成本难以归集，批次成本不准确，项目利润分析滞后',
    solution: '建立批次级成本核算体系，自动归集人工、物料、制费，支持跨组织成本分摊，实时项目成本预实对比',
    outcome: '成本核算准确率达95%+，项目利润实时可见，成本控制能力显著增强',
  },
  {
    icon: Shield,
    title: '质量管理体系',
    problem: 'GMP/GCP/GLP多体系要求，手工记录易出错，批次追溯困难，稳定性考察管理分散，合规风险高',
    solution: '建立数字化质量管理体系，电子批记录、自动追溯、稳定性考察管理、偏差CAPA闭环，支持CSV计算机验证',
    outcome: '质量合规达标率100%，批次追溯时间从天降至分钟，监管检查通过率大幅提升',
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
        
        {/* Tab buttons */}
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
        
        {/* Scenario content */}
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
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 aspect-video flex flex-col items-center justify-center border border-slate-200">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                {(() => {
                  const IconComponent = scenarios[activeTab].icon
                  return <IconComponent size={40} className="text-[#0052D9]" />
                })()}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-2">{scenarios[activeTab].title}</h3>
              <p className="text-sm text-slate-500 text-center max-w-sm">
                基于 YonSuite 平台的数智化场景解决方案
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
