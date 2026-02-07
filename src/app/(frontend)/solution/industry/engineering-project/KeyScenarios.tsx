'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ClipboardList, HandCoins, HardHat, FileCheck } from 'lucide-react'

const scenarios = [
  {
    title: '立项与招采规范',
    icon: ClipboardList,
    problem: '项目前期立项流程不规范，投资估算缺乏硬性约束。招标过程缺乏全透明记录，容易产生合规性风险。',
    solution: '建立统一的项目库，实现项目编码、名称标准化。数字化招投标平台以保障过程全留痕，从制度驱动走向数据驱动。',
    outcome: '消除重复立项，招投标效率提升30%以上，以保障项目从源头即满足企业内控合规要求。',
  },
  {
    title: '合同与业财深度融合',
    icon: HandCoins,
    problem: '合同执行进度与财务付款脱节，业务员手中积压大量发票，财务无法实时洞察项目资金动向。',
    solution: '项目、合同与付款深度关联。系统自动生成应收/应付，实现业财一体化动态平衡。',
    outcome: '财务与业务高度匹配，资金占用降低15%，规避发票丢失风险，应付账款对账效率提升3倍。',
  },
  {
    title: '现场质安精细协同',
    icon: HardHat,
    problem: '质量及安全检查主要靠人工填报，缺乏现场实时数据。隐患整改周期长，责任界定不清晰。',
    solution: '施工现场隐患移动化采集，支持水印拍照存证。整改流程在线闭环，多方信息实时共享。',
    outcome: '重大隐患整改闭环率达到99%以上，质量缺陷可一键追根溯源，管理颗粒度深入至各分包单位。',
  },
  {
    title: '结算与资产价值闭环',
    icon: FileCheck,
    problem: '竣工结算周期漫长，资产转固滞后，导致财务账面原值长期无法准确反映，影响资产折旧与经营决策。',
    solution: '竣工验收单据自动触发结算审计与资产分类管理，实现建设期到运营期的价值链条打通。',
    outcome: '竣工结算周期缩短40%，转固准确率提升至99%以上，以保障企业资产账实相符。',
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
            业主方数智化核心场景
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
                  😣 场景痛点
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
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = scenarios[activeTab].icon
                    return <IconComponent size={40} className="text-blue-600" />
                  })()}
                </div>
                <p className="text-lg font-bold text-[#1F2329]">{scenarios[activeTab].title}</p>
                <p className="text-sm text-slate-500 mt-2">业主方数智化项目管理核心场景</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
