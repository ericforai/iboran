export default function Overview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 p-8 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 border-b pb-4">关于项目</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">客户：</span>宣泰药业</p>
              <p><span className="font-semibold text-slate-900">行业：</span>医药与医疗 / 西药制造</p>
              <p><span className="font-semibold text-slate-900">方案：</span>泊冉软件助力宣泰药业实现医药与医疗数字化升级。</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">项目背景</h2>
            <p className="text-lg text-slate-600 leading-relaxed">医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。 项目背景：宣泰药业提供医药产品研发、生产和销售服务，专注于仿制药、原料药及制剂产品。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
