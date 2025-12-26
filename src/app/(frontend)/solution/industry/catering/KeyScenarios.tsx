'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: '招商加盟全生命周期',
    problem: '加盟商线索分散，意向评估全凭经验，加盟协议签署周期长，线下流转风险高。',
    solution: '建立统一招商门户，实现线索自动查重与评分，实现在线电子签约、合同自动履约监控及加盟商评价画像。',
    outcome: '线索转化率提升 25%，合同签署周期从 7 天缩短至 2 小时。'
  },
  {
    title: '数智门店与全渠道零售',
    problem: '门店收银、点餐、会员系统割裂，无法实现统一库存共享及会员精准营销。',
    solution: '提供全场景零售POS，集成聚合支付与电子发票，统一管理门店、电商、外卖全渠道订单与库存。',
    outcome: '客单价提升 15%，门店人效提升 30%，库存周转率加快 20%。'
  },
  {
    title: '集团化业财深度融合',
    problem: '销售渠道与支付机构众多，每日成千上万笔流水对账困难，会计核算滞后，财审合规风险大。',
    solution: '事项会计中台自动获取POS流水，根据预置规则自动对账并生成分录，实现“日清月结”及精准清分。',
    outcome: '对账准确率达 99.9%，凭证自动化率 95% 以上，财务工作量降低 70%。'
  },
  {
    title: '精细化日成本管理',
    problem: '原材料波动频繁，无法实时掌握每日门店物耗与盈利，等次月初出报表时已错过关键调整期。',
    solution: '基于BOM与实时耗用数据进行日成本模拟，将实际物耗与定标对比，实现单品、单店效益的每日刻画。',
    outcome: '食材损耗降低 5%-8%，实现经营决策从“经验驱动”向“数据驱动”转型。'
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
            餐饮连锁核心业务场景
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
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-sm font-semibold text-red-600 mb-2">😣 行业痛点</h4>
                <p className="text-slate-700">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-600 mb-2">💡 解决方案</h4>
                <p className="text-slate-700">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700 font-medium">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-2xl p-8 aspect-video flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                  <span className="text-4xl">🥘</span>
               </div>
               <p className="text-slate-400 text-sm">{scenarios[activeTab].title} 流程示意图</p>
               <p className="text-slate-300 text-xs mt-2">1200x800 Dashboard Interface</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
