'use client'

import { motion } from 'framer-motion'
import { 
  Calculator, 
  Users, 
  FolderKanban,
  BarChart3,
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
    icon: Calculator,
    title: "项目成本难核算",
    description: "人员成本、差旅费用难以精确分摊到项目，项目盈亏看不清，经营决策缺依据。",
    dataPoint: "45% 企业无法精确归集人员成本到项目"
  },
  {
    icon: Users,
    title: "人力事务繁重",
    description: "入转调离手工处理，薪资核算易出错，考勤统计耗时长，HR疲于事务无暇赋能业务。",
    dataPoint: "人力事务型工作占比超 50%"
  },
  {
    icon: FolderKanban,
    title: "业务系统分散",
    description: "财务、人力、CRM、项目各自为政，数据不互通，跨系统对账效率低下。",
    dataPoint: "月底跨系统对账平均耗时 5-7 天"
  },
  {
    icon: BarChart3,
    title: "项目进度失控",
    description: "缺乏统一项目视图，里程碑跟踪困难，超期风险无法提前预警，交付质量难保障。",
    dataPoint: "项目延期风险识别滞后率 > 30%"
  }
]

interface IndustryChallengesProps {
  industryName: string
}

export default function IndustryChallenges({ industryName }: IndustryChallengesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1F2329] mb-4">
            {industryName}机构面临的
            <span className="text-[#E60012]">核心挑战</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            成长型专业服务机构发展迅速，数字化转型势在必行
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0052D9]/10 to-[#0052D9]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#0052D9]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-[#E60012]">
                    {challenge.dataPoint}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
