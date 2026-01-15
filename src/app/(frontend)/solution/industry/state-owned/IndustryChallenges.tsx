import { Share2, Eye, TrendingDown, Lightbulb } from 'lucide-react'

const challenges = [
  {
    icon: Share2,
    title: '信息孤岛与数据割裂',
    description: '原有信息系统之间尚未完全打通，存在信息孤岛；数据标准不一致，无法进行统一的数据管理与分析，影响集团化管控。',
    dataPoint: '60%企业存在系统壁垒'
  },
  {
    icon: Eye,
    title: '监管效能不足',
    description: '缺乏实时、穿透式的监管手段，对下属企业的经营状况、资金流向、重大决策等难以做到动态掌握，风险预警滞后。',
  },
  {
    icon: TrendingDown,
    title: '资产运营效率低',
    description: '资源配置不优，存量资产盘活困难，国有资本布局结构有待优化，资产使用效率和投资回报率有待提升。',
  },
  {
    icon: Lightbulb,
    title: '创新转型动力弱',
    description: '数字化转型缺乏顶层设计，复合型数字化人才短缺，难以支撑新业务模式孵化和产业链生态构建。',
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
            国资国企面临的核心挑战
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
