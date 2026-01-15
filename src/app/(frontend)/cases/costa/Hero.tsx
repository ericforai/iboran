import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A120A] via-[#2D1F15] to-[#1A120A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(139, 69, 19, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 连锁餐饮</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Costa<br />
              <span className="text-red-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              咖啡饮品、轻食、休闲餐饮服务。打通&quot;业务—财务—税务—资金&quot;全链路，支撑连锁餐饮规模化发展。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30 text-red-300 text-sm font-medium">
                连锁咖啡
              </div>
              <div className="px-4 py-2 bg-amber-700/20 backdrop-blur-sm rounded-full border border-amber-700/30 text-amber-300 text-sm font-medium">
                多平台集成
              </div>
              <div className="px-4 py-2 bg-yellow-600/20 backdrop-blur-sm rounded-full border border-yellow-600/30 text-yellow-200 text-sm font-medium">
                全链路闭环
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Coffee Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#78350F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#451A03" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="creamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FEF3C7" />
                  <stop offset="100%" stopColor="#FDE68A" />
                </linearGradient>
                <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background circle */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#coffeeGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.2" />

              {/* Coffee cup */}
              <g filter="url(#glow)">
                {/* Cup body */}
                <path d="M140 140 Q140 120 160 120 L240 120 Q260 120 260 140 L260 220 Q260 240 240 240 L160 240 Q140 240 140 220 Z"
                      fill="url(#coffeeGradient)" opacity="0.85" />

                {/* Coffee liquid surface */}
                <ellipse cx="200" cy="140" rx="60" ry="15" fill="#451A03" opacity="0.9" />

                {/* Cup handle */}
                <path d="M260 150 Q290 150 290 170 Q290 200 270 210" stroke="url(#coffeeGradient)" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.7" />

                {/* Saucer */}
                <ellipse cx="200" cy="245" rx="90" ry="15" fill="#92400E" opacity="0.6" />
              </g>

              {/* Steam/Aroma - wavy lines */}
              <g className="animate-float" style={{ animationDelay: '0.3s' }}>
                <path d="M170 80 Q180 60 170 50 Q160 40 170 30" stroke="url(#steamGradient)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <path d="M200 70 Q210 50 200 40 Q190 30 200 20" stroke="url(#steamGradient)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.7s' }}>
                <path d="M230 80 Q240 60 230 50 Q220 40 230 30" stroke="url(#steamGradient)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
              </g>

              {/* Coffee beans decoration */}
              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <ellipse cx="80" cy="120" rx="18" ry="12" fill="#78350F" opacity="0.6" transform="rotate(-30 80 120)" />
                <line x1="80" y1="114" x2="80" y2="126" stroke="#451A03" strokeWidth="1" opacity="0.4" />
              </g>
              <g className="animate-float" style={{ animationDelay: '1.2s' }}>
                <ellipse cx="320" cy="300" rx="16" ry="11" fill="#92400E" opacity="0.5" transform="rotate(25 320 300)" />
                <line x1="320" y1="295" x2="320" y2="305" stroke="#451A03" strokeWidth="1" opacity="0.3" />
              </g>
              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                <ellipse cx="330" cy="140" rx="14" ry="10" fill="#78350F" opacity="0.4" transform="rotate(-15 330 140)" />
                <line x1="330" y1="136" x2="330" y2="144" stroke="#451A03" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Small floating particles */}
              <circle cx="100" cy="280" r="4" fill="#DC2626" opacity="0.4" className="animate-float" style={{ animationDelay: '0.4s' }} />
              <circle cx="300" cy="100" r="3" fill="#F59E0B" opacity="0.5" className="animate-float" style={{ animationDelay: '0.9s' }} />
              <circle cx="60" cy="200" r="5" fill="#78350F" opacity="0.3" className="animate-float" style={{ animationDelay: '1.3s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
