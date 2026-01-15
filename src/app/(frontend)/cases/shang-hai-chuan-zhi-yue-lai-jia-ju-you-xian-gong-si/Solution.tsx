import { GitMerge, Warehouse, ArrowRight, ShoppingCart } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: 'ERP 与 OMS 系统集成',
    description: '实现 ERP 与 OMS 系统数据实时互通，订单高效协同，消除信息孤岛，提升业务流转效率。',
    features: ['数据实时互通', '订单高效协同', '消除信息孤岛']
  },
  {
    icon: Warehouse,
    title: '全渠道库存共享',
    description: '打通零售门店与 B2C 商城线上线下渠道，构建全渠道库存共享与一体化运营体系。',
    features: ['线上线下打通', '库存实时共享', '一体化运营']
  },
  {
    icon: ShoppingCart,
    title: '定制化业务平台',
    description: '打造支持个性化定制业务的数字化平台，实现从销售、生产到交付的全流程一体化管理。',
    features: ['个性化定制', '全流程管理', '快速响应']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于用友 YonBIP + 泊冉实施服务的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
