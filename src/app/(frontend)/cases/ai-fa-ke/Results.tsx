import { TrendingUp, Clock, ShieldCheck } from 'lucide-react'

export default function Results() {
  return (
    <section className="py-32 bg-[#0A0F1C] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            数字化交付价值
          </h2>
          <p className="text-xl text-slate-400 font-light">
            运营效率提升与财务敏捷性的可量化收益。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            {/* Stat 1 */}
            <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                    3 <span className="text-2xl text-slate-500 font-medium">天</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">月度结账周期</h3>
                <p className="text-slate-400 leading-relaxed px-4">
                    实现结账透明化。月度财务关账时间由原来的 10 天以上大幅缩短至 3 天以内。
                </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                 <div className="text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                    40 <span className="text-2xl text-slate-500 font-medium">%</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">库存周转效率</h3>
                <p className="text-slate-400 leading-relaxed px-4">
                     精准的供需匹配使原材料调拨效率提升 40%，有效降低了呆滞库存比例。
                </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                 <div className="text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                    100 <span className="text-2xl text-slate-500 font-medium">%</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">质量追溯达标率</h3>
                <p className="text-slate-400 leading-relaxed px-4">
                    实现 100% 生产品质追溯合规，顺利通过全球头部客户的严格体系审核。
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}
