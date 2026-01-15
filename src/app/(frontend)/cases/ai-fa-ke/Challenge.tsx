import { Layers, TrendingDown, ClipboardX } from 'lucide-react'

export default function Challenge() {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight">
            核心挑战
          </h2>
          <p className="text-xl text-slate-500 font-light">
            数字化转型前制约业务增长与运营效率的关键瓶颈。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-100 transition-colors">
              <Layers className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              研产供销脱节
            </h3>
            <p className="text-slate-600 leading-relaxed">
              各职能部门系统割裂，导致需求预测、排产计划与物料供应无法实时联动，库存周转缓慢且异常响应迟滞。
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 text-sm font-medium text-slate-400">
               库存周转缓慢
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
             <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-100 transition-colors">
              <TrendingDown className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              成本管控粗放
            </h3>
            <p className="text-slate-600 leading-relaxed">
              缺乏工序级、材料级的实时成本采集，导致单笔订单毛利分析滞后，难以支持精准的价格决策与降本增效指标。
            </p>
             <div className="mt-8 pt-6 border-t border-slate-100 text-sm font-medium text-slate-400">
               定价决策困难
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
             <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-200 transition-colors">
              <ClipboardX className="w-7 h-7 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              质量管理断层
            </h3>
            <p className="text-slate-600 leading-relaxed">
              质量数据散落在纸质单据或离散系统中，无法实现从原材料采购、生产加工到成品出库的全链路正反向追溯。
            </p>
             <div className="mt-8 pt-6 border-t border-slate-100 text-sm font-medium text-slate-400">
               追溯链路缺失
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
