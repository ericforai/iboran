'use client'

import { motion } from 'framer-motion'
import { Database, Layout, Smartphone, Monitor, Workflow, Key, Shield } from 'lucide-react'

export function Architecture() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            新一代企业门户总体架构
          </h2>
          <p className="text-lg text-slate-600">
            基于协同云底座，通过能力的聚合与统一分发，连接后台业务系统与前台终端触点，构建企业级的数智化工作台。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Lines Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Center Line Vertical */}
             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col gap-12">
            
            {/* Layer 1: Access Terminals (Output) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Monitor, label: 'PC 门户' },
                { icon: Smartphone, label: '移动门户 (友空间)' },
                { icon: Layout, label: '桌面端' },
                { icon: Monitor, label: '数据大屏' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-2 text-center h-24 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* UP Arrow */}
             <div className="flex justify-center -my-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center animate-bounce">
                    <svg className="w-4 h-4 text-blue-600 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </div>

            {/* Layer 2: Core Portal Services (Process) */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden relative">
               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3">
                   <h3 className="text-white font-semibold text-center">协同云 · 门户服务能力层</h3>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column: Management */}
                  <div className="space-y-4">
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                            <Key className="w-4 h-4 text-orange-500" /> 统一认证中心
                        </h4>
                        <div className="text-xs text-slate-500 space-y-1">
                            <p>OAuth2 / CAS / SAML</p>
                            <p>用户/角色/权限同步</p>
                        </div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" /> 安全管控中心
                        </h4>
                        <div className="text-xs text-slate-500 space-y-1">
                            <p>分级授权管理</p>
                            <p>访问日志审计</p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Middle Column: Core Engine */}
                  <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-4 flex flex-col justify-center gap-3">
                       <div className="bg-white p-3 rounded shadow-sm text-center font-semibold text-blue-900">门户设计引擎 (DIY)</div>
                       <div className="bg-white p-3 rounded shadow-sm text-center font-semibold text-blue-900">统一消息中心</div>
                       <div className="bg-white p-3 rounded shadow-sm text-center font-semibold text-blue-900">统一待办中心</div>
                       <div className="bg-white p-3 rounded shadow-sm text-center font-semibold text-blue-900">内容/资讯管理</div>
                  </div>

                  {/* Right Column: Assets */}
                  <div className="space-y-4">
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                            <Layout className="w-4 h-4 text-purple-500" /> 磁贴组件库
                        </h4>
                        <div className="text-xs text-slate-500 space-y-1">
                            <p>应用磁贴 / 报表磁贴</p>
                            <p>快捷入口 / 轮播图</p>
                        </div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                            <Workflow className="w-4 h-4 text-rose-500" /> 集成中心
                        </h4>
                        <div className="text-xs text-slate-500 space-y-1">
                            <p>Restful API / 消息总线</p>
                            <p>异构系统适配器</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* UP Arrow */}
            <div className="flex justify-center -my-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center animate-bounce">
                    <svg className="w-4 h-4 text-blue-600 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </div>

            {/* Layer 3: Backend Systems (Input) */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {[
                 { label: 'ERP系统', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
                 { label: 'OA系统', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
                 { label: 'HR系统', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
                 { label: 'CRM系统', bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
                 { label: '三方异构', bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200' },
               ].map((sys, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${sys.bg} ${sys.border} border p-4 rounded-lg text-center flex flex-col items-center justify-center gap-2`}
                  >
                    <Database className={`w-6 h-6 ${sys.text}`} />
                    <span className={`text-sm font-bold ${sys.text}`}>{sys.label}</span>
                  </motion.div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
