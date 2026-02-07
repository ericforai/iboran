import { Database, Link2, Settings, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: '一站式业财一体化平台',
    description: '构建统一的数据中台，集成 ERP、MES、SRM 及财务模块，实现业务单据自动转化为财务凭证，以保障账实相符。',
    features: ['ERP 集成', '财务自动凭证', '账实相符']
  },
  {
    icon: Link2,
    title: '透明化供应链协同',
    description: '建立供应商门户与交期监控看板，实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率。',
    features: ['供应商门户', '交期监控', '在线协同']
  },
  {
    icon: Settings,
    title: '智能化车间管理',
    description: '通过条码化与物联网手段，实时采集生产实绩与工艺数据，实现精细化成本核算与质量追溯闭环。',
    features: ['条码采集', '实时监控', '质量追溯']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0052D9] rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-[#0052D9] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052D9]/10 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#0052D9]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-[#0052D9] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
