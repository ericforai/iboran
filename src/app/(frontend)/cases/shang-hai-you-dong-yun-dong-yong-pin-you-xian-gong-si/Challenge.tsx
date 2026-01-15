import { AlertCircle, Database, Package, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: Database,
    title: "多系统数据孤岛",
    description: "ERP 系统应用不充分，功能覆盖不全，多系统并行导致数据割裂，难以实现业财融合与精细化管控。"
  },
  {
    icon: Package,
    title: "库存供应链协同难",
    description: "库存管理与供应链执行脱节，协同效率低下，无法支撑运动用品行业的高周转需求。"
  },
  {
    icon: TrendingDown,
    title: "财务业务信息不同步",
    description: "财务核算与业务运营分离，信息滞后，运营管控受阻，难以快速响应市场需求变化。"
  }
]

// Challenge Visualization SVG
function ChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="orangeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="alertGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle cx="200" cy="200" r="150" fill="rgba(249, 115, 22, 0.05)" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(249, 115, 22, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Data Silos */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="40" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradient3)" strokeWidth="2" />
        {/* Scattered Data Points */}
        <circle cx="-12" cy="-8" r="5" fill="url(#orangeGradient3)" opacity="0.6" />
        <circle cx="10" cy="-5" r="5" fill="url(#orangeGradient3)" opacity="0.6" />
        <circle cx="5" cy="12" r="5" fill="url(#orangeGradient3)" opacity="0.6" />
        <circle cx="-8" cy="8" r="5" fill="url(#orangeGradient3)" opacity="0.6" />
        {/* X mark in center */}
        <path d="M-3 -3 L3 3 M3 -3 L-3 3" stroke="url(#alertGradient3)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Data Silos */}
      <g transform="translate(200, 70)">
        <circle cx="0" cy="0" r="30" fill="rgba(249, 115, 22, 0.15)" stroke="url(#orangeGradient3)" strokeWidth="2" />
        {/* Database Icon */}
        <ellipse cx="0" cy="-8" rx="12" ry="4" fill="none" stroke="url(#orangeGradient3)" strokeWidth="2" />
        <path d="M-12 -8 L-12 4 C-12 8 12 8 12 4 L12 -8" fill="none" stroke="url(#orangeGradient3)" strokeWidth="2" />
        <path d="M-12 0 C-12 4 12 4 12 0" fill="none" stroke="url(#orangeGradient3)" strokeWidth="2" />
        <text x="0" y="45" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">数据孤岛</text>
      </g>

      {/* Left - Inventory Issues */}
      <g transform="translate(70, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(249, 115, 22, 0.15)" stroke="url(#orangeGradient3)" strokeWidth="2" />
        {/* Mismatched Boxes */}
        <rect x="-12" y="-10" width="10" height="8" fill="none" stroke="url(#orangeGradient3)" strokeWidth="2" rx="1" />
        <rect x="2" y="-5" width="10" height="8" fill="none" stroke="url(#orangeGradient3)" strokeWidth="2" rx="1" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">库存协同</text>
      </g>

      {/* Right - Business Finance Split */}
      <g transform="translate(330, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(249, 115, 22, 0.15)" stroke="url(#orangeGradient3)" strokeWidth="2" />
        {/* Split Arrow */}
        <path d="M-10 0 L-3 0 L-3 -6 L6 0 L-3 6 L-3 0" fill="url(#orangeGradient3)" opacity="0.8" />
        <path d="M10 0 L3 0 L3 -6 L-6 0 L3 6 L3 0" fill="url(#orangeGradient3)" opacity="0.3" />
        <text x="0" y="45" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="600">业财分离</text>
      </g>

      {/* Connection Lines - Broken */}
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="200" y1="110" x2="200" y2="160" />
        <line x1="110" y1="200" x2="160" y2="200" />
        <line x1="290" y1="200" x2="240" y2="200" />
      </g>

      {/* Alert Indicators */}
      <g>
        <circle cx="200" cy="40" r="5" fill="url(#alertGradient3)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="200" r="5" fill="url(#alertGradient3)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="360" cy="200" r="5" fill="url(#alertGradient3)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="120" y="280" textAnchor="middle" fill="rgba(249, 115, 22, 0.6)" fontSize="12" fontWeight="600">业务系统</text>
      <text x="280" y="280" textAnchor="middle" fill="rgba(59, 130, 246, 0.6)" fontSize="12" fontWeight="600">财务系统</text>
      <path d="M135 265 Q 200 285 265 265" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            运动用品企业在数字化转型中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-orange-500/10 border border-orange-100">
              <ChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-white text-sm font-semibold shadow-lg">
              多系统割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-4xl font-bold text-orange-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl text-white text-center">
          <p className="text-lg">
            这些挑战直接影响了上海优动的<span className="font-semibold">运营效率</span>、
            <span className="font-semibold">市场响应速度</span>和<span className="font-semibold">精细化管理能力</span>，
            制约了企业在运动用品市场的竞争力。
          </p>
        </div>
      </div>
    </section>
  )
}
