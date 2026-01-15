export default function Results() {
  const stats = [
    {
      value: "30%",
      label: "运营效率提升",
      desc: "通过业财一体化与流程自动化，大幅减少了人工重复录入与核对工作，整体运营管理效率显著提升。"
    },
    {
      value: "95%+",
      label: "供应链协同率",
      desc: "核心供应商全部上线 SRM 平台，订单确认与发货通知实现 100% 在线化，库存准确率达到 98% 以上。"
    },
    {
      value: "100%",
      label: "合规性达标",
      desc: "建立了完善的质量追溯体系与财务内控机制，完全满足主机厂审核要求及集团审计规范。"
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
            捷太格特成功构建了数据驱动的敏捷供应链体系，为全球业务的持续增长奠定了坚实的数字化基础。
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