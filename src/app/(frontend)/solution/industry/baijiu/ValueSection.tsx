export default function ValueSection() {
  const metrics = [
    { value: '15%+', label: '全流程能效提升', description: '通过智能化调度减少酿造空档期' },
    { value: '25%-', label: '渠道积压库存', description: '基于实时动销数据的供需平稳' },
    { value: '99%+', label: '追溯准确率', description: '从原粮到成品的全生命周期一码到底' },
    { value: '80%+', label: '结算提速', description: '业财深度融合实现凭证自动化生成' }
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
