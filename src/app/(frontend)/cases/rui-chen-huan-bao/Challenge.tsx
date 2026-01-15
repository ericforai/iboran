import { AlertTriangle, FileText, Calculator, ShieldCheck } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: '研产供销脱节',
    description: '各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟。'
  },
  {
    icon: Calculator,
    title: '成本管控不精细',
    description: '缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。'
  },
  {
    icon: ShieldCheck,
    title: '质量管理断层',
    description: '质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。'
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-green-500" />
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
