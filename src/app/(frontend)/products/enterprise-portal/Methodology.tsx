'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Flag, Layout, Rocket, Settings, Users } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: '场景梳理与规划',
    duration: 'Week 1',
    desc: '调研企业各部门/角色痛点，定义关键业务场景（如领导桌面、全员门户、财务专区），确立门户建设目标。'
  },
  {
    icon: Settings,
    title: '集成对接与认证',
    duration: 'Week 2-3',
    desc: '配置统一身份认证 (SSO/OAuth2)，打通 ERP、OA 等关键系统的消息与待办接口，实现数据互联。'
  },
  {
    icon: Layout,
    title: '可视化配置实施',
    duration: 'Week 4',
    desc: '基于预置行业模板，使用拖拽式设计器配置各级门户首页布局、磁贴内容及 UI 主题风格。'
  },
  {
    icon: Users,
    title: '权限分配与测试',
    duration: 'Week 5',
    desc: '配置组织架构与分级授权策略，设定“千人千面”规则。进行全流程用户体验测试 (UAT)。'
  },
  {
    icon: Rocket,
    title: '培训上线与推广',
    duration: 'Week 6',
    desc: '组织关键用户培训，制定上线推广计划，灰度发布并收集反馈进行持续优化。'
  }
]

export function Methodology() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            标准化的实施交付路径
          </h2>
          <p className="text-lg text-slate-600">
            经过数百家大型企业验证的成熟交付方法论，确保项目快速落地、价值即刻显现。
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-500 text-blue-600 font-bold w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-sm">
                   {index + 1}
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  
                  <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {step.duration}
                  </span>

                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
