import { Store, Settings, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Store,
    title: '门店全生命周期管理',
    description: '实现门店从选址签约、设备投入、供应链采购到财务结算的全流程闭环管理，提升门店运营效率。',
    features: ['选址签约', '设备投入', '全流程闭环']
  },
  {
    icon: Settings,
    title: '资产与 Capex 管理',
    description: '资产变动实时追溯与折旧管理精度提升，资本支出审批流程优化，投资回报实时可视。',
    features: ['资产实时追溯', '折旧管理', 'Capex 流程优化']
  },
  {
    icon: FileText,
    title: '合同与税务集中化',
    description: '统一税务规则应对区域政策差异，集中化管理租赁及供应商合同，强化履约监控与风险预警。',
    features: ['税务合规', '合同集中化', '履约监控']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于微软 ERP + 泊冉实施服务的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-red-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
