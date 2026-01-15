import { Building, Briefcase, Layers } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-slate-200">关于项目</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">汇纳股份</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">高科技 / IT服务</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">统一数字化底座</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">智慧商业数字化转型</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                汇纳股份提供商业客流分析系统、智慧商场解决方案、数据采集设备及大数据运营服务。面对多系统集成挑战，亟需构建统一数字化底座，打通ERP、SRM、集团财务、合并报表等系统，实现业财深度融合。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">多系统集成</div>
                <p className="text-sm text-slate-600">ERP/SRM/财务/报表打通</p>
              </div>
              <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl font-bold text-cyan-600 mb-1">业财融合</div>
                <p className="text-sm text-slate-600">全周期项目精细化管控</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
