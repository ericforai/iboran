'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScanLine, FileCheck, Calculator, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  metrics: string[]
}

const FEATURES: Feature[] = [
  {
    id: 'ocr',
    title: '智能影像与票据',
    description: '基于 AI OCR 技术，支持全票种自动识别、验真查重。实现发票结构化数据的自动提取，彻底告别手工录入，从源头确保数据准确。',
    icon: ScanLine,
    metrics: ['识别准确率 99%+', '发票验真 100%']
  },
  {
    id: 'audit',
    title: '智能稽核引擎',
    description: '内置丰富的稽核规则库，覆盖合规性、真实性、完整性等多个维度。系统自动进行全量单据稽核，异常单据自动预警，将风险控制在事前与事中。',
    icon: FileCheck,
    metrics: ['自动化率 80%', '稽核效率提升 5x']
  },
  {
    id: 'accounting',
    title: '自动化核算',
    description: '基于事项法会计理论，业财数据实时转换。系统自动根据业务单据生成财务凭证，实现确认、计量、记录、报告的全流程自动化。',
    icon: Calculator,
    metrics: ['自动记账率 95%', '月结缩短 3天']
  },
  {
    id: 'global',
    title: '全球化共享运营',
    description: '支持多语言、多币种、多准则、多时区。构建全球统一的共享服务作业平台，实现任务统一调度、工单流转与绩效评价。',
    icon: Globe,
    metrics: ['覆盖国家 100+', '多语言支持']
  }
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Content & Tabs */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              全场景智能化的共享服务
            </h2>
            <div className="w-16 h-1 bg-[#E60012] rounded-full mb-8" />
            
            <div className="space-y-6">
              {FEATURES.map((feature, idx) => (
                <div 
                  key={feature.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                    activeFeature === idx 
                      ? 'bg-blue-50 border-blue-200 shadow-md' 
                      : 'bg-white border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeFeature === idx ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${activeFeature === idx ? 'text-[#0052D9]' : 'text-[#1F2329]'}`}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      {activeFeature === idx && (
                        <div className="flex gap-4">
                          {feature.metrics.map((metric, i) => (
                            <span key={i} className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Visual */}
          <div className="lg:w-1/2 relative flex items-center">
            <div className="relative w-full aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeFeature}
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95, y: -20 }}
                   transition={{ duration: 0.4 }}
                   className="relative z-10 w-full max-w-sm"
                 >
                   {/* Visual Representation based on active feature */}
                   <FeatureVisual feature={FEATURES[activeFeature]} />
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FeatureVisual({ feature }: { feature: Feature }) {
  // Simple visual simulation based on feature type
  const Icon = feature.icon
  
  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          <Icon size={24} />
        </div>
        <div className="font-bold text-slate-800">{feature.title} 演示</div>
      </div>
      
      <div className="space-y-4">
        <div className="h-2 bg-slate-100 rounded w-3/4"></div>
        <div className="h-2 bg-slate-100 rounded w-full"></div>
        <div className="h-2 bg-slate-100 rounded w-5/6"></div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-50 p-3 rounded border border-slate-100 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {feature.metrics[0]?.split(' ')[1] || '99%'}
            </div>
            <div className="text-xs text-slate-500">
               {feature.metrics[0]?.split(' ')[0] || 'Metric'}
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded border border-slate-100 text-center">
             <div className="text-2xl font-bold text-green-600 mb-1">
              {feature.metrics[1]?.split(' ')[1] || 'High'}
            </div>
            <div className="text-xs text-slate-500">
               {feature.metrics[1]?.split(' ')[0] || 'Performance'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
