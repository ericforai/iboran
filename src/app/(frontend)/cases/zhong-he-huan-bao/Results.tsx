export default function Results() {
  const stats = [
    {
      value: "98%",
      label: "BOM 准确率",
      desc: "通过设计生产一体化集成，彻底消除了BOM传递错误，设计变更响应时间缩短 50% 以上。"
    },
    {
      value: "20%",
      label: "项目成本降低",
      desc: "实现项目成本的实时归集与精细化核算，有效控制了材料浪费与人工工时，提升项目毛利率。"
    },
    {
      value: "30%",
      label: "服务效率提升",
      desc: "远程监控平台实现了设备故障的主动预警，减少了非计划停机时间，客户满意度大幅提升。"
    }
  ]

  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl mix-blend-screen" />
         <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">数字化转型的显著成效</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            中荷环保成功实现了从传统制造向服务型制造的转型，构建了基于数据的项目全生命周期管理能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{stat.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}