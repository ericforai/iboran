'use client'

import { motion } from 'framer-motion'
import { FileText, Scan, FileCheck, UserCheck, CreditCard, PieChart } from 'lucide-react'

const STEPS = [
  {
    icon: FileText,
    title: '全端报账',
    description: 'PC、移动端随时随地填单，发票一键导入'
  },
  {
    icon: Scan,
    title: '智能影像',
    description: 'OCR 自动识票，发票验真查重，电子归档'
  },
  {
    icon: FileCheck,
    title: '智能稽核',
    description: '100+ 为了规则自动校验，风险实时预警'
  },
  {
    icon: UserCheck,
    title: '共享审批',
    description: '任务自动派单，共享人员集中复核'
  },
  {
    icon: CreditCard,
    title: '自动支付',
    description: '银企直联，批量自动支付，回单自动下载'
  },
  {
    icon: PieChart,
    title: '自动核算',
    description: '凭证自动生成，报表实时出具'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            端到端全流程自动化的工作原理
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
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center mb-6 group hover:border-blue-100 transition-colors">
                  <step.icon size={32} className="text-[#0052D9] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2329] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {step.description}
                </p>
                
                {/* Arrow for mobile/tablet flow indication if needed, keeping simple for now */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
