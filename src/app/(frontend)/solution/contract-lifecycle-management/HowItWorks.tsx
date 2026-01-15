'use client'

import { FileEdit, Search, PenTool, LayoutTemplate, BarChart3, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: LayoutTemplate,
    title: '01. 范本与起草',
    description: '引用标准范本库，支持 Word 协同编辑与水印控制，从源头规范合同内容。',
  },
  {
    icon: Search,
    title: '02. 智能审查',
    description: 'NLP 智能提取关键条款，自动比对历史版本，识别合规风险点。',
  },
  {
    icon: PenTool,
    title: '03. 在线签署',
    description: '无缝集成电子签章，支持多方会签、骑缝章与移动端签署，具备法律效力。',
  },
  {
    icon: FileEdit,
    title: '04. 履约监控',
    description: '关联收付款计划，自动预警履约节点，实现合同与资金、发票的三单匹配。',
  },
  {
    icon: BarChart3,
    title: '05. 归档与分析',
    description: '一键归档至档案系统，多维度统计合同执行效率与履约情况，辅助经营决策。',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            全生命周期闭环管理 (OLM)
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-500">
            打破部门壁垒，实现从合同需求到归档评价的端到端数字化流转
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative mb-24">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white pt-8 group"
              >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:scale-110 group-hover:bg-[#0052D9] transition-all duration-300">
                        <step.icon className="w-10 h-10 text-[#0052D9] group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9] transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed px-2">
                        {step.description}
                    </p>
                    
                    {/* Arrow for mobile/tablet flow */}
                    {idx !== steps.length - 1 && (
                        <ArrowRight className="lg:hidden w-6 h-6 text-slate-300 mt-6 rotate-90 md:rotate-0" />
                    )}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simplified Architecture Diagram */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
             <div className="text-center mb-8">
                <h3 className="font-bold text-slate-800">业财法一体化架构</h3>
             </div>
             <div className="grid grid-cols-3 gap-4 text-center text-sm font-bold text-slate-600">
                 <div className="bg-white p-4 rounded shadow-sm border-t-4 border-blue-500">
                    <div className="mb-2">业务端</div>
                    <div className="text-xs font-normal text-slate-400">采购 / 销售 / 项目</div>
                 </div>
                 <div className="bg-[#E60012] p-4 rounded shadow-sm text-white transform scale-110 z-10">
                    <div className="mb-2 text-lg">CLM 合同中台</div>
                    <div className="text-xs font-normal text-white/80">标准 / 合规 / 数据</div>
                 </div>
                 <div className="bg-white p-4 rounded shadow-sm border-t-4 border-green-500">
                    <div className="mb-2">财务端</div>
                    <div className="text-xs font-normal text-slate-400">应收 / 应付 / 资金</div>
                 </div>
             </div>
             <div className="mt-8 flex justify-between px-12 text-xs text-slate-400">
                <span>• 统一主数据</span>
                <span>• 统一审批流</span>
                <span>• 统一档案库</span>
             </div>
        </div>
      </div>
    </section>
  )
}
