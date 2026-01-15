import { Share2, Zap, BarChart4 } from 'lucide-react'

const solutions = [
  {
    icon: Share2,
    title: 'Fabless 一体化运营平台',
    description: '构建基于用友 YonBIP 的半导体行业方案，拉通研发项目 (PM)、供应链与财务核算，实现流片到量产的全链路可视。'
  },
  {
    icon: Zap,
    title: '精细化批次与效期管理',
    description: '针对 Wafer 级、Lot 级的精细化管理要求，建立全生命周期追溯体系，支持多版本 BOM 并行与快速切换。'
  },
  {
    icon: BarChart4,
    title: '实时委外协同控制塔',
    description: '通过 API 与主流代工厂系统对接，实时同步在制品 (WIP) 进度、生产良率及库存消耗，实现敏捷供应链响应。'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">泊冉数智化解决方案</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            深耕半导体行业特性，为芯片设计企业量身定制的数字化底座，驱动核心业务高质量增长。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}