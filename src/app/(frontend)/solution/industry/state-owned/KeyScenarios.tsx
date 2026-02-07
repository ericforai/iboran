'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const scenarios = [
  {
    title: '智慧国资监管',
    problem: '监管指标分散，数据时效性差，难以实现"穿透式"监管，风险预警能力不足。',
    solution: '构建"三重一大"、大额资金、投资管理等在线监管应用，实现监管数据自动采集与实时监测。',
    outcome: '提升监管效能，实现"事前、事中、事后"全过程闭环监管，风险识别率提升 99%以上。',
    screenshot: '/images/solutions/state-owned-monitor.png' 
  },
  {
    title: '财务数智化',
    problem: '财务核算标准不一，业财分离，资金管理低效，难以支撑集团战略决策。',
    solution: '建设财务共享中心，统一会计核算体系，实现业财税资档一体化与智能化处理。',
    outcome: '凭证自动化率 90%+，资金集中管理度提升，有效降低财务运营成本与资金风险。',
  },
  {
    title: '投资全生命周期',
    problem: '投资项目多、周期长，投后管理薄弱，投资收益与风险难以量化评估。',
    solution: '打造投资项目全生命周期管理平台，覆盖投前决策、投中管控、投后评价全过程。',
    outcome: '投资过程透明化，风险可控化，以保障国有资产保值增值。',
  },
  {
    title: '数据资产运营',
    problem: '海量数据沉睡，数据质量低，缺乏数据资产管理机制，数据价值无法释放。',
    solution: '开展数据资源入表实践，建立数据资产管理体系，推动数据要素市场化配置。',
    outcome: '摸清数据家底，释放数据价值，培育数字经济新动能。',
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
            
            {/* 右侧：场景截图 */}
            <div className="bg-slate-100 rounded-2xl p-4 aspect-video flex items-center justify-center">
              {scenarios[activeTab].screenshot ? (
                <div className="relative w-full h-full">
                  <Image
                    src={scenarios[activeTab].screenshot} 
                    alt={scenarios[activeTab].title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center text-slate-400">
                  <p className="text-sm">[场景架构图/截图]</p>
                  <p className="text-xs mt-1">建议尺寸：1200x800</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
