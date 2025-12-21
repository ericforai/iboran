import { Database, CalendarClock, RefreshCcw, Eye, ShieldCheck, CircleDollarSign } from 'lucide-react'

const painPoints = [
  {
    icon: Database,
    title: "库存压力大",
    desc: "物料种类繁杂，多属性、多批次管理难度极大，呆滞料堆积严重，资金占用效率低。"
  },
  {
    icon: CalendarClock,
    title: "计划排产难",
    desc: "手工调档调度偏差大，物料配套齐套率低，导致生产计划频繁变动，交付承诺难以兑现。"
  },
  {
    icon: RefreshCcw,
    title: "变更响应慢",
    desc: "工程变更（ECN）频繁，设计与制造脱节，变更信息流转不畅，导致大量无效作业与返工。"
  },
  {
    icon: Eye,
    title: "过程不透明",
    desc: "制造现场黑盒化，生产动态反馈延迟，异常响应极慢，资源利用效率与瓶颈难以识别。"
  },
  {
    icon: ShieldCheck,
    title: "品质波动大",
    desc: "缺乏实时质量数据采集与体系化追溯能力，难以对质量风险进行精准定位与闭环管控。"
  },
  {
    icon: CircleDollarSign,
    title: "成本管控难",
    desc: "成本核算滞后于业务发生，无法实现工序级、实时化的成本归集，严重制约经营决策水平。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">制造企业的 6 大核心管理挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「在快速变化的市场需求与精益制造的要求面前，传统的粗放型模式已成为增长的重疴。」
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
