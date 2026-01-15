import { BarChart3, Database, ShieldCheck } from 'lucide-react'

const results = [
  {
    icon: Database,
    title: '数据协同提升',
    description: '核心系统数据贯通，提升跨部门协作与经营响应速度。',
  },
  {
    icon: BarChart3,
    title: '财务效率提升',
    description: '合并报表时效与准确性提升，集团决策依据更清晰。',
  },
  {
    icon: ShieldCheck,
    title: '安全与可用性增强',
    description: '备份恢复与安全防护能力升级，保障关键业务连续性。',
  },
]

export default function Results() {
  return (
    <section className="py-24 bg-[#0B1220] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-cyan-300">●</span>
            <span>项目成果</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">数字化转型带来的可量化收益</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-10">
          <div className="text-xs uppercase tracking-widest text-cyan-200 mb-3">价值基线</div>
          <p className="text-slate-300 leading-relaxed">
            面向数据量持续增长与合规要求提升，爱数科技需要以数据治理为核心构建统一管理平台，
            保障多系统协同、集团财务管控与安全防护能力同步升级。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => {
            const Icon = result.icon
            return (
              <div
                key={result.title}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-300/60 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-cyan-200" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
