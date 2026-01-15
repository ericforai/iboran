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
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>医药与医疗 / CDMO/CRO服务</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              斯丹姆医药开发<br />
              <span className="text-cyan-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              医药与医疗健康行业正处于高合规要求与数字化转型的交汇点。从研发创新、合规生产到精准流通，企业亟需构建一套符合 GXP 标准的一体化管理体系。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
                GXP 标准合规
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                全链路追溯
              </div>
              <div className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 text-teal-300 text-sm font-medium">
                精细化效期管理
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Medical/Pharma Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="pillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0EA5E9" />
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

              {/* Background circle */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#dnaGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#dnaGradient)" strokeWidth="1" opacity="0.2" />

              {/* DNA Helix - Left strand */}
              <path d="M120 80 Q150 120 120 160 Q90 200 120 240 Q150 280 120 320"
                    fill="none" stroke="url(#dnaGradient)" strokeWidth="4" strokeLinecap="round"
                    filter="url(#glow)" opacity="0.8" />

              {/* DNA Helix - Right strand */}
              <path d="M280 80 Q250 120 280 160 Q310 200 280 240 Q250 280 280 320"
                    fill="none" stroke="url(#dnaGradient)" strokeWidth="4" strokeLinecap="round"
                    filter="url(#glow)" opacity="0.8" />

              {/* DNA Base pairs */}
              <line x1="130" y1="100" x2="270" y2="100" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.4" />
              <line x1="115" y1="140" x2="285" y2="140" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5" />
              <line x1="105" y1="180" x2="295" y2="180" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="100" y1="200" x2="300" y2="200" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.7" />
              <line x1="105" y1="220" x2="295" y2="220" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
              <line x1="115" y1="260" x2="285" y2="260" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.5" />
              <line x1="130" y1="300" x2="270" y2="300" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.4" />

              {/* Base pair dots */}
              <circle cx="130" cy="100" r="6" fill="#06B6D4" opacity="0.8" />
              <circle cx="270" cy="100" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="115" cy="140" r="6" fill="#06B6D4" opacity="0.8" />
              <circle cx="285" cy="140" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="105" cy="180" r="6" fill="#06B6D4" opacity="0.8" />
              <circle cx="295" cy="180" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="100" cy="200" r="8" fill="#06B6D4" opacity="0.9" />
              <circle cx="300" cy="200" r="8" fill="#3B82F6" opacity="0.9" />
              <circle cx="105" cy="220" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="295" cy="220" r="6" fill="#06B6D4" opacity="0.8" />
              <circle cx="115" cy="260" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="285" cy="260" r="6" fill="#06B6D4" opacity="0.8" />
              <circle cx="130" cy="300" r="6" fill="#3B82F6" opacity="0.8" />
              <circle cx="270" cy="300" r="6" fill="#06B6D4" opacity="0.8" />

              {/* Medical cross icon - top left */}
              <g className="animate-spin-slow" style={{ transformOrigin: '80px 80px' }}>
                <rect x="70" y="65" width="20" height="30" rx="3" fill="url(#pillGradient)" opacity="0.6" />
                <rect x="60" y="75" width="40" height="10" rx="3" fill="url(#pillGradient)" opacity="0.6" />
              </g>

              {/* Pill - bottom right */}
              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <ellipse cx="320" cy="320" rx="25" ry="12" fill="url(#pillGradient)" opacity="0.5" />
                <rect x="295" y="308" width="25" height="24" fill="url(#pillGradient)" opacity="0.5" />
                <line x1="320" y1="308" x2="320" y2="332" stroke="white" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Floating data points */}
              <circle cx="60" cy="150" r="4" fill="#06B6D4" opacity="0.4" className="animate-float" style={{ animationDelay: '0.5s' }} />
              <circle cx="340" cy="100" r="3" fill="#3B82F6" opacity="0.5" className="animate-float" style={{ animationDelay: '1.5s' }} />
              <circle cx="50" cy="280" r="5" fill="#06B6D4" opacity="0.3" className="animate-float" style={{ animationDelay: '2s' }} />
              <circle cx="350" cy="250" r="4" fill="#3B82F6" opacity="0.4" className="animate-float" style={{ animationDelay: '0.8s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
