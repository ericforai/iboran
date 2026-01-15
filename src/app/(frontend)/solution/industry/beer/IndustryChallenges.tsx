import { AlertTriangle, Lightbulb, ShoppingCart, TrendingUp } from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: '产品创新竞争激烈',
    description: '中式精酿、茶啤融合、健康理念等趋势驱动产品快速迭代，风味创新和包装升级需求不断。',
    dataPoint: '新口味产品研发周期压缩至3-6个月'
  },
  {
    icon: Lightbulb,
    title: '渠道结构急剧变化',
    description: '即时零售崛起，电商增量凶猛，线上线下融合成为主流，传统经销体系面临重构。',
    dataPoint: '即时零售占比年增速超过50%'
  },
  {
    icon: ShoppingCart,
    title: '消费场景多元化',
    description: '啤酒节、烧烤季、世界杯等消费场景带动需求波动，产销协同难度加大。',
    dataPoint: '旺季销量峰值可达淡季的3-5倍'
  },
  {
    icon: TrendingUp,
    title: '成本控制与品质平衡',
    description: '原材料成本上涨、包材价格波动，同时消费升级要求提升品质与体验。',
    dataPoint: '综合成本管控精度需提升至单品级'
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
            啤酒企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
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
