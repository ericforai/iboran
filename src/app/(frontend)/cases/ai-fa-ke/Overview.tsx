export default function Overview() {
  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Floating Glass Card - Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-bold text-lg mb-8 text-slate-900 flex items-center gap-3">
                <span className="w-1 h-6 bg-blue-500 rounded-full" />
                项目概览
              </h3>
              
              <div className="space-y-8">
                <div className="group">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block group-hover:text-blue-500 transition-colors">客户名称</span>
                  <p className="text-slate-900 font-medium text-lg">Ai Fa Ke (爱发科)</p>
                </div>
                
                <div className="group">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block group-hover:text-blue-500 transition-colors">所属行业</span>
                  <p className="text-slate-900 font-medium text-lg">专用设备制造</p>
                </div>
                
                <div className="group">
                   <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block group-hover:text-blue-500 transition-colors">方案范围</span>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    涵盖生产、物流及财务一体化的端到端数字化转型。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900 tracking-tight">
                项目背景
              </h2>
              
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed">
                <p className="text-xl md:text-2xl font-light text-slate-800 mb-8 leading-normal">
                  在全球化竞争常态化与供应链波动的背景下，传统制造业正面临从 <span className="text-blue-600 font-medium">“规模驱动”</span> 向 <span className="text-blue-600 font-medium">“效率与创新驱动”</span> 的深刻转型。
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                   <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">业务背景</h4>
                        <p className="text-sm text-slate-600">真空技术设备的研发、制造与销售。</p>
                   </div>
                   <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">广泛应用</h4>
                        <p className="text-sm text-slate-600">广泛应用于半导体、平板显示及光伏等高精尖领域。</p>
                   </div>
                </div>

                <p>
                  泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的 <strong className="text-slate-900">敏捷制造</strong> 与 <strong className="text-slate-900">精准交付</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
