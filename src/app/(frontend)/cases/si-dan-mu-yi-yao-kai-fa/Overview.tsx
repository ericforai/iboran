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
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">斯丹姆医药开发</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">医药与医疗 / CDMO/CRO服务</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-cyan-500" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">医药数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-cyan-500 mb-1">CDMO/CRO</div>
                <p className="text-sm text-slate-600">医药研发服务</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-blue-500 mb-1">GXP 标准</div>
                <p className="text-sm text-slate-600">合规管理体系</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
