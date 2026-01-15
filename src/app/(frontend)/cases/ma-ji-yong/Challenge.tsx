import { AlertTriangle, BarChart3, FileText, Receipt, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: BarChart3,
    title: '合并报表滞后',
    description:
      '集团财务统一管控薄弱，缺乏稳定的合并报表体系，总部难以及时掌握各门店经营数据。',
  },
  {
    icon: Receipt,
    title: '费用管理失控风险',
    description:
      '报销与采购结算依赖手工处理，审批滞后、透明度不足，费用管控难以形成闭环。',
  },
  {
    icon: FileText,
    title: '合同分散与追溯困难',
    description:
      '合同分散存储，关键条款难追溯、续签提醒缺失，带来合规与经营风险。',
  },
  {
    icon: Wallet,
    title: '资金归集效率低',
    description:
      '司库能力薄弱，门店资金归集不及时，资金调度依赖人工协调，影响现金流效率。',
  },
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-red-500" />
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
