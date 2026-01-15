import { TrendingDown, Users, FileSpreadsheet, AlertTriangle } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: '项目成本失控',
    description: '项目预算与执行脱节，人工、费用分摊不清，项目利润难以精准测算，不仅会导致盈利下降，还可能引发资金周转风险，影响企业长期发展。',
    dataPoint: '45% 项目不仅超支，更拖累企业现金流'
  },
  {
    icon: Users,
    title: '人才流失与效能',
    description: '招聘周期长，核心人才流失率高，缺乏科学的人效评价体系，导致企业难以留住关键人才，团队稳定性差，直接影响项目的交付质量和客户信任。',
    dataPoint: '30% 项目因人才问题延期或遭受客户投诉'
  },
  {
    icon: FileSpreadsheet,
    title: '业财数据割裂',
    description: '业务系统与财务系统各自为政，数据不互通，财务核算严重滞后，管理层无法及时获取准确的经营数据，错失决策良机，增加企业经营风险。',
    dataPoint: '月结耗时 7-10 天，经营决策严重滞后'
  },
  {
    icon: AlertTriangle,
    title: '服务交付质量',
    description: '项目交付过程缺乏标准化管理，委外服务难以管控，导致交付质量参差不齐，客户满意度难以提升，多次返工不仅增加成本，更损害品牌形象。',
    dataPoint: '客户满意度 < 80%，续约率低'
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
            科技服务业面临的核心挑战
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
