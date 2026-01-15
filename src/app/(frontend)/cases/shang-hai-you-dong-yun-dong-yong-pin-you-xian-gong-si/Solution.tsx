import { ShoppingCart, Package, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: ShoppingCart,
    title: "全渠道销售管理",
    description: "打通线上线下销售渠道，实现订单统一管理、库存实时共享、客户数据集中分析，提升全渠道销售效率。",
    features: ["订单统一管理", "库存实时共享", "客户数据分析"]
  },
  {
    icon: Package,
    title: "智能库存协同",
    description: "构建实时库存同步机制，支持多仓协同、智能补货、效期预警，满足运动用品行业高周转需求。",
    features: ["实时库存同步", "智能补货", "效期预警"]
  },
  {
    icon: BarChart3,
    title: "业财一体化管控",
    description: "实现业务数据与财务核算无缝对接，自动生成财务凭证，支持精细化成本核算与经营决策分析。",
    features: ["自动凭证生成", "精细化成本核算", "经营决策支持"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对上海优动的运动用品业务特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-slate-900 mb-3">{solution.title}</h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold hover:from-orange-500 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
