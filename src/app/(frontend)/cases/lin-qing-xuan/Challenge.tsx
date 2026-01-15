import { AlertCircle, FileText, Link2, Wallet, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: "多会计准则合并报表难",
    description: "多品牌、多渠道、高复购的业务模式下，集团面临多会计准则并行下的合并报表编制难题，财务数据口径不一，影响报表准确性与时效性。"
  },
  {
    icon: Link2,
    title: "多系统集成不足",
    description: "ERP系统虽承载核心业务流程，但与外部供应链、销售、库存等多系统集成度不足，导致数据割裂，形成信息孤岛。"
  },
  {
    icon: Wallet,
    title: "费用管控缺乏统一机制",
    description: "费用管理分散，分支机构报销与预算执行难以实时监控，缺乏统一标准与全流程管控机制。"
  }
]

// Challenge Visualization SVG for Cosmetics Group Finance
function GroupFinanceChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roseGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <linearGradient id="pinkGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="alertGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(251, 113, 133, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(251, 113, 133, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Financial Data */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradChal)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented documents */}
        <rect x="-18" y="-25" width="14" height="18" fill="url(#roseGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="2" y="-22" width="14" height="18" fill="url(#pinkGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-22;-25;-22" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-10" y="8" width="14" height="18" fill="url(#roseGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="8;5;8" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradChal)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Multi-Accounting Standards */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(251, 113, 133, 0.15)" stroke="url(#roseGradChal)" strokeWidth="2" />
        {/* Document Stack */}
        <rect x="-10" y="-10" width="20" height="8" fill="none" stroke="url(#roseGradChal)" strokeWidth="2" rx="1" />
        <rect x="-10" y="-4" width="20" height="8" fill="none" stroke="url(#roseGradChal)" strokeWidth="2" rx="1" opacity="0.7" />
        <rect x="-10" y="2" width="20" height="8" fill="none" stroke="url(#roseGradChal)" strokeWidth="2" rx="1" opacity="0.4" />
        <text x="0" y="45" textAnchor="middle" fill="#fb7185" fontSize="10" fontWeight="600">多准则报表</text>
      </g>

      {/* Left - System Integration */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(251, 113, 133, 0.15)" stroke="url(#roseGradChal)" strokeWidth="2" />
        {/* Broken Link */}
        <circle cx="-8" cy="0" r="5" fill="none" stroke="url(#roseGradChal)" strokeWidth="2" />
        <circle cx="8" cy="0" r="5" fill="none" stroke="url(#roseGradChal)" strokeWidth="2" />
        <line x1="-3" y1="0" x2="3" y2="0" stroke="url(#alertGradChal)" strokeWidth="2" strokeDasharray="2 2">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </line>
        <text x="0" y="45" textAnchor="middle" fill="#fb7185" fontSize="10" fontWeight="600">系统集成</text>
      </g>

      {/* Right - Expense Control */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(244, 114, 182, 0.15)" stroke="url(#pinkGradChal)" strokeWidth="2" />
        {/* Budget Chart */}
        <rect x="-10" y="-8" width="6" height="16" fill="url(#roseGradChal)" opacity="0.5" />
        <rect x="-2" y="-12" width="6" height="20" fill="url(#pinkGradChal)" opacity="0.7" />
        <rect x="6" y="-4" width="6" height="12" fill="url(#roseGradChal)" opacity="0.3" />
        <text x="0" y="45" textAnchor="middle" fill="#f472b6" fontSize="10" fontWeight="600">费用管控</text>
      </g>

      {/* Bottom - Group Finance */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(244, 114, 182, 0.15)" stroke="url(#pinkGradChal)" strokeWidth="2" />
        {/* Building Icon */}
        <rect x="-10" y="-8" width="20" height="16" fill="none" stroke="url(#pinkGradChal)" strokeWidth="2" rx="2" />
        <rect x="-6" y="-4" width="4" height="4" fill="url(#pinkGradChal)" opacity="0.5" />
        <rect x="-1" y="-4" width="4" height="4" fill="url(#pinkGradChal)" opacity="0.5" />
        <rect x="4" y="-4" width="4" height="4" fill="url(#pinkGradChal)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#f472b6" fontSize="10" fontWeight="600">集团财务</text>
      </g>

      {/* Broken Connection Lines */}
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.5" strokeDasharray="3 3">
        <line x1="200" y1="100" x2="200" y2="155">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="100" y1="200" x2="155" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="200" x2="245" y2="200">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="200" y1="300" x2="200" y2="245">
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
      <text x="100" y="195" textAnchor="middle" fill="rgba(251, 113, 133, 0.5)" fontSize="10" fontWeight="600">业务系统</text>
      <text x="300" y="195" textAnchor="middle" fill="rgba(236, 72, 153, 0.5)" fontSize="10" fontWeight="600">财务系统</text>
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
            化妆品企业在集团化财务管理中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-rose-500/10 border border-rose-100">
              <GroupFinanceChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg">
              财务数据割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-5">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-rose-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-rose-600 to-pink-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了林清轩的<span className="font-semibold">报表准确性</span>、
            <span className="font-semibold">数据集成能力</span>和<span className="font-semibold">费用管控水平</span>，
            制约了企业在高端护肤市场的集团化运营效率。
          </p>
        </div>
      </div>
    </section>
  )
}
