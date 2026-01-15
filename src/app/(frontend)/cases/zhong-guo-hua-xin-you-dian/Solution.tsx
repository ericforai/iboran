import { BarChart3, FileText, Network, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: Network,
    title: '多系统集成中台',
    description:
      '打通 ERP 与业务系统数据链路，提升跨组织协同与业财融合。',
    features: ['跨系统数据归集', '主数据统一', '流程标准化'],
  },
  {
    icon: BarChart3,
    title: '合并报表与准则',
    description:
      '支持多会计准则并行处理，缩短合并报表周期。',
    features: ['并表自动化', '口径一致性', '合规风险降低'],
  },
  {
    icon: FileText,
    title: '项目合同全周期',
    description:
      '项目与合同统一管理，实现执行、成本与回款可追溯。',
    features: ['合同闭环管理', '项目进度透明', '回款跟踪'],
  },
  {
    icon: Wallet,
    title: '费用与支付合规',
    description:
      '费用管理与支付系统联动，强化合规与审计留痕。',
    features: ['费用合规管控', '支付联动', '审计留痕'],
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">面向央企治理的一体化管理平台</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
