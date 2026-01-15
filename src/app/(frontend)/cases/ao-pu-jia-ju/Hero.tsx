import { ChevronRight } from 'lucide-react'

// Home Furnishing themed SVG illustration
function HomeFurnishingSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="180" fill="url(#cardGradient)" opacity="0.3">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Home Icon */}
      <g transform="translate(250, 80)">
        {/* House shape */}
        <path d="M-40 20 L0 -15 L40 20 L40 50 L-40 50 Z" fill="none" stroke="url(#amberGradient)" strokeWidth="3" strokeLinejoin="round">
          <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
        </path>
        {/* Door */}
        <rect x="-10" y="25" width="20" height="25" fill="url(#amberGradient)" opacity="0.6" />
        {/* Window */}
        <rect x="-30" y="25" width="12" height="12" fill="url(#tealGradient)" opacity="0.4" rx="1" />
        <rect x="18" y="25" width="12" height="12" fill="url(#tealGradient)" opacity="0.4" rx="1" />
      </g>

      {/* Central Hub - Digital Platform */}
      <g transform="translate(250, 200)">
        <circle cx="0" cy="0" r="45" fill="url(#amberGradient)" opacity="0.9" />
        <circle cx="0" cy="0" r="38" fill="#1a1a2e" />
        {/* Smart Home Icon */}
        <rect x="-12" y="-12" width="24" height="24" rx="4" fill="none" stroke="url(#amberGradient)" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="8" fill="url(#tealGradient)" opacity="0.6">
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Data Flow Lines - Curved connections */}
      <g fill="none" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2">
        <path d="M250 155 Q 180 155 130 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M250 155 Q 320 155 370 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M250 245 Q 180 245 130 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M250 245 Q 320 245 370 200">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - ERP */}
      <g transform="translate(80, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">ERP系统</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">企业资源统筹</text>
        {/* Database Icon */}
        <ellipse cx="50" cy="60" rx="8" ry="3" fill="#f59e0b" opacity="0.8" />
        <path d="M42 60 L42 66" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
        <path d="M58 60 L58 66" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
        <ellipse cx="50" cy="66" rx="8" ry="3" fill="#f59e0b" opacity="0.8" />
      </g>

      {/* Top Right - WMS */}
      <g transform="translate(320, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">WMS系统</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">仓储精细管理</text>
        {/* Warehouse Icon */}
        <rect x="42" y="56" width="16" height="10" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.8" rx="1" />
        <path d="M42 60 L58 60 M46 56 L46 66 M50 56 L50 66 M54 56 L54 66" stroke="#14b8a6" strokeWidth="1" opacity="0.8" />
      </g>

      {/* Bottom Left - Smart Home */}
      <g transform="translate(80, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">智能制造</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">柔性化生产</text>
        {/* Gear Icon */}
        <circle cx="50" cy="60" r="6" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
        <circle cx="50" cy="60" r="2" fill="#f59e0b" opacity="0.8" />
        <path d="M50 52 L50 54 M50 66 L50 68 M42 60 L44 60 M56 60 L58 60" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Bottom Right - Supply Chain */}
      <g transform="translate(320, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">供应链</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">全链路协同</text>
        {/* Link Icon */}
        <circle cx="45" cy="60" r="4" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.8" />
        <circle cx="55" cy="60" r="4" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.8" />
        <line x1="49" y1="60" x2="51" y2="60" stroke="#14b8a6" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Floating Particles */}
      <g fill="#f59e0b" opacity="0.4">
        <circle cx="150" cy="100" r="3">
          <animate attributeName="cy" values="100;90;100" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="320" r="2.5">
          <animate attributeName="cy" values="320;310;320" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="220" r="2">
          <animate attributeName="cy" values="220;210;220" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="180" r="2">
          <animate attributeName="cy" values="180;170;180" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="360" width="40" height="3" rx="1.5" fill="url(#amberGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="360" width="25" height="3" rx="1.5" fill="url(#tealGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="360" width="35" height="3" rx="1.5" fill="url(#amberGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 家居</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              奥普家居
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              集成吊顶、浴霸、照明及智能家居系统领军企业。通过 ERP 与 WMS 深度集成，
              构建多品类、小批量、柔性化交付的数字化运营底座。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium border border-amber-500/30">
                ERP&WMS集成
              </span>
              <span className="px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium border border-amber-500/30">
                智能家居
              </span>
              <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full text-teal-300 text-sm font-medium border border-teal-500/30">
                柔性制造
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
              <HomeFurnishingSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
