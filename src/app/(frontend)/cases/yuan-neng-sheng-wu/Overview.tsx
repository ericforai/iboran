export default function Overview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 p-8 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 border-b pb-4">关于项目</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">客户：</span>原能生物</p>
              <p><span className="font-semibold text-slate-900">行业：</span>制造 / 装备制造</p>
              <p><span className="font-semibold text-slate-900">方案：</span>泊冉软件助力原能生物实现制造数字化升级。</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">项目背景</h2>
            <p className="text-lg text-slate-600 leading-relaxed">在全球化竞争与供应链波动常态化的背景下，传统制造业正面临从‘规模驱动’向‘效率与创新驱动’的深刻转型。泊冉软件助力制造企业打通生产、物流与财务的脉络，实现以数据为核心的敏捷制造与精准交付。 项目背景：原能生物提供生命科学领域的研发服务与生物技术产品，专注于生物制药深低温设备研发与制造</p>
          </div>
        </div>
      </div>
    </section>
  )
}
