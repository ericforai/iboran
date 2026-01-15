import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
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
              <span>高科技 / IT服务</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              汇纳股份<br />
              <span className="text-cyan-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              商业客流分析系统、智慧商场解决方案、数据采集设备及大数据运营服务。构建统一数字化底座，实现多系统集成与业财深度融合。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
                商业客流分析
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                多系统集成
              </div>
              <div className="px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full border border-violet-500/30 text-violet-300 text-sm font-medium">
                大数据运营
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Data Analytics Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dataBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="dataCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0891B2" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="dataViolet" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background grid */}
              <g opacity="0.1">
                <line x1="50" y1="350" x2="350" y2="350" stroke="#3B82F6" strokeWidth="1" />
                <line x1="50" y1="280" x2="350" y2="280" stroke="#3B82F6" strokeWidth="1" />
                <line x1="50" y1="210" x2="350" y2="210" stroke="#3B82F6" strokeWidth="1" />
                <line x1="50" y1="140" x2="350" y2="140" stroke="#3B82F6" strokeWidth="1" />
                <line x1="50" y1="70" x2="350" y2="70" stroke="#3B82F6" strokeWidth="1" />
              </g>

              {/* Data bars - animated style */}
              <g filter="url(#glow)">
                {/* Bar 1 */}
                <rect x="80" y="200" width="40" height="120" rx="4" fill="url(#dataBlue)" opacity="0.8" />
                {/* Bar 2 */}
                <rect x="140" y="160" width="40" height="160" rx="4" fill="url(#dataCyan)" opacity="0.85" />
                {/* Bar 3 */}
                <rect x="200" y="120" width="40" height="200" rx="4" fill="url(#dataViolet)" opacity="0.9" />
                {/* Bar 4 */}
                <rect x="260" y="180" width="40" height="140" rx="4" fill="url(#dataBlue)" opacity="0.75" />
              </g>

              {/* Data line graph overlay */}
              <path d="M70 220 L120 180 L170 130 L220 150 L270 100 L320 120"
                    stroke="url(#dataCyan)" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round" strokeLinejoin="round" />

              {/* Data points on line */}
              <circle cx="70" cy="220" r="6" fill="#06B6D4" opacity="0.9" />
              <circle cx="120" cy="180" r="6" fill="#06B6D4" opacity="0.9" />
              <circle cx="170" cy="130" r="6" fill="#06B6D4" opacity="0.9" />
              <circle cx="220" cy="150" r="6" fill="#06B6D4" opacity="0.9" />
              <circle cx="270" cy="100" r="6" fill="#06B6D4" opacity="0.9" />
              <circle cx="320" cy="120" r="6" fill="#06B6D4" opacity="0.9" />

              {/* Floating data particles */}
              <circle cx="100" cy="80" r="4" fill="#3B82F6" opacity="0.6" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="250" cy="60" r="3" fill="#06B6D4" opacity="0.7" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="320" cy="250" r="5" fill="#8B5CF6" opacity="0.5" className="animate-float" style={{ animationDelay: '0.9s' }} />
              <circle cx="60" cy="300" r="4" fill="#3B82F6" opacity="0.4" className="animate-float" style={{ animationDelay: '1.2s' }} />

              {/* Data flow lines */}
              <g opacity="0.3">
                <path d="M50 320 L350 320" stroke="url(#dataBlue)" strokeWidth="2" strokeDasharray="4,4" />
              </g>

              {/* Circular data indicators */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <circle cx="330" cy="70" r="20" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.5" />
                <circle cx="330" cy="70" r="12" fill="#06B6D4" opacity="0.3" />
              </g>

              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                <circle cx="70" cy="330" r="16" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
                <circle cx="70" cy="330" r="10" fill="#8B5CF6" opacity="0.25" />
              </g>

              {/* Binary code decorative elements */}
              <text x="95" y="50" fill="#3B82F6" opacity="0.2" fontSize="10" fontFamily="monospace">10110</text>
              <text x="280" y="320" fill="#06B6D4" opacity="0.2" fontSize="10" fontFamily="monospace">01011</text>
              <text x="320" y="180" fill="#8B5CF6" opacity="0.15" fontSize="10" fontFamily="monospace">11001</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
