export default function ValueSection() {
  const metrics = [
    { value: '30%', label: '总研发效率提升', color: 'text-[#0052D9]' },
    { value: '99%+', label: '一次性数据准确率', color: 'text-[#E60012]' },
    { value: '70%', label: '业务流程数字化率', color: 'text-[#0052D9]' },
    { value: '30%', label: '研发变更响应提速', color: 'text-[#0052D9]' }
  ]

  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              以数据驱动<br/>
              塑造研发新价值
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              YonBIP PLM 不仅仅是一个工具，更是一套成熟的研发管理方法论的数字化落地，帮助企业从“经验交付”转向“数据驱动”。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-sm text-slate-400 mb-2">服务标杆</div>
                <div className="text-lg font-bold">东方雨虹</div>
                <div className="text-xs text-slate-500 mt-2">建立研发数字化标杆体系</div>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-sm text-slate-400 mb-2">产品覆盖</div>
                <div className="text-lg font-bold">YonBIP & YonSuite</div>
                <div className="text-xs text-slate-500 mt-2">支持多平台灵活部署</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl text-center shadow-2xl">
                <div className={`text-4xl font-black mb-2 ${m.color}`}>
                  {m.value}
                </div>
                <div className="text-slate-600 font-bold text-sm">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
