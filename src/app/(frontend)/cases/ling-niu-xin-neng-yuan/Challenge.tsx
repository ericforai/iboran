import { AlertTriangle, Link2, FileText, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '系统数据孤岛',
    description: '多系统集成环境下，现有财务系统难以实现跨平台数据贯通，影响业财融合深度，导致财务数据滞后于业务发生，无法支撑实时决策。'
  },
  {
    icon: FileText,
    title: '多准则核算复杂',
    description: '企业需支持多会计准则以应对复杂核算场景，但缺乏统一的集团财务管理机制，合并报表编制过程中报表准确性与时效性不足。'
  },
  {
    icon: Wallet,
    title: '资金管控待提升',
    description: '在费用管理和司库（资金）管理方面，尚未建立集中化管控体系，资金使用效率与风险控制能力有待提升，缺乏标准化、可视化管理手段。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-emerald-600" />
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
