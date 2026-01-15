import { GitMerge, Store, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: '多系统集成平台',
    description: '打通ERP、SRM、集团财务、合并报表等核心系统，消除数据孤岛，实现项目管理、合同管理、费用管理流程一体化。',
    features: ['ERP/SRM集成', '财务合并', '数据打通', '流程协同']
  },
  {
    icon: Store,
    title: '全周期项目管理',
    description: '实现企业支付与售后服务系统有效联动，建立资金流与服务流闭环管理，支撑复杂项目的全生命周期精细化管控。',
    features: ['项目全周期', '支付联动', '售后闭环', '精细管控']
  },
  {
    icon: FileText,
    title: '业财深度融合',
    description: '构建统一数字化底座，实现高实时性、高准确性的数据流转，推动业财深度融合与集团化资源协同。',
    features: ['业财一体', '实时数据', '集团协同', '高效决策']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于统一数字化底座的全场景覆盖</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
