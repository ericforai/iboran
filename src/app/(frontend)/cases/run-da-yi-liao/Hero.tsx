import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#1A1F3C] via-[#2D1F4E] to-[#1A1F3C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-violet-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>医药与医疗 / 体外诊断</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              润达医疗<br />
              <span className="text-violet-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              润达医疗提供体外诊断产品、实验室综合服务及医疗信息化解决方案。通过数智化平台，确保企业在严苛监管下实现效率与安全的双重跨越。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-violet-500/20 backdrop-blur-sm rounded-full border border-violet-500/30 text-violet-300 text-sm font-medium">
                体外诊断 IVD
              </div>
              <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium">
                实验室服务
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                医疗信息化
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Medical Diagnostics Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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

              {/* Background circles */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#violetGradient)" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#cyanGradient)" strokeWidth="1" opacity="0.2" />

              {/* Test tube */}
              <g filter="url(#glow)" opacity="0.9">
                {/* Test tube body */}
                <rect x="175" y="100" width="50" height="180" rx="25" fill="url(#violetGradient)" opacity="0.4" />
                {/* Test tube opening */}
                <ellipse cx="200" cy="100" rx="25" ry="8" fill="url(#violetGradient)" opacity="0.6" />
                {/* Liquid level */}
                <path d="M180 150 Q200 145 220 150 L220 270 Q200 275 180 270 Z" fill="url(#cyanGradient)" opacity="0.7" />
                {/* Bubbles */}
                <circle cx="195" cy="200" r="6" fill="white" opacity="0.5" className="animate-float" style={{ animationDelay: '0.2s' }} />
                <circle cx="210" cy="230" r="4" fill="white" opacity="0.4" className="animate-float" style={{ animationDelay: '0.5s' }} />
                <circle cx="200" cy="260" r="5" fill="white" opacity="0.3" className="animate-float" style={{ animationDelay: '0.8s' }} />
              </g>

              {/* DNA helix strand */}
              <path d="M120 140 Q140 160 120 180 Q100 200 120 220" stroke="url(#cyanGradient)" strokeWidth="3" fill="none" opacity="0.6" />
              <path d="M280 140 Q260 160 280 180 Q300 200 280 220" stroke="url(#cyanGradient)" strokeWidth="3" fill="none" opacity="0.6" />
              <line x1="125" y1="150" x2="275" y2="150" stroke="url(#cyanGradient)" strokeWidth="1" opacity="0.4" />
              <line x1="122" y1="170" x2="278" y2="170" stroke="url(#cyanGradient)" strokeWidth="1" opacity="0.4" />
              <line x1="122" y1="190" x2="278" y2="190" stroke="url(#cyanGradient)" strokeWidth="1" opacity="0.4" />
              <line x1="125" y1="210" x2="275" y2="210" stroke="url(#cyanGradient)" strokeWidth="1" opacity="0.4" />

              {/* Microscope lens representation */}
              <circle cx="320" cy="120" r="40" fill="url(#violetGradient)" opacity="0.3" />
              <circle cx="320" cy="120" r="30" fill="url(#violetGradient)" opacity="0.2" />
              <circle cx="320" cy="120" r="20" fill="url(#cyanGradient)" opacity="0.4" />
              <circle cx="320" cy="120" r="10" fill="url(#cyanGradient)" opacity="0.6" />

              {/* Pulse line - representing heartbeat/vital signs */}
              <polyline points="60,300 100,300 110,280 120,320 130,290 140,300 200,300" stroke="url(#violetGradient)" strokeWidth="2" fill="none" opacity="0.5" />
              <polyline points="200,300 260,300 270,280 280,320 290,290 300,300 360,300" stroke="url(#violetGradient)" strokeWidth="2" fill="none" opacity="0.5" />

              {/* Small data particles */}
              <circle cx="80" cy="100" r="4" fill="#8B5CF6" opacity="0.4" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="320" cy="280" r="5" fill="#06B6D4" opacity="0.5" className="animate-float" style={{ animationDelay: '0.7s' }} />
              <circle cx="350" cy="200" r="3" fill="#A855F7" opacity="0.4" className="animate-float" style={{ animationDelay: '1s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
