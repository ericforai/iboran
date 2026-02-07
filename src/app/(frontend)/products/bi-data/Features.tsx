
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Calculator, Database, Smartphone, CheckCircle2 } from 'lucide-react'

const features = [
  {
    id: 'dashboard',
    label: '智能可视化仪表盘',
    icon: LayoutDashboard,
    title: '所见即所得的极速构建体验',
    description: '提供企业级画布能力，内置标尺、参考线及智能吸附功能，让大屏制作如PPT般简单。预置10+行业模板与海量酷炫图表组件，分钟级构建专业级数据大屏。',
    points: [
      '内置丰富视觉资源：3D地球、视频流、极坐标图等',
      '支持模板复用与组件共享，提升团队协作效率',
      '强大的新版JS编辑器，支持复杂交互逻辑开发',
      '智能识别数据模型，自动推荐优质可视化图表'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'finance',
    label: '财务深度分析引擎',
    icon: Calculator,
    title: '专为财务与经营分析打造',
    description: '内置GLAMT、GLOPENBAL等12种专业财务业务函数，轻松应对复杂的财务报表需求。支持层级坐标公式与累计计算，有效解决同比、环比及跨期分析难题。',
    points: [
      '内置12种常用财务业务函数，无需编写复杂代码',
      '支持TopN排名、累计计算、层级坐标等高级分析',
      '单元格级条件属性控制，实现红绿灯预警展示',
      '精确还原财务口径，支持辅助核算项目多维透视'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'modeling',
    label: '自助式数据探索',
    icon: Database,
    title: '业务人员也能轻松玩转数据',
    description: '强大的多维透视分析能力，支持拖拽式探索数据。业务人员可自定义计算字段、添加分组，无需依赖IT即可快速响应临时的分析需求。',
    points: [
      '支持行列树形展开，多维数据穿透分析',
      '业务人员可自助添加计算字段，灵活定义指标',
      '支持明细数据反查，快速定位数据异常根因',
      '智能关联数据模型，自动构建分析路径'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
  },
  {
    id: 'mobile',
    label: '移动与嵌入式分析',
    icon: Smartphone,
    title: '随时随地，数据触手可及',
    description: '充分适配移动端浏览体验，支持与企业微信、钉钉及YonBuilder应用无缝集成。分析卡片可直接嵌入业务流程，让数据在业务场景中发挥实时价值。',
    points: [
      '移动端自适应布局，一次设计多端发布',
      '支持分析卡片嵌入移动门户与业务单据',
      '集成YonBuilder低代码平台，快速构建数据应用',
      '灵活的数据权限控制，保障移动端数据安全'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop'
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(features[0].id)
  const activeFeature = features.find(f => f.id === activeTab)

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            企业级全场景智能分析能力
          </h2>
          <p className="text-lg text-slate-600">
            从数据准备到可视化展现，提供一站式、智能化的数据分析服务
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeTab === feature.id
                    ? 'bg-white border-blue-600 shadow-lg scale-105 z-10'
                    : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    activeTab === feature.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-1 ${
                      activeTab === feature.id ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {feature.label}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 h-full flex flex-col"
              >
                 {activeFeature && (
                   <div className="grid md:grid-cols-2 h-full">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 self-start">
                          <activeFeature.icon size={14} />
                          {activeFeature.label}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{activeFeature.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-8">{activeFeature.description}</p>
                        <ul className="space-y-4">
                          {activeFeature.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-[#E60012] shrink-0 mt-0.5" />
                              <span className="text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative h-64 md:h-auto bg-slate-100">
                        {/* 
                          In a real scenario, this would be a specific Coded Mockup component for each feature.
                          For now, using placeholders or the generic mockup with tweaks, or keeping the image logic.
                          We'll use an image placeholder with overlay for style.
                        */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={activeFeature.image} 
                          alt={activeFeature.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                      </div>
                   </div>
                 )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
