import { Shield, Package, BarChart3 } from 'lucide-react'

export default function Solution() {
  const solutions = [
    {
      icon: Shield,
      title: '全链路合规管理系统',
      description: '内建 GSP/GMP 合规引擎，实现对物料批次、质检报告、温控记录的自动化管控，一键生成合规审计报告。',
    },
    {
      icon: Package,
      title: '精细化效期管理',
      description: '构建基于条码技术的仓储管理系统（WMS），实现效期自动预警、先进先出（FEFO）与单件精准追溯。',
    },
    {
      icon: BarChart3,
      title: '营销云服务平台',
      description: '打通营销与财务模块，实现渠道库存可视、费用流转透明及返利结算自动化，支撑精细化渠道治理。',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">解决方案</h2>
          <p className="text-base sm:text-lg text-slate-600">基于泊冉数智化底座的一体化架构</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="p-6 sm:p-8 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{solution.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
