'use client'

import { motion } from 'framer-motion'
import { Server, Share2, ShieldCheck, Cpu } from 'lucide-react'

const specs = [
  {
    title: '部署与架构',
    icon: <Server className="w-6 h-6 text-blue-600" />,
    content: '采用公有云原生架构（Public Cloud Native），支持多租户隔离与单租户独享模式。支持多IDC容灾部署，以保障 99.9% 以上的可用性。'
  },
  {
    title: '连接与集成',
    icon: <Share2 className="w-6 h-6 text-blue-600" />,
    content: '内置 [610]+ OpenAPI，涵盖主数据、财务、供应链、人力等全领域。支持 Webhook 回调与企业集成总线（ESB）无缝对接。'
  },
  {
    title: '信创与合规',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    content: '业界领先的全栈信创 ERP，适配华为鲲鹏、飞腾 CPU，麒麟、统信 OS，达梦、人大金仓数据库。通过三级等保认证。'
  },
  {
    title: '二次开发能力',
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    content: '深度整合 YonBuilder 低代码平台，支持可视化流程设计、UI 编排及后端逻辑扩展，无需从零开发即可实现个性化业务定制。'
  }
]

export default function TechSpecs() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-8">数智化底座，硬核支撑</h2>
            <div className="grid grid-cols-1 gap-8">
              {specs.map((spec, idx) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    {spec.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2329] mb-2">{spec.title}</h3>
                    <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                      {spec.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-slate-500">API_Connectivity_Test.log</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="text-blue-400"># Initializing U8 cloud Middleware...</div>
                <div className="text-slate-400">{"{"} status: <span className="text-emerald-400">&quot;READY&quot;</span>, version: <span className="text-emerald-400">&quot;v25.04&quot;</span> {"}"}</div>
                <div className="text-blue-400"># Authenticating with TrustCore Service...</div>
                <div className="text-slate-400">{"{"} certificate: <span className="text-orange-400">&quot;TRUST_LEVEL_AAA&quot;</span> {"}"}</div>
                <div className="text-blue-400"># Testing [610]+ OpenAPI Endpoints...</div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                  <div>GET /financial/ledger... <span className="text-emerald-400">200 OK</span></div>
                  <div>POST /hr/employee... <span className="text-emerald-400">201 SUC</span></div>
                  <div>GET /supply/stock... <span className="text-emerald-400">200 OK</span></div>
                  <div>PUT /consolidate/map... <span className="text-emerald-400">200 OK</span></div>
                </div>
                <div className="pt-4 text-slate-400 border-t border-slate-800">
                  <span className="text-emerald-400">$</span> root@u8-cloud:~# <span className="text-white animate-pulse">_</span>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs text-slate-500 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  国产化全栈适配
                </div>
                <div className="font-bold text-slate-400 text-[10px] uppercase">SOC2 Compliance Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
