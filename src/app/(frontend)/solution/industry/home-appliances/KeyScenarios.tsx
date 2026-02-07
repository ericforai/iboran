'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShoppingBag, Box, QrCode, Cpu, BarChart3, Database } from 'lucide-react'

interface Scenario {
  title: string
  problem: string
  solution: string
  outcome: string
}

const scenarios: Scenario[] = [
  {
    title: '全渠道订单一体化履约',
    problem: '多平台订单入口分散，手动审单效率低，大促期间易出现漏单、错单及发货超时的风险。',
    solution: '统一聚合天猫、京东、拼多多等主流电商订单，内置智能审单规则（赠品策略、自动拆合并单、异常预警），实现订单自动化流转。',
    outcome: '审单效率提升 80% 以上。订单处理响应时间缩短至秒级。多店铺动态评分（DSR）稳步提升。'
  },
  {
    title: '多仓集成与「一盘货」协作',
    problem: '自有仓与三方外仓（菜鸟、顺丰等）库存不互通。前台不敢卖，库存积压与缺货并存。',
    solution: '深度集成主流 WMS 外仓，建立统一库存视图，实现自有仓与云仓库存实时映射。基于订单物理距离与销速智能路由配货。',
    outcome: '库存积压降低 25%。跨仓集成准确率达 99.9%。通过区域平衡大幅削减了不必要的调拨成本。'
  },
  {
    title: 'SN 码全生命周期追溯',
    problem: '家电及 3C 产品售后需精准追溯。传统方式无法下钻到单体 SN 码，导致售后鉴权难、返修信息断层。',
    solution: '建立从工厂生产下线、采购入库、库内位移到交付消费者的 SN 码全程记录，支持扫码核销、防伪查询及售后关联。',
    outcome: '99%以上 序列号生命周期可视。售后核销误差清零。有效遏制经销商窜货及虚假保修。'
  }
]

const scenarioIcons = [ShoppingBag, Box, QrCode]

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
            行业家电核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map((scenario, idx) => {
            const Icon = scenarioIcons[idx]
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-blue-600'}`} />
                {scenario.title}
              </button>
            )
          })}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* 左侧：内容卡片 */}
            <div className="flex flex-col gap-6">
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="text-md font-bold text-red-600 mb-3 flex items-center gap-2">
                  <span className="text-xl">😣</span> 业务痛点
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {scenarios[activeTab].problem}
                </p>
              </div>
              
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex-1">
                <h4 className="text-md font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> 数字化方案
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].solution}
                </p>
              </div>
            </div>
            
            {/* 右侧：效果卡片 */}
            <div className="bg-[#0A192F] p-10 rounded-2xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-500 rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  实现价值收益
                </h4>
                <div className="space-y-6">
                  {scenarios[activeTab].outcome.split('。').filter(s => s).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-l-2 border-slate-700 pl-6 py-1">
                      <p className="text-slate-300 leading-relaxed">
                        {item}。
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
