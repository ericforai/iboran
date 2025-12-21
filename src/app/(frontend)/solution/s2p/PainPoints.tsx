import { DollarSign, Unplug, Clock, AlertTriangle } from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    title: "成本控制困难",
    desc: "缺乏科学寻源和需求规划，TCO（总拥有成本）控制困难，采购价格不透明，难以实现降本增效。"
  },
  {
    icon: Unplug,
    title: "流程割裂",
    desc: "生产、计划、采购、库存、财务系统相互断开，形成管理盲区，数据无法拉通，决策滞后。"
  },
  {
    icon: Clock,
    title: "协同效率低",
    desc: "采购周期长，与供应链伙伴协作深度不足，订单交付跟踪困难，供应商响应不及时。"
  },
  {
    icon: AlertTriangle,
    title: "风险不可控",
    desc: "缺乏实时监控，供应链风险缺乏可见性，突发事件难以预警，合规性难以保障。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">采购供应链的 4 大核心挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「在数智化转型与精细化管理的要求面前，传统采购模式已成为企业发展的瓶颈。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
