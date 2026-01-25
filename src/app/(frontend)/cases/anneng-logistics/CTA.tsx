'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
            {/* Background Pattern */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-8 relative z-10"
          >
            获取零担物流业财一体化解决方案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 relative z-10"
          >
            安能物流如何实现运力调度优化、运费自动结算？解决零担物流对账难、运费结算效率低问题。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href="/contact" className="relative z-10 inline-flex items-center px-10 py-5 bg-white text-blue-700 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-shadow duration-300">
              获取物流行业方案及报价 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
