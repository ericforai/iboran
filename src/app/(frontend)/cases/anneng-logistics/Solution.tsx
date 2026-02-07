'use client'

import { ArrowUpRight, BarChart3, Database, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
        </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-slate-900">解决方案架构</h2>
          <p className="text-xl text-slate-500">基于 NC/BIP 的业财一体化平台</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                    <Database className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">业财深度融合平台</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    打通业务系统（快递、零担、仓储）与财务系统的全链路数据通道，消除人工干预，以保障数据源头的一致性与实时性。
                </p>

                <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-sm">
                    查看架构图 <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>
            </motion.div>

             {/* Card 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.5 }}
               className="group relative bg-white p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 text-orange-600 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">实时利润中心看板</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    构建多维度的利润中心模型，实时反映各业务单元的收入与成本，支持管理层快速洞察经营状况，优化资源配置。
                </p>

                <div className="flex items-center text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-sm">
                    查看模块 <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>
            </motion.div>

             {/* Card 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="group relative bg-white p-8 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
                
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-8 text-green-600 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">智能化合规引擎</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    内置多会计准则转换引擎，自动处理复杂组织架构下的并表与抵销，实现一键生成合规报告，大幅提升财务披露效率。
                </p>

                <div className="flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-sm">
                    查看模块 <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
