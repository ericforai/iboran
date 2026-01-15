import { AlertTriangle, BarChart3, Network, ShieldAlert, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: Network,
    title: '多系统割裂',
    description:
      '交通运输、物流配送与设备租赁系统分散，数据孤岛影响协同效率。',
  },
  {
    icon: BarChart3,
    title: '业财融合不足',
    description:
      '合并报表周期长、口径不一，集团管理穿透力不足。',
  },
  {
    icon: Wallet,
    title: '资金监管滞后',
    description:
      '司库与支付联动不足，资金监管实时性与风险控制能力有限。',
  },
  {
    icon: ShieldAlert,
    title: '合规与风控压力',
    description:
      '国资监管要求高，合同税务与内控流程缺乏统一平台支撑。',
  },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => {
            const Icon = challenge.icon
            return (
              <div
                key={challenge.title}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-amber-600" />
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
