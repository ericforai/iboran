export default function Overview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 p-8 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 border-b pb-4">关于项目</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-900">客户：</span>优卡赏（上海）文化发展有限公司</p>
              <p><span className="font-semibold text-slate-900">行业：</span>消费品 / IP</p>
              <p><span className="font-semibold text-slate-900">方案：</span>系统化解决方案部署。</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">项目背景</h2>
            <p className="text-lg text-slate-600 leading-relaxed">提供文化创意服务，包括卡牌、收藏品的设计、开发与销售，专注于集换式卡牌游戏及相关衍生品。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
