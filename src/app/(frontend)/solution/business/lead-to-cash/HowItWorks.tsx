'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, BarChart3, Receipt, Banknote, UserPlus } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: "线索获取 & 培育",
    desc: "多渠道线索归集，清洗与评分，360° 客户画像，精准识别高意向客户。",
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "商机管理",
    desc: "精细化商机漏斗管理，可视化销售流程，提升赢单率与预测准确性。",
    color: "indigo"
  },
  {
    icon: FileText,
    title: "CPQ 智能报价",
    desc: "配置-定价-报价 (CPQ) 自动化，支持复杂产品组合与阶梯定价，快速生成专业标书。",
    color: "violet"
  },
  {
    icon: Receipt,
    title: "合同与订单",
    desc: "在线合同签署，自动生成订单，无缝对接供应链与发货系统，确保履约时效。",
    color: "purple"
  },
  {
    icon: Banknote,
    title: "回款与核销",
    desc: "业财一体化，自动对账核销，实时监控应收账款，加速资金回笼。",
    color: "red"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">端到端业务闭环</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            打通从营销线索到财务收款的每一个环节，消除数据孤岛，实现业务流、资金流、票据流的“三流合一”。
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 rounded-2xl bg-white border-2 border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:border-${step.color}-500 group-hover:shadow-${step.color}-200 transition-all duration-300 relative`}>
                  <div className={`w-12 h-12 rounded-full bg-${step.color}-50 flex items-center justify-center`}>
                    <step.icon className={`text-${step.color}-600`} size={24} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1F2329] text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">
                  {step.desc}
                </p>

                {/* Arrow for Mobile/Tablet */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-slate-300">
                    <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Architecture Diagram (Simplified Code-based) */}
        <div className="mt-24 p-8 bg-[#F7F8FA] rounded-2xl border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#1F2329]">L2C 核心架构视图</h3>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Layer 1: Front Office */}
            <div className="flex-1 bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="text-xs font-bold text-[#0052D9] uppercase tracking-wider mb-4">Front Office (营销/销售)</div>
              <div className="grid grid-cols-2 gap-3">
                {['全渠道获客', 'SCRM', '商机管理', 'CPQ报价'].map(item => (
                  <div key={item} className="bg-blue-50 text-blue-700 text-sm py-2 px-3 rounded font-medium text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div className="flex md:flex-col items-center justify-center gap-2 text-slate-400">
              <div className="h-0.5 w-8 md:w-0.5 md:h-12 bg-slate-300"></div>
              <div className="bg-slate-200 px-2 py-1 rounded text-xs font-mono">BIP Link</div>
              <div className="h-0.5 w-8 md:w-0.5 md:h-12 bg-slate-300"></div>
            </div>

            {/* Layer 2: Back Office */}
            <div className="flex-1 bg-white p-6 rounded-xl border border-red-100 shadow-sm">
              <div className="text-xs font-bold text-[#E60012] uppercase tracking-wider mb-4">Back Office (订单/财务)</div>
              <div className="grid grid-cols-2 gap-3">
                {['订单中心', '合同归档', '应收确认', '发票税务'].map(item => (
                  <div key={item} className="bg-red-50 text-red-700 text-sm py-2 px-3 rounded font-medium text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
