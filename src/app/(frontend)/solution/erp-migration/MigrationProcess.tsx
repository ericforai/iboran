'use client'

export default function MigrationProcess() {
  const steps = [
    {
      num: "01",
      title: "现状评估",
      desc: "利用专业工具对现有数据量、定制代码、业务流程进行全面扫描与评估。"
    },
    {
      num: "02",
      title: "蓝图设计",
      desc: "基于评估结果，制定详细的升级路径、数据映射方案及新特性应用蓝图。"
    },
    {
      num: "03",
      title: "数据迁移",
      desc: "执行自动化迁移脚本，完成静态数据、动态业务数据的清洗与转换。"
    },
    {
      num: "04",
      title: "验证上线",
      desc: "进行多轮数据校验与业务模拟，确保新旧系统平滑切换，无缝上线。"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">科学严谨的升迁路径</h2>
          <p className="text-lg text-slate-600">
            标准化实施方法论，确保升级过程可控、可视、可交付
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-50 text-blue-600 font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-100 group-hover:scale-110 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
