export default function ValueSection() {
  const metrics = [
    { value: '99%以上', label: '财务凭证自动化', description: '基于事项会计，业务单据自动生成凭证' },
    { value: '70%', label: '算薪效率提升', description: '一键自动算薪，告别繁琐 Excel' },
    { value: '8x', label: '流程审批提效', description: '移动端随时随地审批，业务不等待' },
    { value: '45%', label: '项目利润率提升', description: '精准成本管控与风险预警' },
  ]

  return (
    <section className="bg-[#0052D9] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-4">
              <div className="text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-medium text-white/90 mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-white/70">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
