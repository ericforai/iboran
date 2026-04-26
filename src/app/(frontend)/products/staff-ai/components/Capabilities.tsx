'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Workflow, Users, History, CheckCircle2, Search, Code, TrendingUp } from 'lucide-react'

const capabilities = [
  {
    id: 'dispatch',
    icon: Workflow,
    title: '任务调度与编排',
    desc: '像给真实下属派单一样，把复杂的异步业务流直接分配给 AI 员工。支持长达数周的任务周期管理。',
    features: ['全链路成本可视化', '高意向审批干预', '全维度防篡改日志', '一键任务挂起/恢复'],
  },
  {
    id: 'experts',
    icon: Bot,
    title: '144+ 垂直行业专家组',
    desc: '内置覆盖财务、研发、市场、法务等领域的专业专家模型，开箱即用，满足各部门繁杂需求。',
    features: ['财务审计专家', '跨境电商运营专家', '自动化研发运维', '多维度市场情报追踪'],
  },
  {
    id: 'collab',
    icon: Users,
    title: '多 Agent 协同模式',
    desc: '采用指挥官 (Commander) + 执行者 (Executor) + 批判者 (Critic) 协作模式，确保输出达到企业级交付标准。',
    features: ['战略意图精准拆解', '高并发并行工作流', '交叉纠错纠偏', '逻辑纠错自动审计'],
  },
  {
    id: 'hitl',
    icon: History,
    title: 'HITL 人机协同',
    desc: 'AI 遇到高风险决策或边界节点时，会自动暂停并向人类主管发起确认请求。',
    features: ['关键节点审批闭环', '主动求助干预机制', '经验沉淀反哺', '无缝对接现有审批流'],
  },
]

export const Capabilities = () => {
  const [activeTab, setActiveTab] = useState(capabilities[0].id)

  return (
    <section className="bg-slate-50 py-24 px-4 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
          >
            深度功能与 <span className="text-[#0052D9]">企业级交付标准</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-500"
          >
            拒绝“对话式助手”，StaffAI 实现真正的“数字生产力”。将单点输出升级为端到端的闭环商业流程。
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row items-start">
          {/* Tab Selection */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {capabilities.map((cap: any) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`flex items-center gap-4 rounded-2xl p-6 text-left transition-all border-2 ${
                  activeTab === cap.id 
                  ? 'bg-white border-[#0052D9] shadow-lg scale-105 z-10' 
                  : 'bg-transparent border-transparent hover:bg-slate-100 opacity-60'
                }`}
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                  activeTab === cap.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'
                }`}>
                  <cap.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{cap.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{cap.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Details Content */}
          <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
            <AnimatePresence mode="wait">
              {capabilities.map((cap: any) => cap.id === activeTab && (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 lg:p-12 flex flex-col h-full bg-[radial-gradient(circle_at_top_right,rgba(0,82,217,0.05),transparent)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-slate-900">{cap.title}</h3>
                    <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
                      核心能力
                    </div>
                  </div>
                  
                  <p className="mb-10 text-xl leading-relaxed text-slate-600">
                    {cap.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                    {cap.features.map((feature: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="text-green-500 group-hover:scale-110 transition-transform" size={20} />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* UI Simulation Mockup for the specific capability */}
                  <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 p-6 flex flex-col gap-4 overflow-hidden relative group">
                    <div className="flex gap-2 mb-2">
                       <div className="h-3 w-3 rounded-full bg-red-400" />
                       <div className="h-3 w-3 rounded-full bg-yellow-400" />
                       <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-4">
                       <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                       <div className="h-4 w-full bg-slate-800 rounded" />
                       <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse" />
                       <div className="flex justify-between items-center mt-6">
                          <div className="h-8 w-24 bg-[#0052D9] rounded-lg" />
                          <div className="h-4 w-32 bg-slate-700 rounded" />
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-60" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
