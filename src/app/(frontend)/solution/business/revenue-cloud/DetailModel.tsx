'use client'

import { useState } from 'react'
import { Layers, Box, FileCheck, DollarSign } from 'lucide-react'

export default function DetailModel() {
  const [activeScenario, setActiveScenario] = useState<'2C' | '2B'>('2C')

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-[#0052D9] text-xs font-bold rounded-full mb-4">
              核心引擎 01
            </div>
            <h2 className="text-3xl font-bold text-[#1F2329] mb-6">
              明细级对账模型<br/>全维度覆盖业务场景
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              打破传统总额匹配的局限。构建多维度、全场景核对体系，以保障每一笔交易清晰可追溯，精准捕捉任何环节的异常。
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm h-fit text-[#0052D9]">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329]">全链条关键节点覆盖</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    订单vs结算单、发票vs应收款、物流vs费用、资金vs实收。打造立体防护网。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm h-fit text-[#0052D9]">
                  <Box size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329]">2C与2B业务全覆盖</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    自动适配电商平台、线下门店POS、跨境贸易外汇等复杂场景。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
            <div className="bg-slate-50 rounded-xl p-6">
              {/* Scenario Toggle */}
              <div className="flex bg-slate-200 p-1 rounded-lg mb-8 w-fit">
                <button 
                  onClick={() => setActiveScenario('2C')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeScenario === '2C' ? 'bg-white text-[#0052D9] shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  2C 电商场景
                </button>
                <button 
                  onClick={() => setActiveScenario('2B')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeScenario === '2B' ? 'bg-white text-[#0052D9] shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  2B 制造场景
                </button>
              </div>

              {/* Interactive Diagram */}
              <div className="relative">
                {/* 所有场景内容都渲染，用 CSS 控制显示 - SEO 友好 */}
                <div className={activeScenario === '2C' ? 'block' : 'hidden'}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="p-2 bg-pink-100 rounded text-pink-600 font-bold">抖音/天猫</span>
                        <span className="text-sm text-slate-600">线上订单数据</span>
                      </div>
                      <div className="text-[#0052D9] font-mono text-xs">Matching...</div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">支付宝/微信结算</span>
                        <span className="p-2 bg-blue-100 rounded text-[#0052D9] font-bold">支付流水</span>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg flex items-center gap-3">
                      <FileCheck className="text-green-600" size={20} />
                      <div>
                        <div className="text-sm font-bold text-green-800">智能识别差异因素</div>
                        <div className="text-xs text-green-600">自动解析：优惠券、满减、平台扣点</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={activeScenario === '2B' ? 'block' : 'hidden'}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="p-2 bg-orange-100 rounded text-orange-600 font-bold">ERP系统</span>
                        <span className="text-sm text-slate-600">合同订单</span>
                      </div>
                      <div className="text-[#0052D9] font-mono text-xs">Matching...</div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-600">银行回单</span>
                        <span className="p-2 bg-indigo-100 rounded text-indigo-600 font-bold">实收资金</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center gap-3">
                      <DollarSign className="text-[#0052D9]" size={20} />
                      <div>
                        <div className="text-sm font-bold text-blue-800">账期精准核对</div>
                        <div className="text-xs text-[#0052D9]">自动预警：逾期未付、金额偏差</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Connector Line */}
                <div className="mt-6 flex justify-center">
                  <div className="h-8 w-px bg-slate-300"></div>
                </div>
                
                <div className="mt-0 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F2329] text-white rounded-lg text-sm shadow-lg">
                    <Layers size={14} /> 生成标准化会计凭证
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
