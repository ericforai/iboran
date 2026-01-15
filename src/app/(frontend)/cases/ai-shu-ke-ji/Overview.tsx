import { Factory, MapPin, Target } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">项目背景</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                爱数科技 (EISOO) 是领先的大数据基础设施提供商，致力于为客户提供全域数据管理解决方案。业务覆盖数据备份、容灾、归档、日志分析等多个领域，服务全球数万家客户。
              </p>
              <p>
                随着业务的快速扩张与集团化运营的深入，爱数科技内部面临着多系统（ERP、WMS、CRM）并行带来的数据孤岛问题。财务合并报表编制复杂、资金管理（司库）效率有待提升，以及自身作为数据公司对内部数据治理与安全的高标准要求，都推动着企业加速数字化转型的步伐。
              </p>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-600 rounded-full"></span>
                关于客户
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-cyan-600">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">行业 / Industry</div>
                    <div className="font-medium text-slate-900">高科技 / IT 服务</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-cyan-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">关键目标 / Goal</div>
                    <div className="font-medium text-slate-900">业财一体化、数据治理</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-cyan-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">总部 / HQ</div>
                    <div className="font-medium text-slate-900">中国 · 上海</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}