'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: '企业门户系统支持哪些部署方式？',
    a: '我们支持灵活的部署模式，包括公有云（SaaS）、专属云（Hybrid）以及私有化本地部署（On-premise），可根据企业的数据安全合规要求灵活选择。'
  },
  {
    q: '能否集成市面上常见的 OA 系统（如泛微、蓝凌）？',
    a: '可以。平台内置了主流 OA 系统的标准适配器，支持通过 standardized API 快速集成待办任务、消息通知与通讯录同步。对于非标准系统，我们也提供低代码集成平台进行快速对接。'
  },
  {
    q: '门户的个性化配置需要写代码吗？',
    a: '不需要。我们提供可视化的拖拽式设计器，管理员可以通过简单的拖放操作来配置布局、添加磁贴和设置主题。同时，普通员工也可以在权限范围内自定义个人工作台的布局。'
  },
  {
    q: '如果现有的磁贴组件不够用怎么办？',
    a: '平台提供开放的开发框架（SDK），企业 IT 部门或第三方伙伴可以基于标准规范开发自定义磁贴，并上传至磁贴库中统一管理与分发。'
  },
  {
    q: '系统的安全性如何保障？',
    a: '我们遵循 ISO27001 信息安全管理体系，采用全链路 HTTPS 加密传输，支持国密算法。提供多级分权管理、访问日志审计以及敏感数据脱敏展示等全方位的安全防护机制。'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            常见问题解答
          </h2>
          <p className="text-lg text-slate-600">
            关于企业门户建设的实施、技术与服务的相关解答。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg pr-8">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-slate-50/50">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
