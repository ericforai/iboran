import { TrendingDown, FlaskConical, ShieldCheck, Network } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: '市场波动与消费分化',
    description: '奶价波动大，市场出现低迷态势。同时，消费者需求分化明显，高端产品和基础产品市场需求差异大。',
    dataPoint: '市场需求差异化扩大'
  },
  {
    icon: FlaskConical,
    title: '产品创新响应滞后',
    description: '研发难以快速响应消费需求。需要处理配方管理相关的成本与产品全生命周期协同，提升整体效益。',
    dataPoint: '研发响应周期需缩短'
  },
  {
    icon: ShieldCheck,
    title: '质量管控集成度低',
    description: 'IT与OT融合存在断层。收奶、加工、包装环节的系统级数智化建设困难，数智信息连接较弱。',
    dataPoint: '核心应用普及率不足20%'
  },
  {
    icon: Network,
    title: '全渠道链路不通',
    description: '线下分销占比高，系统孤岛导致数据无法回传。对企业的销售预测、采购管理、库存管理造成严重影响。',
    dataPoint: '线下分销销量占比约80%'
  }
]

export default function IndustryChallenges() {
  const industryName = '乳制品行业'
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            {industryName}企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <challenge.icon className="w-7 h-7 text-[#0052D9]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                {challenge.description}
              </p>
              {challenge.dataPoint && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#0052D9] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0052D9] rounded-full" />
                    {challenge.dataPoint}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
