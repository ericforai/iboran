'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: '数字化工厂建设',
    problem: '糖化、发酵、过滤、包装等多工序数据采集不完整，生产过程不透明，异常响应滞后。',
    solution: '建立MOM生产数字化运营平台，实现车间作业透明化、规范化，酿造电子工艺配方体系与执行偏差跟踪。',
    outcome: '生产过程数据采集率达近100%，异常响应时间缩短60%，OEE分析精准可视。'
  },
  {
    title: '智能酿造与质量管控',
    problem: '酿造过程参数监控依赖人工，质量波动难以事先预判，批次追溯链路不完整。',
    solution: '基于AI的酿造工艺优化，关键指标管控与质量预判，原料、糖化、酒液全生命周期追溯。',
    outcome: '质量一致性提升20%，追溯时间从小时级缩短至分钟级，品质异常率下降30%。'
  },
  {
    title: '产销协同与供应链优化',
    problem: '销售旺季断货、淡季积压，包材辅材供应与生产计划不同步，库存周转低效。',
    solution: '以SOP为核心的全局产销协同，打通销售订单、生产计划、采购配套与物流交付闭环。',
    outcome: '库存周转提升25%，订单按时交付率达98%，呆滞库存降低30%。'
  },
  {
    title: '全渠道营销与即时零售',
    problem: '电商、即时零售、传统渠道数据分散，无法形成消费洞察，场景化营销能力弱。',
    solution: '构建全渠道营销管理平台，数据驱动的消费者运营、"啤酒+"组货策略与即时配送能力。',
    outcome: '线上渠道GMV增长40%，消费者复购率提升15%，30分钟冰啤到家履约率超95%。'
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
