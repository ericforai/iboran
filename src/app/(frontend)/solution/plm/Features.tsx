import { Layers, Workflow, GitBranch, Briefcase } from 'lucide-react'

const features = [
  {
    icon: GitBranch,
    title: "需求与规划管理",
    description: "从市场洞察到商业计划的全流程管理，确保产品定义精准符合市场需求。",
    metric: "需求实现率提升 25%"
  },
  {
    icon: Layers,
    title: "数字化研发 (PDM)",
    description: "深度集成 CAD 工具，管理图纸、文档及 EBOM，实现单一事实来源。",
    metric: "数据差错减少 80%"
  },
  {
    icon: Workflow,
    title: "标准化变更管理",
    description: "闭环的变更管理流程，包含影响分析、工作流通知及版本管控。",
    metric: "变更周期缩短 30%"
  },
  {
    icon: Briefcase,
    title: "项目全过程管理",
    description: "基于 IPD 体系的项目控制，涵盖从立项到结项的工时、进度及里程碑。",
    metric: "项目准时交付率上升 40%"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">核心组件：数智化研发管理</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6 p-8 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0052D9] rounded-lg flex items-center justify-center text-white">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-2">{feature.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                  {feature.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
