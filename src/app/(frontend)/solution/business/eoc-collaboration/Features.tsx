'use client'

import { motion } from 'framer-motion'
import { Sparkles, Layout, MessageSquare, Wrench } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: '企业 AI 协同',
    description: '包含“智友”（AI 助手）和智能群助手，提供自动会议摘要、智能排程和 24/7 自动化响应。',
    metric: '协同效率提升 30%+',
    color: 'blue'
  },
  {
    icon: Layout,
    title: '一体化数智门户',
    description: '所有业务应用、新闻和任务的单一入口，支持移动、Web 和 PC 端访问，打破信息孤岛。',
    metric: '信息获取速度 +40%',
    color: 'red'
  },
  {
    icon: MessageSquare,
    title: '专业办公协作',
    description: '深度集成的 IM、智能会议系统和协同文档编辑，将“文档、任务、会议”连接成连续工作流。',
    metric: '审批周期缩短 50%',
    color: 'blue'
  },
  {
    icon: Wrench,
    title: '协同应用构建',
    description: '赋能非技术业务人员使用拖拽工具快速构建和部署自定义应用及数据报表，实现敏捷创新。',
    metric: '7 天内快速上线',
    color: 'slate'
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              核心功能与特性
            </h2>
            <p className="text-slate-500">
              通过 AI 驱动的技术方案，重塑企业的日常办公与业务协同模式。
            </p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-[#0052D9] rounded-full mb-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  feature.color === 'red' ? 'bg-red-50 text-[#E60012]' : 
                  feature.color === 'blue' ? 'bg-blue-50 text-[#0052D9]' : 'bg-slate-200 text-slate-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-1.5 bg-white rounded-full border border-slate-200 text-sm font-bold text-[#E60012] shadow-sm">
                    {feature.metric}
                  </div>
                </div>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <feature.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
