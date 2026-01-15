'use client'

import { motion } from 'framer-motion'
import { ClipboardList, PenTool, LayoutTemplate, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: '需求诊断',
    desc: '业务场景拆解与痛点分析'
  },
  {
    icon: PenTool,
    title: '蓝图设计',
    desc: '应用架构与数据模型规划'
  },
  {
    icon: LayoutTemplate,
    title: '敏捷构建',
    desc: '可视化配置与逻辑编排'
  },
  {
    icon: Rocket,
    title: '测试上线',
    desc: 'UAT 验证与一键发布'
  },
  {
    icon: HeartHandshake,
    title: '持续运维',
    desc: '性能监控与迭代优化'
  }
]

export default function Methodology() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            标准化交付方法论
          </h2>
          <p className="text-lg text-slate-600">
            不仅提供工具，更提供从咨询到落地的全链路保障
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center z-10 group hover:border-[#E60012] transition-colors"
              >
                <div className="w-14 h-14 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                  <step.icon className="w-6 h-6 text-slate-500 group-hover:text-[#E60012] transition-colors" />
                </div>
                <div className="absolute top-0 right-0 p-3 text-[100px] leading-none font-bold text-slate-50 opacity-10 pointer-events-none select-none">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
