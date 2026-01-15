'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: '智能人力与薪酬管理',
    problem: '集团员工规模数万，分布在数百个法人实体，薪酬规则复杂，每月算薪耗费大量人力，且易出错，数据需反复核对。',
    solution: '构建集团统一的薪酬核算平台，预置复杂薪酬规则引擎，支持多批次发薪与自动算税。实现从考勤到算薪、报税、支付的全流程自动化。',
    outcome: '算薪效率提升300%，实现一键核算与拆分，异常数据智能预警，释放HR事务性工作压力。'
  },
  {
    title: '全球司库与资金管理',
    problem: '海外业务扩张迅速，缺乏全球资金统一视图，资金沉淀在各地账户，融资成本高，外汇风险敞口难以管控。',
    solution: '建立全球司库管理体系，统一管理境内外账户。实现资金池归集、全球付款工厂、投融资管理一体化，实时监控汇率风险。',
    outcome: '资金归集率提升至95%以上，大幅降低融资成本，实现全球资金可视、可控、可调。'
  },
  {
    title: '项目业财融合一体化',
    problem: '项目管理与财务系统脱节，项目进度、合同、收付款数据依靠手工台账，导致项目成本核算不准，利润分析滞后。',
    solution: '以项目为主线，拉通销售、采购、交付与财务流程。实现项目全生命周期管理，业务事件自动驱动财务凭证生成。',
    outcome: '项目成本核算精细化，实时掌握单项目利润，提升项目交付质量与经营效益。'
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
                <p className="text-slate-700">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* 右侧：示意图 */}
            <div className="bg-slate-50 rounded-2xl p-8 aspect-video flex items-center justify-center border border-slate-100">
               <div className="text-center">
                 <div className="w-20 h-20 bg-white rounded-full mx-auto shadow-md flex items-center justify-center mb-4">
                   <div className="text-4xl">
                     {activeTab === 0 ? '👥' : activeTab === 1 ? '💰' : '📊'}
                   </div>
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">{scenarios[activeTab].title}</h3>
                 <p className="text-slate-500 text-sm max-w-sm mx-auto">
                   数智化场景示意：{scenarios[activeTab].solution.slice(0, 20)}...
                 </p>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
