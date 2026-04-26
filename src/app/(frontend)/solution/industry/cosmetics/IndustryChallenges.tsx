import { AlertTriangle, ShoppingCart, TrendingDown, Users } from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: '渠道分散管理难',
    description: '线上电商平台众多、线下门店分布广，多渠道数据难以统一，营销决策滞后。',
    dataPoint: '电商平台占比超63%，渠道整合迫在眉睫'
  },
  {
    icon: ShoppingCart,
    title: '库存周转效率低',
    description: '产品SKU多、生命周期短，库存积压与断货并存，影响消费者体验。',
    dataPoint: '化妆品库存周转天数平均需45-60天'
  },
  {
    icon: TrendingDown,
    title: '国际品牌竞争激烈',
    description: '国际品牌向平价市场渗透，本土品牌面临品牌力、产品力双重挑战。',
    dataPoint: '高端市场国际品牌占有率超70%'
  },
  {
    icon: Users,
    title: '消费者运营碎片化',
    description: '会员数据分散、用户画像不精准，复购率提升困难，私域流量难以变现。',
    dataPoint: '消费者忠诚度低导致获客成本持续上涨'
  }
]

export default function IndustryChallenges() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            化妆品企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge: any, idx: number) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <challenge.icon className="w-7 h-7 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                {challenge.description}
              </p>
              {challenge.dataPoint && (
                <p className="text-xs text-[#0052D9] font-medium">
                  📊 {challenge.dataPoint}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
