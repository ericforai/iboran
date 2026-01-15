import { Store, TrendingUp, ShieldCheck, Zap } from 'lucide-react'

const results = [
  {
    icon: Store,
    value: '7大场景',
    label: '全流程闭环管控',
    description: '门店管理、资产管理、税务管理、合同管理、企业支付、采购管理、Capex 七大关键场景全流程闭环。'
  },
  {
    icon: TrendingUp,
    value: '实时可视',
    label: '精准控制',
    description: '实现门店运营、资产变动、合同执行、资金支付和投资回报的实时可视与精准控制。'
  },
  {
    icon: ShieldCheck,
    value: '合规保障',
    label: '税务风险可控',
    description: '统一税务规则应对区域政策差异，保障高频交易下的合规性，强化履约监控与风险预警。'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-[#1A0A0A] to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-red-400">●</span>
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
                className="group text-center p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
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
