'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'BPM 系统的典型实施周期是多久？',
    answer: '标准交付通常需要 3-5 个月。其中，流程梳理与建模占 20%，系统配置与集成占 50%，联调测试与上线占 30%。对于复杂的集团化部署，我们会采用阶段性迭代上线模式。'
  },
  {
    question: 'BPM 必须与 ERP 系统（如 SAP、用友）集成吗？',
    answer: '不强制，但强烈建议集成。BPM 的核心价值之一是打破数据孤岛。如果不集成，流程流转将缺乏业务数据支撑，难以实现真正的决策闭环。我们提供开箱即用的 ERP 适配器。'
  },
  {
    question: '系统支持手机端审批吗？是否需要安装额外 App？',
    answer: '支持。我们原生适配了移动端浏览器，并提供与企业微信、钉钉、飞书的深度连接器。用户无需额外安装 App，直接在社交办公软件的待办中即可完成审批。'
  },
  {
    question: '费用结构是怎样的？是否有按年付费模式？',
    answer: '我们的收费由“软件许可（License）”+“实施咨询费”组成。支持一次性的永久授权模式，也支持基于云端的订阅模式（SaaS）。具体方案需根据您的用户数与集成复杂度确定。'
  },
  {
    question: '对于没有 IT 基础的业务部门，BPM 是否难以维护？',
    answer: 'BPM 采用低代码设计思想。经过简单的专家用户培训后，业务部门的流程管理员可以自主修改非核心的表单、调整审批顺序，无需编写代码，极大提升了业务的响应速度。'
  },
  {
    question: '如何保证历史流程数据的安全性与合规性？',
    answer: '系统具备严格的审计日志体系。每一笔流程的修改、退回、转发都会被永久记录，并支持导出不可篡改的审计报告。同时，支持多级数据备份方案，满足企业内部风控与外部审计要求。'
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">您可能还想问 (FAQ)</h2>
            <p className="text-slate-600">
              在这里可以找到关于实施、成本、集成及安全等常见疑问的解答。
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-blue-400 transition-colors">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`flex-shrink-0 ${openIdx === idx ? 'text-blue-600' : 'text-slate-400'}`} size={20} />
                    <span className={`font-bold text-base ${openIdx === idx ? 'text-blue-600' : 'text-slate-900'}`}>{faq.question}</span>
                  </div>
                  {openIdx === idx ? (
                    <Minus size={20} className="text-slate-400" />
                  ) : (
                    <Plus size={20} className="text-slate-400" />
                  )}
                </button>
                {openIdx === idx && (
                  <div className="px-16 pb-6 pr-10">
                    <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-blue-100 pl-4 italic">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              还有其他技术细节或特定方案需要咨询？
              <button className="ml-2 text-blue-600 font-bold hover:underline">
                联系我们的产品专家 →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
