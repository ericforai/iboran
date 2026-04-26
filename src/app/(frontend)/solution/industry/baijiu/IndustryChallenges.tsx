import { AlertTriangle, Calculator, Database, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: AlertTriangle,
    title: '生产过程管控复杂',
    description: '曲药、轮次酒、定级酒、勾调酒、成品酒多级生产难管控，过程协同效率低。',
    dataPoint: '传统酿造过程人工依赖度高达70%'
  },
  {
    icon: Calculator,
    title: '成本核算不精准',
    description: '“事项会计+产品成本+成本中心”多维度核算复杂，难以实时反馈成本变动。',
    dataPoint: '财务结账周期通常需耗时5-7天'
  },
  {
    icon: Database,
    title: '数字酒库管理困难',
    description: '千万级库容下的批次、等级、以及库龄信息的精准动态管理难度巨大。',
    dataPoint: '库容利用率提升空间平均在15%以上'
  },
  {
    icon: TrendingDown,
    title: '产销协同效率低',
    description: '销售计划与生产、采购计划脱节，导致库存积压或供货不及时。',
    dataPoint: '产销平衡误差常导致5%的营收流失'
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
            白酒企业面临的核心挑战
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
