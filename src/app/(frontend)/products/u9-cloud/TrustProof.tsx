import React from 'react'
import { Trophy, Award, MapPin, Building2, Quote, ExternalLink } from 'lucide-react'

const stats = [
  { icon: Trophy, label: '离散制造稳居第一', value: '2023年行业地位' },
  { icon: Award, label: '获得权威大奖', value: '8项年度奖项' },
  { icon: MapPin, label: '省区覆盖', value: '29个省级行政区' },
  { icon: Building2, label: '新签客户替换率', value: '近 50%' },
]

const cases = [
  {
    name: '临工集团济南重机',
    role: '支开印 总经理',
    quote: 'U9 cloud很好地实现了我公司的定制化生产、柔性化制造等精益管理需求，构建了敏捷制造体系。',
    tag: '装备制造',
  },
  {
    name: '浙江迦南科技',
    role: '谢建西 CIO',
    quote: '通过U9 cloud实现了多组织业务协同，极大提升了多地点业务协同效率，进度采集效率大幅提升。',
    tag: '电子电器',
  },
  {
    name: '上海普利特',
    role: '信息总监',
    quote: '借助U9 cloud全球化部署能力，有力支撑了公司全球工厂的低成本的大规模协同。',
    tag: '新材料',
  },
]

export const TrustProof = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="inline-flex p-3 rounded-2xl bg-blue-500/20 mb-4">
                <s.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-brand-red">大国重器背后的数智力量</h2>
          <p className="text-gray-400 max-w-2xl">
            数万家制造企业的信赖，500强企业的一致选择。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-all cursor-default">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                  {cs.tag}
                </div>
                <div className="mb-8">
                  <Quote className="w-8 h-8 text-blue-500/40 mb-4" />
                  <p className="text-lg leading-relaxed text-gray-200">
                    {cs.quote}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                   <div className="font-bold">{cs.name}</div>
                   <div className="text-gray-500 text-sm">{cs.role}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                   <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
