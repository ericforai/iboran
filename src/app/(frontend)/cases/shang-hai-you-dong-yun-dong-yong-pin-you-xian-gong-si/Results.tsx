import { TrendingUp, Link2, Zap, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: Link2,
    value: "99%以上",
    label: "数据集成覆盖率",
    description: "多系统数据充分打通，实现销售、库存、供应链、财务数据实时同步，消除数据孤岛",
    color: "orange"
  },
  {
    icon: Zap,
    value: "50%",
    label: "供应链效率提升",
    description: "库存协同效率显著提升，支撑运动用品行业高周转需求，订单响应速度加快",
    color: "blue"
  },
  {
    icon: BarChart3,
    value: "80%",
    label: "财务处理效率提升",
    description: "业财一体化实现，财务凭证自动生成，经营决策分析能力显著增强",
    color: "teal"
  }
]

const colorMap = {
  orange: {
    from: "from-orange-500",
    to: "to-orange-600",
    bg: "bg-orange-500/10",
    text: "text-orange-400"
  },
  blue: {
    from: "from-blue-500",
    to: "to-blue-600",
    bg: "bg-blue-500/10",
    text: "text-blue-400"
  },
  teal: {
    from: "from-teal-500",
    to: "to-teal-600",
    bg: "bg-teal-500/10",
    text: "text-teal-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(234, 88, 12, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，上海优动实现了显著的业务改善
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <p className="text-slate-400 leading-relaxed">{result.description}</p>

                {/* Divider Line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，上海优动实现了<span className="text-white font-semibold"> 数据集成全覆盖</span>、
            <span className="text-white font-semibold"> 供应链协同提效</span>和
            <span className="text-white font-semibold"> 业财一体化管控</span>，
            为企业的持续发展奠定了坚实的数字化基础。
          </p>
        </div>
      </div>
    </section>
  )
}
