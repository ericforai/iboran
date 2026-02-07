import { TrendingUp, Clock, Package, ShieldCheck } from 'lucide-react'

type ColorType = 'amber' | 'emerald' | 'cyan'

const results: Array<{
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  description: string
  color: ColorType
}> = [
  {
    icon: Clock,
    value: "70%",
    label: "结账周期缩短",
    description: "月度财务关账时间由原来的 10 天以上缩短至 3 天内",
    color: "amber"
  },
  {
    icon: Package,
    value: "40%",
    label: "库存效率提升",
    description: "通过精准的供需匹配，原材料调拨效率提升 40%，有效降低了呆滞库存比例",
    color: "emerald"
  },
  {
    icon: ShieldCheck,
    value: "99%以上",
    label: "品质追溯达标",
    description: "实现全生命周期质量追溯，顺利通过全球头部客户的供应商体系审核",
    color: "cyan"
  }
]

const colorMap: Record<ColorType, {
  from: string
  to: string
  bg: string
  text: string
}> = {
  amber: {
    from: "from-amber-500",
    to: "to-amber-600",
    bg: "bg-amber-500/10",
    text: "text-amber-400"
  },
  emerald: {
    from: "from-emerald-500",
    to: "to-emerald-600",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400"
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 border border-amber-500/30">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，大和衡器实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，大和衡器实现了<span className="text-white font-semibold"> 业财一体化</span>、
            <span className="text-white font-semibold"> 供应链透明化</span>和
            <span className="text-white font-semibold"> 质量追溯闭环</span>，
            为企业的持续发展奠定了坚实的数字化基础。
          </p>
        </div>
      </div>
    </section>
  )
}
