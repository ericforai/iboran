import { AlertCircle, Database, FileSearch, ZapOff } from 'lucide-react'

const points = [
  {
    icon: ZapOff,
    title: '结账效率瓶颈',
    description: '传统月结依赖人工，流程碎片化，导致财务关账周期长，难以支持业务快速迭代。',
  },
  {
    icon: Database,
    title: '数据孤岛难题',
    description: '业务系统与财务系统相互孤立，数据口径不一，导致对账困难，无法形成合力。',
  },
  {
    icon: FileSearch,
    title: '经营分析受阻',
    description: '核算颗粒度粗放，数据分析滞后，管理者难以实时洞察业务背后的财务真相。',
  },
  {
    icon: AlertCircle,
    title: '协同效率低下',
    description: '跨部门、跨组织协作缺乏统一底座，沟通成本高，规则传递链条冗长且易出错。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            为何企业急需<span className="text-[#E60012]">业财融合</span>升级？
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            在数智化时代，传统的财务处理模式已成为制约企业发展的短板。
          </p>
          <div className="w-20 h-1 bg-[#E60012] mx-auto mt-8 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                {point.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
