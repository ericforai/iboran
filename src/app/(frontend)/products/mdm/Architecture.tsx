'use client'

import { motion } from 'framer-motion'
import { Database, ArrowRight, Server, Share2, Workflow } from 'lucide-react'

export function Architecture() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            全域数据治理架构
          </h2>
          <p className="text-lg text-slate-600">
            打通 OA、CRM、SRM、MES 等异构系统，建立从数据源头到消费应用的闭环治理体系，实现企业数据的互联互通。
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Lines Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            
            {/* Left: Source Systems */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center h-full"
            >
              <div className="p-3 bg-slate-100 rounded-full mb-4">
                <Server className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">多源业务系统</h3>
              <div className="grid grid-cols-2 gap-3 w-full">
                 {['ERP 系统', 'CRM 客户', 'SRM 采购', 'MES 制造', 'HR 人力', 'OA 协同'].map((sys) => (
                    <div key={sys} className="p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-600 border border-slate-200">
                        {sys}
                    </div>
                 ))}
              </div>
              <div className="mt-auto pt-6 text-sm text-slate-500">
                数据分散 · 标准不一 · 孤岛林立
              </div>
            </motion.div>

            {/* Center: MDM Core */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-blue-600 to-indigo-700 p-1 rounded-2xl shadow-2xl transform lg:-translate-y-4"
            >
               <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 rounded-full mb-4">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">YonBIP 主数据管理平台</h3>
                  <p className="text-sm text-blue-600 font-medium mb-6">核心治理能力</p>
                  
                  <div className="space-y-3 w-full">
                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="font-bold text-slate-800 mb-1">标准定义</div>
                        <div className="text-xs text-slate-600">统一编码规则 · 属性模型 · 校验逻辑</div>
                     </div>
                     <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <div className="font-bold text-slate-800 mb-1">智能清洗</div>
                        <div className="text-xs text-slate-600">AI 查重 · 模糊匹配 · 数据合并 · 相似度分析</div>
                     </div>
                     <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="font-bold text-slate-800 mb-1">全生命周期</div>
                        <div className="text-xs text-slate-600">申请 · 审批 · 变更 · 冻结 · 归档 · 版本管理</div>
                     </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-blue-700 font-bold bg-blue-50 px-4 py-2 rounded-full text-sm">
                     <Workflow className="w-4 h-4" />
                     <span>数据血缘全链路追踪</span>
                  </div>
               </div>
            </motion.div>

            {/* Right: Consumption */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center h-full"
            >
              <div className="p-3 bg-green-50 rounded-full mb-4">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">数据消费与赋能</h3>
              <div className="space-y-4 w-full text-left">
                 <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <span className="text-green-700 text-xs font-bold">1</span>
                    </div>
                    <div>
                        <div className="font-medium text-slate-900">分发与同步</div>
                        <div className="text-xs text-slate-500">Golden Data 实时回写业务系统</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <span className="text-green-700 text-xs font-bold">2</span>
                    </div>
                    <div>
                        <div className="font-medium text-slate-900">经营分析 BI</div>
                        <div className="text-xs text-slate-500">统一维度，报表准确无误</div>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <span className="text-green-700 text-xs font-bold">3</span>
                    </div>
                    <div>
                        <div className="font-medium text-slate-900">AI 智能决策</div>
                        <div className="text-xs text-slate-500">高质量数据喂养大模型</div>
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>

          {/* Arrows for mobile/responsive - Simplified interpretation */}
          <div className="flex justify-center mt-8 lg:hidden">
             <ArrowRight className="text-slate-300 w-8 h-8 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  )
}
