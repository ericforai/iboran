import { Layers, Database, Banknote, FileSpreadsheet } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text */}
          <div className="space-y-8">
             <div>
                <h3 className="text-blue-600 font-bold tracking-wider uppercase mb-2">项目概览</h3>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">打造供应链数智化底座</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  西域供应链作为MRO行业的领军企业，在快速扩张中面临着多业务协同的巨大挑战。
                  泊冉软件通过构建一体化架构，不仅解决了系统孤岛问题，更通过深度集成银企直联与供应链金融，
                  为其打造了坚实的数智化底座。
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-slate-500 text-sm mb-1">行业领域</div>
                  <div className="font-bold text-slate-900">电商 / MRO</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-slate-500 text-sm mb-1">实施周期</div>
                  <div className="font-bold text-slate-900">6 个月</div>
                </div>
             </div>
          </div>

          {/* Right Column: Key Features Grid */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">关键实施模块</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">多系统集成</h4>
                  <p className="text-xs text-slate-500">Odoo + 业务中台</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-2.5 rounded-lg text-indigo-600 shrink-0">
                  <Banknote className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">银企直联</h4>
                  <p className="text-xs text-slate-500">招商/上海银行深度对接</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600 shrink-0">
                   <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">合并报表</h4>
                  <p className="text-xs text-slate-500">集团化财务管控</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-2.5 rounded-lg text-orange-600 shrink-0">
                   <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">数据中台</h4>
                  <p className="text-xs text-slate-500">三流合一数据治理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
