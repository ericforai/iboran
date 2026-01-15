'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      q: '实施费控系统通常需要多长时间？',
      a: '基于标准交付套件，通常在 2-4 周内即可完成核心流程（预算、报销、票据）的部署与上线。如果涉及复杂的 ERP 双向集成或大规模定制，周期会有所延长。',
    },
    {
      q: '如何保障发票验真的准确性？',
      a: '系统集成了票据云服务，直接对接国家税务总局接口，支持增值税专票/普票、电子发票、定额发票等全币种的实时验真、查重及抵扣状态联查。',
    },
    {
      q: '支持哪些财务 ERP 系统的集成？',
      a: '提供用友（YonBIP/NC/U8/Cloud）、SAP、Oracle、金碟（云星空/K3）等主流 ERP 的标准插件或 Open API，确保凭证自动生成与基础资料实时同步。',
    },
    {
      q: '银企直联是否安全？',
      a: '我们使用金融级加密传输（国密证书），直接通过银行官方前置机或专用通道进行通讯。财务仅在系统中触发“支付”指令，最终打款指令需在网银端由授权人进行 U-Key 确认（可选）。',
    },
    {
      q: '如何处理员工旧有的垫款历史数据？',
      a: '我们提供标准数据导入模板，可一键挂载历史欠款，确保系统启用后的账务衔接。系统上线初期可设置“双轨运行期”以供平滑过渡。',
    },
    {
      q: '系统的收费模式是怎样的？',
      a: '费控管理通常包含“平台授权费用 + 插件订阅费用（如票据云）+ 实施交付服务费”。我们提供阶梯式的授权模式，满足不同规模组织的需求。',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">关于交付的常见疑问</h2>
          <p className="text-gray-600">解决您在系统导入阶段最关切的问题</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100">
              <button
                className="w-full flex items-center justify-between py-6 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-600 leading-relaxed text-sm">
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
