import { Layers, RefreshCw, Truck, Shield } from 'lucide-react'

const challenges = [
  {
    icon: Layers,
    title: '项目管理复杂',
    description: '多项目/管线并行生产，跨组织协同困难，项目进度追踪不透明，成本核算跨地域，管理挑战巨大',
    dataPoint: '70%+ CDMO企业面临项目延期',
  },
  {
    icon: RefreshCw,
    title: '生产计划多变',
    description: '生产变更频繁，插单改单常态化，资源配套协调困难，交期延误风险高，客户满意度受影响',
    dataPoint: '计划变更频率高达每周3-5次',
  },
  {
    icon: Truck,
    title: '采购协同困难',
    description: '集团采购模式复杂，供应商资质管理繁琐，计划变更导致采购频繁调整，预算控制难落地',
    dataPoint: '采购计划准确率不足60%',
  },
  {
    icon: Shield,
    title: '质量合规严苛',
    description: 'GMP/GCP/GLP多体系要求，批次全程追溯，稳定性考察，CSV计算机验证，合规成本持续上升',
    dataPoint: '质量合规投入占比15%+',
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
            生物医药CDMO企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#E60012]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <challenge.icon className="text-[#E60012]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {challenge.description}
              </p>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-[#0052D9] font-medium flex items-center gap-1">
                  📊 {challenge.dataPoint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
