import { HardHat, Wrench, BarChart3, AlertTriangle, Clock, CircleDollarSign } from 'lucide-react'

const painPoints = [
  {
    icon: HardHat,
    title: "资产家底不清",
    desc: "资产台账信息陈旧，实物与账面不符。跨区域、多组织资产难以统一管理，盘点耗时耗力。"
  },
  {
    icon: Wrench,
    title: "维保效率低下",
    desc: "被动式维修为主，设备故障频发。缺乏预防性维护计划，维修成本居高不下。"
  },
  {
    icon: AlertTriangle,
    title: "故障响应滞后",
    desc: "设备异常发现不及时，故障修复周期长。生产线停机造成重大损失，影响交付承诺。"
  },
  {
    icon: BarChart3,
    title: "利用效率偏低",
    desc: "设备 OEE 缺乏可视化，闲置资产识别困难。资产配置不合理，投资回报难以评估。"
  },
  {
    icon: Clock,
    title: "备件管理混乱",
    desc: "备件库存不可视，积压与缺料并存。紧急采购频繁，维修等待时间长。"
  },
  {
    icon: CircleDollarSign,
    title: "成本归集困难",
    desc: "资产运维成本分散在多个系统，难以归集分析。全生命周期成本核算缺失。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业资产管理的典型挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「资产是企业的重要投资，但多数企业尚未建立有效的资产价值管理体系。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <item.icon className="text-[#E60012] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
