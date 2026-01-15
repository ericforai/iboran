import { ChevronRight, Microscope, TrendingUp } from 'lucide-react'

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
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="hover:text-white transition-colors cursor-pointer">客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-400">制造 / 专用设备</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              正帆科技
              <span className="block mt-2 text-4xl md:text-5xl bg-gradient-to-r from-[#0052D9] to-cyan-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              正帆科技提供高纯工艺系统、气体化学品供应系统、洁净室工程及配套设备，服务于半导体、生物医药、新能源等高科技产业。泊冉软件助力其实现制造数字化升级。
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Microscope className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm font-medium">半导体设备</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <TrendingUp className="w-5 h-5 text-[#E60012]" />
                <span className="text-white text-sm font-medium">效率提升 40%</span>
              </div>
            </div>
          </div>

          {/* Right decorative SVG - Semiconductor/High-tech theme */}
          <div className="hidden lg:block relative">
            <svg
              className="w-full h-auto max-w-lg mx-auto"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circles */}
              <circle cx="200" cy="200" r="150" fill="url(#semiGradient1)" opacity="0.1" />
              <circle cx="200" cy="200" r="100" fill="url(#semiGradient2)" opacity="0.15" />

              {/* Central chip/wafer icon */}
              <g className="animate-float" style={{ animationDuration: '3s' }}>
                {/* Chip body */}
                <rect x="150" y="150" width="100" height="100" rx="8" fill="url(#chipGradient)" opacity="0.9" />
                {/* Chip circuit pattern */}
                <rect x="165" y="165" width="30" height="30" rx="2" fill="url(#circuitGradient)" opacity="0.6" />
                <rect x="205" y="165" width="30" height="30" rx="2" fill="url(#circuitGradient)" opacity="0.6" />
                <rect x="165" y="205" width="30" height="30" rx="2" fill="url(#circuitGradient)" opacity="0.6" />
                <rect x="205" y="205" width="30" height="30" rx="2" fill="url(#circuitGradient)" opacity="0.6" />
                {/* Chip pins - top */}
                <rect x="165" y="140" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="180" y="140" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="195" y="140" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="210" y="140" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                {/* Chip pins - bottom */}
                <rect x="165" y="248" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="180" y="248" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="195" y="248" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="210" y="248" width="8" height="12" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                {/* Chip pins - left */}
                <rect x="135" y="165" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="135" y="185" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="135" y="205" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                {/* Chip pins - right */}
                <rect x="253" y="165" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="253" y="185" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
                <rect x="253" y="205" width="12" height="8" rx="1" fill="url(#pinGradient)" opacity="0.7" />
              </g>

              {/* Orbiting elements */}
              <g className="animate-spin-slow" style={{ animationDuration: '20s', transformOrigin: '200px 200px' }}>
                <circle cx="200" cy="70" r="8" fill="#0052D9" opacity="0.8" />
                <circle cx="330" cy="200" r="6" fill="cyan-500" opacity="0.6" />
                <circle cx="200" cy="330" r="10" fill="#E60012" opacity="0.4" />
                <circle cx="70" cy="200" r="7" fill="#0052D9" opacity="0.7" />
              </g>

              {/* Connection lines */}
              <g stroke="url(#semiLineGradient)" strokeWidth="1" opacity="0.3">
                <line x1="200" y1="70" x2="200" y2="140" />
                <line x1="330" y1="200" x2="260" y2="200" />
                <line x1="200" y1="330" x2="200" y2="260" />
                <line x1="70" y1="200" x2="140" y2="200" />
              </g>

              {/* Data flow indicators */}
              <g className="animate-pulse">
                <rect x="260" y="90" width="45" height="6" rx="3" fill="#0052D9" opacity="0.5" />
                <rect x="270" y="105" width="35" height="6" rx="3" fill="#0052D9" opacity="0.4" />
                <rect x="265" y="120" width="40" height="6" rx="3" fill="#0052D9" opacity="0.3" />
              </g>

              <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                <rect x="95" y="275" width="45" height="6" rx="3" fill="cyan-500" opacity="0.5" />
                <rect x="105" y="290" width="35" height="6" rx="3" fill="cyan-500" opacity="0.4" />
                <rect x="100" y="305" width="40" height="6" rx="3" fill="cyan-500" opacity="0.3" />
              </g>

              {/* Decorative dots */}
              <circle cx="100" cy="100" r="3" fill="white" opacity="0.3" />
              <circle cx="300" cy="100" r="2" fill="white" opacity="0.4" />
              <circle cx="100" cy="300" r="2" fill="white" opacity="0.3" />
              <circle cx="300" cy="300" r="3" fill="white" opacity="0.4" />
              <circle cx="340" cy="160" r="2" fill="#0052D9" opacity="0.5" />
              <circle cx="60" cy="240" r="3" fill="cyan-500" opacity="0.4" />

              {/* Gradients */}
              <defs>
                <radialGradient id="semiGradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(150)">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="#0052D9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="semiGradient2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(0) scale(100)">
                  <stop stopColor="cyan-500" />
                  <stop offset="1" stopColor="cyan-500" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="chipGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="cyan-400" />
                </linearGradient>
                <linearGradient id="circuitGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="cyan-400" />
                  <stop offset="1" stopColor="#0052D9" />
                </linearGradient>
                <linearGradient id="pinGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="cyan-500" />
                </linearGradient>
                <linearGradient id="semiLineGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0052D9" />
                  <stop offset="1" stopColor="cyan-500" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
