import { TrendingUp, ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: ShieldCheck,
    value: "200%",
    label: "审计效率提升",
    description: "审计资料准备效率提升 200%，人为错误导致的批号管理事故降至零",
    color: "rose"
  },
  {
    icon: Zap,
    value: "50%",
    label: "拣货效率提升",
    description: "仓储拣货效率提升 50%，平均库龄降低 25%，显著减少了效期损耗费用",
    color: "amber"
  },
  {
    icon: BarChart3,
    value: "99.5%",
    label: "费用核算准确率",
    description: "销售数据采集由月度提至天级，渠道费用核算准确率达到 99.5%",
    color: "cyan"
  }
]

const colorMap = {
  rose: {
    from: "from-rose-500",
    to: "to-rose-600",
    bg: "bg-rose-500/10",
    text: "text-rose-400"
  },
  amber: {
    from: "from-amber-500",
    to: "to-amber-600",
    bg: "bg-amber-500/10",
    text: "text-amber-400"
  },
  cyan: {
    from: "from-cyan-500",
    to: "to-cyan-600",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full mb-6 border border-rose-500/30">
            <TrendingUp className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-semibold text-rose-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，健嘉医疗实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，健嘉医疗实现了<span className="text-white font-semibold"> 合规风险降低</span>、
            <span className="text-white font-semibold"> 物流周转优化</span>和
            <span className="text-white font-semibold"> 营销决策加速</span>，
            为企业的持续发展奠定了坚实的数字化基础。
          </p>
        </div>
      </div>
    </section>
  )
}
