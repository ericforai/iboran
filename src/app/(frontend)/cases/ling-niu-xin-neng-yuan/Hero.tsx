import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>新能源 / 氢能</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              羚牛新能源<br />
              <span className="text-emerald-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              新能源汽车充电解决方案、充电桩销售、安装及运维服务。构建支持多会计准则、业财融合的集团财务一体化平台。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 text-emerald-300 text-sm font-medium">
                充电桩运营
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                能源管理
              </div>
              <div className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 text-teal-300 text-sm font-medium">
                业财融合
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Energy/Charging Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="energyGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="energyCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0891B2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#06B6D4" />
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
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#energyGreen)" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.15" strokeDasharray="8,8" />

              {/* Charging station illustration */}
              <g filter="url(#glow)">
                {/* Main station body */}
                <rect x="140" y="140" width="120" height="120" rx="8" fill="url(#energyGreen)" opacity="0.85" />

                {/* Station roof */}
                <path d="M130 140 L200 100 L270 140" fill="url(#energyCyan)" opacity="0.9" />

                {/* Charging port */}
                <rect x="180" y="180" width="40" height="30" rx="4" fill="#1F2937" opacity="0.7" />
                <circle cx="200" cy="195" r="10" fill="url(#electricBlue)" opacity="0.9" className="animate-pulse" />

                {/* Display screen */}
                <rect x="155" y="220" width="90" height="25" rx="3" fill="#065F46" opacity="0.6" />
                <rect x="160" y="225" width="30" height="15" rx="2" fill="#34D399" opacity="0.8" />
                <rect x="195" y="225" width="40" height="15" rx="2" fill="#34D399" opacity="0.8" />
              </g>

              {/* Electric bolt symbol */}
              <g filter="url(#glow)">
                <path d="M280 80 L260 130 L290 130 L270 180 L310 180 L270 240 L300 240"
                      stroke="url(#electricBlue)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              </g>

              {/* Power flow lines */}
              <g opacity="0.4">
                <path d="M100 280 L150 260" stroke="url(#energyGreen)" strokeWidth="2" strokeDasharray="4,4" />
                <path d="M250 250 L300 220" stroke="url(#energyCyan)" strokeWidth="2" strokeDasharray="4,4" />
                <path d="M80 200 L130 180" stroke="url(#energyGreen)" strokeWidth="2" strokeDasharray="4,4" />
              </g>

              {/* Energy particles */}
              <circle cx="110" cy="260" r="4" fill="#10B981" opacity="0.6" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="290" cy="210" r="3" fill="#06B6D4" opacity="0.7" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="320" cy="280" r="5" fill="#10B981" opacity="0.5" className="animate-float" style={{ animationDelay: '0.9s' }} />

              {/* H2 molecule representation for hydrogen */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <circle cx="70" cy="120" r="10" fill="#14B8A6" opacity="0.5" />
                <circle cx="55" cy="105" r="8" fill="white" opacity="0.7" />
                <circle cx="85" cy="105" r="8" fill="white" opacity="0.7" />
              </g>

              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <circle cx="340" cy="140" r="8" fill="#14B8A6" opacity="0.4" />
                <circle cx="328" cy="128" r="6" fill="white" opacity="0.5" />
                <circle cx="352" cy="128" r="6" fill="white" opacity="0.5" />
              </g>

              {/* Leaf for eco-friendly */}
              <g className="animate-float" style={{ animationDelay: '0.7s' }} opacity="0.6">
                <path d="M60 320 C60 300, 80 280, 80 260 C80 240, 60 220, 60 200 C60 180, 90 160, 100 140 C100 120, 80 100, 80 100"
                      fill="#10B981" opacity="0.4" />
                <path d="M80 320 C80 300, 100 280, 100 260 C100 240, 80 200, 80 180"
                      stroke="#059669" strokeWidth="2" fill="none" opacity="0.5" />
              </g>

              {/* Small energy icons */}
              <circle cx="330" cy="60" r="12" fill="url(#energyGreen)" opacity="0.3" />
              <text x="325" y="65" fill="white" fontSize="12" fontWeight="bold" opacity="0.7">⚡</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
