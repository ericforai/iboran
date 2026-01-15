import { AlertTriangle, Store, Package, FileText } from 'lucide-react'

const challenges = [
  {
    icon: Store,
    title: '门店管理分散',
    description: '门店数量多且分布广泛，缺乏统一数字化平台支撑门店全生命周期管控，导致运营效率低下。'
  },
  {
    icon: Package,
    title: '资产管理困难',
    description: '资产分散管理，变动难以实时追踪，影响盘点与折旧管理，资本支出审批周期长。'
  },
  {
    icon: FileText,
    title: '合同履约监控滞后',
    description: '合同管理涉及选址、租赁、供应商等多个环节，缺乏集中管控机制，履约监控与风险预警不足。'
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
