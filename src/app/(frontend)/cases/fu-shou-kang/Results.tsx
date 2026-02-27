import { BarChart3, ShieldCheck, TrendingUp } from 'lucide-react'

export default function Results() {
  return (
    <section className="relative overflow-hidden py-24 bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-300">数字化转型带来的可量化收益</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
              <span>服务质控</span>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="mt-4 text-4xl font-bold text-white">+200%</div>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              服务记录核查效率提升 200%，关键服务节点遗漏显著下降。
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
              <span>物流周转</span>
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <div className="text-4xl font-bold text-white">+50%</div>
              <span className="text-sm text-slate-300">拣货效率</span>
            </div>
            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-xl font-semibold text-cyan-200">-25%</div>
              <span className="text-sm text-slate-300">平均库龄</span>
            </div>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              辅具周转效率优化，显著减少闲置与调拨损耗。
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
              <span>营销决策</span>
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="mt-4 text-4xl font-bold text-white">99.5%</div>
            <p className="mt-2 text-sm text-slate-300">渠道费用核算准确率</p>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
              数据采集：周度 → 天级
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
