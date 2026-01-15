import { GitMerge, Building, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: '多系统集成平台',
    description: '实现多系统深度集成，打通数据孤岛，构建统一数据底座，提升数据分析能力与管理决策效率，支撑国资监管要求。',
    features: ['数据打通', '决策提效', '监管合规', '统一平台']
  },
  {
    icon: Building,
    title: '业财融合一体化',
    description: '构建统一业财融合平台，贯通资产管理、合同管理、费用管理与集团财务业务流程，实现园区开发与运营全链条协同。',
    features: ['合同管理', '费用管理', '集团财务', '流程协同']
  },
  {
    icon: FileText,
    title: '投资全周期管控',
    description: '建立覆盖投前、投中、投后的数字化管理体系，强化合并报表自动化编制能力，实现国有资产精细化、可视化管控。',
    features: ['投前决策', '投中管控', '投后管理', '合并报表']
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
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于统一业财融合平台的全场景覆盖</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
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
