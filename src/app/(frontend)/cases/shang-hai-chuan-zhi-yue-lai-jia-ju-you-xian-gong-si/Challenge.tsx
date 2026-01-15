import { AlertTriangle, Link2, ShoppingCart, Zap } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '多系统割裂',
    description: 'ERP 与 OMS 系统间数据不通导致订单履约效率低，系统间缺乏有效集成，业务流程难以顺畅流转。'
  },
  {
    icon: ShoppingCart,
    title: '线上线下未打通',
    description: '零售门店与 B2C 商城独立运营，库存无法实时共享，造成客户体验不佳与资源错配。'
  },
  {
    icon: Zap,
    title: '定制化响应慢',
    description: '缺乏统一数字化平台支撑定制化业务快速响应，难以实现从销售到交付全流程一体化管理。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-[#E60012] rounded-full text-sm font-medium mb-4">
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
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
