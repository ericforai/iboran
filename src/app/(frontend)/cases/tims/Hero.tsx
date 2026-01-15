import { ChevronRight } from 'lucide-react'

// Coffee/Restaurant themed SVG illustration
function CoffeeRestaurantSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
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
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Coffee Cup */}
      <g transform="translate(250, 80)">
        {/* Cup body */}
        <path d="M-25 0 L-20 40 Q-20 50 0 50 L20 50 Q25 50 25 40 L25 0 Z" fill="none" stroke="url(#redGradient)" strokeWidth="3" />
        {/* Handle */}
        <path d="M25 10 Q38 10 38 25 Q38 40 25 35" fill="none" stroke="url(#redGradient)" strokeWidth="3" strokeLinecap="round" />
        {/* Steam */}
        <path d="M-10 -15 Q-8 -25 0 -30" stroke="url(#orangeGradient)" strokeWidth="2" fill="none" opacity="0.6">
          <animate attributeName="d" values="M-10 -15 Q-8 -25 0 -30;M-10 -20 Q-8 -30 0 -35;M-10 -15 Q-8 -25 0 -30" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M0 -15 Q2 -25 10 -30" stroke="url(#orangeGradient)" strokeWidth="2" fill="none" opacity="0.4">
          <animate attributeName="d" values="M0 -15 Q2 -25 10 -30;M0 -20 Q2 -30 10 -35;M0 -15 Q2 -25 10 -30" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M10 -15 Q12 -25 20 -30" stroke="url(#orangeGradient)" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="d" values="M10 -15 Q12 -25 20 -30;M10 -20 Q12 -30 20 -35;M10 -15 Q12 -25 20 -30" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Central Hub - Digital Platform */}
      <g transform="translate(250, 200)">
        <circle cx="0" cy="0" r="45" fill="url(#redGradient)" opacity="0.9" />
        <circle cx="0" cy="0" r="38" fill="#1a1a2e" />
        {/* Store Icon */}
        <rect x="-12" y="-10" width="10" height="20" fill="url(#orangeGradient)" opacity="0.6" rx="1" />
        <rect x="2" y="-10" width="10" height="20" fill="url(#orangeGradient)" opacity="0.6" rx="1" />
        <rect x="-12" y="14" width="24" height="4" fill="url(#redGradient)" opacity="0.8" rx="1" />
        {/* Door */}
        <rect x="-3" y="0" width="6" height="14" fill="url(#orangeGradient)" opacity="0.8" rx="1" />
      </g>

      {/* Data Flow Lines - Curved connections */}
      <g fill="none" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="2">
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
      {/* Top Left - Store Management */}
      <g transform="translate(80, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">门店管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">全生命周期</text>
        {/* Store Icon */}
        <rect x="45" y="54" width="10" height="10" fill="#ef4444" opacity="0.8" rx="1" />
        <rect x="48" y="57" width="4" height="4" fill="white" opacity="0.5" />
      </g>

      {/* Top Right - Asset Management */}
      <g transform="translate(320, 150)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="150;145;150" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">资产管理</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">全流程管控</text>
        {/* Tag Icon */}
        <rect x="43" y="56" width="14" height="8" fill="#f97316" opacity="0.8" rx="2" />
        <circle cx="50" cy="60" r="2" fill="white" opacity="0.5" />
      </g>

      {/* Bottom Left - SAP Integration */}
      <g transform="translate(80, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">SAP集成</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">数据互通</text>
        {/* Link Icon */}
        <circle cx="43" cy="60" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8" />
        <circle cx="57" cy="60" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8" />
        <line x1="47" y1="60" x2="53" y2="60" stroke="#ef4444" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Bottom Right - Budget Management */}
      <g transform="translate(320, 260)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="260;265;260" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">预算管控</text>
        <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">业务财务联动</text>
        {/* Chart Icon */}
        <rect x="42" y="58" width="4" height="8" fill="#f97316" opacity="0.8" />
        <rect x="48" y="54" width="4" height="12" fill="#f97316" opacity="0.8" />
        <rect x="54" y="50" width="4" height="16" fill="#f97316" opacity="0.8" />
      </g>

      {/* Floating Particles - Coffee beans */}
      <g fill="#ef4444" opacity="0.4">
        <ellipse cx="150" cy="100" rx="4" ry="2">
          <animate attributeName="cy" values="100;90;100" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="350" cy="320" rx="3" ry="2">
          <animate attributeName="cy" values="320;310;320" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="220" rx="3" ry="2">
          <animate attributeName="cy" values="220;210;220" dur="3.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="400" cy="180" rx="3" ry="2">
          <animate attributeName="cy" values="180;170;180" dur="4.5s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="360" width="40" height="3" rx="1.5" fill="url(#redGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="360" width="25" height="3" rx="1.5" fill="url(#orangeGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="360" width="35" height="3" rx="1.5" fill="url(#redGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 连锁餐饮</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              tims
              <span className="block mt-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              全球知名咖啡连锁品牌，提供咖啡、茶饮、烘焙食品及轻食服务。
              通过一体化数字运营平台，支撑规模化、精细化、智能化发展。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 text-sm font-medium border border-red-500/30">
                门店全周期管理
              </span>
              <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 text-sm font-medium border border-red-500/30">
                SAP深度集成
              </span>
              <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 text-sm font-medium border border-orange-500/30">
                业财一体
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
              <CoffeeRestaurantSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
