import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { label: '服务组织数量', value: '50,000+', unit: '家' },
  { label: '项目协作人数', value: '1,000,000+', unit: '名' },
  { label: '年均处理项目', value: '200,000+', unit: '个' },
  { label: '客户满意度', value: '98', unit: '%' }
]

const cases = [
  {
    company: '某知名建筑机械制造集团',
    industry: '制造业',
    content: '通过引入项目协同系统，实现了从立项到售后全生命周期的数智化管理，跨部门沟通效率提升了 [30]%。',
    tags: ['组织协同', '过程监控']
  },
  {
    company: '某省级规划设计院',
    industry: '设计/咨询',
    content: '解决了以往图纸与任务脱节的难题，实现了“任务带动产出”的闭环，项目工期延误减少了 [20]%。',
    tags: ['集成管理', '知识沉淀']
  }
]

export const TrustProof = () => {
  return (
    <section className="py-24 bg-brand-blue/5">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 px-4 lg:px-0">
          <div>
            <h2 className="text-3xl font-bold mb-6">交付证据：用数据说话</h2>
            <p className="text-gray-600 text-lg mb-10">
              项目协同管理系统已助力数万家组织实现高效协同。
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-brand-blue/10">
                  <div className="text-3xl font-bold text-brand-blue mb-2">
                    {stat.value}<span className="text-sm font-normal text-gray-500 ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {cases.map((item, idx) => (
              <Card key={idx} className="border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-bold rounded-full">
                      {item.industry}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{item.company}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    “{item.content}”
                  </p>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
