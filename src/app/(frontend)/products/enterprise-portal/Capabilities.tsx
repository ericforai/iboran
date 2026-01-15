'use client'

import { motion } from 'framer-motion'
import { Check, Edit3, Grid, Layers, ShieldCheck, Smartphone, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: '多级分级管理',
    desc: '支持集团、分子公司、部门、个人等多维门户定义，实现分级授权与独立运营。',
    icon: Layers,
    bg: 'bg-blue-100',
    text: 'text-blue-600'
  },
  {
    title: '可视化拖拽设计',
    desc: '所见即所得的门户设计器，丰富的磁贴组件库，零代码快速搭建个性化首页。',
    icon: Edit3,
    bg: 'bg-indigo-100',
    text: 'text-indigo-600'
  },
  {
    title: '统一待办中心',
    desc: '聚合OA、ERP、HR等全系统待办任务，提供统一展示与处理入口，效率倍增。',
    icon: Check,
    bg: 'bg-green-100',
    text: 'text-green-600'
  },
  {
    title: '千人千面体验',
    desc: '基于角色、岗位、职级智能推送专属应用与数据，打造个性化数字工作台。',
    icon: Users,
    bg: 'bg-purple-100',
    text: 'text-purple-600'
  },
  {
    title: '全平台单点登录',
    desc: '集成 CAS / OAuth2 / SAML 等主流协议，实现一次登录，全网系统无缝漫游。',
    icon: ShieldCheck,
    bg: 'bg-orange-100',
    text: 'text-orange-600'
  },
  {
    title: '移动端全同步',
    desc: 'PC端配置一键同步至移动端（友空间），支持原生组件与H5应用混合排版。',
    icon: Smartphone,
    bg: 'bg-rose-100',
    text: 'text-rose-600'
  }
]

export function Capabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            构建全场景数智化工作入口
          </h2>
          <p className="text-lg text-slate-600">
            不仅是简单的链接跳转，更是业务流、数据流、审批流的深度融合与统一展现。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.text}`} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <span>了解更多</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Feature: Unified Task Center Visual */}
        <div className="mt-20 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 relative z-10">
                <div className="text-white space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                        核心亮点
                    </div>
                    <h3 className="text-3xl font-bold">智能化统一待办中心</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        打破系统壁垒，将 ERP、OA、CRM 等系统的审批任务统一归集。支持按紧急程度智能排序，提供PC与移动端一致的审批体验，让管理者随时随地高效决策。
                    </p>
                    <ul className="space-y-3">
                        {['异构系统待办集成', '审批流转全链路监控', '批量审批与快捷处理', '智能消息提醒'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Visual Mockup for Unified Tasks */}
                <div className="relative">
                     <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
                            <span className="text-slate-200 font-semibold">待办任务列表</span>
                            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">12</span>
                        </div>
                        <div className="space-y-3">
                           {[1, 2, 3].map((_, i) => (
                               <div key={i} className="bg-slate-700/50 p-3 rounded border border-slate-600 flex items-center gap-3">
                                   <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${i === 0 ? 'bg-orange-900 text-orange-200' : 'bg-blue-900 text-blue-200'}`}>
                                       {i === 0 ? 'ERP' : 'OA'}
                                   </div>
                                   <div className="flex-1 min-w-0">
                                       <div className="h-4 bg-slate-600 rounded w-3/4 mb-2"></div>
                                       <div className="h-2 bg-slate-600/50 rounded w-1/2"></div>
                                   </div>
                                   <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded hover:bg-blue-500">
                                       审批
                                   </button>
                               </div>
                           ))}
                        </div>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}
