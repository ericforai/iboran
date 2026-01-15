import { Building, Briefcase, Layers } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-orange-200">关于项目</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">犀早宠物</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">消费品 / 宠物经济</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">ERP+OMS一体化平台</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">宠物新零售数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                犀早宠物主要从事宠物食品及用品的零售与批发业务，同时涵盖宠物服务、摄影扩印、信息咨询等领域，并拓展了饲料添加剂销售及预包装食品销售等经营范围。随着业务多元化发展，亟需构建统一的信息化平台。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">ERP+OMS</div>
                <p className="text-sm text-slate-600">一体化平台整合</p>
              </div>
              <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
                <div className="text-2xl font-bold text-teal-600 mb-1">多业态</div>
                <p className="text-sm text-slate-600">零售/批发/服务融合</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
