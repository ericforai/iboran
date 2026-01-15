import { BarChart3, FileText, Network, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: Network,
    title: '多系统集成中台',
    description:
      '打通运输、物流、租赁与 SAP 数据链路，实现业务与财务协同。',
    features: ['跨系统数据归集', '统一主数据口径', '业务财务联动'],
  },
  {
    icon: BarChart3,
    title: '合并报表与共享',
    description:
      '优化并表流程，提升合并报表效率，支撑财务共享中心建设。',
    features: ['并表自动化', '口径一致性', '共享流程标准化'],
  },
  {
    icon: Wallet,
    title: '司库与资金监管',
    description:
      '建立集中化资金管理体系，提升资金监管实时性与风险控制。',
    features: ['资金池管理', '支付联动', '资金风险预警'],
  },
  {
    icon: FileText,
    title: '合同税务与合规',
    description:
      '合同与税务流程统一管理，强化合规与内控穿透。',
    features: ['合同全生命周期', '税务合规管理', '审计留痕'],
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">面向国资交通集团的一体化管理平台</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/10 to-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
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
