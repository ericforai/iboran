'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Phone, Download } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-red-600/10 -skew-x-12 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              开启您的汽配工厂 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                数智化转型之旅
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              立即预约 1对1 行业专家咨询，获取量身定制的数智化升级路线图。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-10 py-5 bg-[#E60012] text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-red-500/20 flex items-center justify-center gap-3"
            >
              预约行业专家系统演示
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://consult.boran.com.cn"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-sm transition-all border border-white/10 flex items-center justify-center gap-3"
            >
              下载精益制造白皮书
              <Download className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-12 text-slate-400">
             <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">咨询热线</div>
                  <div className="text-lg font-bold text-white">400-9955-161</div>
                </div>
             </div>
             <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">在线客服</div>
                  <div className="text-lg font-bold text-white">点击立即咨询</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
