'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Rocket, Headphones } from 'lucide-react'

const steps = [
  {
    title: '需求诊断与规划',
    desc: '深度梳理组织架构、公文标准及核心审批流程。',
    items: ['现状评估报告', '数字化蓝图设计', '系统分期规划'],
    icon: <Search className="w-6 h-6 text-[#0052D9]" />,
    color: 'blue'
  },
  {
    title: '架构设计与适配',
    desc: '基于 A8 协同平台进行集成设计与信创环境适配。',
    items: ['CAP 业务建模', '集成接口方案', '信创兼容性调优'],
    icon: <PenTool className="w-6 h-6 text-[#E60012]" />,
    color: 'red'
  },
  {
    title: '系统实施与交付',
    desc: '标准模块配置、CAP 业务搭建及第三方系统对接。',
    items: ['流程引擎配置', '异构系统联调', '关键用户培训'],
    icon: <Rocket className="w-6 h-6 text-[#0052D9]" />,
    color: 'blue'
  },
  {
    title: '上线运维与迭代',
    desc: '系统平稳切换上线，提供持续的业务响应与技术支持。',
    items: ['7x24 运行监控', '季度业务巡检', '需求敏捷迭代'],
    icon: <Headphones className="w-6 h-6 text-[#E60012]" />,
    color: 'red'
  }
]

export default function DeliveryMethodology() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">交付方法论</h2>
          <p className="text-slate-600">标准化的“四步走”交付体系，确保系统从蓝图设计到平稳运行的闭环落地。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                step.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' : 'bg-red-50 group-hover:bg-red-100'
              }`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{step.desc}</p>
              <div className="space-y-3">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${step.color === 'blue' ? 'bg-[#0052D9]' : 'bg-[#E60012]'}`}></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
