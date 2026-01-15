import { AlertTriangle, BarChart3, FileText, Network, ShieldAlert } from 'lucide-react'

const challenges = [
  {
    icon: Network,
    title: '多系统集成难',
    description:
      '业务系统割裂，数据孤岛影响跨组织协同与效率。',
  },
  {
    icon: BarChart3,
    title: '合并报表复杂',
    description:
      '多会计准则并行，报表周期长且调整频繁。',
  },
  {
    icon: FileText,
    title: '项目合同分散',
    description:
      '项目全周期与合同管理缺乏统一平台，成本与回款难追溯。',
  },
  {
    icon: ShieldAlert,
    title: '合规监管压力',
    description:
      '费用与支付合规要求高，审计留痕与风控体系需提升。',
  },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => {
            const Icon = challenge.icon
            return (
              <div
                key={challenge.title}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
