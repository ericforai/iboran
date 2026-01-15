import { Layers, Receipt, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: Layers,
    title: '集团财务一体化',
    description:
      '以集团财务为核心，统一数据口径与管理流程，提升总部对门店经营的实时掌控。',
    features: ['合并报表自动化', '经营数据统一口径', '总部实时汇总'],
  },
  {
    icon: Receipt,
    title: '费用管理在线闭环',
    description:
      '报销、采购、结算流程线上化，强化审批与执行协同，提升费用透明度与合规性。',
    features: ['报销与采购闭环', '审批流程标准化', '费用透明可追溯'],
  },
  {
    icon: Wallet,
    title: '合同与资金集中化',
    description:
      '合同全生命周期数字化管理，资金归集与调度可视化，提升资金使用效率。',
    features: ['合同条款可追溯', '续签与风险预警', '资金归集调度'],
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于泊冉数智化底座的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
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
