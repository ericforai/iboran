import { ChevronRight } from 'lucide-react'

// Card/Creative themed SVG illustration
function CardCreativeSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="indigoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
          <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
          <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
        </linearGradient>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="180" fill="url(#cardGradient)" opacity="0.3">
        <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Main Trading Card */}
      <g transform="translate(250, 200)">
        {/* Card Base */}
        <rect x="-70" y="-100" width="140" height="200" rx="12" fill="url(#holoGradient)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.8;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Card Border */}
        <rect x="-66" y="-96" width="132" height="192" rx="10" fill="#1a1a2e" />
        {/* Card Header */}
        <rect x="-60" y="-90" width="120" height="50" rx="8" fill="url(#purpleGradient)" opacity="0.8" />
        {/* Card Title Area */}
        <rect x="-50" y="-75" width="80" height="20" fill="rgba(255,255,255,0.2)" rx="4" />
        {/* Card Image Area */}
        <rect x="-50" y="-30" width="100" height="80" rx="6" fill="url(#indigoGradient)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.7;0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        {/* Star/Holo Effect */}
        <circle cx="0" cy="10" r="15" fill="url(#holoGradient)" opacity="0.6">
          <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Card Stats */}
        <rect x="-50" y="55" width="40" height="30" rx="4" fill="url(#purpleGradient)" opacity="0.6" />
        <rect x="10" y="55" width="40" height="30" rx="4" fill="url(#indigoGradient)" opacity="0.6" />
        {/* Card Footer */}
        <rect x="-50" y="75" width="100" height="12" rx="3" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Small Cards - Floating Around */}
      {/* Top Left Card */}
      <g transform="translate(80, 100)">
        <rect x="-25" y="-35" width="50" height="70" rx="6" fill="url(#cardGradient)" stroke="url(#purpleGradient)" strokeWidth="2">
          <animate attributeName="y" values="100;95;100" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="-20" y="-30" width="40" height="25" rx="4" fill="url(#purpleGradient)" opacity="0.5" />
        <rect x="-20" y="0" width="40" height="25" rx="4" fill="url(#indigoGradient)" opacity="0.3" />
      </g>

      {/* Top Right Card */}
      <g transform="translate(420, 100)">
        <rect x="-25" y="-35" width="50" height="70" rx="6" fill="url(#cardGradient)" stroke="url(#indigoGradient)" strokeWidth="2">
          <animate attributeName="y" values="100;95;100" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="-20" y="-30" width="40" height="25" rx="4" fill="url(#indigoGradient)" opacity="0.5" />
        <rect x="-20" y="0" width="40" height="25" rx="4" fill="url(#purpleGradient)" opacity="0.3" />
      </g>

      {/* Bottom Left Card */}
      <g transform="translate(80, 300)">
        <rect x="-25" y="-35" width="50" height="70" rx="6" fill="url(#cardGradient)" stroke="url(#indigoGradient)" strokeWidth="2">
          <animate attributeName="y" values="300;305;300" dur="3s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="-20" y="-30" width="40" height="25" rx="4" fill="url(#indigoGradient)" opacity="0.5" />
        <rect x="-20" y="0" width="40" height="25" rx="4" fill="url(#purpleGradient)" opacity="0.3" />
      </g>

      {/* Bottom Right Card */}
      <g transform="translate(420, 300)">
        <rect x="-25" y="-35" width="50" height="70" rx="6" fill="url(#cardGradient)" stroke="url(#purpleGradient)" strokeWidth="2">
          <animate attributeName="y" values="300;305;300" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="-20" y="-30" width="40" height="25" rx="4" fill="url(#purpleGradient)" opacity="0.5" />
        <rect x="-20" y="0" width="40" height="25" rx="4" fill="url(#indigoGradient)" opacity="0.3" />
      </g>

      {/* Sparkles/Stars - Collectible Effect */}
      <g fill="#8b5cf6" opacity="0.6">
        <path transform="translate(130, 150)" d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite" />
        </path>
        <path transform="translate(370, 250)" d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path transform="translate(150, 280)" d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
        </path>
        <path transform="translate(350, 130)" d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Connection Lines - Data Flow */}
      <g fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2">
        <path d="M130 135 Q 180 135 180 165">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M370 135 Q 320 135 320 165">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M130 335 Q 180 335 180 235">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M370 335 Q 320 335 320 235">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="370" width="40" height="3" rx="1.5" fill="url(#purpleGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="370" width="25" height="3" rx="1.5" fill="url(#indigoGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="370" width="35" height="3" rx="1.5" fill="url(#purpleGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 文创IP</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              优卡赏
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              专注于集换式卡牌游戏及收藏品设计开发的文化创意企业，
              产品具有多品类、短生命周期、强IP驱动的特点。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
                ERP全流程管理
              </span>
              <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
                OMS订单协同
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full text-indigo-300 text-sm font-medium border border-indigo-500/30">
                费用精细管控
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <CardCreativeSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
