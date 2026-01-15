import { FileText, Link2, Wallet, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: "多准则合并报表",
    description: "实现多会计准则并行下的集团合并报表自动化编制，统一财务数据口径，提升报表准确性与披露时效。",
    features: ["自动化合并报表", "多准则适配", "实时数据汇总"]
  },
  {
    icon: Link2,
    title: "多系统深度融合",
    description: "打通ERP与供应链、销售、库存等外部多系统间的数据壁垒，实现全业务链条信息协同。",
    features: ["ERP系统集成", "供应链协同", "数据实时贯通"]
  },
  {
    icon: Wallet,
    title: "费用精细化管控",
    description: "建立集团化费用管控体系，推动预算执行、报销流程的标准化与实时监控。",
    features: ["预算执行监控", "报销标准化", "费用实时分析"]
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
            针对林清轩化妆品业务特性，量身定制的集团财务数字化解决方案
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
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-rose-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
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

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-rose-950 rounded-2xl border border-rose-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">集团财务集中化管理体系</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                全面支撑集团财务集中化、标准化管理需求，强化合规披露能力与经营决策支撑，
                助力林清轩在高端护肤领域实现精细化运营与可持续增长。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-full font-semibold hover:from-rose-500 hover:to-pink-400 transition-all shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
