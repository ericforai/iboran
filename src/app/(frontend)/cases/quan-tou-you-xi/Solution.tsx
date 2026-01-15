import { BarChart3, FileText, Network, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: Network,
    title: '多系统集成与对账',
    description:
      '打通运营平台、支付网关与分成系统，形成可追溯的数据链路。',
    features: ['跨系统数据归集', '对账自动化', '实时核算支撑'],
  },
  {
    icon: FileText,
    title: '多会计准则管理',
    description:
      '支持 IFRS 与本地准则并行处理，合并报表输出更高效。',
    features: ['多准则核算', '合并报表自动化', '披露一致性提升'],
  },
  {
    icon: Wallet,
    title: '司库与资金集中',
    description:
      '强化跨境资金可视化与调度能力，降低外汇风险。',
    features: ['资金池管理', '外汇风险控制', '现金流预测'],
  },
  {
    icon: BarChart3,
    title: '全球经营分析',
    description:
      '构建集团经营驾驶舱，支撑产品矩阵与区域策略协同。',
    features: ['经营指标统一口径', '区域绩效对比', '战略决策支持'],
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">面向全球化电竞 IP 生态的一体化财务底座</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
