'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#001529] rounded-[40px] overflow-hidden p-8 md:p-20 text-center text-white">
          {/* Background Abstract Shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E60012]/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#0052D9]/20 blur-[100px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              开启数智预算新时代，<br />
              让每一分投入都清晰可见
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              立即预约泊冉资深顾问，获取量身定制的全面预算管理解决方案
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-red-900/40 flex items-center justify-center gap-3"
              >
                预约专家演示
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 flex items-center justify-center gap-3">
                <Phone size={20} />
                咨询热线：400-XXX-XXXX
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-slate-500 text-sm">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#001529] bg-slate-700" />
                  ))}
               </div>
               <span>已有 200+ 人今天咨询过</span>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
