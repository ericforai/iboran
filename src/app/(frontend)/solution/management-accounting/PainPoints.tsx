'use client'

import { Clock, BarChart2, Split, Users } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: BarChart2,
    title: '核算不精细',
    description: '存货成本缺乏多维度明细，难以穿透还原到具体的材料消耗与人工费项，无法精准分析产品毛利构成。'
  },
  {
    icon: Clock,
    title: '反馈反馈滞后',
    description: '依赖月末手工结账，成本数据无法实时反映生产过程，管理层难以在业务发生时即时进行决策干预。'
  },
  {
    icon: Split,
    title: '财管口径不一',
    description: '外部合规报告与内部管理考核逻辑混杂，数据同源但口径难统一，导致管理账与财务账对不齐。'
  },
  {
    icon: Users,
    title: '跨组织协同难',
    description: '多组织、多工厂间的成本平行转移与合并核算过程复杂，缺乏有效的流程支撑，导致核算效率低下。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            管理会计面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600">
            在精细化管理时代，企业需要打破业财壁垒，从数据反映向价值创造转型。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PAIN_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3 group-hover:text-[#E60012] transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
