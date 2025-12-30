const metrics = [
  {
    value: '70%',
    label: '预算编制效率提升',
    description: '通过智能算法与多维库，大幅缩短预算编制周期。'
  },
  {
    value: '40%',
    label: '预测准确率提升',
    description: '基于大数据与业财融合模型，实现精准测算。'
  },
  {
    value: '1亿+',
    label: '海量数据秒级响应',
    description: 'MDS 引擎支持亿级数据卷积计算耗时小于 1 秒。'
  },
  {
    value: '80%',
    label: '人工对账工作量减少',
    description: '全流程自动化贯通，数据同源，实时自动对账。'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0052D9] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 text-[200px] font-bold leading-none select-none left-0 translate-x-[-20%] translate-y-[-20%]">SPE</div>
        <div className="absolute bottom-0 text-[200px] font-bold leading-none select-none right-0 translate-x-[20%] translate-y-[20%]">PDCA</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            量化可见的业务价值
          </h2>
          <p className="text-blue-100 text-lg opacity-80">
            用数据证明实力，助力企业从经验管理迈向数据驱动
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-xl font-bold mb-3 text-blue-50">
                {metric.label}
              </div>
              <p className="text-blue-200 text-sm leading-relaxed max-w-[200px] mx-auto">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
