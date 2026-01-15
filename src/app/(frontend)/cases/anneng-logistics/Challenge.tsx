'use client'

import { AlertTriangle, Clock, Layers, FileX } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-slate-900">核心业务挑战</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">业财分离与多系统孤岛制约了精细化管理能力的提升</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Visual */}
             <motion.div 
               initial={{ opacity: 0, x: -50, rotate: -2 }}
               whileInView={{ opacity: 1, x: 0, rotate: 2 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               whileHover={{ rotate: 0 }}
               className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500"
             >
                <Image 
                  src="/images/case-study/anneng-dashboard-mockup.png" 
                  alt="Legacy system dashboard comparison" 
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Badge */}
                 <div className="absolute top-6 left-6 bg-red-500/90 backdrop-blur text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    转型前 (Legacy)
                 </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                   <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-50 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">业财融合深度不足</h3>
                        <p className="text-slate-600">作为典型的&quot;利润中心&quot;导向型企业，现有财务体系滞后，无法实时反映各业务单元（快递、零担、整车等）的盈利情况，导致管理层难以进行精准的资源动态配置。</p>
                      </div>
                   </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                   <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">多系统孤岛严重</h3>
                        <p className="text-slate-600">快递、仓储和运输等核心业务运行在独立系统中，与财务系统集成度低。数据流转高度依赖人工干预，不仅时效性差，且存在较高的数据准确性风险。</p>
                      </div>
                   </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                   <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FileX className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">合规披露挑战大</h3>
                        <p className="text-slate-600">面对复杂的组织架构和多会计准则（如境内外双重准则）要求，传统手工报表编制方式效率低下，难以实现自动化的合规披露，制约了财务向战略支撑角色转型。</p>
                      </div>
                   </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}
