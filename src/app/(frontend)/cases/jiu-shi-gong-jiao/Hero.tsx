import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>国资 / 市级国资</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              久事公交<br />
              <span className="text-cyan-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              公共交通运营服务，包括城市公交线路运营与管理。构建"集团财务+司库管理+业财融合"一体化平台。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
                集团财务
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                司库管理
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-600/30 text-blue-200 text-sm font-medium">
                业财融合
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Public Transit Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="busBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="busCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0891B2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="windowTint" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93C5FD" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background geometric elements */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#busCyan)" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.15" strokeDasharray="8,8" />

              {/* Bus illustration */}
              <g filter="url(#glow)">
                {/* Bus body */}
                <rect x="80" y="160" width="240" height="100" rx="15" fill="url(#busBlue)" opacity="0.9" />

                {/* Bus front - rounded */}
                <ellipse cx="320" cy="210" rx="15" ry="40" fill="url(#busBlue)" opacity="0.9" />

                {/* Windows */}
                <g fill="url(#windowTint)" opacity="0.7">
                  <rect x="100" y="175" width="40" height="35" rx="4" />
                  <rect x="150" y="175" width="40" height="35" rx="4" />
                  <rect x="200" y="175" width="40" height="35" rx="4" />
                  <rect x="250" y="175" width="40" height="35" rx="4" />
                </g>

                {/* Door */}
                <rect x="295" y="175" width="20" height="60" rx="3" fill="#1E40AF" opacity="0.6" />

                {/* Wheels */}
                <circle cx="130" cy="270" r="22" fill="#1F2937" opacity="0.9" />
                <circle cx="130" cy="270" r="12" fill="#6B7280" opacity="0.5" />
                <circle cx="270" cy="270" r="22" fill="#1F2937" opacity="0.9" />
                <circle cx="270" cy="270" r="12" fill="#6B7280" opacity="0.5" />

                {/* Headlights */}
                <circle cx="325" cy="200" r="6" fill="#FCD34D" opacity="0.8" />
                <circle cx="325" cy="220" r="6" fill="#FCD34D" opacity="0.8" />

                {/* Bus stripe */}
                <rect x="80" y="230" width="250" height="4" fill="url(#busCyan)" opacity="0.6" />
              </g>

              {/* Route/path line */}
              <path d="M50 320 Q100 290, 150 310 T250 300 T350 280"
                    stroke="url(#busCyan)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" strokeDasharray="8,4" />

              {/* Bus stops */}
              <circle cx="50" cy="320" r="6" fill="#3B82F6" opacity="0.7" />
              <circle cx="350" cy="280" r="6" fill="#06B6D4" opacity="0.7" />

              {/* Floating elements - transit symbols */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <rect x="60" y="80" width="30" height="20" rx="4" fill="#06B6D4" opacity="0.4" />
                <text x="70" y="95" fill="white" fontSize="10" fontWeight="bold" opacity="0.8">BUS</text>
              </g>

              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <circle cx="330" cy="80" r="16" fill="#3B82F6" opacity="0.3" />
                <text x="322" y="84" fill="white" fontSize="12" fontWeight="bold" opacity="0.8">¥</text>
              </g>

              {/* Direction indicators */}
              <g className="animate-float" style={{ animationDelay: '0.7s' }}>
                <path d="M280 50 L300 70 L280 90" stroke="#06B6D4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </g>

              {/* City/building silhouettes background */}
              <g opacity="0.15">
                <rect x="40" y="330" width="25" height="30" fill="#3B82F6" />
                <rect x="340" y="320" width="20" height="40" fill="#06B6D4" />
                <rect x="60" y="340" width="15" height="20" fill="#3B82F6" />
              </g>

              {/* Floating particles */}
              <circle cx="100" cy="120" r="3" fill="#3B82F6" opacity="0.5" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="300" cy="140" r="4" fill="#06B6D4" opacity="0.6" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="180" cy="80" r="3" fill="#3B82F6" opacity="0.4" className="animate-float" style={{ animationDelay: '0.9s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
