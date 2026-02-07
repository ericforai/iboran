'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Search, PenTool, LayoutDashboard, Share2 } from 'lucide-react'

export const DeliveryMethodology = () => {
  const steps = [
    {
      title: '人力管理诊断',
      desc: '深入访谈，梳理现有组织架构、岗位体系、薪酬规则及算薪流程，识别数据孤岛。',
      icon: Search,
      output: '《人力资源管理评估报告》',
    },
    {
      title: '数智方案设计',
      desc: '设计标准化职级体系、薪资宽带、绩效考核矩阵、社保公积金方案及 OA 集成路径。',
      icon: PenTool,
      output: '《系统蓝图与配置标准》',
    },
    {
      title: '系统集成上线',
      desc: '配置云平台模块，完成历史人事/财务数据清洗与迁移，实现 OA 流程与 HR 系统无缝对接。',
      icon: LayoutDashboard,
      output: '《系统集成与数据迁移报告》',
    },
    {
      title: '运维评估优化',
      desc: '首个薪资周期带单指导，系统全员培训，建立持续运营保障体系，实现交付闭环。',
      icon: Share2,
      output: '《正式上线运维手册》',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">标准化交付方法论</h2>
          <p className="text-gray-600">
            我们不仅仅交付一个云平台，更是一套可落地的人力资源管理体系。通过四阶段标准化实施，以保障核心模块 [2-4] 周快速上线。
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
