import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function BeverageSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="bevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      
      {/* Coconut Abstract */}
      <circle cx="200" cy="200" r="120" stroke="#fcd34d" strokeWidth="1" opacity="0.3" strokeDasharray="10 5" />
      <path d="M150 150 Q200 100 250 150 T350 150" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0.4" />
      
      {/* Liquid Flow */}
      <path d="M200 50 L200 350" stroke="url(#bevGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.6">
         <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Bottles/Cans */}
      <g transform="translate(100, 200)">
        <rect x="0" y="0" width="40" height="80" rx="5" stroke="#f59e0b" strokeWidth="2" fill="none" />
        <line x1="0" y1="20" x2="40" y2="20" stroke="#f59e0b" strokeWidth="1" />
        <animateTransform attributeName="transform" type="translate" values="100 200; 100 180; 100 200" dur="4s" repeatCount="indefinite" />
      </g>
      
      <g transform="translate(260, 180)">
        <rect x="0" y="0" width="40" height="80" rx="5" stroke="#f59e0b" strokeWidth="2" fill="none" />
        <line x1="0" y1="20" x2="40" y2="20" stroke="#f59e0b" strokeWidth="1" />
        <animateTransform attributeName="transform" type="translate" values="260 180; 260 200; 260 180" dur="4s" repeatCount="indefinite" begin="1s" />
      </g>

      {/* Bubbles */}
      <circle cx="180" cy="300" r="5" fill="#fcd34d" opacity="0.6">
        <animate attributeName="cy" values="300;100" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="320" r="8" fill="#fcd34d" opacity="0.4">
        <animate attributeName="cy" values="320;120" dur="6s" repeatCount="indefinite" begin="2s"/>
        <animate attributeName="opacity" values="0.4;0" dur="6s" repeatCount="indefinite" begin="2s"/>
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
          alt="光合植造生产线" 
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
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span>客户案例</span>
              <ChevronRight className="w-3 h-3" />
              <span>新消费</span>
              <ChevronRight className="w-3 h-3" />
              <span>光合植造</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              光合植造<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                新消费品牌数智化
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              从“网红爆款”到“长红品牌”。泊冉软件助力光合植造打通 ERP 与电商 OMS，构建营销费用精细化管控体系。
            </p>

             <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-yellow-600/30"
                >
                  咨询同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>

          {/* Right Decoration */}
          <div className="hidden lg:block relative h-[400px]">
             <BeverageSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
