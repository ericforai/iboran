import { FileText, Shield, BarChart3, Terminal, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: "多系统高效集成",
    description: "构建支持国产信创的集团财务平台，实现各业务系统数据贯通，打破信息孤岛，提升整体协同效率。",
    features: ["国产信创底座", "数据贯通集成", "系统协同优化"]
  },
  {
    icon: Shield,
    title: "自主可控合规架构",
    description: "满足国有金融机构国产信创合规要求，构建自主可控的技术架构，以保障系统安全与数据主权。",
    features: ["国产化适配", "自主可控", "合规安全保障"]
  },
  {
    icon: BarChart3,
    title: "合并报表自动化",
    description: "实现合并报表编制自动化，显著缩短编制周期，提升数据准确性，强化集团化财务管理能力。",
    features: ["报表自动编制", "数据准确性提升", "财务管控强化"]
  },
  {
    icon: Terminal,
    title: "业财数据深度融合",
    description: "推动业务与财务系统深度整合，实现财务数据对业务的有效支撑，提升决策分析能力。",
    features: ["业财数据融合", "实时业务支撑", "决策分析赋能"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对上海清算所金融清算特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl border border-indigo-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">国产信创底座 + 业财深度融合</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                构建以&quot;国产信创&quot;为底座的集团财务平台，全面支撑登记、托管、结算及保证金管理等核心业务，
                实现跨系统数据协同与业务财务一体化管控，提升合并报表自动化水平与财务管控能力。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:from-indigo-500 hover:to-purple-400 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
