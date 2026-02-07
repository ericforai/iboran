import { TrendingUp, Store, Link2, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: Store,
    value: "近100%",
    label: "门店管理数字化覆盖率",
    description: "实现门店全生命周期数字化管理，从立项到关闭全流程追踪，运营效率显著提升。",
    color: "red"
  },
  {
    icon: Link2,
    value: "近100%",
    label: "SAP系统集成完成度",
    description: "前端业务系统与SAP深度集成，数据实时互通，业财一体化管控目标达成。",
    color: "orange"
  },
  {
    icon: BarChart3,
    value: "60%",
    label: "财务对账效率提升",
    description: "企业支付集成实现资金流与业务流融合，财务自动对账，资金透明度大幅提升。",
    color: "red"
  }
]

const colorMap = {
  red: {
    from: "from-red-500",
    to: "to-red-600",
    bg: "bg-red-500/10",
    text: "text-red-400"
  },
  orange: {
    from: "from-orange-500",
    to: "to-orange-600",
    bg: "bg-orange-500/10",
    text: "text-orange-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full mb-6 border border-red-500/30">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold text-red-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，tims实现了显著的业务改善
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
                <p className="text-slate-400 leading-relaxed text-sm">{result.description}</p>

                {/* Divider Line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，tims实现了<span className="text-white font-semibold"> 门店全生命周期数字化</span>、
            <span className="text-white font-semibold"> SAP深度集成</span>和
            <span className="text-white font-semibold"> 业财一体化管控</span>，
            为企业的规模化发展奠定了坚实的数字化基础。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-sm text-slate-400">门店统一管理</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">10万+</div>
            <div className="text-sm text-slate-400">资产纳管数量</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">5000+</div>
            <div className="text-sm text-slate-400">合同年处理量</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">实时数据同步</div>
          </div>
        </div>
      </div>
    </section>
  )
}
