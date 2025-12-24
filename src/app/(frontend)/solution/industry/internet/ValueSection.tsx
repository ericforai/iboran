export default function ValueSection() {
  const metrics = [
    { value: '30%', label: '资金利用率提升' },
    { value: '20%', label: '融资成本降低' },
    { value: '5X', label: '算薪效率提升' },
    { value: '15%', label: '项目利润率提升' }
  ]

  return (
    <section className="py-20 bg-[#0052D9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-blue-100 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
