import { Store, Package, FileText, Wallet, CheckCircle2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Store,
    title: "门店全周期管理",
    description: "实现从门店立项、装修、开业到运营、关闭的全生命周期数字化管理，建立标准化运营体系。",
    features: ["门店全生命周期追踪", "标准化运营流程", "实时运营监控"]
  },
  {
    icon: Package,
    title: "资产统一管控",
    description: "构建总部与门店联动的资产台账，实现资产从采购、调拨到报废的全流程可视可控。",
    features: ["资产台账联动", "全流程可视", "责任落实到人"]
  },
  {
    icon: FileText,
    title: "合同智能管理",
    description: "实现租赁、供应商、劳务等多类合同的电子化、自动化履约提醒与风险预警。",
    features: ["电子化合同管理", "自动履约提醒", "合规风险预警"]
  },
  {
    icon: Wallet,
    title: "业财一体管控",
    description: "打通采购、租金、费用报销等高频支付环节，实现资金流与业务流深度融合。",
    features: ["企业支付集成", "财务自动对账", "资金透明可控"]
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white" id="solution">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">解决方案</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">基于泊冉数智化底座的一体化架构</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            针对tims连锁餐饮业务特性，量身定制的数字化转型解决方案
          </p>
        </div>

        {/* Solution Cards - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow Indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-red-950 rounded-2xl border border-red-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white mb-2">SAP深度集成</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                所有解决方案均与SAP系统深度集成，实现数据互通、流程衔接、业务财务联动，
                以保障前端业务操作与后端财务核算的实时一致性。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full font-semibold hover:from-red-500 hover:to-orange-400 transition-all shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5"
          >
            查看实施成果
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
