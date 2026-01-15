'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  UserPlus, 
  UserCheck, 
  Users, 
  Wallet, 
  Target, 
  GraduationCap, 
  Share2,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: "寻访招募",
    desc: "全渠道智能招聘，简历自动归集与AI筛选",
    color: "bg-blue-500"
  },
  {
    icon: UserCheck,
    title: "资源配置/入职",
    desc: "电子合同签约，数智化入职办理体验",
    color: "bg-indigo-500"
  },
  {
    icon: Users,
    title: "雇佣与组织",
    desc: "全生命周期员工管理与敏捷组织架构",
    color: "bg-violet-500"
  },
  {
    icon: Wallet,
    title: "全面薪酬",
    desc: "全球化合规发薪，薪资成本精准核算",
    color: "bg-purple-500"
  },
  {
    icon: Target,
    title: "目标与绩效",
    desc: "OKR/KPI驱动，即时考核与激励回馈",
    color: "bg-fuchsia-500"
  },
  {
    icon: GraduationCap,
    title: "人才发展/继任",
    desc: "人才盘点与标签，支撑关键人才梯队建设",
    color: "bg-pink-500"
  },
  {
    icon: Share2,
    title: "人力共享服务",
    desc: "事务性工作标准化交付，服务效能提升",
    color: "bg-[#E60012]"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4 text-white">HRM 全生命周期管理闭环</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            从人才进入企业到职业发展的每一步，用友BIP HRM 均提供深度赋能与智能化支撑。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform relative z-10`}>
                  <step.icon size={28} />
                  {idx < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-700 hidden lg:block">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
                <h4 className="font-bold mb-2 text-lg">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture Hint */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-800/50 border border-slate-700 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#E60012]">数智平台筑基</span> 全级次共享运营
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              基于用友BIP数智化底座，支持多中心运营、多元化作业模式。内置智能审核规则引擎与数智员工，实现端到端的业务流程全生命周期管理，确保全球化合规与本地化敏捷平衡。
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm font-medium border border-slate-600">业人财一体化</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm font-medium border border-slate-600">智能规则引擎</span>
              <span className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm font-medium border border-slate-600">多云适配能力</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-96 aspect-video bg-slate-700/50 rounded-2xl border border-slate-600 flex flex-col justify-center p-6 gap-4">
             {['HR核心服务', '数智能力中心', '业务中台底座'].map((layer, i) => (
               <div key={i} className="bg-slate-800 border-l-4 border-[#E60012] p-3 text-sm font-bold shadow-md">
                 {layer}
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}
