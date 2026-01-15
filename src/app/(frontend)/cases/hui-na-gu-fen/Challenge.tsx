import { AlertTriangle, Link2, Database, Workflow } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '数据孤岛严重',
    description: 'ERP、SRM、集团财务、合并报表等核心系统间存在严重数据孤岛，项目管理、合同管理与费用管理流程割裂，信息传递滞后且准确性不足。'
  },
  {
    icon: Database,
    title: '系统联动缺失',
    description: '企业支付与售后服务系统缺乏有效联动，无法实现资金流与服务流的闭环管理，制约了复杂项目的全生命周期管控。'
  },
  {
    icon: Workflow,
    title: '难以满足高实时性',
    description: '现有信息化架构难以满足高实时性、高集成性的业务需求，缺乏统一的数字化平台，无法支撑高效决策与精细化运营。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
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
