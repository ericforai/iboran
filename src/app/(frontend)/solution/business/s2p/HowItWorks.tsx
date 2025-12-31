'use client'

import { motion } from 'framer-motion'
import { Box, CreditCard, FileText, Layers, Search, Truck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "寻源 (Source)",
    desc: "需求归集、供应商认证、询比价/招标、寻源决策"
  },
  {
    icon: FileText,
    title: "合同 (Contract)",
    desc: "合同起草、在线审批、电子签章、履约监控"
  },
  {
    icon: Box,
    title: "采购 (Procure)",
    desc: "商城采购/目录采购、订单协同、移动收货"
  },
  {
    icon: CreditCard,
    title: "付款 (Pay)",
    desc: "三单匹配、发票自动化、付款计划、资金结算"
  },
  {
    icon: Truck,
    title: "供应 (Supply)",
    desc: "供应商协同、库存管理、物流跟踪、绩效评价"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">从寻源到付款的端到端闭环</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            S2P 解决方案打通了企业采购业务的全流程，通过数字化手段消除断点，实现数据流、资金流、物流的“三流合一”。
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative mb-24">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
             {steps.map((step, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300"
               >
                 <div className="w-16 h-16 bg-blue-50 text-[#0052D9] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E60012] group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm border-4 border-white">
                   <step.icon size={28} />
                 </div>
                 <h3 className="text-lg font-bold text-[#1F2329] mb-3">{step.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed">
                   {step.desc}
                 </p>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-xl">
           <div className="flex items-center justify-center gap-3 mb-10">
              <Layers className="text-[#0052D9]" />
              <h3 className="text-2xl font-bold text-[#1F2329]">S2P 数字化采购架构全景</h3>
           </div>
           
           <div className="flex flex-col gap-6">
              {/* Layer 1: Front Office (User Interfaces) */}
              <div className="grid grid-cols-3 gap-4">
                 <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center font-bold text-[#0052D9]">企业采购商城</div>
                 <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center font-bold text-[#0052D9]">供应商门户</div>
                 <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center font-bold text-[#0052D9]">移动采购 App</div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                 <div className="h-8 w-0.5 bg-slate-300"></div>
              </div>

              {/* Layer 2: Core Applications */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                     <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">战略寻源 (Sourcing)</h4>
                     <ul className="text-xs text-slate-500 space-y-1">
                       <li> • 需求整合</li>
                       <li> • 招投标管理</li>
                       <li> • 寻源决策</li>
                     </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                     <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">采购执行 (Procurement)</h4>
                     <ul className="text-xs text-slate-500 space-y-1">
                       <li> • 目录管理</li>
                       <li> • 订单协同</li>
                       <li> • 收货确认</li>
                     </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                     <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">供应商协同 (SRM)</h4>
                     <ul className="text-xs text-slate-500 space-y-1">
                       <li> • 准入与生命周期</li>
                       <li> • 绩效考核</li>
                       <li> • 风险监控</li>
                     </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                     <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">财务结算 (Finance)</h4>
                     <ul className="text-xs text-slate-500 space-y-1">
                       <li> • 发票匹配</li>
                       <li> • 付款计划</li>
                       <li> • 成本分析</li>
                     </ul>
                  </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                 <div className="h-8 w-0.5 bg-slate-300"></div>
              </div>

              {/* Layer 3: Platform Services */}
              <div className="bg-slate-900 text-white p-4 rounded-lg text-center font-medium tracking-wide">
                 YonBIP 商业创新平台 (PaaS) · 数据中台 · 智能中台 · 业务中台
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
