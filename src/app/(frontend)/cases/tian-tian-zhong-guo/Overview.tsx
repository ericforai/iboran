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
                天田 (AMADA) 是全球著名的金属加工机械综合制造商，在钣金加工领域占据市场领导地位。天田中国作为其在大中华区的总部，负责全系列产品的销售、技术支持与售后服务。
              </p>
              <p>
                面对高端装备市场日益激烈的竞争，天田中国意识到单纯依靠设备销售已遭遇增长瓶颈。如何利用数字化手段，挖掘存量客户价值，提升售后服务响应速度，实现从&quot;设备制造商&quot;向&quot;综合解决方案服务商&quot;的转型，成为企业的核心战略。
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
                    <div className="font-medium text-slate-900">高端装备 / 钣金机械</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">关键目标 / Goal</div>
                    <div className="font-medium text-slate-900">售后服务数字化、CRM</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">总部 / HQ</div>
                    <div className="font-medium text-slate-900">中国 · 上海</div>
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