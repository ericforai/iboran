import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function SemiconductorSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      
      {/* Background Grid */}
      <path d="M50 50 L350 50 L350 350 L50 350 Z" stroke="#4f46e5" strokeWidth="1" opacity="0.2" />
      <path d="M50 100 L350 100 M50 150 L350 150 M50 200 L350 200 M50 250 L350 250 M50 300 L350 300" stroke="#4f46e5" strokeWidth="0.5" opacity="0.1" />
      <path d="M100 50 L100 350 M150 50 L150 350 M200 50 L200 350 M250 50 L250 350 M300 50 L300 350" stroke="#4f46e5" strokeWidth="0.5" opacity="0.1" />

      {/* Center Chip Die */}
      <rect x="140" y="140" width="120" height="120" rx="8" fill="url(#chipGrad)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.7;0.9" dur="4s" repeatCount="indefinite" />
      </rect>
      <rect x="160" y="160" width="80" height="80" rx="4" stroke="white" strokeWidth="1" opacity="0.3" />
      
      {/* Circuit Traces */}
      <g stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <path d="M140 160 L80 160 L80 100">
          <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M260 160 L320 160 L320 100">
          <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </path>
        <path d="M140 240 L80 240 L80 300">
          <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="3s" repeatCount="indefinite" begin="1s" />
        </path>
        <path d="M260 240 L320 240 L320 300">
          <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </path>
      </g>

      {/* Connection Points */}
      <circle cx="80" cy="100" r="4" fill="#818cf8" />
      <circle cx="320" cy="100" r="4" fill="#818cf8" />
      <circle cx="80" cy="300" r="4" fill="#818cf8" />
      <circle cx="320" cy="300" r="4" fill="#818cf8" />

      {/* Data Packets */}
      <circle cx="0" cy="0" r="2" fill="white">
        <animateMotion path="M140 160 L80 160 L80 100" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="2" fill="white">
        <animateMotion path="M260 240 L320 240 L320 300" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#0A0F1C] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/sumitomo-hero.jpg" 
          alt="摩尔芯海半导体研发" 
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
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span>客户案例</span>
              <ChevronRight className="w-3 h-3" />
              <span>半导体 / 芯片设计</span>
              <ChevronRight className="w-3 h-3" />
              <span>摩尔芯海</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              摩尔芯海<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                半导体数智化实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              赋能中国芯，驱动新算力。泊冉软件助力摩尔芯海构建涵盖研发、供应链与财务的一体化管理平台，加速芯片从设计到量产的价值转化。
            </p>

             <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-indigo-600/30"
                >
                  咨询同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>

          <div className="hidden lg:block relative h-[400px]">
             <SemiconductorSVG />
          </div>
        </div>
      </div>
    </section>
  )
}