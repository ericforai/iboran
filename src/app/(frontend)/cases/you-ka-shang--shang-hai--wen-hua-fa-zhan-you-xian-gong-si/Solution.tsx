import { Package, ShoppingCart, Wallet, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Package,
    title: "ERP全流程管理",
    description: "构建从IP授权、创意立项、设计开发到库存销售的完整ERP系统，实现IP衍生品从概念到回款的全流程数字化管理。",
    features: ["IP全生命周期追踪", "设计生产协同", "库存销售联动"]
  },
  {
    icon: ShoppingCart,
    title: "OMS订单协同",
    description: "整合电商平台、线下渠道及限量发售等多端订单，统一履约执行，提高发货准确率与客户体验。",
    features: ["多端订单统一", "智能发货协同", "退换货追溯"]
  },
  {
    icon: Wallet,
    title: "费用精细管控",
    description: "对IP授权费、外包设计成本、生产预算等关键支出进行事前审批、事中控制与事后归集。",
    features: ["事前申请审批", "事中执行控制", "事后归集分析"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对优卡赏文创IP业务特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-slate-900 mb-3">{solution.title}</h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-purple-950 rounded-2xl border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">ERP + OMS + 费用管理 深度融合</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                三大系统深度融合，实现IP授权→设计生产→库存销售→财务核算的全链路数据贯通，
                支撑文创企业在高波动、强IP属性的市场环境中实现敏捷响应与可持续增长。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full font-semibold hover:from-purple-500 hover:to-indigo-400 transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
