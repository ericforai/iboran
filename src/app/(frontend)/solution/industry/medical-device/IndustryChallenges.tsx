import { AlertTriangle, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

const challenges = [
  {
    icon: ShieldCheck,
    title: '质量监管合规风险',
    description: '医疗器械行业受严格的监管约束，企业需建立符合 GMP/GSP 规范的质量管理体系，并完成计算机化系统验证(CSV)。',
    dataPoint: '满足国家药监局(NMPA)及国际 FDA 规范'
  },
  {
    icon: TrendingDown,
    title: '集采扩围下的成本压力',
    description: '在现行集采价格形成机制下，企业面临严峻的利润空间压缩，亟需提升供应链效能与成本管控能力。',
    dataPoint: '实现全过程实时成本核算与分析'
  },
  {
    icon: Clock,
    title: '研发注册与技术资产管控',
    description: '新产品开发周期长、文档繁多，技术资产的分散存储制约了研发协作效率与成果转化进程。',
    dataPoint: '从立项到商业化的全生命周期管理'
  },
  {
    icon: AlertTriangle,
    title: '业务出海与上市合规',
    description: 'license-out 模式与海外属地经营要求企业具备全球化的财税合规化处理能力与数据安全保障。',
    dataPoint: '多组织运营与多国合规场景支持'
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
            医疗器械企业面临的核心挑战
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
