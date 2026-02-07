import { TrendingUp, Package, ShoppingCart, BarChart3 } from 'lucide-react'

const results = [
  {
    icon: Package,
    value: "99%以上",
    label: "IP全流程数字化覆盖率",
    description: "实现从IP授权、创意立项到销售回款的全流程数字化管理，IP衍生品生命周期可追溯。",
    color: "purple"
  },
  {
    icon: ShoppingCart,
    value: "70%",
    label: "订单处理效率提升",
    description: "OMS系统整合多渠道订单，统一履约执行，发货准确率显著提高，客户体验大幅改善。",
    color: "indigo"
  },
  {
    icon: BarChart3,
    value: "50%",
    label: "费用核算效率提升",
    description: "费用管理系统实现事前审批、事中控制与事后分析，成本分摊清晰，财务精细化管理达标。",
    color: "purple"
  }
]

const colorMap = {
  purple: {
    from: "from-purple-500",
    to: "to-purple-600",
    bg: "bg-purple-500/10",
    text: "text-purple-400"
  },
  indigo: {
    from: "from-indigo-500",
    to: "to-indigo-600",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400"
  }
}

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，优卡赏实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，优卡赏实现了<span className="text-white font-semibold"> IP全流程数字化</span>、
            <span className="text-white font-semibold"> 多渠道订单协同</span>和
            <span className="text-white font-semibold"> 费用精细管控</span>，
            为企业的文创IP业务发展奠定了坚实的数字化基础。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm text-slate-400">IP授权管理</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400 mb-2">1000+</div>
            <div className="text-sm text-slate-400">SKU在线管理</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-sm text-slate-400">发货准确率</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">实时数据同步</div>
          </div>
        </div>
      </div>
    </section>
  )
}
