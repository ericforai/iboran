import { Share2, TrendingUp, Zap, BarChart3 } from 'lucide-react'

const challenges = [
  {
    icon: Share2,
    title: '业财数据脱节',
    description: 'POS系统、配送系统与财务系统独立运行，数据无法实时同步，依赖大量人工对账，效率低下且易出错。',
    dataPoint: '对账周期长达 3-5 天'
  },
  {
    icon: TrendingUp,
    title: '成本控制颗粒度粗',
    description: '食材损耗、物耗无法精准核算到菜品及门店，缺乏有效的日成本、日效益监控，盈利空间被蚕食。',
    dataPoint: '平均损耗率高于行业 15%'
  },
  {
    icon: Zap,
    title: '供应链协同低效',
    description: '总部与成百上千家供应商、加盟店之间仍通过电话/微信下单，信息不对称，采购周期长，响应慢。',
    dataPoint: '协同效率提升空间约 40%'
  },
  {
    icon: BarChart3,
    title: '管理决策缺乏数据支撑',
    description: '各门店数据口径不一，管理者难以实时获取全公司的营收、库存和人效看板，决策滞后。',
    dataPoint: '决策响应时间通常延迟 48h+'
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
            餐饮连锁企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <challenge.icon className="w-7 h-7 text-[#E60012] group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {challenge.description}
              </p>
              {challenge.dataPoint && (
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-[#0052D9] font-medium flex items-center gap-1">
                    <span className="text-lg">📈</span> {challenge.dataPoint}
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
