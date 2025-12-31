
import {
  DollarSign,
  Users,
  FileCheck2,
  Box,
  type LucideIcon
} from 'lucide-react'

interface Challenge {
  icon: LucideIcon
  title: string
  description: string
  dataPoint: string
}

const challenges: Challenge[] = [
  {
    icon: DollarSign,
    title: "项目成本难核算",
    description: "人员成本、费用报销难以精确分摊到项目，导致项目利润核算不准，经营存在盲区。",
    dataPoint: "45% 企业无法精确核算单项目毛利"
  },
  {
    icon: Users,
    title: "人才利用率低",
    description: "人员调度缺乏全盘视角，忙闲不均，关键资源冲突，导致交付延期或资源浪费。",
    dataPoint: "人员闲置率平均高达 20%+"
  },
  {
    icon: FileCheck2,
    title: "业财数据脱节",
    description: "业务系统与财务系统分离，立项、合同、回款、发票数据对不上，手工对账效率低。",
    dataPoint: "月底对账平均耗时 5-7 天"
  },
  {
    icon: Box,
    title: "服务标准难统一",
    description: "缺乏非标服务的标准化管理工具，依赖个人经验，导致服务质量参差不齐，客户满意度波动。",
    dataPoint: "因服务质量导致的客诉率 > 15%"
  }
]

interface IndustryChallengesProps {
  industryName: string
}

export default function IndustryChallenges({ industryName }: IndustryChallengesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-bold tracking-widest uppercase mb-3 block">
            Industry Challenges
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            {industryName}企业面临的核心挑战
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="group bg-[#F7F8FA] p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <challenge.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9] transition-colors">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {challenge.description}
              </p>
              {challenge.dataPoint && (
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#0052D9] font-bold flex items-center gap-1">
                    <span className="text-lg">📊</span> {challenge.dataPoint}
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
