'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              准备好构建您的主数据底座了吗？
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              立即预约专家演示，获取定制化的主数据治理解决方案，释放数据资产价值。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                预约专家演示
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 bg-transparent border border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                浏览更多产品
              </Link>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}
