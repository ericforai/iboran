import { TrendingUp, FileText, Shield, BarChart3, Terminal } from 'lucide-react'

const results = [
  {
    icon: FileText,
    value: "90%",
    label: "合并报表效率提升",
    description: "实现合并报表编制自动化，显著缩短编制周期，提升数据准确性与财务管控能力。",
    color: "indigo"
  },
  {
    icon: Shield,
    value: "99%以上",
    label: "国产信创合规率",
    description: "构建自主可控的技术架构，全面满足国有金融机构国产信创合规要求。",
    color: "purple"
  },
  {
    icon: Terminal,
    value: "85%",
    label: "多系统协同效率提升",
    description: "实现各业务系统数据贯通，打破信息孤岛，整体协同效率大幅提升。",
    color: "indigo"
  },
  {
    icon: BarChart3,
    value: "80%",
    label: "业财融合深度提升",
    description: "推动业务与财务系统深度整合，财务数据对业务决策支撑能力显著增强。",
    color: "purple"
  }
]

const colorMap = {
  indigo: {
    from: "from-indigo-500",
    to: "to-indigo-600",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400"
  },
  purple: {
    from: "from-purple-500",
    to: "to-purple-600",
    bg: "bg-purple-500/10",
    text: "text-purple-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full mb-6 border border-indigo-500/30">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，上海清算所实现了显著的业务改善
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => {
            const Icon = result.icon
            const colors = colorMap[result.color as keyof typeof colorMap]
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${colors.from} ${colors.to} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent`}>
                  {result.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">{result.label}</h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm">{result.description}</p>

                {/* Divider Line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，上海清算所实现了<span className="text-white font-semibold"> 国产信创底座构建</span>、
            <span className="text-white font-semibold"> 多系统高效集成</span>、
            <span className="text-white font-semibold"> 合并报表自动化</span>和
            <span className="text-white font-semibold"> 业财数据深度融合</span>，
            为国有金融清算机构的数字化升级树立了标杆。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
            <div className="text-sm text-slate-400">业务系统集成</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
            <div className="text-sm text-slate-400">系统可用性</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400 mb-2">99%以上</div>
            <div className="text-sm text-slate-400">国产信创达标</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">清算服务保障</div>
          </div>
        </div>
      </div>
    </section>
  )
}
