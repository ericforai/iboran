import { FileText, Layers, Receipt } from 'lucide-react'

const results = [
  {
    icon: Layers,
    title: '合并报表自动化',
    description:
      '通过建设一体化集团财务平台，实现合并报表自动化，统一数据口径，提升总部对门店经营成果的实时掌控。',
  },
  {
    icon: Receipt,
    title: '费用管理在线化',
    description:
      '推进费用管理全流程在线化，规范报销与采购结算，增强费用透明度与合规性。',
  },
  {
    icon: FileText,
    title: '合同管理数字化',
    description:
      '建立合同管理全生命周期数字化机制，实现关键条款提醒、续签预警与风险防控。',
  },
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-[#1A0A0A] to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
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

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-10">
          <div className="text-xs uppercase tracking-widest text-red-200 mb-3">价值基线</div>
          <p className="text-slate-300 leading-relaxed">
            面向连锁餐饮快速扩张的管理复杂性，马记永需要构建以集团财务为核心的数字化管控体系。
            在多门店、多区域布局下，合并报表滞后、费用管理失控、合同分散存储与司库管理薄弱成为关键挑战。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => {
            const Icon = result.icon
            return (
              <div
                key={result.title}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-red-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
