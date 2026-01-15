import { AlertTriangle, Link2, Database, Calculator } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '系统整合能力薄弱',
    description: '现有系统无法有效支撑多系统集成需求，导致POS、供应链、会员管理及各大线上外卖平台之间数据割裂，形成严重的信息孤岛。'
  },
  {
    icon: Database,
    title: '对账复杂效率低下',
    description: '交易渠道多元、订单数据量大且频次高，企业面临多平台交易流水对账复杂、耗时长、出错率高等问题，财务核算效率与准确性受到严重影响。'
  },
  {
    icon: Calculator,
    title: '难以支撑规模化发展',
    description: '随着门店数量持续增加和业务场景不断扩展，缺乏统一、高效、可扩展的ERP平台，无法实现全业务链路的数据协同与自动化管理。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
