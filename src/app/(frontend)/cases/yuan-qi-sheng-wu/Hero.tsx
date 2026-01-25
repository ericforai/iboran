import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function BiotechSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <defs>
        <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Background Molecular Structure */}
      <path d="M50 50 L100 100 M100 100 L150 50 M100 100 L100 150 M100 150 L50 200 M100 150 L150 200" 
            stroke="#e2e8f0" strokeWidth="1" opacity="0.2" />
      <circle cx="50" cy="50" r="4" fill="#e2e8f0" opacity="0.3" />
      <circle cx="100" cy="100" r="4" fill="#e2e8f0" opacity="0.3" />
      <circle cx="150" cy="50" r="4" fill="#e2e8f0" opacity="0.3" />
      <circle cx="100" cy="150" r="4" fill="#e2e8f0" opacity="0.3" />
      <circle cx="50" cy="200" r="4" fill="#e2e8f0" opacity="0.3" />
      <circle cx="150" cy="200" r="4" fill="#e2e8f0" opacity="0.3" />

      {/* DNA Double Helix */}
      <g transform="translate(200, 50) rotate(15)">
        <path d="M0 0 Q40 40 0 80 Q-40 120 0 160 Q40 200 0 240 Q-40 280 0 320" 
              stroke="url(#bioGrad)" strokeWidth="3" fill="none" opacity="0.8">
           <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="5s" fill="freeze" />
        </path>
        <path d="M0 0 Q-40 40 0 80 Q40 120 0 160 Q-40 200 0 240 Q40 280 0 320" 
              stroke="url(#bioGrad)" strokeWidth="3" fill="none" opacity="0.5">
           <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="5s" fill="freeze" />
        </path>
        
        {/* Base Pairs */}
        <g stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
          <line x1="-20" y1="40" x2="20" y2="40" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="-30" y1="100" x2="30" y2="100" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <line x1="-20" y1="160" x2="20" y2="160" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
          </line>
          <line x1="-30" y1="220" x2="30" y2="220" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="1.5s"/>
          </line>
          <line x1="-20" y1="280" x2="20" y2="280" opacity="0.6">
             <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="2s"/>
          </line>
        </g>
      </g>

      {/* Floating Cells */}
      <circle cx="100" cy="250" r="20" fill="url(#bioGrad)" opacity="0.6">
        <animate attributeName="cy" values="250;240;250" dur="4s" repeatCount="indefinite" />
        <animate attributeName="r" values="20;22;20" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="100" r="15" fill="#3b82f6" opacity="0.4">
        <animate attributeName="cy" values="100;110;100" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="300" r="10" fill="#8b5cf6" opacity="0.5">
        <animate attributeName="cy" values="300;290;300" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Data Flow */}
      <circle cx="200" cy="50" r="2" fill="white">
        <animateMotion path="M0 0 Q40 40 0 80 Q-40 120 0 160 Q40 200 0 240 Q-40 280 0 320" dur="5s" repeatCount="indefinite" />
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
          alt="原启生物实验室" 
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
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span>客户案例</span>
              <ChevronRight className="w-3 h-3" />
              <span>生物制药</span>
              <ChevronRight className="w-3 h-3" />
              <span>原启生物</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              原启生物<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                创新药研发数智化
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-light">
              从“实验台”到“数字化平台”。泊冉软件助力原启生物构建合规高效的研发数据中台，加速创新药上市进程。
            </p>

             <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-purple-600/30"
                >
                  咨询同款方案
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
             </div>
          </div>

          {/* Right Decoration */}
          <div className="hidden lg:block relative h-[400px]">
             <BiotechSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
