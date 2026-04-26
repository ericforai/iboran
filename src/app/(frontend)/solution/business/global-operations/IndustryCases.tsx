'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, ArrowRight, Quote } from 'lucide-react'

const cases = [
  {
    company: '盛浩鞋业',
    industry: '制造业',
    region: '非洲',
    challenge: '国内设计需要在非洲本地化生产和营销，海外订单库存管理混乱',
    solution: '客户赊销定制化、三级价格管控、99%以上全移动应用、电商业务一体化',
    results: ['订单库存管理准确率提升75%', '销售流程自动化', '成就"东非鞋王"'],
    quote: '规范业务数据流，实现采销平台联动和供应链风险管控；成为企业业务出海新选择',
    quoter: '财务总监 秦春海',
  },
  {
    company: '日丰企业',
    industry: '管道制造',
    region: '多国',
    challenge: '国内产品需快速拓展海外渠道，每个国家独立部署成本高',
    solution: '用友YonSuite多国进销存快速上线，海外多语言、多币种支持',
    results: ['两周上线一国进销存', '无额外支出和独立部署', '管理一致性保持'],
    quote: '从体验效果和业务上，都保持了管理的一致性，使我们在海外市场的业务拓展中能够快人一步',
    quoter: 'CIO 尹浪',
  },
  {
    company: '卧龙电驱',
    industry: '电机制造',
    region: '越南',
    challenge: '越南工厂作为"东南亚制造总部"，需要与集团供应链变革同步',
    solution: '全球SRM系统上线，境外采购与本地采购双模式，供应商质量追溯',
    results: ['OTD指标>98.5%', 'FTQ指标>98.7%', '供应商本地化率40%', '新品上市缩短10天'],
    quote: '通过与供应商加强技术图纸、生产工艺、模具使用的早期线上协同，实现新品快速上市',
    quoter: '卧龙越南供应链负责人',
  },
  {
    company: 'SK珠宝',
    industry: '零售',
    region: '新加坡',
    challenge: '黄金珠宝单品管理复杂，线上线下一体化需求，海外本地化零售',
    solution: '基于用友BIP构建本地化新零售平台，海外社交生态流量、会员自动化营销',
    results: ['一体化营销和业财', '零售RFID盘点', '海外支付跨国快递集成'],
    quote: '实现了多语言、多币种、全球计税引擎、海外支付的一体化管理',
    quoter: 'SK珠宝数字化负责人',
  },
]

export default function IndustryCases() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            出海客户成功案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        {/* Case Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((c: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeCase === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Building2 size={18} />
              {c.company}
              <span className={`text-xs px-2 py-0.5 rounded ${
                activeCase === idx ? 'bg-white/20' : 'bg-slate-200'
              }`}>{c.region}</span>
            </button>
          ))}
        </div>

        {/* Case Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Left: Case Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-[#0052D9]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1F2329]">{cases[activeCase].company}</h3>
                    <p className="text-slate-500">{cases[activeCase].industry} · {cases[activeCase].region}</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="p-4 bg-white rounded-lg border border-slate-100">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">🎯 业务挑战</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{cases[activeCase].challenge}</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-slate-100">
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">💡 解决方案</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{cases[activeCase].solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cases[activeCase].results.map((result: any, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full border border-green-200 flex items-center gap-1"
                    >
                      <ArrowRight size={12} />
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Quote - aligned with left column */}
              <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col justify-center">
                <Quote className="text-[#0052D9] mb-4" size={32} />
                <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{cases[activeCase].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-slate-600">
                      {cases[activeCase].company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2329]">{cases[activeCase].company}</p>
                    <p className="text-sm text-slate-500">{cases[activeCase].quoter}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
