import { ChevronRight, Leaf, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative gradient blobs - using green for environmental theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="hover:text-white transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-green-400">制造 / 环保设备</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              瑞晨环保
              <span className="block mt-2 text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              瑞晨环保提供环保设备、节能技术解决方案及相关工程服务。泊冉软件助力其实现制造数字化升级，打通生产、物流与财务的脉络。
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm font-medium">环保设备</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <TrendingUp className="w-5 h-5 text-[#E60012]" />
                <span className="text-white text-sm font-medium">效率提升 40%</span>
              </div>
            </div>
          </div>

          {/* Right decorative SVG - Environmental/Green theme */}
          <div className="hidden lg:block relative">
            <svg
              className="w-full h-auto max-w-lg mx-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circles */}
              <circle cx="200" cy="200" r="150" fill="url(#envGradient1)" opacity="0.1" />
              <circle cx="200" cy="200" r="100" fill="url(#envGradient2)" opacity="0.15" />

              {/* Central leaf/recycle icon */}
              <g className="animate-float" style={{ animationDuration: '3s' }}>
                {/* Leaf shape */}
                <path d="M200 120 Q240 120 260 160 Q280 200 260 240 Q240 280 200 280 Q160 280 140 240 Q120 200 140 160 Q160 120 200 120"
                      fill="url(#leafGradient)" opacity="0.8" />
                {/* Stem */}
                <path d="M200 120 Q200 100 200 80" stroke="url(#stemGradient)" strokeWidth="4" fill="none" opacity="0.6" />
                {/* Vein */}
                <path d="M200 120 Q200 180 200 240" stroke="url(#stemGradient)" strokeWidth="2" fill="none" opacity="0.4" />
                {/* Small leaf */}
                <ellipse cx="205" cy="100" rx="15" ry="8" fill="url(#leafGradient)" opacity="0.6" transform="rotate(-30 205 100)" />
              </g>

              {/* Orbiting elements */}
              <g className="animate-spin-slow" style={{ animationDuration: '20s', transformOrigin: '200px 200px' }}>
                <circle cx="200" cy="70" r="8" fill="#22c55e" opacity="0.8" />
                <circle cx="330" cy="200" r="6" fill="green-500" opacity="0.6" />
                <circle cx="200" cy="330" r="10" fill="#0052D9" opacity="0.4" />
                <circle cx="70" cy="200" r="7" fill="#E60012" opacity="0.7" />
              </g>

              {/* Connection lines */}
              <g stroke="url(#envLineGradient)" strokeWidth="1" opacity="0.3">
                <line x1="200" y1="70" x2="200" y2="110" />
                <line x1="330" y1="200" x2="260" y2="200" />
                <line x1="200" y1="330" x2="200" y2="280" />
                <line x1="70" y1="200" x2="140" y2="200" />
              </g>

              {/* Data flow indicators */}
              <g className="animate-pulse">
                <rect x="260" y="90" width="45" height="6" rx="3" fill="#22c55e" opacity="0.5" />
                <rect x="270" y="105" width="35" height="6" rx="3" fill="#22c55e" opacity="0.4" />
                <rect x="265" y="120" width="40" height="6" rx="3" fill="#22c55e" opacity="0.3" />
              </g>

              <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                <rect x="95" y="275" width="45" height="6" rx="3" fill="green-500" opacity="0.5" />
                <rect x="105" y="290" width="35" height="6" rx="3" fill="green-500" opacity="0.4" />
                <rect x="100" y="305" width="40" height="6" rx="3" fill="green-500" opacity="0.3" />
              </g>

              {/* Decorative dots */}
              <circle cx="100" cy="100" r="3" fill="white" opacity="0.3" />
              <circle cx="300" cy="100" r="2" fill="white" opacity="0.4" />
              <circle cx="100" cy="300" r="2" fill="white" opacity="0.3" />
              <circle cx="300" cy="300" r="3" fill="white" opacity="0.4" />
              <circle cx="340" cy="160" r="2" fill="#22c55e" opacity="0.5" />
              <circle cx="60" cy="240" r="3" fill="green-500" opacity="0.4" />

              {/* Gradients */}
              <defs>
                <radialGradient id="envGradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(150)">
                  <stop stopColor="#22c55e" />
                  <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="envGradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(100)">
                  <stop stopColor="green-500" />
                  <stop offset="1" stopColor="green-500" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="leafGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22c55e" />
                  <stop offset="1" stopColor="green-400" />
                </linearGradient>
                <linearGradient id="stemGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#16a34a" />
                  <stop offset="1" stopColor="#22c55e" />
                </linearGradient>
                <linearGradient id="envLineGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22c55e" />
                  <stop offset="1" stopColor="#0052D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
