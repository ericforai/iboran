'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          开启国资国企数智化转型新篇章
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          携手泊冉，构建智慧国资，赋能国企改革，共创数字经济新未来。
        </p>
        
        <button
          onClick={() => setIsDemoOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#E60012] text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105"
        >
          立即咨询方案
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-state-owned"
      />
    </section>
  )
}
