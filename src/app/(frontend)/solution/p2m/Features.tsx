import { LayoutGrid, ClipboardList, Share2, Layers, Cpu, ShieldCheck } from 'lucide-react'

const featureGroups = [
  {
    title: "计划决策层",
    subtitle: "科学规划，柔性应对",
    icon: ClipboardList,
    features: [
      { title: "多模式生产计划", desc: "支持 MTS、MTO、ATO、ETO 等多种业务模式，灵活适配企业经营战略。" },
      { title: "物料与产能平衡", desc: "全自动计算物料及其产能缺口，实现供需平衡，显著提高计划执行力。" },
      { title: "滚动计划管理", desc: "支持日、周、月滚动计划，实时捕捉市场波动，实现敏捷排产。" }
    ]
  },
  {
    title: "生产执行层",
    subtitle: "精益智造，全链透明",
    icon: Cpu,
    features: [
      { title: "工程看板管理", desc: "电子化 BOM 与工艺路线管理，支持工程变更（ECN）全生命周期追踪。" },
      { title: "智能派工与执行", desc: "基于移动端/工控机的实时报工、质量检验，生产过程透明化、实时化。" },
      { title: "智能工厂集成", desc: "深度集成 IOT 设备，实现设备状态实时监控、OEE 分析及异常自动预警。" }
    ]
  },
  {
    title: "制造协同层",
    subtitle: "打破孤岛，高效联动",
    icon: Share2,
    features: [
      { title: "多组织业务协同", desc: "实现多工厂间的产能互备、物料调拨及内外协同生产，优化全局资源配置。" },
      { title: "社会化委外管理", desc: "全流程管控外部加工商，实现委外发料、加工、回收到结算的闭环追踪。" },
      { title: "C2M 个性化定制", desc: "直连消费者需求，驱动制造端按需生产，支撑个性化规模化定制模式。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">智造转型，从业务闭环开始</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从物理世界到数字孪生的跨越，构建全方位的数字化制造能力，实现效率与质量的双重飞跃。
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
