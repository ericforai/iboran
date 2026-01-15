import { GitMerge, Store, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: '多系统集成平台',
    description: '构建统一ERP平台，实现POS系统、供应链管理、会员体系与主流外卖平台的深度集成，打破数据孤岛。',
    features: ['POS系统打通', '供应链协同', '会员体系集成', '外卖平台对接']
  },
  {
    icon: Store,
    title: '全链路业务协同',
    description: '实现从订单、采购、库存到财务核算的全业务链路数据协同，提升跨系统运营效率。',
    features: ['订单自动流转', '库存实时同步', '业财一体', '精细化管控']
  },
  {
    icon: FileText,
    title: '自动化对账体系',
    description: '强化多渠道交易流水自动化对账能力，显著降低人工干预与出错风险，提高财务核算精准度与时效性。',
    features: ['多平台对账', '智能核对', '异常预警', '效率提升']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于一体化数字经营底座的全场景覆盖</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
