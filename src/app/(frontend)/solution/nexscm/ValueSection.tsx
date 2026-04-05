'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, PieChart, ArrowUpRight } from 'lucide-react'

const metrics = [
  {
    icon: PieChart,
    value: '30%',
    label: '初步评审风险拦截',
    desc: '在初次企划评审阶段即可淘汰不具备商业确定性的高风险方案，显著降低盲目开发成本。',
    color: 'red'
  },
  {
    icon: Clock,
    value: '20%',
    label: '研发协同周期缩短',
    desc: '跨部门（五大中心）打样流转与询价对比效率大幅提升，平均减少部门间信息死板时间。',
    color: 'blue'
  },
  {
    icon: ShieldCheck,
    value: '60%',
    label: '品质问题追溯效率',
    desc: '基于工序级数据点和 Edge-QC 应用，实现从原材料到成品单件的秒级全链路数字化追溯。',
    color: 'indigo'
  },
  {
    icon: TrendingUp,
    value: '15%',
    label: '冗余库存积压减少',
    desc: 'AI 补货算法配合销势实时分析，精准优化安全库存水位，提升资金周转率约 12-15%。',
    color: 'orange'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 px-4">
          <div className="flex flex-col">
            <h2 className="text-3xl font-black text-[#1F2329] tracking-tight">
              数据驱动的商业回报
            </h2>
            <p className="text-slate-500 mt-2 font-medium">帮助企业将“不确定性”供应链转化为“精准”盈利中心</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-12 h-0.5 bg-[#E60012] rounded-full" />
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Validated Metrics</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-[2rem] bg-[#F8FAFC] border border-slate-100/50 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
            >
              {/* Animated visual accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${metric.color}-500/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
              
              <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-${metric.color}-600 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <metric.icon size={24} />
              </div>

              <div className="relative mb-4">
                <div className={`text-4xl lg:text-5xl font-black text-[#1F2329] tracking-tighter flex items-end gap-1 mb-2`}>
                   {metric.value}
                   <ArrowUpRight className={`w-6 h-6 text-green-500 opacity-60 mb-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                </div>
                <div className="text-sm font-bold text-[#1F2329] mb-4">{metric.label}</div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {metric.desc}
              </p>

              {/* Bottom decorative bar */}
              <div className={`absolute bottom-0 left-0 h-1 bg-${metric.color}-500 transition-all duration-500 ${idx % 2 === 0 ? 'w-full opacity-10' : 'w-0 group-hover:w-full opacity-100'}`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0052D9] to-[#003B99] text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          {/* Background graphics */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-white/10" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white/10" />

          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-black mb-3">立即开启您的 IP 供应链数智化转型</h3>
            <p className="text-blue-100 font-medium">我们的专家顾问将为您进行现有的供应链体系诊断，并输出专属的数智化演进路径图。</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
            className="relative z-10 px-10 py-5 bg-[#E60012] hover:bg-red-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 group"
          >
            申请免费体系诊断
            <span className="inline-block ml-2 w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
          </button>
        </div>
      </div>
    </section>
  )
}
