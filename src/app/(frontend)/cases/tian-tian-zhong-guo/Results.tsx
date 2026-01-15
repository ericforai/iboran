export default function Results() {
  const stats = [
    {
      value: "4小时",
      label: "平均响应时间",
      desc: "通过智能调度与移动化作业，服务响应速度提升 60%，绝大多数故障可在 4 小时内到达现场或远程解决。"
    },
    {
      value: "92%",
      label: "一次修复率",
      desc: "借助精准的故障诊断与知识库辅助，工程师一次上门修复率大幅提升，显著降低了服务成本。"
    },
    {
      value: "15%",
      label: "备件库存降低",
      desc: "基于数据驱动的备件预测模型，实现了备件库存结构的优化，在保证服务水平的同时降低了资金占用。"
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
            天田中国成功实现了从设备供应商向智能制造服务商的华丽转身，客户满意度与服务收入双双增长。
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