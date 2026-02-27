'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle } from 'lucide-react'

export const TargetAudience = () => {
  const handleOpenConsultModal = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  const applicable = [
    { title: '大中型多分支机构', desc: '需要统一预算管控与跨地域报销审批的企业' },
    { title: '极速成长期组织', desc: '财务流程滞后于业务扩张，需快速建立合规体系' },
    { title: '数字化转型先行者', desc: '追求业财一体化，希望消除财务信息孤岛的单位' },
  ]

  const notApplicable = [
    { title: '初创小微团队', desc: '报销频次极低、无需复杂预算控制的初创团队' },
    { title: '纯手工账管理', desc: '高度不接受任何电子化流程，且无合规化意愿的组织' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">精准识别您的管理现状</h2>
          <p className="text-gray-600">并非所有组织都需要费控系统，我们更服务于追求严谨与效率的专业团队</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 适用场景 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle2 className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">最适用的组织</h3>
            </div>
            <div className="space-y-6">
              {applicable.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 text-blue-600 font-bold">0{index + 1}.</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 不适用场景 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 opacity-80">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">不适用的情况</h3>
            </div>
            <div className="space-y-6">
              {notApplicable.map((item, index) => (
                <div key={index} className="flex gap-4 grayscale">
                  <div className="mt-1 text-slate-400 font-bold">0{index + 1}.</div>
                  <div>
                    <h4 className="font-bold text-slate-400 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">典型痛点：您的财务是否深陷其中？</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-blue-100 text-sm">
              <li>• 发票验真查重繁琐，税务风险难控</li>
              <li>• 预算执行随口说，超支无法实时预警</li>
              <li>• 员工垫款多、报销慢，满意度低</li>
              <li>• 数据统计靠手工，管理决策无依据</li>
            </ul>
          </div>
          <Button onClick={handleOpenConsultModal} className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md whitespace-nowrap">
            诊断我的财务流程
          </Button>
        </div>
      </div>
    </section>
  )
}
