import { ChevronRight } from 'lucide-react'

// Sports/Energy themed SVG illustration
function SportsEnergySVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
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
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="-360 250 200" dur="15s" repeatCount="indefinite" />
      </circle>

      {/* Running Motion Icon */}
      <g transform="translate(250, 90)">
        {/* Running figure silhouette */}
        <circle cx="0" cy="-20" r="8" fill="url(#orangeGradient)" opacity="0.8">
          <animate attributeName="cx" values="0;3;-3;0" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <path d="M-2 -10 L-8 5 L-15 3" stroke="url(#orangeGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="d" values="M-2 -10 L-8 5 L-15 3;M2 -10 L8 5 L15 3;M-2 -10 L-8 5 L-15 3" dur="0.8s" repeatCount="indefinite" />
        </path>
        <path d="M-2 -10 L0 0 L-5 15" stroke="url(#blueGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="d" values="M-2 -10 L0 0 L-5 15;M2 -10 L0 0 L5 15;M-2 -10 L0 0 L-5 15" dur="0.8s" repeatCount="indefinite" />
        </path>
        {/* Motion lines */}
        <line x1="-25" y1="-5" x2="-15" y2="-5" stroke="url(#orangeGradient)" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="-28" y1="5" x2="-18" y2="5" stroke="url(#orangeGradient)" strokeWidth="2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0;0.4" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Central Hub - Digital Platform */}
      <g transform="translate(250, 200)">
        <circle cx="0" cy="0" r="45" fill="url(#orangeGradient)" opacity="0.9" />
        <circle cx="0" cy="0" r="38" fill="#1a1a2e" />
        {/* Pulse/Rhythm line */}
        <path d="M-20 0 L-10 0 L-5 -8 L0 8 L5 -8 L10 8 L20 0" fill="none" stroke="url(#orangeGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Data Flow Lines - Curved connections */}
      <g fill="none" stroke="rgba(249, 115, 22, 0.4)" strokeWidth="2">
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
      {/* Top Left - Sales Management */}
      <g transform="translate(80, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">销售管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">全渠道销售</text>
        {/* Cart Icon */}
        <path d="M40 55 L45 55 L47 62 L53 62 L55 55 L60 55" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Top Right - Inventory Management */}
      <g transform="translate(320, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">库存管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">实时库存同步</text>
        {/* Box Stack Icon */}
        <rect x="42" y="54" width="16" height="6" fill="#3b82f6" opacity="0.8" rx="1" />
        <rect x="42" y="60" width="16" height="6" fill="#3b82f6" opacity="0.5" rx="1" />
      </g>

      {/* Bottom Left - Supply Chain */}
      <g transform="translate(80, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">供应链</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">高效协同</text>
        {/* Link Chain */}
        <circle cx="43" cy="60" r="4" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
        <circle cx="57" cy="60" r="4" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Bottom Right - Financial Integration */}
      <g transform="translate(320, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">业财融合</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">财务业务一体</text>
        {/* Chart Icon */}
        <rect x="42" y="58" width="4" height="8" fill="#3b82f6" opacity="0.8" />
        <rect x="48" y="54" width="4" height="12" fill="#3b82f6" opacity="0.8" />
        <rect x="54" y="50" width="4" height="16" fill="#3b82f6" opacity="0.8" />
      </g>

      {/* Floating Particles - Energy dots */}
      <g fill="#f97316" opacity="0.4">
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
        <circle cx="200" cy="340" r="2.5">
          <animate attributeName="cy" values="340;330;340" dur="3.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="360" width="40" height="3" rx="1.5" fill="url(#orangeGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="360" width="25" height="3" rx="1.5" fill="url(#blueGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="360" width="35" height="3" rx="1.5" fill="url(#orangeGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(234, 88, 12, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 服装鞋帽</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              上海优动运动用品
              <span className="block mt-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              运动用品销售与配套服务头部企业。通过一体化 ERP 解决方案，
              实现业财融合、供应链优化，构建精细化管理体系。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 text-sm font-medium border border-orange-500/30">
                业财一体化
              </span>
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 text-sm font-medium border border-orange-500/30">
                供应链协同
              </span>
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
                精细化管理
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20">
              <SportsEnergySVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
