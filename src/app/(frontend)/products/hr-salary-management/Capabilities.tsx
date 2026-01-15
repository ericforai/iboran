'use client'

import React from 'react'
import { 
  Users, 
  Wallet, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Briefcase,
  Target,
  Clock,
  Layers
} from 'lucide-react'

export const Capabilities = () => {
  const capabilities = [
    {
      title: '全生命周期人事',
      desc: '覆盖入转调离全过程数字化管理。支持自定义花名册、合同到期预警与组织架构动态调整。',
      icon: Users,
    },
    {
      title: 'AI 算薪机器人',
      desc: '支持极复杂薪资公式配置。自动获取考勤、绩效、社保数据，算薪时间从数日缩短至数分钟。',
      icon: Zap,
    },
    {
      title: '全国社保合规',
      desc: '覆盖全国 438+ 城市最新政策。支持多主体、多基数方案，社保账单自动生成与比对。',
      icon: ShieldCheck,
    },
    {
      title: '微信小程序工资单',
      desc: '员工无需安装额外 APP，可在微信端一键查收电子工资条，支持移动端确认与申诉。',
      icon: Smartphone,
    },
    {
      title: '智能招聘管理',
      desc: '从用人申请到 Offer 发送全链路线上化。支持 AI 简历解析与移动端面试评价。',
      icon: Briefcase,
    },
    {
      title: '闭环绩效考核',
      desc: '支持 KPI、OKR、360 度等多种考核模式。考核结果可一键联动调薪与奖金计算。',
      icon: Target,
    },
    {
      title: '柔性考勤管理',
      desc: '支持移动 GPS、WiFi 定位打卡。复杂排班、假期额度管理自动关联算薪数据。',
      icon: Clock,
    },
    {
      title: '协同 OA 深度协同',
      desc: '业界最深度的 OA 集成能力。组织架构自动双向同步，算薪结果回传协同工作流',
      icon: Layers,
    },
    {
      title: '成本分摊看板',
      desc: '支持按项目、按部门、按中心进行人力成本分摊。多维报表赋能管理层决策。',
      icon: Wallet,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">核心交付能力预览</h2>
          <p className="text-gray-600">不只是“管理软件”，我们为您构建的是从员工入职到薪税落地的“高效数字化工厂”</p>
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
