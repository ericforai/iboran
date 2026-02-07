import { TrendingUp, FileText, Server, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: FileText,
    value: "70%",
    label: "合并报表编制效率提升",
    description: "实现多组织、多法人架构下的合并报表自动化编制，打破数据孤岛，提升财务归集效率与合规性。",
    color: "cyan"
  },
  {
    icon: Server,
    value: "99%以上",
    label: "ERP系统覆盖度",
    description: "构建统一ERP平台，统一科目体系、强化资金集中管理与成本精细核算，支撑高层高效决策。",
    color: "blue"
  },
  {
    icon: BarChart3,
    value: "50%",
    label: "费用管控效率提升",
    description: "推动研发、生产、销售全流程线上化审批与预算控制，提升费用透明度与追溯能力。",
    color: "cyan"
  }
]

const colorMap = {
  cyan: {
    from: "from-cyan-500",
    to: "to-cyan-600",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400"
  },
  blue: {
    from: "from-blue-500",
    to: "to-blue-600",
    bg: "bg-blue-500/10",
    text: "text-blue-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(8, 145, 178, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-6 border border-cyan-500/30">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，中晶新源实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，中晶新源实现了<span className="text-white font-semibold"> 合并报表自动化</span>、
            <span className="text-white font-semibold"> 统一ERP平台</span>和
            <span className="text-white font-semibold"> 费用精细化管控</span>，
            为企业的芯片设计业务发展奠定了坚实的数字化基础。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-sm text-slate-400">子公司统一管理</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-sm text-slate-400">研发项目并行</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
            <div className="text-sm text-slate-400">报表准时率</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">实时数据同步</div>
          </div>
        </div>
      </div>
    </section>
  )
}
