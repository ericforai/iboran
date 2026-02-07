'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-[#E60012] relative overflow-hidden">
        {/* Background Element */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            开启智慧税务新篇章
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            立即预约专家演示，体验金税四期背景下的企业税务合规成熟实践。
          </p>
          
          <button
            onClick={() => setIsDemoOpen(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#E60012] rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 shadow-xl"
          >
            预约专家演示 <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
