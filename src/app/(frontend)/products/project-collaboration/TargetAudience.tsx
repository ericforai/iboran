import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

const targets = [
  {
    title: '适用对象',
    icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" />,
    items: ['多项目并行的集团企业', '需要跨部门资源借调的组织', '业务与流程需紧密结合的单位', '追求项目过程透明化的管理层'],
    bg: 'bg-blue-50/50',
    borderColor: 'border-brand-blue/20'
  },
  {
    title: '不适用情况',
    icon: <XCircle className="w-6 h-6 text-gray-400" />,
    items: ['个人简单的任务记录', '无行政审批流程的小团队', '仅需离线文档存储的场景', '无数字化转型意愿的组织'],
    bg: 'bg-gray-50',
    borderColor: 'border-gray-200'
  }
]

const painPoints = [
  {
    id: '01',
    title: '项目进度不可控',
    desc: '项目目标分解不清晰，无法实时监控各主要环节的进度，无法及时处理项目遇到的问题。'
  },
  {
    id: '02',
    title: '跨部门协作不畅',
    desc: '涉及人、财、物各种资源借调，跨部门的协同配合困难重重，协作沟通效率低下。'
  },
  {
    id: '03',
    title: '过程管理难透明',
    desc: '传统项目中的任务、合同、费用等纸质信息无法有效管理，操作不留痕，难以追溯。'
  }
]

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">谁需要协同项目管理？</h2>
          <p className="text-gray-600 text-lg">
            在多变的企业环境中，我们需要一套能够承载复杂业务逻辑并实现高效执行的协同平台。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {targets.map((group, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${group.bg} ${group.borderColor}`}>
              <div className="flex items-center gap-3 mb-6">
                {group.icon}
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center text-brand-red">解决核心痛点</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.id} className="relative p-6 pt-10 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-4 left-6 text-4xl font-bold text-brand-blue/10 leading-none">
                  {point.id}
                </span>
                <h4 className="text-lg font-bold mb-4 relative z-10">{point.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
