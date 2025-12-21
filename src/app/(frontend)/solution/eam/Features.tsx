import { ClipboardList, Wrench, Cpu } from 'lucide-react'

const featureGroups = [
  {
    title: "资产全生命周期管理",
    subtitle: "从投资到退役，价值全程可视",
    icon: ClipboardList,
    features: [
      { title: "资产台账管理", desc: "统一资产信息库，支持多维度分类与标签，实现资产位置、状态、责任人的精准追踪。" },
      { title: "资产盘点管理", desc: "移动端扫码盘点，支持 RFID/条码识别，盘点效率提升 90%，实物账实一致。" },
      { title: "资产处置管理", desc: "规范资产报废、调拨、出售流程，确保资产处置合规，残值回收最大化。" }
    ]
  },
  {
    title: "设备运维管理",
    subtitle: "预防为主，智能维保",
    icon: Wrench,
    features: [
      { title: "点检巡检管理", desc: "移动化点检执行，标准化检查清单，异常实时上报，确保设备日常运行正常。" },
      { title: "预防性维护", desc: "基于运行时间、工况数据制定维保计划，从被动修复转向主动预防。" },
      { title: "工单管理", desc: "故障报修、维修派工、进度跟踪全流程数字化，维修响应时间缩短 50%。" }
    ]
  },
  {
    title: "智能资产管理",
    subtitle: "IoT + AI，洞察先机",
    icon: Cpu,
    features: [
      { title: "设备物联接入", desc: "对接 IoT 平台，实时采集设备运行数据，实现设备状态可视化与远程监控。" },
      { title: "预测性维护", desc: "AI 模型分析设备健康度，预测潜在故障，提前预警，避免非计划停机。" },
      { title: "能耗分析优化", desc: "设备能源消耗实时监测，异常用能预警，支撑节能降碳目标达成。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">EAM 核心管理能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建资产全生命周期数字化管理体系，实现资产价值最大化与运营成本最优化。
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
