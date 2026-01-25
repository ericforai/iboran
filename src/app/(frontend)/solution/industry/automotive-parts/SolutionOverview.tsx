'use client'

import { motion } from 'framer-motion'
import { Share2, Database, Boxes, Network, ShieldCheck } from 'lucide-react'

const layers = [
  {
    title: '协同层 (Collaboration)',
    icon: Network,
    items: ['主机厂(OEM)协同', '供应商门户(SRM)', '移动端移动审批', '第三方物流集成'],
    color: 'blue'
  },
  {
    title: '数智应用层 (Application)',
    icon: Boxes,
    items: ['全生命周期PLM', '精益制造MES', '事项财务会计', '智能司库系统'],
    color: 'red'
  },
  {
    title: '数据资产层 (Data)',
    icon: Database,
    items: ['批次/序列号追溯', '成本模型看板', '品质分析引擎', '经营管控中台'],
    color: 'emerald'
  },
  {
    title: '技术架构层 (Platform)',
    icon: Share2,
    items: ['用友YONBIP平台', 'iPaaS集成总线', '低代码建模', '安全合规体系'],
    color: 'slate'
  }
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            汽配行业 <span className="text-[#0052D9]">数智化方案</span> 全景图
          </h2>
          <p className="text-lg text-slate-600">
            基于“平台化+场景化”的设计理念，打通研、供、产、销、服全产业链条。
          </p>
        </div>

        <div className="relative">
          {/* 连接线装饰 (仅在大屏幕显示) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20 -translate-x-1/2" />

          <div className="space-y-12">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* 中心圆点 */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-100 transition-colors`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center 
                        ${layer.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                          layer.color === 'red' ? 'bg-red-100 text-[#E60012]' :
                          layer.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                          'bg-slate-100 text-slate-600'}`}
                      >
                        <layer.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{layer.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {layer.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${layer.color === 'blue' ? 'bg-blue-400' : layer.color === 'red' ? 'bg-red-400' : layer.color === 'emerald' ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 translate-y-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">符合 IATF16949 全流程体系</h4>
                <p className="text-slate-400">方案深度嵌入质量体系要求，自动触发追溯与预警机制。</p>
              </div>
           </div>
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl whitespace-nowrap"
           >
             查看技术架构白皮书
           </motion.button>
        </div>
      </div>
    </section>
  )
}
