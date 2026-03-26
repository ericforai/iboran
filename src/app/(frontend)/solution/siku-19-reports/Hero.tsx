'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import SikuDashboardMockup from './SikuDashboardMockup'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [modalType, setModalType] = useState<'demo' | 'whitepaper'>('demo')

  const openDemo = () => {
    setModalType('demo')
    setIsDemoOpen(true)
  }

  const openWhitepaper = () => {
    setModalType('whitepaper')
    setIsDemoOpen(true)
  }

  return (
    <>
      <section className="bg-white pt-28 pb-24 overflow-hidden relative border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.05),transparent)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-50/30 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide mb-6 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse border border-blue-400" />
                司库19张报表建设方案
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 break-keep italic">
                司库19张报表
                <br />
                <span className="text-blue-600 not-italic">分步建设路径</span>
              </div>
              <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
                为集团企业应对司库19张监管报表提供稳妥、可控的建设方案。通过总账获取基础数据，台账补齐业务口径，实现从查数报送到全生命周期管理的平滑过渡。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openDemo}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-red-500/20"
                >
                  预约专家演示
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={openWhitepaper}
                  className="px-8 py-4 border-2 border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 bg-white shadow-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  获取实施建设白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 w-full min-w-0"
            >
              <SikuDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        title={modalType === 'whitepaper' ? '获取实施建设白皮书' : '预约专家演示'}
        subtitle={modalType === 'whitepaper' ? '请填写以下信息，我们将发送白皮书至您的邮箱' : '我们的顾问将在 1 个工作日内与您联系'}
        submitLabel={modalType === 'whitepaper' ? '立即获取' : '提交预约'}
        source={modalType === 'whitepaper' ? 'whitepaper-download' : 'demo-request'}
      />
    </>
  )
}
