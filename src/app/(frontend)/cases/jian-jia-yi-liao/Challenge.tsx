import { AlertCircle, Shield, Package, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: Shield,
    title: "强合规压力",
    description: "需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期极易出错，合规审计风险较高。"
  },
  {
    icon: Package,
    title: "供应链全程追溯难",
    description: "医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现端到端追溯。"
  },
  {
    icon: TrendingDown,
    title: "多渠道营销管控难",
    description: "销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐，影响市场策略调整。"
  }
]

// Challenge Visualization SVG
function ChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <linearGradient id="alertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle cx="200" cy="200" r="150" fill="rgba(251, 113, 133, 0.05)" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(251, 113, 133, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="40" fill="rgba(251, 113, 133, 0.1)" stroke="url(#roseGradient)" strokeWidth="2" />
        {/* Warning Icon */}
        <path d="M0 -18 L3 -8 L12 -8 L5 -2 L8 8 L0 3 L-8 8 L-5 -2 L-12 -8 L-3 -8 Z" fill="url(#alertGradient)" />
      </g>

      {/* Challenge Nodes */}
      {/* Top - Compliance */}
      <g transform="translate(200, 80)">
        <circle cx="0" cy="0" r="30" fill="rgba(251, 113, 133, 0.15)" stroke="url(#roseGradient)" strokeWidth="2" />
        <path d="M-8 -3 L0 -12 L8 -3 L8 8 L-8 8 Z" fill="none" stroke="url(#roseGradient)" strokeWidth="2" />
        <path d="M-3 0 L0 -3 L3 0 M0 8 L0 3" stroke="url(#roseGradient)" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="600">合规风险</text>
      </g>

      {/* Left - Supply Chain */}
      <g transform="translate(80, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(251, 113, 133, 0.15)" stroke="url(#roseGradient)" strokeWidth="2" />
        <rect x="-8" y="-8" width="16" height="16" rx="2" fill="none" stroke="url(#roseGradient)" strokeWidth="2" />
        <path d="M-3 -3 L3 3 M3 -3 L-3 3" stroke="url(#roseGradient)" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="600">追溯断链</text>
      </g>

      {/* Right - Marketing */}
      <g transform="translate(320, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(251, 113, 133, 0.15)" stroke="url(#roseGradient)" strokeWidth="2" />
        <path d="M-6 0 L-3 6 L3 -4 L6 2" fill="none" stroke="url(#roseGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="45" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="600">渠道盲区</text>
      </g>

      {/* Connection Lines */}
      <g stroke="rgba(251, 113, 133, 0.3)" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="200" y1="120" x2="200" y2="160" />
        <line x1="120" y1="200" x2="160" y2="200" />
        <line x1="280" y1="200" x2="240" y2="200" />
      </g>

      {/* Alert Indicators */}
      <g>
        <circle cx="200" cy="50" r="5" fill="url(#alertGradient)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="200" r="5" fill="url(#alertGradient)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="200" r="5" fill="url(#alertGradient)">
          <animate attributeName="r" values="5;7;5" dur="1.5s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Broken Data Flow Indicators */}
      <g opacity="0.4">
        <path d="M140 160 L160 180" stroke="url(#alertGradient)" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M260 180 L280 160" stroke="url(#alertGradient)" strokeWidth="2" strokeDasharray="3 3" />
      </g>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-rose-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-semibold text-rose-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            医疗健康企业在数字化转型中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-rose-500/10 border border-rose-100">
              <ChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-500 rounded-full text-white text-sm font-semibold shadow-lg">
              3大核心挑战
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-4xl font-bold text-rose-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-rose-600 to-rose-500 rounded-2xl text-white text-center">
          <p className="text-lg">
            这些挑战直接影响了健嘉医疗的<span className="font-semibold">运营效率</span>、
            <span className="font-semibold">合规安全性</span>和<span className="font-semibold">市场响应速度</span>，
            制约了企业在竞争激烈的医疗健康市场中的发展。
          </p>
        </div>
      </div>
    </section>
  )
}
