import { ChevronRight, Building2, TrendingUp } from 'lucide-react'

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

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0052D9]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E60012]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Breadcrumb with animation */}
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="hover:text-white transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#0052D9]">现代服务业 / 专业服务</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              仕卿人力
              <span className="block mt-2 text-4xl md:text-5xl bg-gradient-to-r from-[#0052D9] to-blue-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              仕卿人力作为专业的人力资源服务机构，面临业务流程标准化、服务质量提升和人才管理优化的挑战。泊冉软件为其构建了数字化人力资源管理平台，助力其实现高效运营与服务创新。
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Building2 className="w-5 h-5 text-[#0052D9]" />
                <span className="text-white text-sm font-medium">人力资源服务</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <TrendingUp className="w-5 h-5 text-[#E60012]" />
                <span className="text-white text-sm font-medium">效率提升 40%</span>
              </div>
            </div>
          </div>

          {/* Right decorative SVG */}
          <div className="hidden lg:block relative">
            {/* Floating HR/Digital transformation illustration */}
            <svg
              className="w-full h-auto max-w-lg mx-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circles */}
              <circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.1" />
              <circle cx="200" cy="200" r="100" fill="url(#gradient2)" opacity="0.15" />

              {/* Central person icon */}
              <g className="animate-float" style={{ animationDuration: '3s' }}>
                <circle cx="200" cy="160" r="30" fill="#0052D9" opacity="0.8" />
                <path d="M160 220 Q200 200 240 220 L240 280 Q200 300 160 280 Z" fill="#0052D9" opacity="0.6" />
              </g>

              {/* Orbiting elements */}
              <g className="animate-spin-slow" style={{ animationDuration: '20s', transformOrigin: '200px 200px' }}>
                <circle cx="200" cy="80" r="8" fill="#E60012" opacity="0.8" />
                <circle cx="320" cy="200" r="6" fill="#0052D9" opacity="0.6" />
                <circle cx="200" cy="320" r="10" fill="#0052D9" opacity="0.4" />
                <circle cx="80" cy="200" r="7" fill="#E60012" opacity="0.7" />
              </g>

              {/* Connection lines */}
              <g stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3">
                <line x1="200" y1="80" x2="200" y2="130" />
                <line x1="320" y1="200" x2="230" y2="200" />
                <line x1="200" y1="320" x2="200" y2="280" />
                <line x1="80" y1="200" x2="170" y2="200" />
              </g>

              {/* Data flow indicators */}
              <g className="animate-pulse">
                <rect x="250" y="100" width="40" height="6" rx="3" fill="#0052D9" opacity="0.5" />
                <rect x="260" y="115" width="30" height="6" rx="3" fill="#0052D9" opacity="0.4" />
                <rect x="255" y="130" width="35" height="6" rx="3" fill="#0052D9" opacity="0.3" />
              </g>

              <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                <rect x="110" y="280" width="40" height="6" rx="3" fill="#E60012" opacity="0.5" />
                <rect x="120" y="295" width="30" height="6" rx="3" fill="#E60012" opacity="0.4" />
                <rect x="115" y="310" width="35" height="6" rx="3" fill="#E60012" opacity="0.3" />
              </g>

              {/* Decorative dots */}
              <circle cx="100" cy="100" r="3" fill="white" opacity="0.3" />
              <circle cx="300" cy="100" r="2" fill="white" opacity="0.4" />
              <circle cx="100" cy="300" r="2" fill="white" opacity="0.3" />
              <circle cx="300" cy="300" r="3" fill="white" opacity="0.4" />
              <circle cx="340" cy="160" r="2" fill="#0052D9" opacity="0.5" />
              <circle cx="60" cy="240" r="3" fill="#E60012" opacity="0.4" />

              {/* Gradients */}
              <defs>
                <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(150)">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="#0052D9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="gradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(100)">
                  <stop stopColor="#E60012" />
                  <stop offset="1" stopColor="#E60012" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="#E60012" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
