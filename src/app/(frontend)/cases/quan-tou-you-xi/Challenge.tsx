import { AlertTriangle, FileText, Globe, Network, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: Network,
    title: '多系统数据孤岛',
    description:
      '游戏运营平台、支付网关与分成系统割裂，财务核算滞后、对账复杂。',
  },
  {
    icon: FileText,
    title: '多会计准则并行难',
    description:
      'IFRS 与本地准则同时披露，对合并报表与会计政策管理提出更高要求。',
  },
  {
    icon: Globe,
    title: '跨区域合并与协同',
    description:
      '全球业务快速扩张，集团层面缺乏统一财务框架，影响决策时效。',
  },
  {
    icon: Wallet,
    title: '司库与外汇风险',
    description:
      '跨境资金调拨与现金流预测能力不足，外汇风险管理缺口明显。',
  },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-cyan-600" />
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
