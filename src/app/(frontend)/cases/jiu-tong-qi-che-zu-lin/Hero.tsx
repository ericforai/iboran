import { ChevronRight } from 'lucide-react'

// Car Rental/Automotive themed SVG illustration
function CarRentalAutomotiveSVG() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradAuto" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="tealGradAuto" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="cyanGradAuto" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>

      {/* Background Elements */}
      <circle cx="250" cy="200" r="160" fill="rgba(59, 130, 246, 0.05)">
        <animate attributeName="r" values="160;170;160" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="200" r="130" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="2" strokeDasharray="8 4">
        <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="25s" repeatCount="indefinite" />
      </circle>

      {/* Central Hub - Digital Car Rental Platform */}
      <g transform="translate(250, 200)">
        {/* Platform Base */}
        <rect x="-70" y="-70" width="140" height="140" rx="16" fill="url(#blueGradAuto)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.8;0.9" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Inner Platform */}
        <rect x="-55" y="-55" width="110" height="110" rx="12" fill="#0a1628" />
        {/* Data Grid */}
        <g fill="url(#tealGradAuto)" opacity="0.6">
          <rect x="-45" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="-45" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="-45" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.9s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="-12" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.5s" repeatCount="indefinite" />
          </rect>
          <rect x="-45" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.8s" repeatCount="indefinite" />
          </rect>
          <rect x="-12" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="2.1s" repeatCount="indefinite" />
          </rect>
          <rect x="21" y="21" width="25" height="25" rx="4">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="2.4s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Center Icon - Car Symbol */}
        <circle cx="0" cy="0" r="18" fill="url(#blueGradAuto)">
          <animate attributeName="r" values="18;21;18" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Car Silhouette */}
        <g fill="white" opacity="0.9">
          <rect x="-10" y="-4" width="20" height="8" rx="2" />
          <rect x="-6" y="-7" width="10" height="5" rx="1" />
          <circle cx="-5" cy="4" r="2.5" />
          <circle cx="5" cy="4" r="2.5" />
        </g>
      </g>

      {/* Solution Cards - Corner Positions */}
      {/* Top Left - Contract Management */}
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">合同管理</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">全生命周期管理</text>
        {/* Document Icon */}
        <rect x="8" y="8" width="10" height="14" fill="#3b82f6" opacity="0.8" rx="1" />
      </g>

      {/* Top Right - Revenue Recognition */}
      <g transform="translate(330, 80)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(20, 184, 166, 0.15)" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="80;75;80" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">收入确认</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">自动化计提</text>
        {/* Chart Icon */}
        <rect x="8" y="32" width="6" height="18" fill="#14b8a6" opacity="0.8" />
        <rect x="16" y="26" width="6" height="24" fill="#14b8a6" opacity="0.8" />
        <rect x="24" y="30" width="6" height="20" fill="#14b8a6" opacity="0.8" />
      </g>

      {/* Bottom Left - Multi-platform Reconciliation */}
      <g transform="translate(60, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">多平台对账</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">统一支付管控</text>
        {/* Sync Icon */}
        <circle cx="15" cy="16" r="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
        <path d="M12 16 L18 16 M15 13 L15 19" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Bottom Right - Treasury Management */}
      <g transform="translate(330, 255)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5">
          <animate attributeName="y" values="255;260;255" dur="3s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <text x="55" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">司库管理</text>
        <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">资金流闭环</text>
        {/* Vault Icon */}
        <rect x="8" y="10" width="14" height="12" fill="#06b6d4" opacity="0.8" rx="1" />
        <circle cx="15" cy="16" r="2" fill="#0a1628" opacity="0.5" />
      </g>

      {/* Car Elements - Animated Cars */}
      {/* Car 1 - Left */}
      <g transform="translate(75, 170)">
        <rect x="0" y="0" width="50" height="22" rx="5" fill="url(#blueGradAuto)" opacity="0.7">
          <animate attributeName="x" values="75;80;75" dur="4s" repeatCount="indefinite" />
        </rect>
        <rect x="5" y="-6" width="30" height="10" fill="url(#blueGradAuto)" opacity="0.7" rx="3" />
        <rect x="8" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <rect x="20" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <rect x="32" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <circle cx="12" cy="22" r="4" fill="#1a365d" />
        <circle cx="38" cy="22" r="4" fill="#1a365d" />
      </g>

      {/* Car 2 - Right */}
      <g transform="translate(375, 200)">
        <rect x="0" y="0" width="50" height="22" rx="5" fill="url(#tealGradAuto)" opacity="0.7">
          <animate attributeName="x" values="375;370;375" dur="4s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="15" y="-6" width="30" height="10" fill="url(#tealGradAuto)" opacity="0.7" rx="3" />
        <rect x="8" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <rect x="20" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <rect x="32" y="5" width="10" height="6" fill="rgba(255,255,255,0.4)" rx="1" />
        <circle cx="12" cy="22" r="4" fill="#1a365d" />
        <circle cx="38" cy="22" r="4" fill="#1a365d" />
      </g>

      {/* Data Flow Lines */}
      <g fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="6 4">
        <path d="M115 112 Q 170 112 180 145">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M385 112 Q 330 112 320 145">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M115 287 Q 170 287 180 255">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M385 287 Q 330 287 320 255">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Floating Data Particles */}
      <g fill="#3b82f6" opacity="0.4">
        <circle cx="130" cy="150" r="3">
          <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="250" r="2">
          <animate attributeName="cy" values="250;240;250" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="290" r="2.5">
          <animate attributeName="cy" values="290;280;290" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="120" r="3">
          <animate attributeName="cy" values="120;110;120" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom Road Element */}
      <g opacity="0.3">
        <rect x="180" y="375" width="140" height="3" rx="1.5" fill="url(#blueGradAuto)">
          <animate attributeName="width" values="140;160;140" dur="2s" repeatCount="indefinite" />
        </rect>
        <line x1="220" y1="375" x2="220" y2="382" stroke="#3b82f6" strokeWidth="2" />
        <line x1="250" y1="375" x2="250" y2="382" stroke="#3b82f6" strokeWidth="2" />
        <line x1="280" y1="375" x2="280" y2="382" stroke="#3b82f6" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>国资 / 市级国资</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              久通汽车租赁
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                数字化转型实践
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              汽车租赁服务，市级国资背景下的集团型企业，
              专注于为客户提供高品质的车辆租赁解决方案。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-500/30">
                合同全生命周期管理
              </span>
              <span className="px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full text-teal-300 text-sm font-medium border border-teal-500/30">
                收入自动确认
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-cyan-500/30">
                多平台对账
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <CarRentalAutomotiveSVG />
            </div>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
