import { Boxes, CalendarClock, Building2, Receipt } from 'lucide-react'

const challenges = [
  {
    icon: Boxes,
    title: '订单碎片化',
    description: '客户需求多样化、个性化产品增长迅速，定制化生产趋势明显，传统标准化生产模式难以适应',
    dataPoint: '市场需求多元化趋势显著',
  },
  {
    icon: CalendarClock,
    title: '生产计划复杂',
    description: 'MTO按单生产、MTS按库存生产、混合模式并存，多策略协同难度大，计划变更频繁',
    dataPoint: '多种计划策略需灵活切换',
  },
  {
    icon: Building2,
    title: '供应链协同难',
    description: '多组织内部交易繁杂、跨工厂调拨频繁、供应商直发管理难，物料追溯链条长',
    dataPoint: '多级路径内部交易管理挑战',
  },
  {
    icon: Receipt,
    title: '项目成本管控',
    description: '项目型生产模式下，项目BOM、项目物料、子件发运场景复杂，成本归集追溯困难',
    dataPoint: '项目全周期成本透明度不足',
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
            电气装备企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge: any, idx: number) => (
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
