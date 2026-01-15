import { Eye, Banknote, ShieldAlert, Clock, Building2, TrendingDown } from 'lucide-react'

const painPoints = [
  {
    icon: Eye,
    title: "资金可视性差",
    desc: "多银行、多账户资金分散，余额查询依赖手工。集团资金全貌难以实时掌握，决策缺乏依据。"
  },
  {
    icon: Banknote,
    title: "结算效率低下",
    desc: "手工制单、多系统登录、重复录入。支付审批流程繁琐，资金结算时效性差。"
  },
  {
    icon: ShieldAlert,
    title: "资金风险管控难",
    desc: "资金调度缺乏统一管控，违规支付难以防范。资金敞口与汇率风险难以量化评估。"
  },
  {
    icon: Clock,
    title: "资金计划不准确",
    desc: "资金预算与业务脱节，现金流预测偏差大。临时融资频繁，资金成本居高不下。"
  },
  {
    icon: Building2,
    title: "银企对接复杂",
    desc: "多银行接口标准不一，对接工作量大。银行变更或增加时，系统改造成本高。"
  },
  {
    icon: TrendingDown,
    title: "资金使用效率低",
    desc: "沉淀资金未得到有效利用，分子公司各自为战。资金池运作不畅，集中管理效益难以释放。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业资金管理的典型痛点</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            「资金是企业的血液，但多数企业的资金管理仍停留在分散、被动的阶段。」
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
