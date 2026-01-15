export default function Results() {
  const stats = [
    {
      value: "3天内",
      label: "结账周期缩短",
      desc: "月度财务关账时间由原来的 10 天以上缩短至 3 天内，实现结账透明化。"
    },
    {
      value: "40%",
      label: "原材料调拨效率提升",
      desc: "通过精准的供需匹配，有效降低了呆滞库存比例，大幅提升库存周转。"
    },
    {
      value: "100%",
      label: "品质追溯达标",
      desc: "实现了从原材料到成品的全链路追溯，顺利通过全球头部客户审核。"
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
            通过一体化平台的建设，开能健康在财务效率、供应链协同及质量管控方面取得了可量化的突破性进展。
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