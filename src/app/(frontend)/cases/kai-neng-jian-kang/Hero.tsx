import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function WaterPurificationSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="waterGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="waterGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" stroke="url(#waterGrad1)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="10 10">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="60s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="120" stroke="url(#waterGrad1)" strokeWidth="1" strokeOpacity="0.3" />

      {/* Central Purification Core */}
      <g transform="translate(160, 120)">
        <rect x="0" y="0" width="80" height="160" rx="10" fill="url(#waterGrad2)" stroke="#3b82f6" strokeWidth="2" />
        {/* Layers */}
        <line x1="10" y1="40" x2="70" y2="40" stroke="#3b82f6" strokeWidth="1" />
        <line x1="10" y1="80" x2="70" y2="80" stroke="#3b82f6" strokeWidth="1" />
        <line x1="10" y1="120" x2="70" y2="120" stroke="#3b82f6" strokeWidth="1" />
        
        {/* Bubbles */}
        <circle cx="40" cy="140" r="3" fill="#60a5fa">
          <animate attributeName="cy" values="140;20" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="100" r="2" fill="#60a5fa">
          <animate attributeName="cy" values="100;20" dur="4s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>

      {/* Pipes connecting */}
      <path d="M40 200 L160 200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M240 200 L360 200" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

      {/* Data Nodes */}
      <circle cx="40" cy="200" r="8" fill="#3b82f6">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="360" cy="200" r="8" fill="#06b6d4">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* Flowing Particles */}
      <circle cx="0" cy="0" r="3" fill="white">
        <animateMotion path="M40 200 L160 200" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="3" fill="white">
        <animateMotion path="M240 200 L360 200" dur="2s" repeatCount="indefinite" />
      </circle>
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
          alt="开能健康数字化工厂" 
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
              <span>智能制造</span>
              <ChevronRight className="w-3 h-3" />
              <span>开能健康</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              开能健康<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                数字化转型实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              从&quot;规模驱动&quot;向&quot;效率与创新驱动&quot;的深刻转型。泊冉软件助力开能健康打通研产供销财全链路，构建以数据为核心的敏捷制造体系。
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
             <WaterPurificationSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
