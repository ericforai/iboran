import { Shield, Clock, BarChart3, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Shield,
    title: '全链路合规管理系统',
    description: '内建 GSP/GMP 合规引擎，实现对物料批次、质检报告、温控记录的自动化管控，一键生成合规审计报告。',
    features: ['GSP/GMP 合规引擎', '自动化管控', '审计报告生成']
  },
  {
    icon: Clock,
    title: '精细化效期管理',
    description: '构建基于条码技术的仓储管理系统（WMS），实现效期自动预警、先进先出（FEFO）与单件精准追溯。',
    features: ['条码技术 WMS', '效期自动预警', 'FEFO 先进先出']
  },
  {
    icon: BarChart3,
    title: '营销云服务平台',
    description: '打通营销与财务模块，实现渠道库存可视、费用流转透明及返利结算自动化，支撑精细化渠道治理。',
    features: ['渠道库存可视', '费用流转透明', '返利结算自动化']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于用友 YonBIP + 泊冉实施服务的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
