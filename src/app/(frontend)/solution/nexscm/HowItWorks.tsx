'use client'

import { motion } from 'framer-motion'
import { BarChart3, Workflow, Cpu, RefreshCcw, ArrowRight, CircleDashed } from 'lucide-react'

const steps = [
  {
    id: '01',
    title: 'IP 智能孵化',
    desc: '从创作灵感或 IP 原始数据入手，通过 41 个维度进行自动化评级与风险建模，形成初步业务案例。',
    icon: BarChart3,
    color: '#E60012'
  },
  {
    id: '02',
    title: '聚合询价与协同打样',
    desc: '系统智能匹配匹配度最高的工厂库，多部门（财务、品控等）联动在线评审，样品日志数字化留存。',
    icon: Workflow,
    color: '#0052D9'
  },
  {
    id: '03',
    title: '生产数字孪生',
    desc: '将订单下达至物理工厂后，系统自动映射工序看板。驻场 Edge-QC 实时提交品质与进度监控点。',
    icon: Cpu,
    color: '#722ED1'
  },
  {
    id: '04',
    title: '自适应补货循环',
    desc: '基于 7/30 日销量动态预测，AI 自动触发补货申请。售后客诉反哺下一代企划，形成完整生命周期闭环。',
    icon: RefreshCcw,
    color: '#FA8C16'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#1F2329] mb-6">全链路协同流程</h2>
          <p className="text-lg text-slate-500 font-medium">从创意到成品，从交付到再生，NexSCM 为您管理每一个关键里程碑。</p>
          <div className="flex justify-center gap-1 mt-8">
            {[1, 2, 3, 4].map((i: any) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            ))}
          </div>
        </div>

        {/* Workflow visualization */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                {/* Step Indicator / Icon Container */}
                <div className="relative group grayscale hover:grayscale-0 transition-all duration-500">
                   {/* Circle Backdrop */}
                   <div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-xl relative z-20 group-hover:shadow-[0_0_40px_rgba(0,82,217,0.1)] group-hover:border-blue-100 transition-all">
                      <step.icon size={36} style={{ color: step.color }} />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center font-mono font-black text-[#1F2329] text-sm">
                         {step.id}
                      </div>
                   </div>

                   {/* Rotating Aura for Hover */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="absolute -inset-2 rounded-full border border-dashed border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                   />
                </div>

                {/* Content */}
                <div className="mt-8 text-center px-4">
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden h-12 w-1 bg-slate-100 my-4" />
                )}

                {/* Active Pulse (Last Step only for demo) */}
                {idx === 3 && (
                   <div className="mt-8">
                     <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full text-green-600 text-[10px] font-bold border border-green-100 animate-pulse">
                       <CircleDashed size={12} className="animate-spin" />
                       REAL-TIME LOOPING
                     </div>
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Botom Tip */}
        <div className="mt-32 p-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-center gap-10">
           <div className="text-center md:text-left">
              <div className="text-[#0052D9] font-black text-sm uppercase tracking-tighter mb-1">Architecture Note</div>
              <div className="text-[#1F2329] text-lg font-bold">不仅是流程管理，更是数据中脑</div>
              <p className="text-slate-500 text-sm mt-1">集成天眼查风险评估、社交研报 NLP 插件及 3PL 物流接口。</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                 <ArrowRight size={20} />
              </div>
              <div className="flex -space-x-2">
                 {[1,2,3].map((i: any) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-100" />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
