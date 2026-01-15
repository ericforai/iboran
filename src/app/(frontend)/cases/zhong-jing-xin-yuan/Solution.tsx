import { FileText, Server, Wallet, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: "多组织合并报表",
    description: "实现多组织、多法人架构下的合并报表自动化编制，打破数据孤岛，提升财务归集效率与合规性。",
    features: ["自动合并报表", "多组织数据归集", "实时对账"]
  },
  {
    icon: Server,
    title: "统一ERP平台",
    description: "构建统一ERP平台，统一科目体系、强化资金集中管理与成本精细核算，支撑高层高效决策。",
    features: ["科目体系统一", "资金集中管理", "成本精细核算"]
  },
  {
    icon: Wallet,
    title: "费用与项目管控",
    description: "推动研发、生产、销售全流程线上化审批与预算控制，实现研发费用资本化归集与项目成本精细化分摊。",
    features: ["线上化审批", "研发费用资本化", "项目成本分摊"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对中晶新源芯片设计业务特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-cyan-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-cyan-950 rounded-2xl border border-cyan-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">&quot;研产供销&quot;全链路协同 + 集团财务集中管控</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                支撑IPD流程运转与产品盈利能力分析，助力芯片设计企业实现可持续创新与集团化发展。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-500 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
