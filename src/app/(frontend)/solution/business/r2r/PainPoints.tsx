'use client'

import { Split, Hourglass, FileWarning } from 'lucide-react'

const painPoints = [
  {
    icon: Split,
    title: "业财数据割裂",
    desc: "业务系统与财务系统尚未打通，大量依赖手工录入凭证。数据颗粒度粗，无法通过财务报表追溯至业务源头，难以支持精细化经营分析。"
  },
  {
    icon: Hourglass,
    title: "关账周期漫长",
    desc: "月底面临大量内部交易对账、成本分摊与外币重估工作。'年终决算'往往演变成耗时数周的攻坚战，财务报表严重滞后于业务节奏。"
  },
  {
    icon: FileWarning,
    title: "全球合规挑战",
    desc: "在多国多地经营环境下，需同时满足不同国家的会计准则（GAAP）与税务法规。手工调整多套账不仅效率低下，且存在巨大的合规风险。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">传统财务管理面临的困境</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#E60012] mb-6 group-hover:scale-110 transition-transform">
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
