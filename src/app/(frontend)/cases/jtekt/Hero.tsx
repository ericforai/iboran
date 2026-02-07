import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function AutoPartsSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      
      {/* Big Gear */}
      <g transform="translate(200, 200)">
        <path d="M0 -70 L10 -70 L15 -55 L25 -50 L40 -55 L45 -45 L35 -30 L40 -20 L55 -15 L55 -5 L40 0 L35 10 L45 20 L40 30 L25 25 L15 30 L10 45 L0 45 L-5 30 L-15 25 L-25 30 L-30 20 L-20 10 L-25 0 L-40 5 L-40 -5 L-25 -15 L-20 -25 L-30 -35 L-25 -45 L-10 -40 L-5 -55 Z" 
              fill="none" stroke="#60a5fa" strokeWidth="2">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
        </path>
        <circle cx="0" cy="0" r="30" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5" />
      </g>

      {/* Small Gear */}
      <g transform="translate(120, 120)">
        <circle cx="0" cy="0" r="25" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2 2" opacity="0.5">
           <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Connecting Lines (Supply Chain) */}
      <circle cx="120" cy="120" r="4" fill="#3b82f6" />
      <circle cx="200" cy="200" r="6" fill="#3b82f6" />
      <circle cx="280" cy="280" r="4" fill="#3b82f6" />
      <circle cx="280" cy="120" r="4" fill="#94a3b8" />
      <circle cx="120" cy="280" r="4" fill="#94a3b8" />

      <line x1="120" y1="120" x2="200" y2="200" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="200" x2="280" y2="280" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="200" x2="280" y2="120" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="200" x2="120" y2="280" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />

      {/* Moving Packets */}
      <circle cx="0" cy="0" r="3" fill="white">
        <animateMotion path="M120 120 L200 200 L280 280" dur="3s" repeatCount="indefinite" />
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
          alt="捷太格特智能工厂" 
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
              <span>汽车零部件</span>
              <ChevronRight className="w-3 h-3" />
              <span>捷太格特 (JTEKT)</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              捷太格特<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                全球供应链协同实践
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              作为行业实践成熟的轴承与机床制造商，捷太格特携手泊冉软件打破数据孤岛，构建端到端的数字化供应链网络，重塑精益制造新标杆。
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
             <AutoPartsSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
