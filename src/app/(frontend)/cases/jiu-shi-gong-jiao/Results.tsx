import { TrendingUp, Target, ShieldCheck } from 'lucide-react'

const results = [
  {
    icon: TrendingUp,
    value: '数据打通',
    label: '业财深度融合',
    description: '通过多系统集成破除数据孤岛，构建统一的数据分析与电子会计档案体系，实现财务管理标准化、资金运营集约化、业财数据协同化。'
  },
  {
    icon: Target,
    value: '司库管理',
    label: '资金安全强化',
    description: '强化国资监管下的资金安全、合规透明与绩效管控，全面提升国有资产保值增值能力与公共服务效能，满足高标准监管要求。'
  },
  {
    icon: ShieldCheck,
    value: '财务共享',
    label: '决策效率提升',
    description: '构建以"集团财务+司库管理+业财联动"为核心的一体化平台，推动财务共享转型，为管理决策提供有力的数据支撑与分析能力。'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-cyan-400">●</span>
            <span>项目成果</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">数字化转型带来的可量化收益</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {result.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.label}</h3>
                <p className="text-slate-400 text-sm">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
