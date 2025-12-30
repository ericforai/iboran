'use client'

import { motion } from 'framer-motion'
import { Target, FileSpreadsheet, Activity, PieChart } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'Strategic Planning (战略规划)',
    description: '承接企业 3-5 年战略规划，通过多维度测算模型进行目标分解，确保战略目标可执行、可落地。',
    details: ['战略目标确定', '多维目标分解', '目标下达与模拟']
  },
  {
    icon: FileSpreadsheet,
    title: 'Budgeting & Planning (计划预算)',
    description: '构建覆盖业务计划、财务预算（收入/成本/费用/资金）的全面预算体系，支持多业态、多层级灵活建模。',
    details: ['供应链计划协同', '全面预算编制', '多版滚动预测']
  },
  {
    icon: Activity,
    title: 'Execution & Control (执行控制)',
    description: '通过预算控制中台，实现对业务系统的实时刚性控制与柔性预警，打通申请、报销、采购等全链路。',
    details: ['实时预算控制', '预算调整与追加', '跨系统流程贯通']
  },
  {
    icon: PieChart,
    title: 'Analysis & Assessment (分析考核)',
    description: '基于业财融合数据进行多维经营分析，透过数据洞察业务动因，形成从分析到绩效考核的完整闭环。',
    details: ['预算执行分析', '目标利润模拟', '业财综合分析']
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            纵向 PDCA 闭环管理体系
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-slate-600">
            打通从战略到执行的每一公里，实现企业价值的最大化
          </p>
        </div>

        {/* Improved Vertical Layout with Architecture Visual Metaphor */}
        <div className="flex flex-col gap-16 relative">
          
          {/* Central Architecture Spine */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-50 via-[#0052D9] to-blue-50 -translate-x-1/2 rounded-full opacity-30" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 lg:gap-16 flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className="w-full lg:w-1/2">
                <div className={`p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all group relative overflow-hidden ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  {/* Background Decoration */}
                  <div className={`absolute top-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -z-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'}`} />

                  <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#0052D9] transition-colors duration-300 shrink-0">
                      <step.icon className="w-6 h-6 text-[#0052D9] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                         <div className="text-xs font-bold text-[#E60012] tracking-wider mb-1">STEP 0{idx + 1}</div>
                         <h3 className="text-xl font-bold text-[#1F2329]">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {step.details.map((detail, dIdx) => (
                      <span key={dIdx} className="text-xs font-medium text-slate-500 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-100">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture Layer Node */}
              <div className="relative z-10 shrink-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0052D9] text-[#0052D9] flex items-center justify-center font-bold shadow-lg text-lg">
                  L{idx + 1}
                </div>
              </div>

               {/* Empty Space for Balance */}
               <div className="w-full lg:w-1/2 lg:block hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
