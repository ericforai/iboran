import { BarChart3, CheckCircle2, PackageSearch, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    title: '全链路合规管理系统',
    description:
      '内建 GSP/GMP 合规引擎，实现对物料批次、质检报告与温控记录的自动化管控。',
    items: ['批次与效期自动校验', '质检报告与温控留痕', '合规审计报告一键生成'],
    icon: ShieldCheck,
  },
  {
    title: '精细化效期管理',
    description: '构建基于条码技术的仓储管理系统（WMS），实现效期预警与精准追溯。',
    items: ['效期自动预警', '先进先出（FEFO）', '单件级精准追溯'],
    icon: PackageSearch,
  },
  {
    title: '营销云服务平台',
    description: '打通营销与财务模块，实现渠道库存可视与费用流转透明。',
    items: ['渠道库存可视', '费用流转透明', '返利结算自动化'],
    icon: BarChart3,
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">解决方案</h2>
          <p className="text-slate-600">基于泊冉数智化底座的一体化架构</p>
        </div>

        <div className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">方案蓝图</div>
          <p className="text-lg text-slate-700 leading-relaxed">
            以合规为核心，把生产、仓储、流通与营销流程统一到同一数据底座，实现可追溯、可审计、可优化。
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">合规引擎</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">WMS 追溯</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">营销治理</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>
                <ul className="space-y-2 text-xs text-slate-600">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
