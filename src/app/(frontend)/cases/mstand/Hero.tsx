import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#0A0F1C] via-[#1A1A1A] to-[#0A0F1C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(212, 175, 55, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 连锁餐饮</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              M Stand<br />
              <span className="text-amber-400 text-3xl md:text-5xl">数字化升级实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              精品咖啡、烘焙食品、轻食、饮品。打造一体化数字经营底座，实现多系统集成与自动化对账，支撑规模化精细运营。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium">
                精品咖啡连锁
              </div>
              <div className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 text-amber-300 text-sm font-medium">
                多系统集成
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-slate-300 text-sm font-medium">
                自动化对账
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Premium Coffee Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="mstandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2D2D2D" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F4E4A6" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
                <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(212,175,55,0.2)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background geometric rings */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.2" />

              {/* Premium matte coffee cup */}
              <g filter="url(#glow)">
                {/* Cup body - minimalist cylinder */}
                <rect x="140" y="130" width="120" height="100" rx="8" fill="url(#mstandGradient)" opacity="0.95" />

                {/* Cup interior/rim */}
                <ellipse cx="200" cy="130" rx="60" ry="12" fill="#1A1A1A" opacity="0.8" />
                <ellipse cx="200" cy="130" rx="55" ry="10" fill="#2D1F14" opacity="0.9" />

                {/* Coffee surface with crema */}
                <ellipse cx="200" cy="132" rx="50" ry="8" fill="#4A3728" opacity="0.6" />

                {/* Subtle gold accent line */}
                <line x1="140" y1="150" x2="260" y2="150" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.5" />

                {/* Handle - elegant curve */}
                <path d="M260 150 Q295 155 295 180 Q295 210 265 215" stroke="#2D2D2D" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.9" />
                <path d="M260 150 Q295 155 295 180 Q295 210 265 215" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />

                {/* Saucer - minimalist */}
                <ellipse cx="200" cy="235" rx="85" ry="12" fill="#2D2D2D" opacity="0.7" />
                <ellipse cx="200" cy="235" rx="75" ry="10" fill="#1A1A1A" opacity="0.5" />
              </g>

              {/* Elegant steam - thin vertical lines */}
              <g className="animate-float" style={{ animationDelay: '0.2s' }}>
                <path d="M175 90 L175 50" stroke="url(#steamGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <path d="M200 85 L200 40" stroke="url(#steamGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                <path d="M225 90 L225 50" stroke="url(#steamGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </g>

              {/* Decorative coffee beans - minimal style */}
              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <ellipse cx="70" cy="140" rx="12" ry="8" fill="#2D1F14" opacity="0.5" transform="rotate(-45 70 140)" />
              </g>
              <g className="animate-float" style={{ animationDelay: '1.3s' }}>
                <ellipse cx="330" cy="280" rx="10" ry="7" fill="#3D2F24" opacity="0.4" transform="rotate(30 330 280)" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.6s' }}>
                <ellipse cx="340" cy="120" rx="9" ry="6" fill="#2D1F14" opacity="0.3" transform="rotate(-20 340 120)" />
              </g>

              {/* Gold accent dots */}
              <circle cx="90" cy="260" r="3" fill="#D4AF37" opacity="0.5" className="animate-float" style={{ animationDelay: '0.4s' }} />
              <circle cx="310" cy="90" r="2" fill="#F4E4A6" opacity="0.6" className="animate-float" style={{ animationDelay: '0.9s' }} />
              <circle cx="60" cy="180" r="4" fill="#D4AF37" opacity="0.3" className="animate-float" style={{ animationDelay: '1.2s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
