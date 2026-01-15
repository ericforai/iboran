'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShieldCheck, Factory, Network, Users } from 'lucide-react'

const scenarios = [
  {
    title: '数智化牧场管理',
    problem: '牧场端设备多样、接口标准不一、技术保护不开放，信息化基础设施薄弱，难以实现集中管理。',
    solution: '建立牧场统一数智管理平台，打通财务、采购、地磅、TMR 饲喂及奶厅设备。',
    outcome: '实现牧场设备数据自动采集。工作任务自动提醒与风险自动预警。奶量、发情、健康监控自动预测。',
    icon: Users
  },
  {
    title: '精益生产全过程管理',
    problem: '乳业生产连续性强，工序间数智化衔接弱，缺乏系统级的协同，IT 与 OT 融合深度不足。',
    solution: '覆盖收奶计划、任务排程、领料、过程执行、入库全链路。集成数采平台实现实时数据同步。',
    outcome: '生产全过程可监控。异常异常可预警。实现精益化工厂管理，提升良率与效率。',
    icon: Factory
  },
  {
    title: '全链条质量检测与追溯',
    problem: '质量管控不仅限于成品，乳业对从奶源到餐桌的全过程溯源要求高，需要覆盖全生命周期的严苛管理。',
    solution: '检验检测贯穿原料、奶台、加工、灌装到成品。通过 LIMS 与溯源系统实现批次级质量关联。',
    outcome: '满足 GMP/GSP 质量标准。实现全链条质量透明化。确保每一滴奶的品质安全可靠。',
    icon: ShieldCheck
  },
  {
    title: '全渠道营销与新零售',
    problem: '触点分散、数据无法回传。线上线下数据不通导致销售预测不准，运营效率低，无法快速触达年轻群体。',
    solution: '建立多级渠道交易体系。直连商超门店获取经营数据。开展车销模式高效连接用户。',
    outcome: '渠道可视、管理可控。实现营销闭环与快速响应。建立与消费者的有效链接，促进业务增长。',
    icon: Network
  }
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(0)
  const ActiveIcon = scenarios[activeTab].icon

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            乳制品行业核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => {
            const Icon = scenario.icon
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-[#0052D9] text-white shadow-xl scale-105'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-[#0052D9]'}`} />
                <span className="text-sm md:text-base">{scenario.title}</span>
              </button>
            )
          })}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* 左侧：内容卡片 */}
            <div className="space-y-6">
              <div className="p-8 bg-red-50/50 rounded-2xl border border-red-100/50">
                <h4 className="text-sm font-bold text-red-600 mb-3 flex items-center gap-2">
                  <span className="text-lg">😣</span> 行业痛点
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].problem}
                </p>
              </div>
              
              <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                <h4 className="text-sm font-bold text-[#0052D9] mb-3 flex items-center gap-2">
                  <span className="text-lg">💡</span> 数字化方案
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].solution}
                </p>
              </div>
            </div>
            
            {/* 右侧：效果卡片 */}
            <div className="bg-[#1F2329] p-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <ActiveIcon className="w-32 h-32 text-blue-400" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-700 pb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  由此带来的价值收益
                </h4>
                <div className="space-y-8">
                  {scenarios[activeTab].outcome.split('。').filter(s => s).map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-[#0052D9] rounded-full mt-2.5 shrink-0" />
                      <p className="text-slate-300 leading-relaxed">
                        {item}。
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
