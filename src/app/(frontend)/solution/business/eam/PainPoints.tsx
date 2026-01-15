import { Share2, FileWarning, ClipboardX, Cpu, BarChart3, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: Share2,
    title: "跨部门协作壁垒",
    desc: "资产台账、财务账目与运维现场数据无法实时同步，造成“信息孤岛”，协同效率低。"
  },
  {
    icon: ClipboardX,
    title: "全手工纸质作业",
    desc: "巡检维保依然依赖纸质工单，记录不规范且易丢失，管理层无法实时掌控现场状态。"
  },
  {
    icon: FileWarning,
    title: "特种设备合规风险",
    desc: "起重机、变压器等关键资产缺乏合规化监管与预警，存在严重的非计划停机与安全风险。"
  },
  {
    icon: Clock,
    title: "运维响应及效率低",
    desc: "故障发现晚、报修不及时。缺乏预测性维护，导致维修团队始终处于“救火式”响应中。"
  },
  {
    icon: BarChart3,
    title: "资产价值难以量化",
    desc: "资产原值高、折旧快，但实际利用率与投资回报（ROI）缺乏数据支撑，决策全凭经验。"
  },
  {
    icon: Cpu,
    title: "智能化水平滞后",
    desc: "缺乏 IoT 物联手段，无法采集设备实时运行参数，难以为精益化运维提供底座支持。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">资产管理的深层痛点</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「在高频次、多场景的服务响应中，传统的管理方式已难以满足现代企业的实时化诉求。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E60012] transition-colors duration-500">
                <item.icon className="text-[#E60012] group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

