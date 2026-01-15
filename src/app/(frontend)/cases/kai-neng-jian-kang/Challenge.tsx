import { AlertCircle, ArrowRight, Clock, Database, FileText } from 'lucide-react'

const challenges = [
  {
    icon: Database,
    title: '研产供销脱节',
    description: '各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟。'
  },
  {
    icon: Clock,
    title: '成本管控不精细',
    description: '缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。'
  },
  {
    icon: FileText,
    title: '质量管理断层',
    description: '质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-red-500" />
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