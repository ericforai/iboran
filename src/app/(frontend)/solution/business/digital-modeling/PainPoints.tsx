'use client'

import { motion } from 'framer-motion'
import { LayoutGrid, RefreshCw, Zap, Database } from 'lucide-react'

const points = [
  {
    icon: LayoutGrid,
    title: '管理架构复杂多变',
    description: '多板块、多组织架构下，传统的树形组织难以支撑财务核算与人力行政等多重管理视角，调整成本极高。',
    solution: '多维组织建模'
  },
  {
    icon: RefreshCw,
    title: '业务流程响应迟滞',
    description: '审批流程线下跑、不可监控，过程数据缺失导致无法准确定位效率瓶颈，难以支撑业务快速迭代需求。',
    solution: '可视化流程引擎'
  },
  {
    icon: Zap,
    title: '系统交付周期过长',
    description: '传统 ERP 软代码开发模式导致个性化配置成本高、周期长，无法实现业务场景的快速试错与敏捷交付。',
    solution: '模型驱动开发'
  },
  {
    icon: Database,
    title: '主数据孤岛严重',
    description: '跨系统、跨组织的档案标准不一，核心数据同步滞后，导致报表层级对账困难，影响数智化分析决策。',
    solution: '主数据分级管理'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            数智化转型中的核心痛点
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {point.description}
              </p>
              <div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-[#0052D9] font-semibold text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052D9]" />
                解决方案：{point.solution}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
