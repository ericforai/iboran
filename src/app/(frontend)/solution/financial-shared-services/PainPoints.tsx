'use client'

import { Clock, ShieldAlert, FileX, Globe } from 'lucide-react'

// Content refined from industry expertise
const PAIN_POINTS = [
  {
    icon: Clock,
    title: '手工处理效率低',
    description: '传统模式下，大量单据依赖人工审核、录入，耗时费力，且容易出错，财务人员深陷低价值重复劳动。'
  },
  {
    icon: ShieldAlert,
    title: '合规管控难落地',
    description: '制度执行依赖人工判断，由于标准不一、监管滞后，导致违规报销、资金风险等问题频发，内控难以闭环。'
  },
  {
    icon: FileX,
    title: '业财数据割裂',
    description: '业务系统与财务系统无法实时互通，数据口径不一致，导致财务反映滞后，无法有效支撑经营决策。'
  },
  {
    icon: Globe,
    title: '全球化运营挑战',
    description: '跨国企业面临多准则、多币种、多语言及不同国家财税法规的复杂要求，缺乏统一的共享服务平台支撑。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            传统财务管理面临的挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600">
            数字化转型浪潮下，企业财务管理亟需突破效率瓶颈与合规风险，实现从管控到赋能的跨越。
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
