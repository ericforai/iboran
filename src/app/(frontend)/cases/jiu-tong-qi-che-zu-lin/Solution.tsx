import { FileText, DollarSign, RefreshCw, Landmark, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: FileText,
    title: "合同全生命周期管理",
    description: "打通各业务系统数据壁垒，实现合同从签订到归档的全生命周期数字化管理，支撑合并报表及时生成。",
    features: ["合同数字化管理", "签订到归档全流程", "多系统集成"]
  },
  {
    icon: DollarSign,
    title: "收入确认自动化",
    description: "针对汽车租赁业务特性，实现复杂收入确认规则的自动化计提，消除手工操作差错风险。",
    features: ["自动化收入计提", "复杂规则引擎", "实时收入核算"]
  },
  {
    icon: RefreshCw,
    title: "多平台统一对账",
    description: "构建企业支付统一管控机制，实现租金、维保等多平台收支的集中对账与高效结算。",
    features: ["统一支付管控", "多平台对账", "高效结算"]
  },
  {
    icon: Landmark,
    title: "司库资金闭环管理",
    description: "建设集团财务集中管控平台，实现资金流闭环管理、集中调度与实时监控，支撑财务战略落地。",
    features: ["资金流闭环", "集中调度", "实时监控"]
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
            针对久通汽车租赁集团化运营特性，量身定制的数字化转型解决方案
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
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
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
              <h4 className="font-bold text-lg text-white mb-2">业财融合一体化 + 集团财务集中管控</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                构建以"集团财务"为核心的数字化管控平台，打通合同全生命周期管理、自动化收入确认、
                多渠道支付对账协同及资金流闭环管控，全面支撑市级国资体系下集团财务战略落地。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-teal-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
