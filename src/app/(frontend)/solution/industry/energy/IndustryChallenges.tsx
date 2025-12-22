import { TrendingDown, AlertTriangle, DollarSign, Lightbulb } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: '生产运营效率低',
    description: '煤炭、火电等传统能源生产效率较低，设备利用率不足，故障损失电量较高，新能源消纳能力不足',
    dataPoint: '设备利用率提升空间巨大',
  },
  {
    icon: AlertTriangle,
    title: '安全风险高',
    description: '煤炭开采过程安全隐患多、风险高，电力生产和电网运行过程中易出现作业风险和安全事故',
    dataPoint: '安全生产是能源企业的生命线',
  },
  {
    icon: DollarSign,
    title: '盈利压力大',
    description: '企业资产密集、负债率高，能源产品呈降价趋势，生产经营成本高，盈利能力面临挑战',
    dataPoint: '工程项目投资高，运营成本持续上升',
  },
  {
    icon: Lightbulb,
    title: '业务创新不足',
    description: '经营方式相对单一，在综合能源服务、多能互补、节能减排等方面业务创新能力不足',
    dataPoint: '产业生态构建处于初级阶段',
  },
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
            能源企业面临的核心挑战
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
              <p className="text-xs text-[#0052D9] font-medium">
                📊 {challenge.dataPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
