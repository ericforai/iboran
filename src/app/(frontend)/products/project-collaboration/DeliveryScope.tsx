import React from 'react'
import { Check, Plus, Minus } from 'lucide-react'

const scopes = [
  {
    title: '包含范围',
    desc: '标准交付包含以下内容',
    icon: <Check className="w-5 h-5 text-green-500" />,
    items: ['基础业务空间配置', '标准项目管理模版 (3套)', '移动端 M3 基础集成', '标准周报/日报汇报流程', '核心角色 (3个) 门户页面设计'],
    color: 'border-green-100'
  },
  {
    title: '增值/可选',
    desc: '可根据需求额外扩展',
    icon: <Plus className="w-5 h-5 text-brand-blue" />,
    items: ['第三方 ERP/财务系统深度集成', '超大规模复杂甘特图性能优化', '私有云/混合云环境专项调优', '定制化的多层级权限模型', '专属项目管理看板大屏'],
    color: 'border-brand-blue/20'
  },
  {
    title: '不包含',
    desc: '以下内容不属于交付范畴',
    icon: <Minus className="w-5 h-5 text-gray-400" />,
    items: ['硬件服务器及网络环境搭建', '存量非结构化数据的专项清洗', '代行业项目管理驻场咨询', '涉及外部监管接口的代办服务', '非产品标准功能的二次开发'],
    color: 'border-gray-100'
  }
]

export const DeliveryScope = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">交付范围与边界</h2>
          <p className="text-gray-400 text-lg">
            明确定位，减少扯皮，保障项目高质量交付。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <div key={idx} className={`bg-gray-800/50 p-8 rounded-2xl border ${scope.color}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  {scope.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{scope.title}</h3>
                  <p className="text-xs text-brand-blue uppercase tracking-widest mt-1 opacity-70">
                    {scope.desc}
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group text-gray-300">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-sm group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
