import { TrendingUp, FileText, DollarSign, RefreshCw, Landmark } from 'lucide-react'

const results = [
  {
    icon: FileText,
    value: "85%",
    label: "合并报表效率提升",
    description: "打通各业务系统数据壁垒，实现合并报表及时生成与准确性，集团财务管控效能显著提升。",
    color: "blue"
  },
  {
    icon: DollarSign,
    value: "90%",
    label: "收入核算准确性",
    description: "实现复杂收入确认规则的自动化计提，消除手工操作差错，收入核算准确性和时效性大幅提升。",
    color: "teal"
  },
  {
    icon: RefreshCw,
    value: "75%",
    label: "对账效率提升",
    description: "构建企业支付统一管控机制，多平台对账效率显著提高，资金结算风险大幅降低。",
    color: "blue"
  },
  {
    icon: Landmark,
    value: "100%",
    label: "资金集中管控覆盖率",
    description: "建设集团财务集中管控平台，实现资金流闭环管理、集中调度与实时监控。",
    color: "teal"
  }
]

const colorMap = {
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden" id="results">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">项目价值</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            数字化转型带来的
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"> 可量化收益</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            通过泊冉软件的数字化解决方案，久通汽车租赁实现了显著的业务改善
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
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl border border-white/10 text-center">
          <p className="text-lg text-slate-300">
            通过数字化转型，久通汽车租赁实现了<span className="text-white font-semibold"> 合同全生命周期管理</span>、
            <span className="text-white font-semibold"> 收入确认自动化</span>、
            <span className="text-white font-semibold"> 多平台统一对账</span>和
            <span className="text-white font-semibold"> 司库资金闭环管理</span>，
            为国有汽车租赁企业的数字化升级树立了标杆。
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
            <div className="text-sm text-slate-400">租赁合同管理</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-teal-400 mb-2">98%</div>
            <div className="text-sm text-slate-400">报表准时交付率</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-sm text-slate-400">国资合规达标率</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">资金实时监控</div>
          </div>
        </div>
      </div>
    </section>
  )
}
