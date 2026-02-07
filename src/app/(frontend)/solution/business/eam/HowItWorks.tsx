'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  PlusCircle, 
  Settings, 
  Wrench, 
  ClipboardCheck, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react'

const steps = [
  {
    title: '资产获取与台账',
    desc: '建立从采购入库到资产卡片初始化的全息台账，支持特种设备与基础设施分类管理。',
    icon: <PlusCircle className="text-blue-500" />,
    color: 'bg-blue-50'
  },
  {
    title: '运行监控与巡检',
    desc: '基于 IoT 实时监测运行负荷，结合移动化智能巡检工具，消除管理死角。',
    icon: <ClipboardCheck className="text-cyan-500" />,
    color: 'bg-cyan-50'
  },
  {
    title: '预防性与预测维护',
    desc: '利用 AI 算法分析设备健康趋势，从“坏了才修”转向“未雨绸缪”的精益维保。',
    icon: <Settings className="text-orange-500" />,
    color: 'bg-orange-50'
  },
  {
    title: '故障修复与备件',
    desc: '闭环工单体系联动备品备件库存，缩短停机时间，以保障业务持续稳定运行。',
    icon: <Wrench className="text-red-500" />,
    color: 'bg-red-50'
  },
  {
    title: '效益评估与退役',
    desc: '全寿命周期 ROI 分析，科学决策大修、改造或报废退役，实现资产价值最大化。',
    icon: <BarChart3 className="text-indigo-500" />,
    color: 'bg-indigo-50'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            全生命周期管理闭环
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            从资产获取、运行维护到退役置换，YonBIP EAM 提供端到端的数智化支撑，以保障每一项资产都在更优状态下运行。
          </motion.p>
        </div>

        {/* Desktop View: Horizontal Flow */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="flex justify-between items-start relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="w-1/5 px-4 text-center"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-50 relative group`}>
                   {step.icon}
                   <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-slate-200 hidden last:hidden group-hover:block transition-all">
                     <ArrowRight size={20} />
                   </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Cards */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className={`w-12 h-12 ${step.color} rounded-xl shrink-0 flex items-center justify-center shadow-sm`}>
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-slate-100 pt-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
            <ShieldCheck size={16} /> 安全合规管理
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold">
            <RefreshCw size={16} /> 资源循环利用
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold">
            <BarChart3 size={16} /> 投资回报可量化
          </div>
        </div>
      </div>
    </section>
  )
}
