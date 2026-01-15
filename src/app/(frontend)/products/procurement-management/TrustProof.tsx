import React from 'react'
import { Award, Users, Globe2, Building2 } from 'lucide-react'

export const TrustProof = () => {
  const stats = [
    { label: '服务组织', value: '50,000+', icon: Building2 },
    { label: '实施经验', value: '15 年+', icon: Award },
    { label: '活跃供应商', value: '100 万+', icon: Users },
    { label: '区域覆盖', value: '100+ 城市', icon: Globe2 },
  ]

  const cases = [
    {
      industry: '某大型制造业集团',
      title: '采购成本直降 12.5%',
      desc: '通过采购平台实现全集团集中请购与比价寻源，年度采购成本节约超 5000 万。',
      tags: ['集中采购', '电子寻源']
    },
    {
      industry: '某知名快消品牌',
      title: '协同周期缩短 40%',
      desc: '在线供应商门户实现订单秒级流转，从下单到确认收货的全周期由 15 天降至 9 天。',
      tags: ['供应商协同', '移动审批']
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">全国超 50,000 家组织的选择</h2>
            <p className="text-slate-600 mb-12">
              我们在采购管理领域拥有深厚的行业积累，为各行各业的客户提供更懂业务、更稳健的数字化解决方案。
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {cases.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">{item.industry}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs italic">#{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
