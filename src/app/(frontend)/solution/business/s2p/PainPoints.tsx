import { DollarSign, Unplug, Clock, AlertTriangle, ArrowRight } from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    title: "寻源不透明，TCO 难控制",
    problem: "缺乏科学的寻源工具，采购价格不透明，难以通过集采发挥规模优势。",
    solution: "智能寻源引擎，全网比价、电子招投标，平均降低采购成本 15%。"
  },
  {
    icon: Unplug,
    title: "业务断点多，协同效率低",
    problem: "采购、库存、财务系统割裂，线下沟通频繁，订单交付周期长。",
    solution: "端到端数字化协同，打通 P2P 全流程，提升协同效率 50%。"
  },
  {
    icon: AlertTriangle,
    title: "供应商风险难监控",
    problem: "供应商数量多，资质良莠不齐，缺乏有效的风险预警机制。",
    solution: "供应商 360° 全生命周期管理，实时风险雷达监控，源头把控质量。"
  },
  {
    icon: Clock,
    title: "合规与决策滞后",
    problem: "手工报表慢，支出分析维度单一，难以支撑战略决策。",
    solution: "多维支出分析驾驶舱，实时洞察采购数据，驱动科学决策。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">直击采购与供应链核心痛点</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「传统采购模式下的信息孤岛与低效协同，正在成为企业降本增效的最大阻碍。」
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <item.icon className="text-[#E60012] group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-[#1F2329] mb-4 min-h-[56px] flex items-center">{item.title}</h3>
              
              <div className="flex-1 space-y-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <span className="text-xs font-bold text-slate-400 uppercase mb-1 block">Problem</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.problem}</p>
                </div>
                
                <div className="flex justify-center text-slate-300">
                  <ArrowRight size={16} className="rotate-90 md:rotate-0" />
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <span className="text-xs font-bold text-blue-500 uppercase mb-1 block">Solution</span>
                  <p className="text-sm text-[#0052D9] leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

