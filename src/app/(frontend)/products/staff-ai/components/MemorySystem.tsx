'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Users, User, Share2, Layers, ShieldCheck } from 'lucide-react'

export const MemorySystem = () => {
  return (
    <section className="bg-slate-900 py-24 px-4 lg:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,82,217,0.2),transparent)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            L1/L2/L3 <span className="text-blue-400">分层记忆体系</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-400"
          >
            解决知识流失痛点。StaffAI 自动提取业业务拆解逻辑逻辑与 SOP，将个人隐性知识逐步转化为企业数字总部的高价值资产。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* L1 - Global */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl group hover:border-blue-500/50 transition-colors flex flex-col h-full"
          >
            <div className="absolute top-4 right-6 text-blue-400 font-black text-4xl opacity-10 group-hover:opacity-30 transition-opacity">L1</div>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 flex-shrink-0">
               <Globe size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white min-h-[40px]">公共知识层</h3>
            <p className="mb-8 text-slate-400 leading-relaxed text-sm min-h-[80px]">
              全员共享。承载企业级规章制度、核心产品技术手册、全司通用的标准化 SOP 与合规要求。推进组织整体智商单边上扬。
            </p>
            <div className="space-y-3 mt-auto">
               {['标准业务 SOP 库', '企业合规红蓝军', '核心产品白皮书'].map((tag, i) => (
                 <div key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-600 flex items-center">
                    <Share2 size={12} className="shrink-0 mr-2 text-blue-400" />
                    <span>{tag}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* L2 - Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl group hover:border-red-500/50 transition-colors flex flex-col h-full"
          >
            <div className="absolute top-4 right-6 text-red-500 font-black text-4xl opacity-10 group-hover:opacity-30 transition-opacity">L2</div>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/20 text-red-500 flex-shrink-0">
               <Users size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white min-h-[40px]">项目知识层</h3>
            <p className="mb-8 text-slate-400 leading-relaxed text-sm min-h-[80px]">
              权限隔离。沉淀特定项目组的背景资料、团队长期协作的沟通记录、以及特定业务线的专属语料库与交付标准。
            </p>
            <div className="space-y-3 mt-auto">
               {['项目沟通历史流', '专用业务语料库', '交付验收准则'].map((tag, i) => (
                 <div key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-600 flex items-center">
                    <Layers size={12} className="shrink-0 mr-2 text-red-500" />
                    <span>{tag}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* L3 - Private */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl group hover:border-green-500/50 transition-colors flex flex-col h-full"
          >
            <div className="absolute top-4 right-6 text-green-400 font-black text-4xl opacity-10 group-hover:opacity-30 transition-opacity">L3</div>
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-400 flex-shrink-0">
               <User size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white min-h-[40px]">私人经验层</h3>
            <p className="mb-8 text-slate-400 leading-relaxed text-sm min-h-[80px]">
              个人专属。记录员工的个性化使用偏好、长期微调的指令习惯与历史任务复盘。让 AI 越写越懂你，真正辅助人主。
            </p>
            <div className="space-y-3 mt-auto">
               {['个性化指令偏好', '任务复盘存档集', '长期经验调优对位'].map((tag, i) => (
                 <div key={i} className="px-4 py-2 bg-slate-700/50 rounded-lg text-xs font-mono text-slate-300 border border-slate-600 flex items-center">
                    <ShieldCheck size={12} className="shrink-0 mr-2 text-green-400" />
                    <span>{tag}</span>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
        
        {/* Connection visualization */}
        <div className="mt-20 flex justify-center">
           <div className="relative p-1 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-2xl">
              <div className="bg-slate-900 px-8 py-4 rounded-xl text-center">
                 <p className="text-white font-bold">Atlas 知识地图：让隐性知识实时编织成可索引的全景图谱</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
