import { ChevronRight } from 'lucide-react'

// Cosmetics/Skincare themed SVG illustration
function CosmeticsSkincareSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
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
      <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(251, 113, 133, 0.2)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
      </circle>

      {/* Central Product - Skincare Bottle */}
      <g transform="translate(250, 200)">
        {/* Bottle Body */}
        <rect x="-40" y="-60" width="80" height="120" rx="15" fill="url(#roseGradient)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.8;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Bottle Neck */}
        <rect x="-20" y="-80" width="40" height="25" fill="url(#pinkGradient)" opacity="0.8" />
        {/* Bottle Cap */}
        <rect x="-25" y="-95" width="50" height="20" rx="8" fill="url(#roseGradient)" />
        {/* Label Area */}
        <rect x="-30" y="-30" width="60" height="60" rx="8" fill="rgba(255,255,255,0.2)" />
        {/* Camellia Flower Icon */}
        <circle cx="0" cy="0" r="20" fill="url(#roseGradient)" opacity="0.6">
          <animate attributeName="r" values="20;23;20" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Petals */}
        <ellipse cx="-12" cy="-8" rx="8" ry="12" fill="url(#pinkGradient)" opacity="0.5" transform="rotate(-30 -12 -8)" />
        <ellipse cx="12" cy="-8" rx="8" ry="12" fill="url(#pinkGradient)" opacity="0.5" transform="rotate(30 12 -8)" />
        <ellipse cx="0" cy="10" rx="8" ry="12" fill="url(#pinkGradient)" opacity="0.5" />
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - Consolidated Financial Statements */}
      <g transform="translate(70, 100)">
        <rect x="0" y="0" width="110" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251, 113, 133, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="100;95;100" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">合并报表</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">多会计准则</text>
        <text x="55" y="56" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">自动化编制</text>
        {/* Document Icon */}
        <rect x="8" y="8" width="12" height="16" fill="#fb7185" opacity="0.8" rx="2" />
      </g>

      {/* Top Right - Multi-System Integration */}
      <g transform="translate(320, 100)">
        <rect x="0" y="0" width="110" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(244, 114, 182, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="100;95;100" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">系统集成</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">ERP + 供应链</text>
        <text x="55" y="56" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">数据贯通</text>
        {/* Link Icon */}
        <circle cx="18" cy="16" r="5" fill="#f472b6" opacity="0.8" />
        <circle cx="30" cy="16" r="5" fill="#f472b6" opacity="0.8" />
        <line x1="23" y1="16" x2="25" y2="16" stroke="#f472b6" strokeWidth="2" opacity="0.8" />
      </g>

      {/* Bottom Left - Expense Management */}
      <g transform="translate(70, 230)">
        <rect x="0" y="0" width="110" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(251, 113, 133, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="230;235;230" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">费用管控</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">预算执行监控</text>
        <text x="55" y="56" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">报销标准化</text>
        {/* Chart Icon */}
        <rect x="8" y="40" width="6" height="16" fill="#fb7185" opacity="0.8" />
        <rect x="16" y="32" width="6" height="24" fill="#fb7185" opacity="0.8" />
        <rect x="24" y="36" width="6" height="20" fill="#fb7185" opacity="0.8" />
      </g>

      {/* Bottom Right - Group Finance */}
      <g transform="translate(320, 230)">
        <rect x="0" y="0" width="110" height="70" rx="8" fill="url(#cardGradient)" stroke="rgba(244, 114, 182, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="230;235;230" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">集团财务</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">集中化管理</text>
        <text x="55" y="56" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">标准化运营</text>
        {/* Building Icon */}
        <rect x="8" y="8" width="24" height="20" fill="#f472b6" opacity="0.8" rx="2" />
        <rect x="12" y="12" width="4" height="4" fill="white" opacity="0.5" />
        <rect x="18" y="12" width="4" height="4" fill="white" opacity="0.5" />
        <rect x="24" y="12" width="4" height="4" fill="white" opacity="0.5" />
      </g>

      {/* Floating Particles - Natural Elements */}
      <g fill="#fb7185" opacity="0.4">
        {/* Leaves */}
        <ellipse cx="120" cy="150" rx="8" ry="4" transform="rotate(-30 120 150)">
          <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="380" cy="320" rx="6" ry="3" transform="rotate(45 380 320)">
          <animate attributeName="cy" values="320;310;320" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="150" cy="280" rx="5" ry="3" transform="rotate(-15 150 280)">
          <animate attributeName="cy" values="280;270;280" dur="3.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="350" cy="130" rx="6" ry="3" transform="rotate(20 350 130)">
          <animate attributeName="cy" values="130;120;130" dur="4.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Small petals */}
        <ellipse cx="180" cy="180" rx="4" ry="2" fill="#f472b6">
          <animate attributeName="cy" values="180;172;180" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="320" cy="220" rx="4" ry="2" fill="#f472b6">
          <animate attributeName="cy" values="220;212;220" dur="3.5s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Connection Lines - Data Flow */}
      <g fill="none" stroke="rgba(251, 113, 133, 0.3)" strokeWidth="2">
        <path d="M125 135 Q 180 135 200 165">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M375 135 Q 320 135 300 165">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M125 265 Q 180 265 200 235">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M375 265 Q 320 265 300 235">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Bottom Tech Accents */}
      <g opacity="0.6">
        <rect x="180" y="370" width="40" height="3" rx="1.5" fill="url(#roseGradient)">
          <animate attributeName="width" values="40;50;40" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="230" y="370" width="25" height="3" rx="1.5" fill="url(#pinkGradient)" opacity="0.5">
          <animate attributeName="width" values="25;35;25" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="265" y="370" width="35" height="3" rx="1.5" fill="url(#roseGradient)" opacity="0.4">
          <animate attributeName="width" values="35;45;35" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(225, 29, 72, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-rose-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 化妆品</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              林清轩
              <span className="block mt-2 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              专注于天然植物护肤产品的高端品牌，
              以山茶花润肤油为核心，提供全品类中式高端护肤解决方案。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium border border-rose-500/30">
                多会计准则合并报表
              </span>
              <span className="px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full text-rose-300 text-sm font-medium border border-rose-500/30">
                集团财务集中化
              </span>
              <span className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-pink-300 text-sm font-medium border border-pink-500/30">
                业财一体管控
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-rose-500/20">
              <CosmeticsSkincareSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
