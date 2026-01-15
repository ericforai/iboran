import { Building, Briefcase, Layers } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-blue-200">关于项目</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">久事公交</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">国资 / 市级国资</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">集团财务+司库管理+业财融合</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">公共交通数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                久事公交作为市级国资背景的公共交通运营企业，承担城市公交线路运营与管理。面对集团化财务管理与国资监管的双重挑战，亟需构建多系统集成、业财融合的一体化平台。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">集团财务+司库</div>
                <p className="text-sm text-slate-600">资金集约化管理</p>
              </div>
              <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl font-bold text-cyan-600 mb-1">业财融合</div>
                <p className="text-sm text-slate-600">财务共享与数据分析</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
