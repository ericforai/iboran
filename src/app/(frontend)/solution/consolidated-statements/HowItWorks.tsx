'use client'

import { motion } from 'framer-motion'
import { Database, FileJson, Calculator, FileCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: '数据采集与同步',
    description: '从 ERP、总账、报表等系统自动抓取凭证、余额及关联交易原始数据。',
    color: 'bg-blue-500'
  },
  {
    icon: FileJson,
    title: '标准转换与折算',
    description: '自动进行会计科目映射、币种折算及多准则下的账务调整。',
    color: 'bg-purple-500'
  },
  {
    icon: Calculator,
    title: '智能抵销与调整',
    description: '通过内置规则引擎，一键完成权益抵销、内部买卖对销及往来抵销。',
    color: 'bg-red-500'
  },
  {
    icon: FileCheck,
    title: '报告出具与报送',
    description: '自动生成合并底稿及法定报表，并满足监管机构的一键报送要求。',
    color: 'bg-green-500'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#001529] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">一键合并：由杂乱到有序</h2>
          <div className="w-12 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-400">
            通过流程自动化与规则智能化，彻底告别繁琐的手工合并，实现财务报告的高效闭环。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Connector Arc (Mobile) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-700">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}

                <div className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={40} className="text-white" />
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-[#001529] font-black flex items-center justify-center border-4 border-[#001529]">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center"
        >
          <div className="text-blue-400 font-bold mb-4 tracking-widest uppercase text-sm">强大的集成底座</div>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text logos for placeholder consistency */}
             {['用友 BIP', 'SAP S/4HANA', 'Oracle EBS', 'Microsoft Dynamics'].map((brand, i) => (
               <div key={i} className="text-xl font-black italic tracking-tighter text-white/80">{brand}</div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
