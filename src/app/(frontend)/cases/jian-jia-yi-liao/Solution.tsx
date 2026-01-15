import { ShieldCheck, Package, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: ShieldCheck,
    title: "全链路合规管理系统",
    description: "内建 GSP/GMP 合规引擎，实现对物料批次、质检报告、温控记录的自动化管控，一键生成合规审计报告。",
    features: ["GSP/GMP合规引擎", "批次自动管控", "审计报告一键生成"]
  },
  {
    icon: Package,
    title: "精细化效期管理",
    description: "构建基于条码技术的仓储管理系统（WMS），实现效期自动预警、先进先出（FEFO）与单件精准追溯。",
    features: ["条码WMS系统", "效期自动预警", "FEFO先进先出"]
  },
  {
    icon: BarChart3,
    title: "营销云服务平台",
    description: "打通营销与财务模块，实现渠道库存可视、费用流转透明及返利结算自动化，支撑精细化渠道治理。",
    features: ["渠道库存可视", "费用流转透明", "返利结算自动化"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-semibold text-rose-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对健嘉医疗的合规要求，量身定制的医药行业数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-rose-50 to-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-rose-600 to-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-rose-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full font-semibold hover:from-rose-500 hover:to-rose-400 transition-all shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
