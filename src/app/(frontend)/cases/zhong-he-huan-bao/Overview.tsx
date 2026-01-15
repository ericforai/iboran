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
                中荷环保是一家专注于环保设备研发制造、固废处理及环境治理解决方案的高新技术企业。作为典型的 ETO（按单设计）与 ATO（按单装配）混合型企业，其业务兼具工程项目管理与离散制造的双重特性。
              </p>
              <p>
                随着业务规模的扩大，非标设计变更频繁、项目成本核算滞后、售后运维响应难等问题日益凸显。中荷环保亟需一套能够打通&quot;设计-采购-生产-交付-运维&quot;全链路的数智化平台，以提升交付质量与客户满意度。
              </p>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                关于客户
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">行业 / Industry</div>
                    <div className="font-medium text-slate-900">环保设备 / 专用工程</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">关键目标 / Goal</div>
                    <div className="font-medium text-slate-900">项目制造一体化、精细化核算</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">总部 / HQ</div>
                    <div className="font-medium text-slate-900">中国 · 北京</div>
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