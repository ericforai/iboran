import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(234, 179, 8, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>国资 / 区县国资</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              吴淞口投资<br />
              <span className="text-amber-400 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              产业投资、资产管理、园区开发与运营服务。构建统一业财融合平台，实现国有资产精细化管控。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 text-sm font-medium">
                产业投资
              </div>
              <div className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 text-amber-300 text-sm font-medium">
                资产管理
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-600/30 text-blue-200 text-sm font-medium">
                园区运营
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Investment/Finance Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="investNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="investGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EAB308" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#CA8A04" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="investAmber" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background geometric shapes */}
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#investGold)" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.15" />

              {/* Building/Office illustration */}
              <g filter="url(#glow)">
                {/* Main building */}
                <rect x="140" y="140" width="120" height="140" rx="4" fill="url(#investNavy)" opacity="0.9" />

                {/* Building top decoration */}
                <rect x="135" y="130" width="130" height="15" rx="2" fill="url(#investGold)" opacity="0.8" />

                {/* Windows - grid pattern */}
                <g fill="#60A5FA" opacity="0.6">
                  {/* Row 1 */}
                  <rect x="155" y="160" width="20" height="25" rx="2" />
                  <rect x="190" y="160" width="20" height="25" rx="2" />
                  <rect x="225" y="160" width="20" height="25" rx="2" />
                  {/* Row 2 */}
                  <rect x="155" y="200" width="20" height="25" rx="2" />
                  <rect x="190" y="200" width="20" height="25" rx="2" />
                  <rect x="225" y="200" width="20" height="25" rx="2" />
                  {/* Row 3 */}
                  <rect x="155" y="240" width="20" height="25" rx="2" />
                  <rect x="190" y="240" width="20" height="25" rx="2" />
                  <rect x="225" y="240" width="20" height="25" rx="2" />
                </g>

                {/* Door */}
                <rect x="180" y="270" width="40" height="10" rx="2" fill="url(#investGold)" opacity="0.7" />
              </g>

              {/* Investment chart elements */}
              <g filter="url(#glow)">
                {/* Upward trend line */}
                <path d="M80 280 L140 260 L200 240 L260 200 L320 160"
                      stroke="url(#investGold)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />

                {/* Data points */}
                <circle cx="80" cy="280" r="6" fill="#EAB308" opacity="0.9" />
                <circle cx="140" cy="260" r="6" fill="#EAB308" opacity="0.9" />
                <circle cx="200" cy="240" r="6" fill="#EAB308" opacity="0.9" />
                <circle cx="260" cy="200" r="6" fill="#EAB308" opacity="0.9" />
                <circle cx="320" cy="160" r="8" fill="url(#investAmber)" opacity="0.95" />
              </g>

              {/* Coin/Asset symbols */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                <ellipse cx="70" cy="100" rx="25" ry="8" fill="#CA8A04" opacity="0.5" transform="rotate(-15 70 100)" />
                <ellipse cx="70" cy="95" rx="25" ry="8" fill="url(#investGold)" opacity="0.6" transform="rotate(-15 70 95)" />
                <text x="65" y="100" fill="#92400E" fontSize="12" fontWeight="bold" opacity="0.7" transform="rotate(-15 70 95)">¥</text>
              </g>

              <g className="animate-float" style={{ animationDelay: '1s' }}>
                <ellipse cx="330" cy="280" rx="20" ry="6" fill="#CA8A04" opacity="0.4" transform="rotate(20 330 280)" />
                <ellipse cx="330" cy="276" rx="20" ry="6" fill="url(#investGold)" opacity="0.5" transform="rotate(20 330 276)" />
                <text x="326" y="280" fill="#92400E" fontSize="10" fontWeight="bold" opacity="0.6" transform="rotate(20 330 276)">¥</text>
              </g>

              {/* Growth arrow */}
              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                <path d="M300 80 L320 60 L340 80" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                <line x1="320" y1="60" x2="320" y2="95" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              </g>

              {/* Shield for security/trust */}
              <g className="animate-float" style={{ animationDelay: '1.2s' }} opacity="0.4">
                <path d="M90 200 C90 185, 105 175, 105 175 L105 195 C105 210, 90 220, 90 220 C90 220, 75 210, 75 195 L75 175 C75 175, 90 185, 90 200 Z"
                      fill="#3B82F6" opacity="0.5" />
              </g>

              {/* Floating particles */}
              <circle cx="130" cy="70" r="4" fill="#EAB308" opacity="0.5" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="280" cy="320" r="3" fill="#3B82F6" opacity="0.6" className="animate-float" style={{ animationDelay: '0.6s' }} />
              <circle cx="350" cy="220" r="5" fill="#EAB308" opacity="0.4" className="animate-float" style={{ animationDelay: '0.9s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
