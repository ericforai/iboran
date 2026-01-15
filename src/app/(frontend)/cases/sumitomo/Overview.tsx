import { Building2, Calendar, LayoutTemplate } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-24">
              <h3 className="font-bold text-lg text-slate-900 mb-6 pb-4 border-b border-slate-200">
                项目概览
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-blue-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">客户</div>
                    <div className="font-semibold text-slate-900">住矿浆料 (SUMITOMO)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-blue-600">
                    <LayoutTemplate className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">行业 / 领域</div>
                    <div className="font-semibold text-slate-900">新材料 / 半导体配套</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-blue-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">服务周期</div>
                    <div className="font-semibold text-slate-900">2023 - 2024</div>
                  </div>
                </div>
              </div>

               <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="text-xs text-slate-400 mb-2">核心技术栈</div>
                  <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Next.js</span>
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">React</span>
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Supabase</span>
                      <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Docker</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">项目背景</h2>
            <div className="prose prose-lg prose-slate text-slate-600 leading-8">
              <p className="mb-6">
                住矿电子浆料（Sumitomo Metal Mining Electronic Materials）是全球领先的电子浆料供应商，其产品广泛应用于电阻器、电容器等被动元件以及半导体封装领域，是电子信息产业链中的关键一环。
              </p>
              <p className="mb-6">
                 随着半导体行业的周期性波动与市场竞争的加剧，传统的“规模驱动”模式已难以适应客户对交期、品质及成本的极致要求。住矿浆料面临着内部生产既有系统孤岛林立、数据流转不畅，外部供应链协同效率低下的双重挑战。
              </p>
              <p>
                在此背景下，住矿浆料携手泊冉软件，启动了以“业财一体化”为核心的数字化转型项目。旨在打通从销售接单、计划排产、物料采购到生产执行、成品发货及财务核算的全业务链条，消除数据孤岛，实现业务流程的标准化、透明化与智能化。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
