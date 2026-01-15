import { AlertTriangle, Link2, Database, CreditCard } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '系统集成不畅',
    description: '现有系统与微软 ERP 集成不畅，无法实现多系统集成与多平台自动对账，数据孤岛严重、对账效率低下。'
  },
  {
    icon: Database,
    title: '数据脱节严重',
    description: '缺乏统一数字化底座，门店运营数据与财务核算脱节，业务、财务、税务、资金流难以匹配。'
  },
  {
    icon: CreditCard,
    title: '支付管控粗放',
    description: '企业支付管控粗放，资金流与业务流、发票流、合同流难以匹配，影响整体决策时效与精细化运营能力。'
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-red-600" />
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
