import { Database, Users, Factory, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: "一站式业财一体化平台",
    description: "构建统一的数据中台，集成 ERP、MES、SRM 及财务模块，实现业务单据自动转化为财务凭证，确保账实相符。",
    features: ["统一数据中台", "业务财务一体化", "单据自动转化"]
  },
  {
    icon: Users,
    title: "透明化供应链协同",
    description: "建立供应商门户与交期监控看板，实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率。",
    features: ["供应商门户", "交期监控看板", "全流程在线化"]
  },
  {
    icon: Factory,
    title: "智能化车间管理",
    description: "通过条码化与物联网手段，实时采集生产实绩与工艺数据，实现精细化成本核算与质量追溯闭环。",
    features: ["条码化管理", "物联网采集", "质量追溯闭环"]
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
            针对原能生物的业务特点，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
