import { GitMerge, Building, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: '多系统集成平台',
    description: '打通合并报表、财务共享、费用管理、合同管理与企业支付等关键环节，破除数据孤岛，构建统一的数据分析与电子会计档案体系。',
    features: ['合并报表', '财务共享', '费用管理', '合同管理']
  },
  {
    icon: Building,
    title: '司库资金管理',
    description: '强化国资监管下的资金安全、合规透明与绩效管控，实现资金运营集约化，提升国有资产保值增值能力与公共服务效能。',
    features: ['资金安全', '合规透明', '绩效管控', '集约运营']
  },
  {
    icon: FileText,
    title: '业财融合一体化',
    description: '构建以"集团财务+司库管理+业财联动"为核心的一体化解决方案，推动财务共享转型，实现财务管理标准化与业财数据协同化。',
    features: ['业财联动', '财务标准化', '数据协同', '决策支撑']
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
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于集团财务+司库管理+业财融合的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-cyan-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
