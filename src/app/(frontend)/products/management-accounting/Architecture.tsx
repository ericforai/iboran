'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Database, Zap, Layers, BarChart4, Cloud, ShieldCheck } from 'lucide-react'

export default function Architecture() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            业财双驱动：事项会计中台架构
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            打破传统总账单一视角，通过事项分录实时捕获业务动因，支撑财管两套体系并行。
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Architecture Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left: Input Sources */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-8">业务源系统 (Input)</h3>
              {[
                { label: '营销云 (CRM/OMS)', icon: <Cloud className="w-5 h-5" /> },
                { label: '制造云 (MES/ERP)', icon: <Database className="w-5 h-5" /> },
                { label: '采购云 (SRM)', icon: <Layers className="w-5 h-5" /> },
                { label: '资产/人力云', icon: <Zap className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4"
                >
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{item.icon}</div>
                  <span className="font-semibold text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Middle: Core Engine (Processing) */}
            <div className="relative">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[40px] shadow-2xl text-white text-center relative z-10"
               >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-6">
                     <Zap className="w-8 h-8 text-white fill-current" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">事项会计中台</h4>
                  <p className="text-blue-100 text-sm mb-6">实时、精细、智能的业财数据底座</p>
                  <div className="space-y-2">
                     <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-xs font-medium">事项中心 (Event Center)</div>
                     <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-xs font-medium">规则引擎 (Rule Engine)</div>
                     <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-xs font-medium">转换中心 (Transformation)</div>
                  </div>
               </motion.div>

               {/* Connecting Lines (Simulated with CSS) */}
               <div className="hidden lg:block absolute top-1/2 -left-12 w-12 h-[2px] bg-gradient-to-r from-slate-200 to-blue-600" />
               <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-[2px] bg-gradient-to-r from-blue-600 to-slate-200" />
            </div>

            {/* Right: Output (Reports/Management) */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-8">核算与应用 (Output)</h3>
              {[
                { label: '财务会计 (合规外报)', icon: <ShieldCheck className="w-5 h-5" /> },
                { label: '管理核算 (内部决策)', icon: <BarChart4 className="w-5 h-5" /> },
                { label: '智能分析 (盈利洞察)', icon: <Layers className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4 border-l-4 border-l-blue-500"
                >
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{item.icon}</div>
                  <span className="font-bold text-slate-800">{item.label}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Value Tags */}
          <div className="mt-20 flex flex-wrap justify-center gap-4">
             {['双口径核算', '实时事项驱动', '精细化溯源', '智能化规则', '全球化支撑'].map((tag, i) => (
               <span key={i} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">
                  {tag}
               </span>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}
