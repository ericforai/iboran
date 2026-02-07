import { TrendingDown, Users, ShieldCheck, PieChart } from 'lucide-react'

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">从效率革命到价值重构</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            不仅是工具升级，更是财务管理模式的质变。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Efficiency */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <TrendingDown size={24} />
              </div>
              <h3 className="font-bold text-lg text-[#1F2329]">降本增效</h3>
            </div>
            
            <div className="flex-1">
              <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">错账率对比</h4>
              
              {/* Simplified chart without recharts */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">传统人工</span>
                    <span className="font-bold text-[#E60012]">4%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-[#E60012] h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">AI对账</span>
                    <span className="font-bold text-green-600">0.1%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users size={16} />
                  <span>人力减少 <strong className="text-[#E60012]">75%</strong> (12人 → 3人)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Compliance */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-[#0052D9]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-lg text-[#1F2329]">合规风控</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              内置行业通用对账规则与税务合规要求。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-slate-600 text-sm">票、货、款三流合一校验</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-slate-600 text-sm">跨境业务汇率差异自动识别</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-slate-600 text-sm">符合国际会计准则核算</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Data Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                <PieChart size={24} />
              </div>
              <h3 className="font-bold text-lg text-[#1F2329]">决策支撑</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              明细数据同步至企业数据池，为精细化管理提供依据。
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded text-center">
                <div className="text-purple-600 font-bold text-xl">实时</div>
                <div className="text-xs text-slate-500">利润核算</div>
              </div>
              <div className="bg-slate-50 p-3 rounded text-center">
                <div className="text-purple-600 font-bold text-xl">99%以上</div>
                <div className="text-xs text-slate-500">数据闭环</div>
              </div>
            </div>
            <div className="mt-6 text-sm text-slate-500 italic border-l-2 border-purple-200 pl-3">
              「精准的收入数据是企业决策的导航仪。」
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
