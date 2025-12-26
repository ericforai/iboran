import React from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'U9 cloud 与传统的 U9 ERP 有什么区别？',
    a: 'U9 cloud 是 U9 的数智化升级版，基于云原生、容器化架构，不仅保留了业界领先的多组织、项目制造架构，更深度集成了 AI、大数据等云能力，支持更敏捷的部署与全价值链协同。',
  },
  {
    q: '典型的实施周期是多久？',
    a: '通过用友标杆项目章程和敏捷实施工具，标准离散制造场景通常在 90 个工作日内即可完成核心业务上线，后续可按需进行增量优化。',
  },
  {
    q: '费用结构是怎样的？是否支持订阅模式？',
    a: '提供灵活的商务模式：包含传统的私有云买断，以及更轻便的私有/公有云订阅模式（按年付费）。订阅模式显著降低了前期 IT 投入（约降低62%），提升了资金利用率。',
  },
  {
    q: '如何保障多组织、全球化业务的数据安全？',
    a: 'U9 cloud 采用多重身份认证、关键数据脱敏及多租户隔离技术，符合 GDPR、PDPA 等全球主流合规标准，保障全球业务协同中的数据确权与流转安全。',
  },
  {
    q: '支持与现有的 PLM 或 MES 系统集成吗？',
    a: '非常支持。U9 cloud 拥有极高的开放平台（OpenAPI），已与国内外主流 PLM、MES、SRM 系统实现预集成，支持设计制造一体化与工厂联动的无缝流转。',
  },
  {
    q: '多组织架构对企业组织变革有什么价值？',
    a: '它支持企业在不更换系统的业务前提下，快速调整管理边界（如法人拆分、跨国并购、阿米巴拆分），通过账簿隔离与业务协同，让组织调整对业务的影响降至最低。',
  },
]

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题解答</h2>
          <p className="text-gray-600">
            如果您还有关于 U9 cloud 的其他疑问，欢迎随时咨询我们的专属专家。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-gray-100 rounded-2xl p-6 bg-gray-50/50 open:bg-blue-50/30 transition-all">
              <summary className="list-none flex items-center justify-between cursor-pointer focus:outline-none">
                <span className="text-lg font-bold text-gray-900 pr-4">{faq.q}</span>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4 text-gray-400 group-open:hidden" />
                  <Minus className="w-4 h-4 text-blue-600 hidden group-open:block" />
                </div>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-blue-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
