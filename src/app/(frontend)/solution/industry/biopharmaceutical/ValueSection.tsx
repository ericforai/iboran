import { Layers, Database, Cpu, CheckCircle2 } from 'lucide-react'

const stages = [
  {
    title: "一、业务在线",
    subtitle: "从割裂到一体",
    description: "构建全组织、全业务、全员上线的统一数智化平台，消除流程断点与效率卡点。",
    features: ["一体化业务平台", "全流程业务在线", "数据口径治理与规范"],
    icon: Layers,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "二、数据驱动",
    subtitle: "从经验到认知",
    description: "用数据弥补经验短板。过程规范化、结果数据化，驱动企业经营决策。",
    features: ["复杂成本自动核算", "需求计划智能计算", "业务风险事中强控"],
    icon: Database,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "三、智能运营",
    subtitle: "从手工到智能",
    description: "利用 AI 智能体提效，实现总结自动化、分析实时化与运营决策智能化。",
    features: ["YonGPT 辅助决策", "智能化合规风险预警", "经营指标层层穿透分析"],
    icon: Cpu,
    color: "from-cyan-400 to-cyan-600"
  }
]

export function ValueSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            药企数智化转型的<span className="text-blue-400">成功路径</span>
          </h2>
          <p className="text-blue-100/80 text-lg md:text-xl">
            基于用友多年行业最佳实践，助力生物医药企业分阶段实现数智化跃升
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-y-1/2 z-0"></div>

          {stages.map((stage, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 z-10"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <stage.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-6">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2 block">{stage.subtitle}</span>
                <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {stage.description}
                </p>
              </div>

              <div className="space-y-4">
                {stage.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 text-center backdrop-blur-sm">
          <p className="text-blue-100 text-lg">
            “最先进的转型方式就是 —— <span className="text-white font-bold italic">用成功复制成功</span>”
          </p>
        </div>
      </div>
    </section>
  )
}
