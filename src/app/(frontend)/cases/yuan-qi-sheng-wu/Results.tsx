export default function Results() {
  const stats = [
    {
      value: "近100%",
      label: "数据完整性",
      desc: "实现了实验数据的全流程电子化记录与审计追踪，彻底消除了数据造假风险，满足 IND 申报要求。"
    },
    {
      value: "40%",
      label: "研发效率提升",
      desc: "通过 LIMS 与 ELN 的自动化功能，减少了人工记录与报告整理时间，使科学家能更专注于核心研发工作。"
    },
    {
      value: "0",
      label: "关键合规缺陷",
      desc: "在多次模拟审计与外部核查中，基于数字化平台的研发质量体系表现优异，无重大关键缺陷项。"
    }
  ]

  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl mix-blend-screen" />
         <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">数字化转型的显著成效</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            原启生物成功构建了行业前沿的研发数据中台，为创新药的快速孵化与全球化布局奠定了坚实基础。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 h-full">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-4">
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