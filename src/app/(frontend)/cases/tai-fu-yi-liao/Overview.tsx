export default function Overview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <aside className="lg:col-span-4 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-lg mb-6 pb-4 border-b border-slate-300 text-slate-900">关于项目</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-900 mb-1">客户：</dt>
                <dd className="text-slate-700">泰富医疗</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-1">行业：</dt>
                <dd className="text-slate-700">医药与医疗 / 专业医疗服务</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 mb-1">方案：</dt>
                <dd className="text-slate-700">泊冉软件助力泰富医疗实现医药与医疗数字化升级</dd>
              </div>
            </dl>
          </aside>
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">项目背景</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。泊冉软件通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-4">
                项目背景：提供医疗器械研发、生产及医疗信息化解决方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
