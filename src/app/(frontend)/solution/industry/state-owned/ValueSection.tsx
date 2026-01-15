export default function ValueSection() {
  const metrics = [
    { value: '50%', label: '监管效率提升', description: '实时在线监管' },
    { value: '90%+', label: '报表自动生成', description: '减少人工干预' },
    { value: '100%', label: '风险预警准确', description: '穿透式风险识别' },
    { value: '15%', label: '融资成本降低', description: '资金集中管理' },
  ]

  return (
    <section className="py-24 bg-[#0052D9] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            数智化赋能国资国企高质量发展
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            通过数字化手段，助力国资国企实现管理精细化、运营智能化、决策科学化。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-blue-200">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
