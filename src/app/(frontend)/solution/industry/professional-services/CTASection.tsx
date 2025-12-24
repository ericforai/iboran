'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              开启专业服务机构
              <span className="text-[#E60012]">数智化</span>之旅
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              立即预约行业专家，获取专属解决方案与报价
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="group px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-900/30 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                预约行业专家咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:400-xxx-xxxx"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                400 热线咨询
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>7×24 小时在线咨询</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>专业顾问 1对1 服务</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-professional-services-cta"
      />
    </>
  )
}
