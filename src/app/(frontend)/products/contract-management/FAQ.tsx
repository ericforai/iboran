'use client'

import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "电子合同签署后的证据效力如何，是否符合法律规定？",
    answer: "我们系统深度集成法大大等具备国家认证资质的电子签章平台。签署过程包含 CA 身份认证、可信时间戳、哈希摘要算法以及区块链存证。充分符合《电子签名法》要求，与纸质合同具备同等司法效力。"
  },
  {
    question: "系统如何与我们现有的财务系统（如 NC/U8）进行数据对接？",
    answer: "系统内置成熟的集成底座，支持通过标准化 RESTful API 与主流财务系统对接。可以实现：合同数据同步、自动生成应收应付凭证、收付款流水回写至合同台账等核心业务逻辑。"
  },
  {
    question: "实施一套合同管理系统的周期大概需要多久？",
    answer: "标准配置交付通常需要 4-6 周，包括：需求调研、流程建模、模版配置、系统部署及基础上线培训。如果是涉及深度定制报表或多套三方系统集成，周期约为 8-12 周。"
  },
  {
    question: "如何解决移动办公场景下的合同审批及查阅？",
    answer: "系统原生支持移动端访问，深度适配鸿蒙、iOS 及安卓系统。可以直接集成到企业微信、钉钉或微宏专有应用中，实现随时随地的附件查阅、留痕审批及一键签章。"
  },
  {
    question: "系统对于历史存量的纸质合同如何管理？",
    answer: "我们提供专业的 OCR 识别服务，支持将历史纸质合同扫描后自动提取关键字段（如金额、日期、相对方）并结构化导入系统。同时提供“扫描件-电子台账”的映射关系管理，方便历史数据追溯。"
  },
  {
    question: "费用的组成部分包括哪些？",
    answer: "通常包含三部分：1. 软件许可费（按模块或用户数）；2. 实施交付与集成费（咨询、建模、接口开发）；3. 年度运维保障费。电子签章由于涉及第三方认证，通常按签署份数计费。"
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">高频疑难解答</h2>
          <p className="text-slate-600">
            关于选型、实施及后续保障，您关心的问题都在这里。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden transition-colors hover:border-blue-200">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`flex-shrink-0 ${openIdx === idx ? 'text-blue-600' : 'text-slate-400'}`} size={20} />
                  <span className={`font-bold text-lg ${openIdx === idx ? 'text-blue-600' : 'text-slate-900'}`}>{faq.question}</span>
                </div>
                {openIdx === idx ? (
                  <Minus size={20} className="text-slate-400" />
                ) : (
                  <Plus size={20} className="text-slate-400" />
                )}
              </button>
              {openIdx === idx && (
                <div className="px-20 pb-8 pr-10">
                  <p className="text-slate-600 leading-relaxed border-l-2 border-blue-100 pl-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
