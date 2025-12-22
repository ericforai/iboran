import { Database, SearchX, Clock, ShieldAlert, BarChart3, CircleDollarSign } from 'lucide-react'

const painPoints = [
  {
    icon: Database,
    title: "数据孤岛林立",
    desc: "多系统数据分散存储，口径不一。跨部门取数困难，业务难以获得完整视图。"
  },
  {
    icon: SearchX,
    title: "数据质量堪忧",
    desc: "缺乏统一的数据标准与治理规范，脏数据、重复数据泛滥，影响分析准确性。"
  },
  {
    icon: Clock,
    title: "报表出具缓慢",
    desc: "手工导出、Excel 整理，报表制作周期以天计。数据呈现滞后，决策时效性差。"
  },
  {
    icon: ShieldAlert,
    title: "合规风险高企",
    desc: "数据权限管控粗放，敏感数据访问难追溯。难以满足等保、GDPR 等合规要求。"
  },
  {
    icon: BarChart3,
    title: "分析能力不足",
    desc: "业务分析依赖 IT 支持，自助分析能力弱。数据价值无法充分挖掘释放。"
  },
  {
    icon: CircleDollarSign,
    title: "数据价值模糊",
    desc: "数据资产缺乏盘点与评估，投入产出不清晰。数据价值难以量化呈现。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业数据管理的典型痛点</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「数据是新时代的石油，但大多数企业还停留在采集阶段，无法有效提炼价值。」
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
