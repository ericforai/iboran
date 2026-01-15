'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: 'B2B经销商协同',
    problem: '经销商订单分散、信用管理混乱、费用核销不透明，渠道管控效率低下。',
    solution: '搭建B2B自助下单平台，支持多维定价、智能促销、信用管控，实现经销商自助下单与实时追踪。',
    outcome: '经销商订单处理效率提升60%，渠道费用透明度100%。'
  },
  {
    title: 'B2C全渠道零售',
    problem: '电商平台多、自建商城流量难转化、线下门店数据孤岛，全渠道数据难整合。',
    solution: '构建统一的B2C全渠道中台，支持商城搭建、门店管理、电商对接，订单库存一体化管理。',
    outcome: '全渠道库存准确率99%+，线上线下订单统一管理。'
  },
  {
    title: '门店数字化运营',
    problem: '门店铺货、要货、调拨流程繁琐，库存管理不精准，销售数据反馈滞后。',
    solution: '移动端门店管理应用，支持智能要货、快速盘点、实时销售监测，打通门店与总部数据流。',
    outcome: '门店库存周转提升30%，销售数据实时可视化。'
  },
  {
    title: '会员精准营销',
    problem: '消费者数据分散、画像不精准，营销活动效果难衡量，私域流量转化率低。',
    solution: '建立统一会员中心，整合等级、积分、钱包管理，支持个性化营销活动与效果追踪。',
    outcome: '会员复购率提升25%，营销ROI提升40%。'
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
