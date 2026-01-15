import { Building, Briefcase, Layers } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-emerald-200">关于项目</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">羚牛新能源</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">新能源 / 氢能</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">集团财务一体化平台</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">新能源充电数字化转型</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                羚牛新能源提供新能源汽车充电解决方案、充电桩销售、安装及运维服务，涵盖智能充电设备与能源管理。面对集团化运营与多系统协同需求，亟需构建支持多会计准则、业财融合的集团财务一体化平台。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600 mb-1">多会计准则</div>
                <p className="text-sm text-slate-600">复杂核算适配</p>
              </div>
              <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl font-bold text-cyan-600 mb-1">业财融合</div>
                <p className="text-sm text-slate-600">集团财务统一管控</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
