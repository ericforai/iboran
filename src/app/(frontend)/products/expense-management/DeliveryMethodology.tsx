'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Search, PenTool, LayoutDashboard, Share2 } from 'lucide-react'

export const DeliveryMethodology = () => {
  const steps = [
    {
      title: '业财流程诊断',
      desc: '深入访谈，梳理现有报销流程、票据规格及预算控制策略，识别管控漏洞。',
      icon: Search,
      output: '《财务流程评估报告》',
    },
    {
      title: '费控方案设计',
      desc: '基于诊断结果，设计多维预算架构、审批矩阵、支出标准及凭证自动生成规则。',
      icon: PenTool,
      output: '《系统配置与集成标准》',
    },
    {
      title: '系统敏捷集成',
      desc: '配置个性化门户，对接 1400+ 银行直联，集成主流 ERP（U8/U9/NC/YonBIP）及差旅平台。',
      icon: LayoutDashboard,
      output: '《全链条联调测试报告》',
    },
    {
      title: '交付上线评估',
      desc: '首期全员培训，实单上线指导，通过电子档案归集实现财务流程“最后一公里”闭环。',
      icon: Share2,
      output: '《正式上线环境及运维手册》',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">标准化交付方法论</h2>
          <p className="text-gray-600">
            我们不仅仅交付一个软件，更是一套成熟的业财管理体系。通过四阶段敏捷实施，确保系统 2-4 周平滑上线。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 -z-10 -ml-4"></div>
              )}
              <Card className="border-none shadow-sm h-full hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-blue-600 mr-2">0{index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{step.desc}</p>
                  <div className="pt-4 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 block mb-1 font-medium">交付产出物：</span>
                    <span className="text-blue-600 font-bold">{step.output}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
