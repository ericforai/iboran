import { Globe, RefreshCw, Users, BarChart3 } from 'lucide-react'

const challenges = [
  {
    icon: Globe,
    title: '全球化与多主体管控风险',
    description: '互联网企业快速扩张带来的多地多主体运营架构，导致资金管理分散、税务合规风险增加，集团管控难度加大。',
    dataPoint: '资金利用率低，合规成本高'
  },
  {
    icon: RefreshCw,
    title: '业务迭代快，系统支撑难',
    description: '新业务模式层出不穷，传统ERP系统僵化，难以支撑业务的快速试错与敏捷迭代，制约创新速度。',
    dataPoint: '系统响应滞后'
  },
  {
    icon: Users,
    title: '人才管理与组织效能',
    description: '人员规模快速增长，灵活用工等多元化用工形式并存，薪酬计算复杂，难以实现主要的人力资源精细化运营与效能分析。',
    dataPoint: '算薪耗时，数据不准'
  },
  {
    icon: BarChart3,
    title: '业财数据割裂',
    description: '各业务线数据孤岛林立，业务数据与财务数据无法实时拉通，管理层难以获取准确的经营数据支持决策。',
    dataPoint: '决策缺乏实时依据'
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
            互联网企业面临的成长阵痛
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
