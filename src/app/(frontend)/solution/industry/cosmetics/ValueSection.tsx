export default function ValueSection() {
  const metrics = [
    { value: '60%+', label: '订单处理效率提升', description: '通过自动化流程缩短订单处理时间' },
    { value: '30%-', label: '库存周转天数', description: '智能补货与多仓协同降低库存积压' },
    { value: '99%+', label: '库存准确率', description: '全渠道库存实时同步与精准管理' },
    { value: '25%+', label: '会员复购率提升', description: '精准营销与会员运营提升客户粘性' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1F2329] mb-12">数智赋能带来的核心价值</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="p-6">
              <div className="text-4xl font-bold text-[#E60012] mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-[#1F2329] mb-2">{item.label}</div>
              <div className="text-sm text-slate-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
