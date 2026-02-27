import { BarChart3, CheckCircle2, PackageSearch, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    title: '服务过程标准化平台',
    description:
      '构建覆盖评估、派单、执行、回访的服务管理闭环，实现关键节点自动留痕与质控。',
    items: ['服务SOP自动校验', '执行记录实时留痕', '质控复盘看板一键生成'],
    icon: ShieldCheck,
  },
  {
    title: '辅具租赁流转管理',
    description: '构建基于条码的辅具管理系统，实现入库、租赁、调拨、回收、消杀全流程追踪。',
    items: ['租赁状态实时可视', '回收消杀节点留痕', '单件级流转精准追踪'],
    icon: PackageSearch,
  },
  {
    title: '多网点经营分析平台',
    description: '打通服务与财务模块，实现网点运营指标可视与费用流转透明。',
    items: ['网点运营可视', '费用流转透明', '跨网点结算自动化'],
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
            以服务运营为核心，把照护执行、辅具流转与经营管理统一到同一数据底座，实现可追踪、可协同、可优化。
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">服务质控</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">辅具追踪</span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200">经营治理</span>
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
