import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#2A1F1A] via-[#3D2A1F] to-[#2A1F1A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(217, 119, 6, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 家居</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              上海川至悦来家具<br />
              <span className="text-amber-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              主营国外品牌家具销售与定制服务。通过 ERP 与 OMS 系统集成，实现全渠道库存共享与一体化运营。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-300 text-sm font-medium">
                国外品牌家具
              </div>
              <div className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 text-amber-300 text-sm font-medium">
                定制服务
              </div>
              <div className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 text-yellow-300 text-sm font-medium">
                全渠道运营
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Furniture/Home Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#B45309" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
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
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#woodGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#warmGradient)" strokeWidth="1" opacity="0.2" />

              {/* Chair/Sofa representation */}
              <g filter="url(#glow)" opacity="0.85">
                {/* Chair back */}
                <path d="M140 100 Q140 80 160 80 L240 80 Q260 80 260 100 L260 180 Q260 200 240 200 L160 200 Q140 200 140 180 Z"
                      fill="url(#woodGradient)" opacity="0.6" />
                {/* Chair seat cushion */}
                <path d="M130 200 Q130 190 150 190 L250 190 Q270 190 270 200 L270 220 Q270 230 250 230 L150 230 Q130 230 130 220 Z"
                      fill="url(#warmGradient)" opacity="0.7" />
                {/* Chair legs */}
                <rect x="140" y="230" width="12" height="60" rx="4" fill="#92400E" opacity="0.6" />
                <rect x="248" y="230" width="12" height="60" rx="4" fill="#92400E" opacity="0.6" />
                {/* Armrests */}
                <rect x="100" y="140" width="30" height="60" rx="8" fill="url(#woodGradient)" opacity="0.5" />
                <rect x="270" y="140" width="30" height="60" rx="8" fill="url(#woodGradient)" opacity="0.5" />
              </g>

              {/* Floating elements - representing e-commerce/integration */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <rect x="60" y="80" width="50" height="35" rx="5" fill="url(#warmGradient)" opacity="0.4" />
                <line x1="70" y1="92" x2="100" y2="92" stroke="white" strokeWidth="2" opacity="0.5" />
                <line x1="70" y1="100" x2="90" y2="100" stroke="white" strokeWidth="2" opacity="0.5" />
              </g>

              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <rect x="290" y="280" width="50" height="35" rx="5" fill="url(#woodGradient)" opacity="0.4" />
                <line x1="300" y1="292" x2="330" y2="292" stroke="white" strokeWidth="2" opacity="0.5" />
                <line x1="300" y1="300" x2="320" y2="300" stroke="white" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Connection lines - representing system integration */}
              <path d="M110 97 Q150 80 180 90" stroke="url(#warmGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />
              <path d="M290 297 Q250 320 220 310" stroke="url(#woodGradient)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4,4" />

              {/* Small decorative particles */}
              <circle cx="70" cy="200" r="5" fill="#F59E0B" opacity="0.4" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="330" cy="150" r="4" fill="#D97706" opacity="0.5" className="animate-float" style={{ animationDelay: '0.7s' }} />
              <circle cx="90" cy="320" r="6" fill="#FBBF24" opacity="0.3" className="animate-float" style={{ animationDelay: '1.2s' }} />
              <circle cx="310" cy="80" r="3" fill="#F59E0B" opacity="0.4" className="animate-float" style={{ animationDelay: '0.9s' }} />

              {/* Wood grain pattern decoration */}
              <path d="M320 200 Q340 200 340 220 Q340 240 320 240" stroke="url(#woodGradient)" strokeWidth="2" fill="none" opacity="0.3" />
              <path d="M60 280 Q80 280 80 300 Q80 320 60 320" stroke="url(#warmGradient)" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
