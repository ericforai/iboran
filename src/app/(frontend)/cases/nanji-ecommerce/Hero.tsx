import Image from 'next/image'
import { ChevronRight, ShoppingBag, Truck, BarChart3, Database, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0F172A] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/case-study/sumitomo-hero.jpg" 
          alt="南极电商数字化转型" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-3xl">
            {/* Breadcrumb / Tag */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-8 animate-fade-in-up">
              <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 backdrop-blur-sm">客户案例</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-slate-300">现代服务业</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-white">电商</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
              南极电商
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                数字化转型实践
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200 font-light">
              构建全渠道数字化运营中台，实现品牌资产的精细化管理与高效变现，重塑电商服务生态。
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-8 border-t border-slate-700/50 pt-8 max-w-2xl animate-fade-in-up delay-300">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-400">管理品牌</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100亿+</div>
                <div className="text-sm text-slate-400">年GMV支撑</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-slate-400">数据准确率</div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Visualization */}
          <div className="relative h-[600px] hidden lg:block perspective-1000 animate-fade-in-up delay-500">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full border border-blue-500/30 backdrop-blur-md flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(37,99,235,0.2)] animate-pulse-slow">
              <div className="w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40 mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <div className="text-white font-bold text-lg">数智化中台</div>
              <div className="text-blue-300 text-xs mt-1">Unified Platform</div>
            </div>

            {/* Orbiting Elements - Using absolute positioning for 'floating' effect */}
            
            {/* Top Left: Tmall */}
            <div className="absolute top-1/4 left-0 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600 flex items-center gap-3 shadow-xl animate-float-delay-1">
              <div className="w-10 h-10 bg-[#FF0036]/20 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#FF0036]" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">天猫旗舰店</div>
                <div className="text-xs text-green-400">实时同步</div>
              </div>
            </div>

            {/* Top Right: JD */}
            <div className="absolute top-1/4 right-0 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600 flex items-center gap-3 shadow-xl animate-float-delay-2">
              <div className="w-10 h-10 bg-[#E1251B]/20 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#E1251B]" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">京东自营</div>
                <div className="text-xs text-green-400">实时同步</div>
              </div>
            </div>

            {/* Bottom Left: Supply Chain */}
            <div className="absolute bottom-1/4 left-10 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600 flex items-center gap-3 shadow-xl animate-float-delay-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">供应链协同</div>
                <div className="text-xs text-blue-400">高效流转</div>
              </div>
            </div>

            {/* Bottom Right: Analytics */}
            <div className="absolute bottom-1/4 right-10 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600 flex items-center gap-3 shadow-xl animate-float-delay-1">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">经营分析</div>
                <div className="text-xs text-blue-400">智能决策</div>
              </div>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-30">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {/* Lines connecting distinct points to center (approximate coords) */}
              <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Orbital Circles */}
              <circle cx="50%" cy="50%" r="30%" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.2" />
              <circle cx="50%" cy="50%" r="45%" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.1" strokeDasharray="10 10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
