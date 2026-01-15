import { AlertTriangle, BarChart3, FileText, Network, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: Wallet,
    title: '资金分散与归集慢',
    description:
      '缺乏统一司库平台，资金分散、流动性风险难以实时把控。',
  },
  {
    icon: Network,
    title: '多系统数据孤岛',
    description:
      '高达与银行财资系统并行，数据难以对齐与共享。',
  },
  {
    icon: FileText,
    title: '合同费用流程割裂',
    description:
      '合同与费用管理脱节，业财联动弱化，合规风险上升。',
  },
  {
    icon: BarChart3,
    title: '合并报表效率低',
    description:
      '手工并表周期长、出错率高，难以支撑集团化管理。',
  },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-600" />
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
