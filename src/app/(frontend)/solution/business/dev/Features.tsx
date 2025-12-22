import { Layout, Workflow, BarChart3 } from 'lucide-react'

const featureGroups = [
  {
    title: "可视化表单设计",
    subtitle: "拖拽搭建，所见即所得",
    icon: Layout,
    features: [
      { title: "拖拽式表单设计", desc: "预置 100+ 组件，拖拽即可搭建复杂表单，支持嵌套表格、关联查询等高级场景。" },
      { title: "移动端自适应", desc: "一次设计自动适配 PC、平板、手机多终端，无需额外开发移动版本。" },
      { title: "模板市场复用", desc: "丰富的行业模板可直接复用，加速应用搭建，避免从零开始。" }
    ]
  },
  {
    title: "业务流程编排",
    subtitle: "流程即代码，零代码自动化",
    icon: Workflow,
    features: [
      { title: "流程画布设计", desc: "可视化流程编排，支持串并行、条件分支、循环等复杂逻辑，无需编码即可实现自动化。" },
      { title: "智能审批流", desc: "灵活定义审批规则，支持会签、加签、转签，与企业组织架构深度集成。" },
      { title: "定时任务调度", desc: "支持 Cron 表达式定时触发，自动执行数据同步、报表生成等周期任务。" }
    ]
  },
  {
    title: "数据分析报表",
    subtitle: "数据驱动，洞察先机",
    icon: BarChart3,
    features: [
      { title: "可视化报表设计", desc: "拖拽式报表设计器，支持折线图、柱状图、地图等 50+ 可视化组件。" },
      { title: "多源数据整合", desc: "支持关联多个数据源，自动聚合计算，无需手工导出整理。" },
      { title: "实时数据大屏", desc: "构建业务实时监控大屏，KPI 数据一目了然，支持自动刷新。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">DEV 核心开发能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            降低开发门槛，释放业务创新活力，让每个人都能成为应用开发者。
          </p>
        </div>

        <div className="space-y-16">
          {featureGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9]">
                  <group.icon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329]">{group.title}</h3>
                  <p className="text-[#0052D9] font-medium">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.features.map((feature, featureIdx) => (
                  <div 
                    key={featureIdx}
                    className="p-8 bg-[#F7F8FA] rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#1F2329] mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {groupIdx < featureGroups.length - 1 && (
                <div className="absolute left-6 -bottom-10 w-0.5 h-8 bg-slate-100 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
