'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* 1. Luxurious Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle StaffAI Blue Glow that spills from right to left */}
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
        
        {/* Faint technical dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0052D9 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Red accent glow for thermal contrast */}
        <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-red-400/5 blur-[100px]" />

        {/* Decorative "Light Streak" - Bridges the two columns */}
        <motion.div 
          animate={{ x: [-200, 1200], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-1/3 left-0 h-[2px] w-[400px] bg-gradient-to-r from-transparent via-[#0052D9]/20 to-transparent"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#0052D9] border border-blue-100/50 shadow-sm"
            >
              <Bot size={16} />
              从“试用 AI”到“真正拥有 AI 员工”
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 max-w-5xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
            >
              StaffAI Agent OS <span className="text-[#0052D9] inline-block whitespace-nowrap">企业级 AI 员工操作系统</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl font-medium"
            >
              为企业打造可管理、可审批、可沉淀、可规模化的 Agent 执行底座。
              将 AI 从局部的聊天辅助，彻底升级为全天候运转的组织级生产力。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button 
                size="lg" 
                variant="destructive"
                className="h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                预约专家演示
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative w-full max-w-2xl"
          >
            {/* The main illustration with a blue-tinted shadow */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,82,217,0.25)] border border-slate-100 bg-white group">
              <img 
                src="/assets/products/staff-ai/hero.png" 
                alt="StaffAI Agent OS Dashboard"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0052D9]/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphic Status Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/50 hidden md:flex items-center gap-4 z-20"
            >
               <div className="h-12 w-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <ShieldCheck size={24} />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">系统运行状态</div>
                  <div className="text-base font-bold text-slate-900">安全且稳健</div>
               </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-100 pt-12"
        >
          {[
            { label: '安全性', value: '金融级信道加密' },
            { label: '可靠性', value: 'Checkpoint 无损恢复' },
            { label: '透明度', value: '100% 执行链路留痕' },
            { label: '生产力', value: '24/7 异步任务调度' },
          ].map((stat: any, i: number) => (
            <div key={i} className="text-center lg:text-left">
              <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <DemoRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        source="staffai-hero"
      />
    </section>
  )
}
