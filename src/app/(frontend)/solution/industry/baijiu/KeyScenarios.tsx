'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: '基酒生产数字化',
    problem: '酿造环节数据采集难、轮次酒等级评定主观因素多、过程不透明。',
    solution: '建立基酒生产全流程工作指令下达与实时反馈机制，结合IoT数据实现酿造环境与质量的精准匹配。',
    outcome: '提升基酒特等率约10%，生产过程数据采集率达99%以上。'
  },
  {
    title: '勾调酒成本核算',
    problem: '白酒勾调涉及多种基酒、调味酒，核算项繁杂，传统财务核算难以实现实时精细结转。',
    solution: '推行“事项会计”模式，从业财原始事务直接映射成本科目，实现勾调耗用与入库的自动核算。',
    outcome: '成本核算精度提升至99%以上，报表生成时间缩短80%。'
  },
  {
    title: '数字酒库管理',
    problem: '上万个陶坛/罐位的实时库存难掌握，批次追溯慢，库容利用率不均衡。',
    solution: '构建3D可视化数字酒库插件，实时反映酒体在库位置、库龄与品质动态。',
    outcome: '出入库效率提升40%，酒体资产全局可视化。'
  },
  {
    title: '产销协同计划',
    problem: '销售旺季断货与淡季积压并存，包材/辅材配套供应与生产排产不同步。',
    solution: '以SOP为核心的全局协同，打通销售订单、瓶装计划、勾调计划与包材采购闭环。',
    outcome: '降低成品酒库存周转天数15%，订单按时交付率提升至95%+。'
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
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-600 mb-2">😣 行业痛点</h4>
                <p className="text-slate-700">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-600 mb-2">💡 解决方案</h4>
                <p className="text-slate-700">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-2xl p-4 aspect-video flex items-center justify-center border border-slate-200">
              <div className="text-center text-slate-400">
                <p className="text-sm font-medium">[{scenarios[activeTab].title} 演示界面]</p>
                <div className="mt-4 flex gap-2 justify-center">
                   <div className="w-20 h-2 bg-slate-300 rounded-full animate-pulse"></div>
                   <div className="w-12 h-2 bg-slate-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
