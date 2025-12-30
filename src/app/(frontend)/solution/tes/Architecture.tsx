'use client'

import { motion } from 'framer-motion'

export default function Architecture() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            TES 全链路数据集成架构
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            无缝连接商旅消费平台、费控报销系统与后端财务核算体系，实现数据自动流转。
          </p>
        </div>

        {/* CSS/SVG Hybrid Diagram */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
            <svg viewBox="0 0 900 400" className="w-full h-auto font-sans">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8" />
                </marker>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Layer 1: 商旅平台 (Left) */}
              <g transform="translate(50, 100)">
                 <rect x="0" y="0" width="180" height="200" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                 <text x="90" y="30" textAnchor="middle" fill="#1E40AF" fontWeight="bold" fontSize="16">商旅聚合平台</text>
                 
                 <rect x="20" y="60" width="140" height="30" rx="4" fill="#FFFFFF" filter="url(#shadow)"/>
                 <text x="90" y="80" textAnchor="middle" fill="#334155" fontSize="12">携程商旅 / 同程</text>

                 <rect x="20" y="100" width="140" height="30" rx="4" fill="#FFFFFF" filter="url(#shadow)"/>
                 <text x="90" y="120" textAnchor="middle" fill="#334155" fontSize="12">滴滴企业版</text>

                 <rect x="20" y="140" width="140" height="30" rx="4" fill="#FFFFFF" filter="url(#shadow)"/>
                 <text x="90" y="160" textAnchor="middle" fill="#334155" fontSize="12">手工报销 / 其它</text>
              </g>

              {/* Arrow 1 */}
              <line x1="230" y1="200" x2="300" y2="200" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
              <text x="265" y="190" textAnchor="middle" fill="#64748B" fontSize="12">API 数据同步</text>

              {/* Layer 2: 费控平台 (Center - Core) */}
              <g transform="translate(320, 50)">
                 <rect x="0" y="0" width="260" height="300" rx="12" fill="#F0F9FF" stroke="#0052D9" strokeWidth="2" filter="url(#shadow)" />
                 <rect x="0" y="0" width="260" height="40" rx="12" fill="#0052D9" />
                 <path d="M0 28 A12 12 0 0 0 0 40 L260 40 L260 28 Z" fill="#0052D9" /> {/* Rect fix for rounded corners top only */}

                 <text x="130" y="28" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">TES 智能费控中台</text>
                 
                 {/* Internal Modules */}
                 <g transform="translate(20, 60)">
                    <rect x="0" y="0" width="100" height="60" rx="6" fill="white" stroke="#E2E8F0" />
                    <text x="50" y="20" textAnchor="middle" fill="#1F2329" fontWeight="bold" fontSize="14">申请预定</text>
                    <text x="50" y="45" textAnchor="middle" fill="#64748B" fontSize="10">差标控制 / 审批</text>
                 </g>
                 <g transform="translate(140, 60)">
                    <rect x="0" y="0" width="100" height="60" rx="6" fill="white" stroke="#E2E8F0" />
                    <text x="50" y="20" textAnchor="middle" fill="#1F2329" fontWeight="bold" fontSize="14">报销管理</text>
                    <text x="50" y="45" textAnchor="middle" fill="#64748B" fontSize="10">票据采集 / 填单</text>
                 </g>

                 <g transform="translate(20, 140)">
                    <rect x="0" y="0" width="220" height="60" rx="6" fill="#F0FDFA" stroke="#2DD4BF" strokeDasharray="4,2" />
                    <text x="110" y="20" textAnchor="middle" fill="#0F766E" fontWeight="bold" fontSize="14">智能稽核引擎</text>
                    <text x="110" y="45" textAnchor="middle" fill="#0F766E" fontSize="10">发票验真 / 敏感词 / 预算校验 / 重复报销</text>
                 </g>

                 <g transform="translate(20, 220)">
                    <rect x="0" y="0" width="220" height="50" rx="6" fill="#F5F3FF" stroke="#8B5CF6" />
                    <text x="110" y="30" textAnchor="middle" fill="#6D28D9" fontWeight="bold" fontSize="14">银企支付直联</text>
                 </g>
              </g>

              {/* Arrow 2 */}
              <line x1="580" y1="200" x2="650" y2="200" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="615" y="190" textAnchor="middle" fill="#64748B" fontSize="12">凭证生成</text>

              {/* Layer 3: 财务后端 (Right) */}
              <g transform="translate(670, 100)">
                 <rect x="0" y="0" width="180" height="200" rx="8" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" />
                 <text x="90" y="30" textAnchor="middle" fill="#9A3412" fontWeight="bold" fontSize="16">财务核算体系</text>
                 
                 <rect x="20" y="60" width="140" height="40" rx="4" fill="#FFFFFF" filter="url(#shadow)"/>
                 <text x="90" y="85" textAnchor="middle" fill="#334155" fontSize="14">总账系统 (GL)</text>

                 <rect x="20" y="120" width="140" height="40" rx="4" fill="#FFFFFF" filter="url(#shadow)"/>
                 <text x="90" y="145" textAnchor="middle" fill="#334155" fontSize="14">资金系统 (TMS)</text>
              </g>
            </svg>
        </div>
      </div>
    </section>
  )
}
