import { AlertTriangle, Link2, Database, ShoppingCart } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: 'ERP与OMS集成困难',
    description: '现有系统难以实现ERP与OMS的有效集成，导致订单管理、库存协同、供应链响应效率低下，跨渠道数据不互通，影响客户体验与运营效率。'
  },
  {
    icon: Database,
    title: '多业态管理复杂',
    description: '宠物食品、用品零售批发，宠物服务、摄影扩印、信息咨询等多业态并行，缺乏统一信息化平台支撑，管理复杂度持续提升。'
  },
  {
    icon: ShoppingCart,
    title: '合规管控缺失',
    description: '饲料添加剂及预包装食品销售等合规性要求高的领域，缺乏系统化管控手段，存在合规风险，亟需业财一体化解决方案。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
