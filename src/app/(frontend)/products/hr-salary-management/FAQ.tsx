'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      q: '薪事力与 OA 的集成深到什么程度？',
      a: '薪事力与协同 OA (COP) 实现了底座级的集成。组织架构可在两套系统间自动同步；入转调离等 HR 流程可在 OA 中发起，审批完成后自动更新 HR 档案；算薪结果与工资单可直接推送至员工 OA 工作台。',
    },
    {
      q: '异地用工的社保公积金基数如何同步？',
      a: '平台预置了覆盖全国 438+ 城市的社保公积金政策库。HR 只需选择对应城市与方案，系统会自动拉取最新的基数标准进行计算，极大降低了异地合规管理成本。',
    },
    {
      q: '系统如何保障薪资数据的安全性？',
      a: '我们提供等保三级安全防护。薪资计算采用端到端加密，即便系统管理员也无法越权查看敏感数值。所有数据操作均有详细审计留痕，支持国密算法加密存储。',
    },
    {
      q: '是否支持移动端考勤与打卡？',
      a: '支持。员工可通过微信小程序、多端 M3、钉钉或企业微信进行 GPS/WiFi 定位打卡。考勤数据实时同步至后端，自动计算出迟到、早退、请假等数据参与算薪。',
    },
    {
      q: '对于集团化公司，如何进行多主体管理？',
      a: '薪事力支持复杂的多级集团架构场景。各分子公司可独立设置薪酬方案与社保主体，集团总部可实时汇总全集团人力成本数据，实现统分结合的管理策略。',
    },
    {
      q: '系统的实施周期通常是多久？',
      a: '标准模块（人事、薪酬、社保、电子工资单）的实施周期通常在 [2-4] 周。如果涉及深度个性化集成或大规模历史数据清洗，周期会相应增加。',
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
