'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      q: '数字化采购管理系统实施周期大概多久？',
      a: '标准模块的部署与核心流程配置通常需要 4-6 周。如果涉及复杂的 ERP 深度集成（如多套异构系统）或大规模的供应商数据清洗，周期可能会延长至 8-12 周。'
    },
    {
      q: '系统如何保证供应商投标过程的公平与安全？',
      a: '系统采用“逻辑隔离+审计跟踪”机制。供应商仅能看到被授权的数据；开标前投标价格处于加密状态，任何人员无法查看。所有操作均有详尽的时间戳与人员记录，满足合规审计要求。'
    },
    {
      q: '支持与现有的用友 ERP 或 SAP 无缝对接吗？',
      a: '是的。数字化采购平台内置了多种标准适配器，支持与用友 BIP、U9、U8 系列，以及 SAP、Oracle 等主流 ERP 进行深度数据联动，包含基础物料同步、订单同步、到货通知、收票对账等业务。'
    },
    {
      q: '供应商使用该平台是否需要付费？',
      a: '这取决于企业的采购策略。大部分企业选择免费开放门户给供应商使用以降低协同门槛；也有部分组织采用会员制或订单返点模式。系统支持灵活的配置方案。'
    },
    {
      q: '如何处理紧急采购或非标物资的采购流程？',
      a: '基于 COP 平台的流程灵活性，我们可以预置“绿色通道”或“先办后补”流程，支持手机端随时随地审批，以保障业务连续性。对于非标物资，可以通过“附件寻源”功能实现图纸、技术规格书的精准协同。'
    },
    {
      q: '系统支持私有化部署还是云端部署？',
      a: '系统支持多种模式：本地机房部署（私有化）、云主机部署（阿里云/华为云等）以及官方 SaaS 服务模型，满足不同企业在数据自主性与维护便捷性上的平衡。'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">常见问题解答</h2>
          <p className="text-slate-600">解决您关于数字化采购实施、技术与价值的常见疑惑。</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 last:border-0">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
