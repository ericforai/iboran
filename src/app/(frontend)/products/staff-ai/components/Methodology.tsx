'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Rocket, BarChart2, ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

const steps = [
  {
    id: '01',
    order: '01',
    title: '深度诊断',
    icon: Search,
    desc: '解决方案专家组深入企业，评估当前数字化现状，梳理痛点工作流，锁定 1-2 个能带来最大边际收益的高价值场景。',
    duration: '1-2 周',
  },
  {
    id: '02',
    order: '02',
    title: '极速试点',
    icon: Rocket,
    desc: '在约定的单一部门内部署 StaffAI 核心模块，完成权限与知识库初步配置，出具具体的降本增效报告。',
    duration: '2-4 周',
  },
  {
    id: '03',
    order: '03',
    title: '横向复制与扩张',
    icon: BarChart2,
    desc: '基于试点的成功经验与量化 ROI，开启企业级许可证部署。提供高管培训、IT 架构融合与持续的运维陪伴。',
    duration: '长期伴随',
  },
]

export const Methodology = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeStep, setActiveStep] = useState<string | null>(null)

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId)
    setIsModalOpen(true)
  }

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
            建议的合作路径：<span className="text-[#0052D9]">诊断 → 试点 → 扩张</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-500"
          >
            遵循“最佳起点：替代高频脑力工作”原则。从小规模试点开始，快速验证系统颠覆性价值。
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Connecting arrow/line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-12 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0052D9] text-white shadow-lg">
                 <step.icon size={36} />
              </div>
              
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                 STEP {step.order} | <span className="opacity-70">{step.duration}</span>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mb-8 text-slate-500 leading-relaxed text-sm">
                 {step.desc}
              </p>
              
              <button 
                onClick={() => handleStepClick(step.id)}
                className="mt-auto flex items-center gap-2 text-[#0052D9] font-bold group cursor-pointer hover:underline transition-all"
              >
                 了解详情 
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-[#0052D9]/5 border border-[#0052D9]/10 text-center">
           <p className="text-[#0052D9] font-bold text-lg mb-4">开始拥有您的 AI 员工体系</p>
           <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
              谁先构建起 Agent OS，谁就赢得了组织的未来。让 AI 走出聊天框，成为 24/7 运转的组织级底座。
           </p>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        source={`staffai-methodology-step-${activeStep}`}
      />
    </section>
  )
}
