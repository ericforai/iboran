import { BarChart3, Database, HardDrive, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: '多系统集成中台',
    description:
      '打通 ERP、WMS 与财务系统数据链路，实现统一数据口径与实时协同。',
    features: ['跨系统数据归集', '统一主数据管理', '运营与财务协同'],
  },
  {
    icon: BarChart3,
    title: '合并报表自动化',
    description:
      '优化并表流程与数据规则，提升集团财务核算效率与准确性。',
    features: ['并表周期缩短', '口径一致性提升', '集团视图可视化'],
  },
  {
    icon: HardDrive,
    title: '备份恢复能力升级',
    description:
      '提升备份与恢复性能，保障关键数据可用性与业务连续性。',
    features: ['快速恢复机制', '容量弹性扩展', '容灾预案完善'],
  },
  {
    icon: ShieldCheck,
    title: '安全与合规体系',
    description:
      '构建数据安全防护与权限治理体系，满足监管与审计要求。',
    features: ['分级权限治理', '安全审计留痕', '合规风险预警'],
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于泊冉数智化底座的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span>{feature}</span>
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
