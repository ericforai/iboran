'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const scenarios = [
  {
    title: '生产计划管理',
    problem: '电气装备企业面临MTO按单生产、MTS按库存生产、预测与订单混合等多种生产模式并存的挑战，计划策略配置复杂，跟单维度多样',
    solution: '用友BIP提供MPS主生产计划、MRP物料需求计划、APS高级排程等分层计划体系，支持按单、按库存、混合模式灵活配置，实现齐套分析与智能排程',
    outcome: '计划准确率提升30%，排产效率提升50%，支持按单与按库存混合生产模式灵活切换',
  },
  {
    title: '仓储管理(WMS)',
    problem: '原辅料仓、成品仓、保税仓等多仓库类型管理复杂，条码追溯不完整，库位策略缺失，盘点效率低',
    solution: '集成WMS仓储管理系统，提供入库、出库、库位、批次、质检、盘点全流程管理，支持条码采集与RF终端作业，实现库内作业标准化',
    outcome: '库存准确率达99%+，拣货效率提升40%，实现物料全程条码追溯',
  },
  {
    title: '运输管理(TMS)',
    problem: '采购到货、销售发运、委外物流等多场景运输信息分散，物流状态不可视，发运与确认脱节',
    solution: 'TMS与供应链业务深度集成，支持采购合同、销售订单、调拨单自动生成运输申请，对接第三方物流平台实现全程追踪',
    outcome: '物流可视化覆盖率100%，运输异常响应时间缩短60%，发运到签收全程透明',
  },
  {
    title: '项目型生产',
    problem: '项目型生产模式下，项目BOM管理、子件/散件发运、项目物料成本归集等场景复杂，交付与成本难以精准匹配',
    solution: '支持项目成品、项目半成品、项目材料分类管理，提供发运清单、子件拆装、装箱发运等完整流程，实现项目维度成本归集',
    outcome: '项目成本核算准确率95%+，发运齐套率提升25%，项目交付周期缩短20%',
  },
  {
    title: '内部交易管理',
    problem: '集团多组织架构下，跨组织采购、销售、调拨、领料等内部交易场景复杂，结算路径长，对账困难',
    solution: '提供内部交易结算平台，支持多级多路径内部交易、内部应收应付自动生成、内部存货核算与暂估处理',
    outcome: '内部交易结算效率提升60%，对账时间从周级缩短至天级，结算准确率99%+',
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
        
        {/* Scenario Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Problem - Solution - Outcome */}
            <div className="space-y-6">
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
            
            {/* Right: Scenario Visual */}
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#0052D9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white font-bold">{activeTab + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-2">{scenarios[activeTab].title}</h3>
                <p className="text-slate-500 text-sm">用友BIP电气装备行业场景方案</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
