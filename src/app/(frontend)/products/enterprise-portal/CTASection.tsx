'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-blue-900 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-900/20 transform skew-x-12 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            即刻构建您的数智化统一门户
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            打破信息孤岛，连接业务与人。从今天开始，体验高效、智能、个性化的全新协作模式。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 group">
              预约专家演示
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-blue-400 text-white rounded-lg hover:bg-blue-800/30 transition-colors font-medium text-lg flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              在线咨询客服
            </button>
          </div>
          
          <p className="mt-8 text-sm text-blue-300">
            已有 10,000+ 家大型企业通过 YonBIP 实现了门户升级
          </p>
        </motion.div>
      </div>
    </section>
  )
}
