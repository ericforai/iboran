'use client'

import { motion } from 'framer-motion'
import { Database, Cpu, Send, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: "多源数据采集",
    desc: "自动抓取ERP业务数据、进销项发票数据及财务底账，打破数据孤岛。"
  },
  {
    icon: Cpu,
    title: "智能规则引擎",
    desc: "内置最新税法规则库，自动进行税基计算、价税分离与纳税调整。"
  },
  {
    icon: Send,
    title: "自动申报&缴款",
    desc: "生成标准申报表，直连税局通道完成一键申报于税款划扣。"
  },
  {
    icon: TrendingUp,
    title: "数据价值分析",
    desc: "生成多维税务分析报告，提供税务合规体检与税务筹划建议。"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">
            全流程自动化的税务管理闭环
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <step.icon className="w-8 h-8 text-[#0052D9]" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E60012] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {idx + 1}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-full h-full group-hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
