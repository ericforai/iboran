import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function DataGovernanceSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Central Database/Core */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="40" fill="url(#dataGrad)" opacity="0.8">
           <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.8;0.6;0.8" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="60" stroke="#06b6d4" strokeWidth="1" opacity="0.3" strokeDasharray="5 5">
           <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="100" stroke="#06b6d4" strokeWidth="1" opacity="0.2">
           <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="30s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Floating Data Cubes */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="30" height="30" rx="4" stroke="#22d3ee" strokeWidth="2" fill="none">
           <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="3s" repeatCount="indefinite" />
        </rect>
        <path d="M15 15 L200 200" stroke="#22d3ee" strokeWidth="1" opacity="0.2" />
      </g>

      <g transform="translate(280, 80)">
        <rect x="0" y="0" width="20" height="20" rx="4" stroke="#3b82f6" strokeWidth="2" fill="none">
           <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="4s" repeatCount="indefinite" begin="1s"/>
        </rect>
        <path d="M10 10 L-80 120" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
      </g>

      <g transform="translate(80, 280)">
        <rect x="0" y="0" width="25" height="25" rx="4" stroke="#60a5fa" strokeWidth="2" fill="none">
           <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
        </rect>
        <path d="M12.5 12.5 L120 -80" stroke="#60a5fa" strokeWidth="1" opacity="0.2" />
      </g>

      <g transform="translate(280, 280)">
        <rect x="0" y="0" width="30" height="30" rx="4" stroke="#06b6d4" strokeWidth="2" fill="none">
           <animateTransform attributeName="transform" type="translate" values="0 0; 0 8; 0 0" dur="4.5s" repeatCount="indefinite" begin="1.5s"/>
        </rect>
        <path d="M15 15 L-80 -80" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Binary Stream */}
      <text x="50" y="200" fill="#06b6d4" fontSize="10" opacity="0.4">101010</text>
      <text x="300" y="200" fill="#06b6d4" fontSize="10" opacity="0.4">010101</text>
      
      {/* Shield (Security) */}
      <path d="M200 170 L220 180 L220 210 L200 220 L180 210 L180 180 Z" fill="white" opacity="0.2">
         <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </path>
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
          alt="爱数科技数据中心" 
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
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span>客户案例</span>
              <ChevronRight className="w-3 h-3" />
              <span>高科技 / IT 服务</span>
              <ChevronRight className="w-3 h-3" />
              <span>爱数科技</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              爱数科技<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                全域数据治理实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              从&quot;数据孤岛&quot;到&quot;智能决策&quot;。泊冉软件助力爱数科技打破内部系统壁垒，构建业财一体化的集团管控平台。
            </p>

             <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-600/30"
                >
                  咨询同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>

          {/* Right Decoration */}
          <div className="hidden lg:block relative h-[400px]">
             <DataGovernanceSVG />
          </div>
        </div>
      </div>
    </section>
  )
}