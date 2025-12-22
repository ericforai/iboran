'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Shield, Calculator, Building2, Gauge } from 'lucide-react'

const scenarios = [
  {
    title: 'IPO合规管控',
    icon: Shield,
    problem: '企业内控流程及成本计算方式不符合上市审计要求，需花费近百万咨询辅导费用进行整改',
    solution: '借鉴东岛新能源审计师审查文档，结合企业实务形成成套可执行、可落地的流程文件，建立符合IPO要求的内控管理体系',
    outcome: '辅助企业规范流程、建立制度，为IPO计划奠定坚实基础，无形中节省近百万的IPO机构辅导费用',
  },
  {
    title: '成本精细化核算',
    icon: Calculator,
    problem: '成本核算粗放，无法满足审计审查要求，成本数据不准确导致经营决策缺乏依据',
    solution: '复用东岛得到审计师认可的成本核算方案，建立业财一体化的成本归集与分摊体系，实现业务数据与财务数据实时一致',
    outcome: '成本数据准确可追溯，支持2-3年上市前的数据补录工作，满足IPO财务审计的严格要求',
  },
  {
    title: '多组织协同管控',
    icon: Building2,
    problem: '集团化运营下多工厂管理混乱，内部往来对账困难，合并报表工作量大且容易出错',
    solution: 'U9 cloud多组织架构支持集团化运营，内部往来自动对账，一键生成合并报表',
    outcome: '多工厂协同高效运转，集团财务管控透明可视，为四川新厂投产后的集团化运营奠定基础',
  },
  {
    title: '设备监控预警',
    icon: Gauge,
    problem: '生产环境恶劣导致电机、泵等设备配件更换频率远高于正常，设备故障影响生产',
    solution: '建立43条系统管控预警机制，实时监控设备运行状态，提前预警潜在故障风险',
    outcome: '降低设备非计划停机时间，延长设备使用寿命，减少生产损失',
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
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = scenarios[activeTab].icon
                    return <IconComponent size={40} className="text-emerald-600" />
                  })()}
                </div>
                <p className="text-lg font-bold text-[#1F2329]">{scenarios[activeTab].title}</p>
                <p className="text-sm text-slate-500 mt-2">新材料行业核心场景</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
