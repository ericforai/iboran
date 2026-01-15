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
                开能健康科技集团股份有限公司（股票代码：300272）是全球知名的人居水处理产品制造与服务商。
              </p>
              <p>
                在全球化竞争与供应链波动常态化的背景下，作为传统制造业的典型代表，开能健康正面临从&quot;规模驱动&quot;向&quot;效率与创新驱动&quot;的深刻转型。如何打通生产、物流与财务的脉络，消除信息孤岛，实现以数据为核心的敏捷制造与精准交付，成为了企业发展的关键命题。
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
                    <div className="font-medium text-slate-900">制造 / 专用设备 / 水处理</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">关键目标 / Goal</div>
                    <div className="font-medium text-slate-900">业财一体化、智能制造</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">地点 / Location</div>
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