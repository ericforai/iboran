'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      q: "用友 BIP 和传统的 ERP (如 U8, NC) 有什么区别？",
      a: "传统 ERP 侧重于企业内部的流程信息化（记录结果），而 BIP (Business Innovation Platform) 是商业创新平台，侧重于数字化与智能化（驱动决策）。BIP 采用云原生架构，打破了传统 ERP 的烟囱式孤岛，实现了社会化连接、数据驱动和 AI 智能应用。"
    },
    {
      q: "适合多大规模的企业使用？",
      a: "BIP 主要面向大中型企业及集团型企业。对于小微企业，我们建议使用公有云 SaaS 模式的 YonSuite；对于中型成长型企业，可以选择 U9 cloud (制造) 或 U8 cloud。"
    },
    {
      q: "实施周期大概需要多久？",
      a: "视项目范围而定。标准模块的快速上线通常在 3-6 个月。如果是大型集团的全面数智化转型项目，通常分期进行，首期核心财务/供应链上线约 6-9 个月，后续持续迭代。"
    },
    {
      q: "支持私有化部署吗？数据安全怎么保障？",
      a: "支持。BIP 提供公有云、专属云、私有云 (On-Premise) 等多种部署模式。对于对数据主权有严格要求的国央企，我们推荐私有云部署方案，完全适配国产化软硬件环境。"
    },
    {
      q: "旧系统的数据能迁移过来吗？",
      a: "可以。我们提供标准的数据迁移工具和实施方法论。在“咨询诊断”阶段，我们会评估历史数据的质量，制定清洗和迁移方案，确保新旧系统平滑过渡。"
    },
    {
      q: "费用是如何构成的？",
      a: "费用主要包含三部分：1. 软件许可/订阅费 (License/SaaS Subscription)；2. 实施交付与咨询费 (服务人天)；3. 年度运维服务费 (SLA)。"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            常见问题 FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-bold text-[#1F2329] pr-8">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-50">
          {a}
        </div>
      )}
    </div>
  )
}
