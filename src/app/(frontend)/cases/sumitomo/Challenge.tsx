import { AlertCircle, Unplug, TrendingDown, FileSearch } from 'lucide-react'

export default function Challenge() {
  const challenges = [
    {
      icon: Unplug,
      title: "研产供销脱节",
      desc: "各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟。"
    },
    {
      icon: TrendingDown,
      title: "成本管控不精细",
      desc: "缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。"
    },
    {
      icon: FileSearch,
      title: "质量管理断层",
      desc: "质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。"
    }
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-slate-200/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">CHALLENGES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">转型前的核心痛点</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                在数字化转型启动前，企业面临着数据孤岛、成本黑箱与质量追溯难的三大核心挑战。
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
