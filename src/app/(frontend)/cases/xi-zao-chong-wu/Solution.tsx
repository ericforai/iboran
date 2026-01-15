import { GitMerge, Store, FileText, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GitMerge,
    title: 'ERP+OMS一体化',
    description: '实现ERP与OMS深度集成，打通订单管理、库存协同、供应链响应，消除数据孤岛，提升跨系统协同效率。',
    features: ['订单自动流转', '库存实时同步', '供应链协同', '数据打通']
  },
  {
    icon: Store,
    title: '全渠道业务融合',
    description: '覆盖宠物食品用品零售批发、宠物服务、摄影扩印、信息咨询等多元业务场景，实现多业态统一管理。',
    features: ['多业态统一', '全渠道订单', '精细化运营', '客户体验提升']
  },
  {
    icon: FileText,
    title: '业财一体化管控',
    description: '强化饲料添加剂及预包装食品销售等合规管控，实现业财融合，降低合规风险，支撑规范化运营。',
    features: ['合规管理', '业财一体', '风险控制', '规范化运营']
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
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于ERP+OMS一体化平台的全场景覆盖</p>
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
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
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
