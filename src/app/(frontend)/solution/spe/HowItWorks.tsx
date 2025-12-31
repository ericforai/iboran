'use client'

import { motion } from 'framer-motion'
import { Target, FileSpreadsheet, Activity, PieChart } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'Strategic Planning (从战略到计划)',
    description: '承接企业 3-5 年战略规划，通过 MDS 建模进行多维度测算，确保战略直达业务末梢。',
    details: ['纵向指标对齐', '沙箱模拟测算', '目标下达落实']
  },
  {
    icon: FileSpreadsheet,
    title: 'Budgeting & Insight (从计划到执行)',
    description: '构建全面预算编制体系，将管理诉求转化为业务动效，实现预算法人到颗粒度规则的全面映射。',
    details: ['编审协同联动', '多版滚动预测', '动态资源配置']
  },
  {
    icon: Activity,
    title: 'Execution & Control (执行与控制)',
    description: '通过预算中台实现贯穿立项、采购、费控的实时刚性控制，确保业务始终在管理轨道内运行。',
    details: ['全链路实时控制', '柔性预警机制', '控制策略统管']
  },
  {
    icon: PieChart,
    title: 'Analysis & Assessment (经营分析与考核)',
    description: '通过智能归因分析技术，透过财务结果洞察业务动因，形成分析关联绩效的管理闭环。',
    details: ['智能归因洞察', '敏感性模拟', '绩效锚定考核']
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
