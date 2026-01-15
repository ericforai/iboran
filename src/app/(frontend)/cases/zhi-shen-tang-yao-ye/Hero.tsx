import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#0A1F3C] via-[#0D2847] to-[#0A1F3C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>医药与医疗 / 保健品</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              芝神堂药业<br />
              <span className="text-amber-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              芝神堂药业提供中成药、保健品及健康食品，专注于灵芝类产品的研发、生产与销售。通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
                GXP 标准合规
              </div>
              <div className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 text-amber-300 text-sm font-medium">
                灵芝类产品
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                全链路追溯
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - TCM/Herbal Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="herbalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#3B82F6" />
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
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#herbalGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#leafGradient)" strokeWidth="1" opacity="0.2" />

              {/* Lingzhi/Reishi mushroom shape */}
              <g filter="url(#glow)" opacity="0.9">
                {/* Main mushroom cap - fan shape */}
                <path d="M200 100
                         Q280 100 320 160
                         Q340 220 300 280
                         Q260 320 200 320
                         Q140 320 100 280
                         Q60 220 80 160
                         Q120 100 200 100Z"
                      fill="url(#herbalGradient)" opacity="0.7" />

                {/* Mushroom stem */}
                <ellipse cx="200" cy="280" rx="30" ry="50" fill="#92400E" opacity="0.6" />

                {/* Mushroom texture lines */}
                <path d="M150 140 Q200 150 250 140" stroke="#B45309" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M130 180 Q200 190 270 180" stroke="#B45309" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M120 220 Q200 230 280 220" stroke="#B45309" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M140 260 Q200 270 260 260" stroke="#B45309" strokeWidth="2" fill="none" opacity="0.5" />
              </g>

              {/* Herbal leaves - top left */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <ellipse cx="80" cy="100" rx="30" ry="15" fill="url(#leafGradient)" opacity="0.6" transform="rotate(-30 80 100)" />
                <line x1="80" y1="100" x2="80" y2="70" stroke="#06B6D4" strokeWidth="2" opacity="0.6" />
              </g>

              {/* Herbal leaves - bottom right */}
              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <ellipse cx="320" cy="300" rx="25" ry="12" fill="url(#leafGradient)" opacity="0.5" transform="rotate(20 320 300)" />
                <line x1="320" y1="300" x2="320" y2="275" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Small floating particles - representing herbal essence */}
              <circle cx="100" cy="180" r="5" fill="#F59E0B" opacity="0.4" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="300" cy="120" r="4" fill="#F59E0B" opacity="0.5" className="animate-float" style={{ animationDelay: '0.8s' }} />
              <circle cx="60" cy="280" r="6" fill="#06B6D4" opacity="0.3" className="animate-float" style={{ animationDelay: '1.2s' }} />
              <circle cx="340" cy="240" r="5" fill="#06B6D4" opacity="0.4" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="180" cy="60" r="3" fill="#F59E0B" opacity="0.5" className="animate-float" style={{ animationDelay: '1.5s' }} />
              <circle cx="220" cy="350" r="4" fill="#06B6D4" opacity="0.3" className="animate-float" style={{ animationDelay: '1.8s' }} />

              {/* DNA strand overlay - representing modern science meets traditional medicine */}
              <path d="M140 160 Q160 180 140 200" stroke="url(#leafGradient)" strokeWidth="3" fill="none" opacity="0.4" />
              <path d="M260 160 Q240 180 260 200" stroke="url(#leafGradient)" strokeWidth="3" fill="none" opacity="0.4" />
              <line x1="145" y1="170" x2="255" y2="170" stroke="url(#leafGradient)" strokeWidth="1" opacity="0.3" />
              <line x1="142" y1="185" x2="258" y2="185" stroke="url(#leafGradient)" strokeWidth="1" opacity="0.3" />
              <line x1="145" y1="195" x2="255" y2="195" stroke="url(#leafGradient)" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
