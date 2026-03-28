'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, MessageSquare, Phone } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="cta" className="bg-white py-24 px-4 lg:py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0052D9] px-8 py-16 lg:px-24 lg:py-24 shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-red-50 opacity-10 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-relaxed"
            >
              谁先建立 Agent OS，谁就掌握了未来的组织效率差。不要继续停留在讨论 AI，而是率先完成组织升级。
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-12 max-w-2xl text-lg text-blue-100/80 leading-relaxed md:text-xl"
            >
              加入先行者行列。让 StaffAI 成为您的企业大脑，开启全天候运转的“数字总部”。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="destructive"
                className="h-16 px-10 text-lg font-bold shadow-xl group"
                onClick={() => setIsModalOpen(true)}
              >
                 预约专家演示
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 border-2 border-white/30 bg-white/10 text-white text-lg font-bold hover:bg-white/20 backdrop-blur-sm">
                 <Phone className="mr-2" size={20} />
                 400-9955-161
              </Button>
            </motion.div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-12 text-blue-100/60 text-sm font-medium">
               <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2-4 周完成试点</span>
               </div>
               <div className="flex items-center gap-2">
                  <MessageSquare size={16} />
                  <span>专家 1V1 诊断</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        source="staffai-cta"
      />
    </section>
  )
}
