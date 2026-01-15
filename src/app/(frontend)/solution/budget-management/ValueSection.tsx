const metrics = [
  {
    value: '60%',
    label: '编报周期缩短',
    desc: '从线下汇总转为在线实时计算，极大减轻财务负担'
  },
  {
    value: '95%+',
    label: '预测准确率',
    desc: '基于 AI 智能算法模型，从经验决策转向数据决策'
  },
  {
    value: '< 1s',
    label: '实时控制延迟',
    desc: '业财深度融合，实现业务端到财务端的零延迟校验'
  },
  {
    value: '100+',
    label: '维度深度分析',
    desc: '支持超大规模场景下的多维穿透分析，穿透至业务源头'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0052D9] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-5xl md:text-6xl font-bold tracking-tight">
                {metric.value}
              </div>
              <div className="text-xl font-bold opacity-90">
                {metric.label}
              </div>
              <p className="text-sm opacity-70 leading-relaxed max-w-[200px] mx-auto">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
