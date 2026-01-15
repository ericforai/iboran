import React from 'react'
import { Microscope, Clock, ShieldCheck, Layers } from 'lucide-react'

const challenges = [
  {
    icon: Microscope,
    title: "研发转产协同断层",
    description: "CDMO模式下，研发工艺向生产转移复杂。项目进度、物料状态与生产执行脱节，导致转产效率低、周期长。",
  },
  {
    icon: ShieldCheck,
    title: "多重合规与审计压力",
    description: "需同时满足NMPA、FDA、EU等全球GMP监管。CSV（计算机化系统验证）流程繁琐，人工审计风险高、成本巨。",
  },
  {
    icon: Clock,
    title: "项目交付与工期延宕",
    description: "多管线/多项目并行，资源协调困难。缺乏统一平台追踪跨地域、跨组织的进度，导致项目延期风险难以预警。",
  },
  {
    icon: Layers,
    title: "精化核算与利润分析",
    description: "成本由核算到项目总体转向按照利润中心考核。单批次成本、项目实际毛利实时获取难，难以支撑科学定价。",
  }
]

export function IndustryChallenges() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            直击 CDMO 企业
            <span className="text-blue-600 block sm:inline"> 转型四大挑战</span>
          </h2>
          <p className="text-slate-600 text-lg">
            在多管线竞争与严苛监管背景下，CDMO 企业急需突破协同、合规与成本的三重瓶颈。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <challenge.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{challenge.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
