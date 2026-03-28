'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, Cog, ShieldCheck, Database, Rocket, Workflow } from 'lucide-react'

export const Architecture = () => {
  return (
    <section className="bg-white py-24 px-4 lg:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
          >
            Office + Workshop: <span className="text-[#0052D9]">双核分离架构</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg text-slate-500"
          >
            彻底解决 AI 落地中的管理瘫痪。管理内核 (Office) 负责调度与审批，执行内核 (Workshop) 提供物理隔离的沙箱算力。
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Main Architecture Diagram */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-stretch relative">
            
            {/* Office - Management Layer */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-12 shadow-sm"
            >
              <div className="absolute -top-6 left-8 bg-[#0052D9] text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                <LayoutDashboard size={16} />
                管理内核 (Office)
              </div>
              <ul className="mt-8 space-y-6">
                {[
                  { icon: ShieldCheck, title: '全链路权限分配', desc: 'SSO 身份认证与多级权限鉴定' },
                  { icon: Workflow, title: '企业级多级审批流', desc: '将 AI 指定任务嵌入 OA 审批链' },
                  { icon: Database, title: '全局记忆调度', desc: '跨模型、跨项目的 L1/L2/L3 知识流转' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#0052D9]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-100/50 rounded-xl border border-blue-200 text-blue-700 text-sm font-medium">
                确保 AI 员工的行为在规则约束之内，实现“控得住”。
              </div>
            </motion.div>

            {/* Central Bridge / API Gateway Animation */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
              <div className="h-32 w-0.5 bg-gradient-to-b from-blue-500 via-red-500 to-green-500" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-4 w-4 rounded-full bg-red-500" 
              />
              <div className="h-32 w-0.5 bg-gradient-to-t from-blue-500 via-red-500 to-green-500" />
            </div>

            {/* Workshop - Execution Layer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-slate-200 bg-slate-900 p-8 lg:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-6 left-8 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                <Cog size={16} />
                执行内核 (Workshop)
              </div>
              
              {/* Animated Background Grids */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <ul className="mt-8 space-y-6 relative z-10">
                {[
                  { icon: ShieldCheck, title: '物理级 Docker 沙箱', desc: '每一次复业务执行均受底层隔离' },
                  { icon: Rocket, title: '长时任务并行处理', desc: '支持长达数周的任务挂起与断点恢复' },
                  { icon: ShieldCheck, title: '红队预审防火墙', desc: '全维度防篡改与越权漏洞扫描' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-slate-800 rounded-lg flex items-center justify-center shadow-sm text-green-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-green-900/50 rounded-xl border border-green-800 text-green-400 text-sm font-medium">
                提供强大的错误恢复与并行能力，确保实战“放得开”。
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
