import { BarChart3, FileText, Network, Wallet } from 'lucide-react'

const solutions = [
  {
    icon: Wallet,
    title: '司库集中管理',
    description:
      '建设资金集中与流动性监控体系，提升资金使用效率与风险控制。',
    features: ['资金池管理', '归集调度自动化', '流动性预警'],
  },
  {
    icon: Network,
    title: '多系统集成',
    description:
      '打通高达与银行财资系统，消除数据孤岛。',
    features: ['跨系统数据归集', '对账自动化', '实时数据共享'],
  },
  {
    icon: BarChart3,
    title: '合并报表自动化',
    description:
      '统一报表口径与规则，提高并表效率与准确性。',
    features: ['并表周期缩短', '口径统一', '审计可追溯'],
  },
  {
    icon: FileText,
    title: '合同费用闭环',
    description:
      '合同、费用与支付联动管理，强化合规与透明。',
    features: ['合同全生命周期', '费用合规管控', '支付联动'],
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
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">面向泛金融集团的一体化财务管控平台</p>
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
