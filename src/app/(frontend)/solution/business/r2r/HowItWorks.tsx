'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  PieChart, 
  ArrowRight,
  Zap,
  Layers
} from 'lucide-react'

const steps = [
  {
    title: "业务事项采集",
    desc: "全量采集业务活动的属性数据，不再局限于传统凭证，记录业财同源的原始事项。",
    icon: Database,
    color: "bg-blue-500"
  },
  {
    title: "事项中台分流",
    desc: "通过规则引擎自动识别事项，同步分分流至多准则账簿、管理账簿及税务口径。",
    icon: Layers,
    color: "bg-[#0052D9]"
  },
  {
    title: "智能核算引擎",
    desc: "自动触发会计规则，实时生成会计凭证，实现业务发生即核算，财务数据秒级刷新。",
    icon: Zap,
    color: "bg-[#E60012]"
  },
  {
    title: "多维报告合并",
    desc: "一键出具合并报表，支持从报表项目层层穿透至原始业务事项，实现透明化管理。",
    icon: PieChart,
    color: "bg-slate-900"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">端到端数智化路径</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从底层业务到顶层决策，构建实时、透明、合规的 R2R 闭环。
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group"
              >
                <div className={`w-14 h-14 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 shadow-lg transition-transform duration-300`}>
                  <step.icon size={28} />
                </div>
                
                <div className="absolute top-10 right-8 text-4xl font-black text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity">
                  0{idx + 1}
                </div>
                
                <h3 className="text-xl font-bold text-[#1F2329] mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block text-slate-300 opacity-40">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Efficiency Gains Callout */}
        <div className="mt-16 bg-[#001529] p-8 rounded-2xl shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-white">
                 <h4 className="text-xl font-bold mb-2">事项驱动下的财务效率革命</h4>
                 <p className="text-white/60 text-sm">由人工驱动转变为规则指令驱动，释放财务人员价值，转型业务合伙人。</p>
              </div>
              <div className="flex gap-8">
                 <div className="text-center">
                    <div className="text-2xl font-black text-blue-400">95%+</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">自动化核算</div>
                 </div>
                 <div className="text-center border-l border-white/10 pl-8">
                    <div className="text-2xl font-black text-[#E60012]">3-5 X</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">关账效率提升</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
