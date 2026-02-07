import { TrendingUp, Clock, CheckCircle } from 'lucide-react'

export default function Results() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 text-white">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">项目成果</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">显著的数字化转型成效</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            通过泊冉数字化中台的落地，南极电商实现了业务流程的全面线上化与数据化。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-8 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              300<span className="text-2xl text-blue-400">%</span>
            </div>
            <div className="text-lg font-medium text-slate-300 mb-4">效率提升</div>
            <p className="text-slate-400 text-sm">
              对账与结算效率大幅提升，月度结算周期从15天缩短至3天以内
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-8 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              T+1
            </div>
            <div className="text-lg font-medium text-slate-300 mb-4">数据时效</div>
            <p className="text-slate-400 text-sm">
              实现全网交易数据的T+1精准可视，关键指标实时监控，支撑快速决策
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-8 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              100<span className="text-2xl text-blue-400">%</span>
            </div>
            <div className="text-lg font-medium text-slate-300 mb-4">业务覆盖</div>
            <p className="text-slate-400 text-sm">
              实现核心业务流程近100%线上化闭环，消除了信息孤岛与断点
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
