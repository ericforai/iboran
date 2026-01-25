import { AlertCircle, Ghost, ShoppingCart, Wallet } from 'lucide-react'

const challenges = [
  {
    icon: Ghost,
    title: "数据割裂难以管控",
    description: "缺乏统一ERP系统，从IP授权、设计开发到库存销售的数据分散，无法实现从创意立项到销售回款的全流程数字化管理。"
  },
  {
    icon: ShoppingCart,
    title: "多渠道订单处理低效",
    description: "OMS系统缺失，线上电商平台、线下渠道及限量发售等订单分散处理，依赖人工整合，发货协同效率低。"
  },
  {
    icon: Wallet,
    title: "费用管控缺乏精细化",
    description: "IP授权费、外包设计成本、生产预算等关键支出缺少费用管理系统，费用核算滞后、成本分摊不清。"
  }
]

// Challenge Visualization SVG for IP-Driven Creative Company
function IPChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="purpleGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="indigoGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="alertGradChal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(139, 92, 246, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Data */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradChal)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Scattered cards */}
        <rect x="-18" y="-25" width="12" height="16" fill="url(#purpleGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="2" y="-20" width="12" height="16" fill="url(#indigoGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="-20;-23;-20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-10" y="10" width="12" height="16" fill="url(#purpleGradChal)" opacity="0.4" rx="1">
          <animate attributeName="y" values="10;7;10" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradChal)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - IP Licensing */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(139, 92, 246, 0.15)" stroke="url(#purpleGradChal)" strokeWidth="2" />
        {/* Document Icon */}
        <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="url(#purpleGradChal)" strokeWidth="2" rx="2" />
        <line x1="-6" y1="-4" x2="6" y2="-4" stroke="url(#purpleGradChal)" strokeWidth="1.5" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="url(#purpleGradChal)" strokeWidth="1.5" />
        <line x1="-6" y1="4" x2="2" y2="4" stroke="url(#purpleGradChal)" strokeWidth="1.5" />
        <text x="0" y="45" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="600">IP授权</text>
      </g>

      {/* Left - Design/Production */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(139, 92, 246, 0.15)" stroke="url(#purpleGradChal)" strokeWidth="2" />
        {/* Pen Tool Icon */}
        <path d="M-8 8 L-3 3 L3 9 L-2 14 Z" fill="none" stroke="url(#purpleGradChal)" strokeWidth="2" />
        <path d="M3 9 L8 4" stroke="url(#purpleGradChal)" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="600">设计生产</text>
      </g>

      {/* Right - Multi-Channel Sales */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(99, 102, 241, 0.15)" stroke="url(#indigoGradChal)" strokeWidth="2" />
        {/* Shopping Bag Icon */}
        <rect x="-8" y="-5" width="16" height="14" fill="none" stroke="url(#indigoGradChal)" strokeWidth="2" rx="2" />
        <path d="M-4 -5 L-4 -8 Q-4 -11 0 -11 Q4 -11 4 -8 L4 -5" fill="none" stroke="url(#indigoGradChal)" strokeWidth="2" />
        <text x="0" y="45" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="600">多渠道销售</text>
      </g>

      {/* Bottom - Finance */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(99, 102, 241, 0.15)" stroke="url(#indigoGradChal)" strokeWidth="2" />
        {/* Coin Icon */}
        <circle cx="0" cy="0" r="10" fill="none" stroke="url(#indigoGradChal)" strokeWidth="2" />
        <text x="0" y="4" textAnchor="middle" fill="url(#indigoGradChal)" fontSize="12" fontWeight="bold">¥</text>
        <text x="0" y="45" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="600">财务核算</text>
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
      <text x="110" y="195" textAnchor="middle" fill="rgba(139, 92, 246, 0.5)" fontSize="10" fontWeight="600">业务前端</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(99, 102, 241, 0.5)" fontSize="10" fontWeight="600">财务后端</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            文创企业在数字化转型中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-500/10 border border-purple-100">
              <IPChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full text-white text-sm font-semibold shadow-lg">
              数据割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-5">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-purple-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了优卡赏的<span className="font-semibold">运营效率</span>、
            <span className="font-semibold">市场响应速度</span>和<span className="font-semibold">成本管控能力</span>，
            制约了企业在文创IP市场的竞争力。
          </p>
        </div>
      </div>
    </section>
  )
}
