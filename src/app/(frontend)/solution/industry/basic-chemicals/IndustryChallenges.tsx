import { Leaf, Gem, Cpu, Globe, Shield } from 'lucide-react'

const challenges = [
  {
    icon: Leaf,
    title: '绿色化合规压力',
    description: '石化化工重点行业节能降碳行动方案要求：到2025年能源效能水平标杆产能需超30%，碳排放强度需显著下降',
    dataPoint: '十四五绿色安全高质量发展格局',
  },
  {
    icon: Shield,
    title: '安全生产升级',
    description: '化工老旧装置更新改造行动计划（2024）明确要求淘汰安全间距不足、监测设施落后的装置，提升本质安全水平',
    dataPoint: '“三同时”闭环与危化品全生命周期监控',
  },
  {
    icon: Gem,
    title: '高端化产品替代',
    description: '基础化工原料同质化严重，低端产能过剩，急需提升高端产品保障能力及数字化研发效率',
    dataPoint: 'PLM贯穿产品全生命周期研发',
  },
  {
    icon: Cpu,
    title: '智能化运营指挥',
    description: '传统工艺控制依赖人工经验，面临“老师傅”退休风险；设备预测性维护能力不足，非计划停机损失巨大',
    dataPoint: 'AIoT数物融合+PHM故障预测',
  },
  {
    icon: Globe,
    title: '全球化合规协同',
    description: '中企出海面临GDPR数据安全、各国发薪及合规结算压力，需构建全球人才供应链与共享运营中心',
    dataPoint: '赋能中企一站式出海数智化需求',
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
