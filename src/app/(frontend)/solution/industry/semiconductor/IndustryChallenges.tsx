import { Layers, Zap, Target, ShieldAlert } from 'lucide-react'

const challenges = [
  {
    icon: Layers,
    title: '工艺复杂度高',
    description: '晶圆制造涉及数百道工序，精度要求达到纳米级别，任何偏差都可能导致整批报废',
    dataPoint: '前道制程超过500道工序',
  },
  {
    icon: Zap,
    title: '自动化要求严苛',
    description: '从Auto1到Auto3全自动化升级，人工干预需降至最低，机台设备需7×24无人值守运行',
    dataPoint: '量产线Auto3率需达95%+',
  },
  {
    icon: Target,
    title: '良率管控困难',
    description: '微小的工艺偏差导致良率波动，直接影响产品利润，良率每提升1%意味着数千万收益',
    dataPoint: '良率每提1%=千万级收益',
  },
  {
    icon: ShieldAlert,
    title: '国产替代紧迫',
    description: '核心CIM软件长期依赖进口，供应链安全风险突出，国产化替代需求日益迫切',
    dataPoint: '国产CIM软件渗透率<30%',
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
            半导体制造企业面临的核心挑战
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
