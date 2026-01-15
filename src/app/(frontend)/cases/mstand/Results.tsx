import { TrendingUp, Target, ShieldCheck } from 'lucide-react'

const results = [
  {
    icon: TrendingUp,
    value: '数据打通',
    label: '消除信息孤岛',
    description: '构建统一ERP平台，实现POS、供应链、会员及外卖平台深度集成，打破数据壁垒，提升跨系统协同效率。'
  },
  {
    icon: Target,
    value: '效率提升',
    label: '自动化对账',
    description: '多渠道交易流水自动对账，显著降低人工干预与出错风险，提高财务核算精准度与时效性。'
  },
  {
    icon: ShieldCheck,
    value: '精细运营',
    label: '支撑规模扩张',
    description: '统一、高效、可扩展的数字经营底座，支撑企业实现精细化运营与规模化快速复制。'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-[#0A0F1C] to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-amber-400">●</span>
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
                className="group text-center p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
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
