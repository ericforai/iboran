export default function ValueSection() {
  const metrics = [
    { value: '30%+', label: '生产效率提升', description: '通过MOM系统优化生产节拍与调度' },
    { value: '25%-', label: '库存周转优化', description: '产销协同与库存共享降低积压' },
    { value: '100%', label: '数据采集率', description: '糖化、发酵、包装全流程实时采集' },
    { value: '40%+', label: '线上渠道增长', description: '全渠道营销与即时零售驱动' }
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
