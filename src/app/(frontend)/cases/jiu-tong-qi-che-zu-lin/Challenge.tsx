import { AlertCircle, FileText, DollarSign, RefreshCw, Landmark } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: "多系统集成困难",
    description: "各业务与财务系统间形成数据孤岛，严重影响合并报表的时效性与准确性，制约集团财务管控效能。"
  },
  {
    icon: DollarSign,
    title: "合同与收入管理复杂",
    description: "汽车租赁涉及大量动态合同，合同管理复杂且周期长，收入确认规则多样，手工处理易引发差错。"
  },
  {
    icon: RefreshCw,
    title: "多平台对账效率低",
    description: "企业支付缺乏统一管控机制，租金、维保等多平台收支分散，对账效率低下，资金结算风险高。"
  },
  {
    icon: Landmark,
    title: "资金管理能力受限",
    description: "司库管理水平受限于信息化程度，难以实现集团财务集中管理与动态监控，影响整体财务战略推进。"
  }
]

// Car Rental SOE Challenge Visualization
function CarRentalSOEChallengeVisualization() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradCar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="tealGradCar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="alertGradCar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Background Circles */}
      <circle cx="200" cy="200" r="160" fill="rgba(59, 130, 246, 0.03)" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="6 4" />

      {/* Central Problem Hub - Fragmented Car Rental Systems */}
      <g transform="translate(200, 200)">
        <circle cx="0" cy="0" r="45" fill="rgba(239, 68, 68, 0.1)" stroke="url(#alertGradCar)" strokeWidth="2">
          <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Fragmented cars */}
        <rect x="-22" y="-25" width="16" height="10" fill="url(#blueGradCar)" opacity="0.4" rx="2">
          <animate attributeName="y" values="-25;-28;-25" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="4" y="-20" width="16" height="10" fill="url(#tealGradCar)" opacity="0.4" rx="2">
          <animate attributeName="y" values="-20;-23;-20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="-12" y="10" width="16" height="10" fill="url(#blueGradCar)" opacity="0.4" rx="2">
          <animate attributeName="y" values="10;7;10" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* X mark */}
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="url(#alertGradCar)" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Challenge Nodes */}
      {/* Top - Contract Management */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradCar)" strokeWidth="2" />
        {/* Document Stack */}
        <rect x="-10" y="-10" width="20" height="8" fill="none" stroke="url(#blueGradCar)" strokeWidth="2" rx="1" />
        <rect x="-10" y="-4" width="20" height="8" fill="none" stroke="url(#blueGradCar)" strokeWidth="2" rx="1" opacity="0.7" />
        <rect x="-10" y="2" width="20" height="8" fill="none" stroke="url(#blueGradCar)" strokeWidth="2" rx="1" opacity="0.4" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">合同管理</text>
      </g>

      {/* Left - Revenue Recognition */}
      <g transform="translate(60, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(20, 184, 166, 0.15)" stroke="url(#tealGradCar)" strokeWidth="2" />
        {/* Dollar/Revenue Icon */}
        <text x="0" y="8" textAnchor="middle" fill="#14b8a6" fontSize="24" fontWeight="bold">¥</text>
        <text x="0" y="45" textAnchor="middle" fill="#14b8a6" fontSize="10" fontWeight="600">收入确认</text>
      </g>

      {/* Right - Multi-platform Reconciliation */}
      <g transform="translate(340, 200)">
        <circle cx="0" cy="0" r="30" fill="rgba(59, 130, 246, 0.15)" stroke="url(#blueGradCar)" strokeWidth="2" />
        {/* Sync Arrows */}
        <circle cx="0" cy="0" r="10" fill="none" stroke="url(#blueGradCar)" strokeWidth="2" opacity="0.6" />
        <path d="M0 -8 L0 8 M-8 0 L8 0" stroke="url(#blueGradCar)" strokeWidth="2" opacity="0.6" />
        <text x="0" y="45" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="600">多平台对账</text>
      </g>

      {/* Bottom - Treasury Management */}
      <g transform="translate(200, 340)">
        <circle cx="0" cy="0" r="30" fill="rgba(20, 184, 166, 0.15)" stroke="url(#tealGradCar)" strokeWidth="2" />
        {/* Bank/Vault Icon */}
        <rect x="-10" y="-8" width="20" height="16" fill="none" stroke="url(#tealGradCar)" strokeWidth="2" rx="2" />
        <circle cx="0" cy="0" r="4" fill="url(#tealGradCar)" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fill="#14b8a6" fontSize="10" fontWeight="600">司库管理</text>
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
        <circle cx="200" cy="30" r="4" fill="url(#alertGradCar)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="200" r="4" fill="url(#alertGradCar)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="370" cy="200" r="4" fill="url(#alertGradCar)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="370" r="4" fill="url(#alertGradCar)">
          <animate attributeName="r" values="4;6;4" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* System Labels */}
      <text x="110" y="195" textAnchor="middle" fill="rgba(59, 130, 246, 0.5)" fontSize="10" fontWeight="600">各业务系统</text>
      <text x="290" y="195" textAnchor="middle" fill="rgba(20, 184, 166, 0.5)" fontSize="10" fontWeight="600">集团财务</text>
    </svg>
  )
}

export default function Challenge() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="challenge">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">面临挑战</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">转型前的核心痛点</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            市级国资汽车租赁企业在集团化运营中面临的关键业务瓶颈
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/10 border border-blue-100">
              <CarRentalSOEChallengeVisualization />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full text-white text-sm font-semibold shadow-lg">
              业财割裂
            </div>
          </div>

          {/* Challenge List */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-blue-100">
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl text-white text-center">
          <p className="text-base">
            这些挑战直接影响了久通汽车租赁的<span className="font-semibold">集团财务管控效能</span>、
            <span className="font-semibold">收入核算准确性</span>和<span className="font-semibold">资金管理效率</span>，
            制约了企业在汽车租赁服务市场的数字化转型。
          </p>
        </div>
      </div>
    </section>
  )
}
