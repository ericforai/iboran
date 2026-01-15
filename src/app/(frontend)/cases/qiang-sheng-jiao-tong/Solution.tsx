import { FileText, Landmark, ScrollText, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: "多系统集成与合并报表",
    description: "打通各业务系统数据壁垒，实现数据贯通，保障合并报表的及时生成与准确性，支撑集团财务管控效能。",
    features: ["系统数据贯通", "合并报表自动化", "实时财务监控"]
  },
  {
    icon: Landmark,
    title: "司库资金集中管理",
    description: "构建统一司库管理机制，实现资金归集、集中管控与高效使用，满足国资体系对资金安全与效益的双重要求。",
    features: ["资金集中归集", "统一支付管控", "资金效益提升"]
  },
  {
    icon: ScrollText,
    title: "税务与合同线上化",
    description: "推动税务管理与合同管理线上化、标准化，实现全流程追溯与风险防控，满足国资监管日趋严格的要求。",
    features: ["税务管理线上化", "合同全流程追溯", "合规风险防控"]
  },
  {
    icon: BarChart3,
    title: "财务共享中心建设",
    description: "建设财务共享中心，推动业财融合深度发展，实现企业支付集中管控与数据分析精准赋能。",
    features: ["财务共享服务", "业财融合深化", "数据分析赋能"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对强生交通集团化运营特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl border border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">集团财务集中管控 + 多系统高效协同</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                构建以&quot;集团财务&quot;为核心的数字化管控平台，全面支撑公共交通运营、出租车服务、车辆租赁及运输管理等多元化业务，
                实现国有资产运营的透明度、合规性与管理效率全面提升。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
