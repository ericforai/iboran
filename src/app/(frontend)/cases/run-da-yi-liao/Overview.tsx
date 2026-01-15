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
                  <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">润达医疗</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">医药与医疗 / 体外诊断</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">用友 YonBIP + 泊冉实施服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">医疗诊断数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                润达医疗提供体外诊断产品、实验室综合服务及医疗信息化解决方案。通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-violet-500 mb-1">体外诊断 IVD</div>
                <p className="text-sm text-slate-600">诊断产品与服务</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-cyan-500 mb-1">实验室信息化</div>
                <p className="text-sm text-slate-600">医疗 IT 解决方案</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
