import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A0A0A] via-[#2D1010] to-[#1A0A0A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(239, 68, 68, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 连锁餐饮</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              汉堡王<br />
              <span className="text-orange-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              汉堡、薯条、鸡翅、饮料等快餐食品及堂食、外带、外卖服务。通过 ERP 集成打造以门店为核心的集约化管理体系。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30 text-red-300 text-sm font-medium">
                连锁餐饮
              </div>
              <div className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-300 text-sm font-medium">
                多渠道运营
              </div>
              <div className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 text-yellow-300 text-sm font-medium">
                门店管理
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Fast Food Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="meatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#92400E" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>
                <linearGradient id="lettuceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#16A34A" />
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
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#bunGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.2" />

              {/* Burger construction */}
              <g filter="url(#glow)">
                {/* Top bun */}
                <ellipse cx="200" cy="100" rx="90" ry="35" fill="url(#bunGradient)" opacity="0.9" />
                <path d="M110 100 Q200 60 290 100" stroke="#B45309" strokeWidth="3" fill="none" opacity="0.5" />

                {/* Sesame seeds */}
                <ellipse cx="160" cy="85" rx="8" ry="5" fill="#FEF3C7" opacity="0.8" transform="rotate(-10 160 85)" />
                <ellipse cx="200" cy="80" rx="8" ry="5" fill="#FEF3C7" opacity="0.8" transform="rotate(5 200 80)" />
                <ellipse cx="240" cy="85" rx="8" ry="5" fill="#FEF3C7" opacity="0.8" transform="rotate(15 240 85)" />
                <ellipse cx="175" cy="95" rx="6" ry="4" fill="#FEF3C7" opacity="0.6" />
                <ellipse cx="225" cy="92" rx="6" ry="4" fill="#FEF3C7" opacity="0.6" />

                {/* Lettuce */}
                <path d="M120 130 Q140 125 160 130 Q180 135 200 130 Q220 125 240 130 Q260 135 280 130"
                      stroke="url(#lettuceGradient)" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9" />
                <path d="M125 138 Q145 133 165 138 Q185 143 205 138 Q225 133 245 138 Q265 143 275 138"
                      stroke="url(#lettuceGradient)" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.8" />

                {/* Tomato */}
                <ellipse cx="200" cy="160" rx="75" ry="12" fill="#EF4444" opacity="0.85" />
                <ellipse cx="200" cy="168" rx="72" ry="10" fill="#DC2626" opacity="0.8" />

                {/* Cheese */}
                <path d="M115 175 L130 195 L270 195 L285 175 Z" fill="#FBBF24" opacity="0.9" />
                <path d="M125 175 L140 192 L260 192 L275 175" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Meat patty */}
                <ellipse cx="200" cy="210" rx="80" ry="20" fill="url(#meatGradient)" opacity="0.95" />
                <path d="M125 205 Q200 195 275 205" stroke="#78350F" strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M125 215 Q200 225 275 215" stroke="#78350F" strokeWidth="2" fill="none" opacity="0.4" />

                {/* Bottom bun */}
                <ellipse cx="200" cy="245" rx="85" ry="25" fill="url(#bunGradient)" opacity="0.85" />
                <ellipse cx="200" cy="260" rx="70" ry="15" fill="#D97706" opacity="0.7" />
              </g>

              {/* Fries on the side */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <rect x="70" y="120" width="12" height="70" rx="4" fill="#F59E0B" opacity="0.7" transform="rotate(-5 76 155)" />
                <rect x="85" y="115" width="12" height="75" rx="4" fill="#FBBF24" opacity="0.7" transform="rotate(3 91 152)" />
                <rect x="100" y="125" width="12" height="65" rx="4" fill="#F59E0B" opacity="0.7" transform="rotate(-2 106 157)" />
              </g>

              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                <rect x="310" y="180" width="12" height="70" rx="4" fill="#FBBF24" opacity="0.6" transform="rotate(5 316 215)" />
                <rect x="325" y="175" width="12" height="75" rx="4" fill="#F59E0B" opacity="0.6" transform="rotate(-3 331 212)" />
                <rect x="340" y="185" width="12" height="65" rx="4" fill="#FBBF24" opacity="0.6" transform="rotate(2 346 217)" />
              </g>

              {/* Drink cup */}
              <g className="animate-float" style={{ animationDelay: '1.2s' }}>
                <rect x="330" y="280" width="45" height="70" rx="5" fill="#EF4444" opacity="0.7" />
                <ellipse cx="352" cy="280" rx="22" ry="6" fill="#DC2626" opacity="0.7" />
                <rect x="335" y="290" width="34" height="40" rx="3" fill="white" opacity="0.3" />
              </g>

              {/* Small floating particles - seasoning */}
              <circle cx="60" cy="280" r="3" fill="#FBBF24" opacity="0.5" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="340" cy="100" r="4" fill="#EF4444" opacity="0.4" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="80" cy="320" r="2" fill="#22C55E" opacity="0.5" className="animate-float" style={{ animationDelay: '0.9s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
