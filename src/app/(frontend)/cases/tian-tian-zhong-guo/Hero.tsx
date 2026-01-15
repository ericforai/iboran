import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function PrecisionMachinerySVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Metal Sheet */}
      <rect x="100" y="150" width="200" height="100" fill="#334155" opacity="0.5" stroke="#94a3b8" strokeWidth="1" />
      
      {/* Laser Head */}
      <g transform="translate(200, 100)">
        <rect x="-10" y="0" width="20" height="40" fill="#cbd5e1" />
        <path d="M-15 0 L15 0 L10 -20 L-10 -20 Z" fill="#64748b" />
        
        {/* Laser Beam */}
        <line x1="0" y1="40" x2="0" y2="150" stroke="url(#laserGrad)" strokeWidth="2">
           <animate attributeName="opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite" />
        </line>
        
        {/* Spark */}
        <circle cx="0" cy="150" r="2" fill="#ef4444">
           <animate attributeName="r" values="2;5;2" dur="0.2s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="1;0" dur="0.2s" repeatCount="indefinite" />
        </circle>
        
        {/* Movement */}
        <animateTransform attributeName="transform" type="translate" values="150 100; 250 100; 150 100" dur="4s" repeatCount="indefinite" />
      </g>

      {/* Grid Lines */}
      <path d="M100 150 L300 250" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M300 150 L100 250" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Robotic Arm Abstract */}
      <path d="M50 300 L100 250 L80 200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <circle cx="50" cy="300" r="5" fill="#3b82f6" />
      <circle cx="100" cy="250" r="5" fill="#3b82f6" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#0A0F1C] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/sumitomo-hero.jpg" 
          alt="天田中国智能工厂" 
          fill 
          className="object-cover opacity-20 scale-105" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span>客户案例</span>
              <ChevronRight className="w-3 h-3" />
              <span>高端装备</span>
              <ChevronRight className="w-3 h-3" />
              <span>天田中国 (AMADA)</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              天田中国<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                服务型制造转型实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              从&quot;卖设备&quot;到&quot;卖服务&quot;的价值重塑。泊冉软件助力天田中国构建以客户为中心的全生命周期服务管理平台。
            </p>

             <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
                >
                  咨询同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>

          {/* Right Decoration */}
          <div className="hidden lg:block relative h-[400px]">
             <PrecisionMachinerySVG />
          </div>
        </div>
      </div>
    </section>
  )
}
