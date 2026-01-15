import { AlertCircle, Store, Package, FileText, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: Store,
    title: "门店管理复杂度高",
    description: "连锁餐饮快速扩张，门店数量激增且分布广泛，缺乏标准化与数字化支撑，运营效率难以提升。"
  },
  {
    icon: Package,
    title: "资产分散管控难",
    description: "资产遍布各门店，分散性强，资产管理存在台账不清、责任不明、维护滞后等问题。"
  },
  {
    icon: FileText,
    title: "合同管理手工化",
    description: "合同类型多样、更新频繁，依赖手工管理，流程冗长且易出错，无法有效支撑合规与续签预警。"
  },
  {
    icon: TrendingDown,
    title: "系统数据孤岛",
    description: "SAP与门店前端系统、费控系统集成不畅，接口不畅、数据不同步，影响决策时效性。"
  }
]

// Challenge Visualization SVG for Chain Restaurant
function ChainRestaurantChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="redGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="orangeGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="alertGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(239, 68, 68, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Systems */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradChal)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented puzzle pieces */}
        <circle cx="-12" cy="-10" r="8" fill="url(#redGradChal)" opacity="0.4">
          <animate attributeName="cy" values="-10;-13;-10" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="10" cy="-8" r="8" fill="url(#orangeGradChal)" opacity="0.4">
          <animate attributeName="cy" values="-8;-11;-8" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="8" cy="12" r="8" fill="url(#redGradChal)" opacity="0.4">
          <animate attributeName="cy" values="12;9;12" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="-10" cy="10" r="8" fill="url(#orangeGradChal)" opacity="0.4">
          <animate attributeName="cy" values="10;7;10" dur="2.3s" repeatCount="indefinite" />
        </circle>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradChal)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Store Nodes - Scattered */}
      {/* Top Store */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="28" fill="rgba(249, 115, 22, 0.12)" stroke="url(#orangeGradChal)" strokeWidth="2" />
        <rect x="-8" y="-5" width="16" height="12" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" rx="1" />
        <path d="M-8 -5 L0 -10 L8 -5" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-3" y="2" width="6" height="5" fill="url(#orangeGradChal)" opacity="0.5" />
        <text x="0" y="42" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">门店A</text>
      </g>

      {/* Left Store */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="28" fill="rgba(249, 115, 22, 0.12)" stroke="url(#orangeGradChal)" strokeWidth="2" />
        <rect x="-8" y="-5" width="16" height="12" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" rx="1" />
        <path d="M-8 -5 L0 -10 L8 -5" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-3" y="2" width="6" height="5" fill="url(#orangeGradChal)" opacity="0.5" />
        <text x="0" y="42" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">门店B</text>
      </g>

      {/* Right Store */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="28" fill="rgba(249, 115, 22, 0.12)" stroke="url(#orangeGradChal)" strokeWidth="2" />
        <rect x="-8" y="-5" width="16" height="12" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" rx="1" />
        <path d="M-8 -5 L0 -10 L8 -5" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-3" y="2" width="6" height="5" fill="url(#orangeGradChal)" opacity="0.5" />
        <text x="0" y="42" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">门店C</text>
      </g>

      {/* Bottom Store */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="28" fill="rgba(249, 115, 22, 0.12)" stroke="url(#orangeGradChal)" strokeWidth="2" />
        <rect x="-8" y="-5" width="16" height="12" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" rx="1" />
        <path d="M-8 -5 L0 -10 L8 -5" fill="none" stroke="url(#orangeGradChal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-3" y="2" width="6" height="5" fill="url(#orangeGradChal)" opacity="0.5" />
        <text x="0" y="42" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">门店D</text>
      </g>

      {/* Broken Connection Lines */}
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" strokeDasharray="3 3">
        <line x1="200" y1="98" x2="200" y2="155">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="98" y1="200" x2="155" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <line x1="302" y1="200" x2="245" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="302" x2="200" y2="245">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Alert Indicators */}
      <g>
        <circle cx="200" cy="30" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="200" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="200" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="370" r="4" fill="url(#alertGradChal)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="110" y="195" textAnchor="middle" fill="rgba(249, 115, 22, 0.5)" fontSize="10" fontWeight="600">前端系统</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(220, 38, 38, 0.5)" fontSize="10" fontWeight="600">SAP系统</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-red-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            连锁餐饮企业在数字化转型中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-red-500/10 border border-red-100">
              <ChainRestaurantChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 rounded-full text-white text-sm font-semibold shadow-lg">
              多店分散管理
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-5">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-red-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了 tims 的<span className="font-semibold">运营效率</span>、
            <span className="font-semibold">门店管控能力</span>和<span className="font-semibold">财务业务协同</span>，
            制约了企业在连锁餐饮市场的竞争力。
          </p>
        </div>
      </div>
    </section>
  )
}
