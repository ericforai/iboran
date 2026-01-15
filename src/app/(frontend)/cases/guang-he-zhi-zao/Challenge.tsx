import { ShoppingCart, PieChart, RefreshCcw } from 'lucide-react'

const challenges = [
  {
    icon: ShoppingCart,
    title: '全渠道订单割裂',
    description: '天猫、抖音、京东等平台的订单数据与内部 ERP 系统缺乏深度集成，导致库存更新滞后，超卖与缺货频发，严重影响履约时效。'
  },
  {
    icon: PieChart,
    title: '营销费用黑箱',
    description: '营销投放渠道多、频次高、类型杂，费用申请与核销依赖手工台账，缺乏事前预算控制与事后 ROI 分析，成本失控风险大。'
  },
  {
    icon: RefreshCcw,
    title: '供应链响应滞后',
    description: '爆款产品的销量波动大，传统供应链计划模式难以应对"脉冲式"订单需求，原材料备货与成品补货往往跟不上销售节奏。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
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