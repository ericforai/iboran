'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Search, 
  GitMerge, 
  PieChart, 
  ChevronRight 
} from 'lucide-react'

const features = [
  {
    title: '事项驱动会计',
    description: '以“事项法”为核心，实时采集业务原始信息，自动驱动会计事务处理，实现业财深度解耦。',
    icon: Zap,
    metric: '实时采集',
    color: 'bg-blue-500',
  },
  {
    title: '智能月结中心',
    description: '全流程自动化月结流程编排，一键触发对账、稽核与关账，大幅提升财务终结效率。',
    icon: GitMerge,
    metric: '1天结账',
    color: 'bg-red-500',
  },
  {
    title: '财管同源分流',
    description: '一套业财原始底座，支持面向不同干系人的多准则、多口径核算，满足合规与管理双重需求。',
    icon: Search,
    metric: '双重视图',
    color: 'bg-indigo-500',
  },
  {
    title: '业财大数据分析',
    description: '基于明细的事项分录，提供精细至物料、客商、员工的多维分析，赋能数据化经营决策。',
    icon: PieChart,
    metric: '多维洞察',
    color: 'bg-emerald-500',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
              核心能力：构建<span className="text-[#0052D9]">新财务</span>时代
            </h2>
            <p className="text-slate-500 text-lg">
              不仅仅是连接，更是深度的融合与价值再造。
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#0052D9] font-bold hover:gap-3 transition-all group">
            查看更多特性详情 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl border border-slate-100 bg-[#FBFBFF] flex gap-8 items-start hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
            >
              <div className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <feature.icon size={30} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                   <h3 className="text-xl font-bold text-[#1F2329]">{feature.title}</h3>
                   <span className="text-[10px] font-bold text-[#0052D9] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                     {feature.metric}
                   </span>
                </div>
                <p className="text-slate-500 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex gap-4">
                  <div className="w-1/3 h-1 bg-slate-200 rounded-full" />
                  <div className={`w-1/3 h-1 ${feature.color} rounded-full`} />
                  <div className="w-1/3 h-1 bg-slate-200 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
