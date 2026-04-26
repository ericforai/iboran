'use client'

import { Warehouse, Globe, Search, Calculator } from 'lucide-react'

interface Challenge {
  title: string
  description: string
  dataPoint?: string
}

const challenges: Challenge[] = [
  {
    title: '多点库存集成难题',
    description: '库存分布多点且存在三方外仓代管模式，传统系统难以实现跨平台库存实时共享与集成，制约「一盘货」战略落地。',
    dataPoint: '多仓库存数据同步延迟>24小时'
  },
  {
    title: '全渠道对接成本高',
    description: '电商平台碎片化，新营销模式层出不穷，企业自研对接各平台接口导致开发周期长、维护成本极高。',
    dataPoint: '平均单接口开发维护成本超5万元/年'
  },
  {
    title: 'SN序列号管控缺失',
    description: '3C类商品对序列号有强管控需求，旧系统无法实现从工厂生产、采购入库到终端销售的全链路闭环跟踪。',
    dataPoint: '售后核销准确率不足85%'
  },
  {
    title: '财务核算对账繁重',
    description: '电商订单量巨大且场景复杂（退换货、价保、促销），大促期间多平台对账高度依赖人工，效率低且易出错。',
    dataPoint: '财务对账周期长达5-10个工作日'
  }
]

const icons = [Warehouse, Globe, Search, Calculator]

interface IndustryChallengesProps {
  industryName: string
}

export default function IndustryChallenges({ industryName }: IndustryChallengesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            {industryName}企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge: any, idx: number) => {
            const Icon = icons[idx]
            return (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-7 h-7 text-[#E60012]" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {challenge.description}
                </p>
                {challenge.dataPoint && (
                  <p className="text-xs text-[#0052D9] font-medium">
                    📊 {challenge.dataPoint}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
