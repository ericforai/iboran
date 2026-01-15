import { TrendingUp, FileText, Link2, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: FileText,
    value: "80%",
    label: "合并报表编制效率提升",
    description: "实现多会计准则下集团合并报表的自动化编制，统一财务数据口径，提升报表准确性与披露时效。",
    color: "rose"
  },
  {
    icon: Link2,
    value: "100%",
    label: "多系统集成覆盖率",
    description: "打通ERP系统与供应链、销售、库存等外部多系统间的数据壁垒，实现全业务链条信息协同。",
    color: "pink"
  },
  {
    icon: BarChart3,
    value: "60%",
    label: "费用管控效率提升",
    description: "建立集团化费用管控体系，推动预算执行、报销流程的标准化与实时监控。",
    color: "rose"
  }
]

const colorMap = {
  rose: {
    from: "from-rose-500",
    to: "to-rose-600",
    bg: "bg-rose-500/10",
    text: "text-rose-400"
  },
  pink: {
    from: "from-pink-500",
    to: "to-pink-600",
    bg: "bg-pink-500/10",
    text: "text-pink-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(225, 29, 72, 0.2) 0%, transparent 40%)`
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
            通过泊冉软件的数字化解决方案，林清轩实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，林清轩实现了<span className="text-white font-semibold"> 合并报表自动化</span>、
            <span className="text-white font-semibold"> 多系统数据集成</span>和
            <span className="text-white font-semibold"> 费用精细化管控</span>，
            为企业的集团化发展奠定了坚实的财务基础。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-rose-400 mb-2">50+</div>
            <div className="text-sm text-slate-400">分支机构</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-sm text-slate-400">门店覆盖</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-rose-400 mb-2">95%</div>
            <div className="text-sm text-slate-400">报表准时率</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">实时数据同步</div>
          </div>
        </div>
      </div>
    </section>
  )
}
