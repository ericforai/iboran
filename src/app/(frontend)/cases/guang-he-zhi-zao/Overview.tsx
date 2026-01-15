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
                光合植造是一家专注于植物基饮品研发、生产与销售的新消费品牌，旗下拥有多款深受年轻人喜爱的椰子水、燕麦奶等爆款产品。依托全渠道营销策略，品牌在天猫、抖音、京东等电商平台及线下商超迅速崛起。
              </p>
              <p>
                在业务高速增长的同时，光合植造面临着典型的&quot;成长的烦恼&quot;：多电商平台订单割裂、营销费用投放不透明、供应链响应跟不上爆款节奏。如何构建一套适配新消费模式的数字化中台，实现&quot;业财一体、全域协同&quot;，是品牌从&quot;网红&quot;走向&quot;长红&quot;的必经之路。
              </p>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-600 rounded-full"></span>
                关于客户
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-yellow-600">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">行业 / Industry</div>
                    <div className="font-medium text-slate-900">新消费 / 食品饮料</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-yellow-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">关键目标 / Goal</div>
                    <div className="font-medium text-slate-900">全渠道履约、费控管理</div>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 text-yellow-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">总部 / HQ</div>
                    <div className="font-medium text-slate-900">中国 · 杭州</div>
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