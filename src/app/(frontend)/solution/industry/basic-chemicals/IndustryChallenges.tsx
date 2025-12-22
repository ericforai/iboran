import { Leaf, Gem, Cpu, Globe, Shield } from 'lucide-react'

const challenges = [
  {
    icon: Leaf,
    title: '环保合规压力大',
    description: '高能耗、高污染，面临严格的环保法规和碳排放要求，需加速绿色化转型',
    dataPoint: '绿色化是行业生存底线',
  },
  {
    icon: Gem,
    title: '产品附加值低',
    description: '产品同质化严重、研发周期长，缺乏高端化产品布局，市场竞争力不足',
    dataPoint: '高端化是价值增长引擎',
  },
  {
    icon: Cpu,
    title: '人工经验依赖',
    description: '生产运营高度依赖人工经验，设备故障停机损失大，智能化程度不足',
    dataPoint: '智能化是效率提升关键',
  },
  {
    icon: Globe,
    title: '跨国协同困难',
    description: '中企出海面临跨国协同效率低、贸易合规风险高、多语多币多时区管理难题',
    dataPoint: '全球化是市场拓展方向',
  },
  {
    icon: Shield,
    title: '系统安全风险',
    description: '核心系统受制于国外软件，数据安全风险和服务风险并存，亟需自主可控',
    dataPoint: '自主化是战略安全保障',
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
            基础化工企业面临的五大挑战
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            围绕“绿色化、高端化、智能化、全球化、自主化”五大战略方向，解决行业转型痛点
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>
        
        {/* 5 columns layout for 5 challenges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-base font-bold text-[#1F2329] mb-2">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
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
