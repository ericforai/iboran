import { ClipboardList, Share2, Cpu } from 'lucide-react'

const featureGroups = [
  {
    title: "计划决策层",
    subtitle: "产销协同，全局优化",
    icon: ClipboardList,
    features: [
      { title: "多模式计划体系", desc: "支持 MTS、MTO、ATO 等多种计划模式，满足企业多样化经营需求。" },
      { title: "S&OP 产销协同", desc: "打通销售预测与运营计划，实现多版本模拟与供需平衡分析，提升计划准确性。" },
      { title: "LRP/MRP 运算", desc: "基于多层级 BOM 与物料替代策略，精准计算物料需求，降低库存积压风险。" }
    ]
  },
  {
    title: "精细化成本核算",
    subtitle: "料动账动，实时核算",
    icon: Cpu,
    features: [
      { title: "实时成本卷积", desc: "业务事项（如领料、完工）触发实时会计事务，实现'料动账动'，即时生成会计分录。" },
      { title: "标准成本体系", desc: "支持标准成本估算与版本管理。月末自动进行差异分析与回摊，满足合规审计要求。" },
      { title: "工序级成本核算", desc: "打破传统订单级核算，支持工序级成本归集与平行结转，精准还原每道工序的投入产出。" }
    ]
  },
  {
    title: "供应链协同层",
    subtitle: "上下游联动，敏捷交付",
    icon: Share2,
    features: [
      { title: "采购需求直达", desc: "生产计划自动生成采购申请，与供应商平台无缝对接，实现 JIT 准时制供货。" },
      { title: "委外协同管理", desc: "全流程管控委外加工商，实现发料、加工进度与费用的透明化协同与结算。" },
      { title: "全生命周期追溯", desc: "构建从原材料入库到成品发货的端到端履历，实现全链路合规性管理。" }
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
