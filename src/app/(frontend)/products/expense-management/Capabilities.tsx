'use client'

import React from 'react'
import { 
  BarChart3, 
  Receipt, 
  Wallet, 
  Globe, 
  Database, 
  ScanLine,
  ShieldCheck,
  Smartphone,
  Zap
} from 'lucide-react'

export const Capabilities = () => {
  const capabilities = [
    {
      title: '多维预算管理',
      desc: '支持组织、项目、科目等多重维度。控制策略（实时/预警/硬控）自定义。',
      icon: BarChart3,
    },
    {
      title: '全自动票据识别',
      desc: 'OCR 自动识别、查重、验真。支持电子发票、行程单、定额发票全量采集。',
      icon: ScanLine,
    },
    {
      title: '业财一体化门户',
      desc: '专为财务、部门主管、普通员工打造专属工作台，一键触达核心业务。',
      icon: Database,
    },
    {
      title: '商旅预订集成',
      desc: '携程/同程直接集成。免垫资、免开票、统一结算，极大提升出差体验。',
      icon: Globe,
    },
    {
      title: '银企直联支付',
      desc: '对接 1400+ 银行。报销审批完成即支付，银企电子回单自动归集。',
      icon: Wallet,
    },
    {
      title: '凭证自动转化',
      desc: '无需人工干预，报销单据根据预设科目自动生成 ERP 财务凭证。',
      icon: Zap,
    },
    {
      title: '电子会计档案',
      desc: '符合国家规范的电子档案存储。支持全流程审计、联查、调档。',
      icon: ShieldCheck,
    },
    {
      title: '移动端全案办理',
      desc: '小程序/微协同全覆盖。随时随地提交申请、移动审批、扫码拍照。',
      icon: Smartphone,
    },
    {
      title: '实时利润看板',
      desc: '自动生成预算执行对比数据。为部门及企业利润决策提供实时依据。',
      icon: Receipt,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">核心交付能力预览</h2>
          <p className="text-gray-600">不只是“记账”，我们为您构建的是从前端申请到后端凭证的“全自动化工厂”</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-white rounded-xl inline-block shadow-sm group-hover:bg-blue-500">
                <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-blue-100 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
