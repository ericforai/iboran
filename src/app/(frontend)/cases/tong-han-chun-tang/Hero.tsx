import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function TCMPharmaSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="tcmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      
      {/* Background Leaves/Abstract */}
      <path d="M200 100 Q250 50 300 100 T400 100" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M0 300 Q100 250 200 300 T400 300" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.2" />

      {/* DNA Helix */}
      <g transform="translate(150, 50)">
        <path d="M0 0 Q20 20 0 40 Q-20 60 0 80 Q20 100 0 120" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M0 0 Q-20 20 0 40 Q20 60 0 80 Q-20 100 0 120" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6" />
        <line x1="-10" y1="20" x2="10" y2="20" stroke="#fff" strokeWidth="1" opacity="0.3" />
        <line x1="-10" y1="60" x2="10" y2="60" stroke="#fff" strokeWidth="1" opacity="0.3" />
        <line x1="-10" y1="100" x2="10" y2="100" stroke="#fff" strokeWidth="1" opacity="0.3" />
        <animateTransform attributeName="transform" type="translate" values="150 50; 150 70; 150 50" dur="5s" repeatCount="indefinite" />
      </g>

      {/* Shield (Compliance) */}
      <g transform="translate(250, 200)">
        <path d="M0 0 L40 0 L40 40 Q20 60 0 40 Z" fill="#065f46" opacity="0.8" />
        <path d="M10 15 L20 25 L30 10" stroke="#34d399" strokeWidth="2" fill="none" />
      </g>

      {/* Pills/Capsules */}
      <g transform="translate(80, 250)">
        <rect x="0" y="0" width="40" height="20" rx="10" fill="#f59e0b" transform="rotate(-30)" opacity="0.8" />
        <rect x="20" y="20" width="40" height="20" rx="10" fill="#10b981" transform="rotate(-30)" opacity="0.8" />
      </g>

      {/* Connection Lines */}
      <circle cx="150" cy="110" r="3" fill="#34d399" />
      <circle cx="270" cy="220" r="3" fill="#34d399" />
      <line x1="150" y1="110" x2="270" y2="220" stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
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
          alt="童涵春堂智慧药房" 
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
              <span>医药健康</span>
              <ChevronRight className="w-3 h-3" />
              <span>童涵春堂</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              童涵春堂<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                百年老字号的数智新生
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              传承不泥古，创新不离宗。泊冉软件助力童涵春堂构建符合 GSP 标准的医药供应链与新零售平台，焕发品牌新活力。
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
             <TCMPharmaSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
