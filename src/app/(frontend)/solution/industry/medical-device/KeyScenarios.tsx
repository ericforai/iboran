'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, BarChart, ClipboardCheck, ScanLine } from 'lucide-react'

const scenarios = [
  {
    title: '质量合规一体化',
    icon: ClipboardCheck,
    problem: '质量体系与业务系统割裂，GMP 控制点难落实，手工批记录复核慢、易出错。',
    solution: '在 YonSuite 框架下实现供应商审计、首营审批、生产全过程 GMP 控制，应用电子批记录提升合规性。',
    outcome: '质量合规 99%以上 达标，批记录审核时间缩短 60% 以上。'
  },
  {
    title: 'UDI 全链路追溯',
    icon: ScanLine,
    problem: 'UDI 一物一码追溯要求高，从生产入库到销售出库的条码采集效率低。',
    solution: '建立 UDI 数据中心，在生产、库存、流通环节应用移动扫码工作台，自动绑定 UDI 并同步国家平台。',
    outcome: '实现 UDI 正反向秒级追溯，扫码作业效率提升 50%。'
  },
  {
    title: 'CSV 计算机化验证',
    icon: CheckCircle,
    problem: '系统选型需满足 GAMP5 验证要求，传统本地部署验证过程复杂且不可持续。',
    solution: '通过 YonSuite 公有云 CSV 全生命周期验证方法论，覆盖计划、规范、风险评估及性能确认。',
    outcome: '系统符合 FDA/NMPA 合规用途，大幅降低系统验证成本与周期。'
  },
  {
    title: '精益成本管控',
    icon: BarChart,
    problem: '集采背景下毛利降低，企业缺乏实时、精准的单品/批次/订单成本分析手段。',
    solution: '应用事项会计中台，融合业务与财务数据，实现生产过程实时报工与多维度成本动因归集。',
    outcome: '成本核算精度提升至单品/批次，助力企业核心产品毛利精准预测。'
  }
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
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <scenario.icon className="w-4 h-4" />
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* 左侧：问题-方案-成果 */}
            <div className="space-y-8">
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-sm font-semibold text-red-600 mb-2 font-bold">😣 行业痛点</h4>
                <p className="text-slate-700">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-600 mb-2 font-bold">💡 解决方案</h4>
                <p className="text-slate-700">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-2 font-bold">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* 右侧：视觉表现 */}
            <div className="bg-slate-50 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center border border-slate-200">
               <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10 text-center">
                    {(() => {
                      const Icon = scenarios[activeTab].icon
                      return <Icon className="w-24 h-24 text-blue-500/20 mx-auto mb-6" />
                    })()}
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{scenarios[activeTab].title}数字模型</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
