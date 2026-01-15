import { Globe, Languages, Server, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: Globe,
    title: '合规风险高',
    description: '各国法规、税务、数据隐私政策各异，合规成本高昂，稍有不慎就面临巨额罚款',
    dataPoint: '各国GDPR/数据本地化要求',
  },
  {
    icon: Languages,
    title: '多语言协作难',
    description: '总部与海外团队语言不通、沟通成本高、业务效率低，跨国协作困难重重',
    dataPoint: '文化差异导致沟通成本翻倍',
  },
  {
    icon: Server,
    title: '系统孤岛多',
    description: '各国独立部署系统、数据不互通、报表无法统一分析，集团管控形同虚设',
    dataPoint: '多套系统维护成本高',
  },
  {
    icon: Clock,
    title: '时区管理复杂',
    description: '跨时区业务协同困难，订单、考勤、财务结账难以同步，运营效率大打折扣',
    dataPoint: '24时区协同是出海必答题',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Going Global Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            出海企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <point.icon className="w-7 h-7 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                {point.description}
              </p>
              <p className="text-xs text-[#0052D9] font-medium">
                📊 {point.dataPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
