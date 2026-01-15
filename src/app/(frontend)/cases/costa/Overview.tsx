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
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">Costa Coffee</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">消费品 / 连锁餐饮</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">微软 ERP + 泊冉实施服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">连锁咖啡数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                咖啡饮品、轻食、休闲餐饮服务。打造贯通&quot;业务—财务—税务—资金&quot;全链路的一体化解决方案，实现规模化发展与精益化管理的有机统一。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-red-600 mb-1">多平台集成</div>
                <p className="text-sm text-slate-600">自动对账效率提升</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-amber-700 mb-1">8大场景</div>
                <p className="text-sm text-slate-600">全流程闭环管控</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
