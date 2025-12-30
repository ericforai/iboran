'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '实施周期大概需要多久？',
    a: '一般来说，标准版的实施周期在 3-6 周之间，具体取决于组织规模、需配置的业务场景数量、以及与其他系统集成的复杂程度。'
  },
  {
    q: '系统能支持多少人同时在线使用？',
    a: '协同 COP 平台采用分布式架构，标准配置即可支持上千用户并发，经过集群扩展后可支持万级以上用户同时在线。'
  },
  {
    q: '是否支持移动端处理业务？',
    a: '深度支持。通过移动客户端，您可以实现移动审批、项目报表在线查阅、进度即时汇报等所有常用场景。'
  },
  {
    q: '你们的项目管理系统与传统的工具有什么区别？',
    a: '传统工具侧重于离线的任务记录，而我们提供的是“协同驱动的项目管理”。它将纵向的业务流程（任务/合同/费用）与横向的协同审批紧密结合，确保每一步操作都伴随着规则的核准和痕迹的保留。'
  },
  {
    q: '数据安全如何保障？',
    a: '系统提供多级权限控制，精确到字段级的读写控制。支持 HTTPS 传输加密、国密算法存储加密，并具备详尽的操作留痕和日志审计功能，符合三级等保要求。'
  },
  {
    q: '购买方式是如何计算的？',
    a: '通常采用“平台许可 + 用户数授权 + 模板应用”的收费模式。具体费用结构会根据您的部署方式（私有化或 SaaS）以及业务模块的选择而定，欢迎预约咨询获取详细报价。'
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">常见问题解答</h2>
          <p className="text-gray-600">
            关于交付、周期、费用的专业解答，助您快速决策。
          </p>
        </div>

        <div className="max-w-4xl mx-auto border border-gray-100 rounded-3xl p-4 sm:p-10 shadow-sm">
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b last:border-b-0 border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-6 text-left font-bold text-gray-900 hover:text-brand-blue transition-colors group"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-blue' : 'text-gray-400'}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
