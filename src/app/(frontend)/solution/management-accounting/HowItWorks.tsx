'use client'

import { motion } from 'framer-motion'
import { Briefcase, Database, Settings, ArrowRightLeft, Layers, BarChart3 } from 'lucide-react'

const STEPS = [
  {
    icon: Briefcase,
    title: '多域业务事项',
    description: '涵盖营销、采购、制造、资产等全领域业务实时驱动'
  },
  {
    icon: Database,
    title: '事项中心采集',
    description: '原始凭证全要素采集，为精细化核算奠定数据基础'
  },
  {
    icon: Settings,
    title: '会计规则处理',
    description: '智能匹配多目的核算规则，自动化生成实时事项分录'
  },
  {
    icon: ArrowRightLeft,
    title: '同源分流核算',
    description: '财务外报与内部管理合分有序，共享同一业务底座'
  },
  {
    icon: Layers,
    title: '实时成本还原',
    description: '基于事项分录进行卷积计算，实现全过程成本追溯'
  },
  {
    icon: BarChart3,
    title: '多维报告产出',
    description: '实时产出管理报告、损益分析与多维获利看板'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            基于事项会计的管理会计工作原理
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center mb-6 hover:border-blue-100 transition-all duration-300">
                  <step.icon size={32} className="text-[#0052D9] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2329] mb-2 group-hover:text-[#0052D9] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
