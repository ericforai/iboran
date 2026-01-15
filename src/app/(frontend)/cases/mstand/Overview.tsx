import { Building, Briefcase, Layers } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg mb-6 pb-4 border-b border-slate-200">关于项目</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">客户</span>
                    <p className="font-semibold text-slate-900">M Stand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">行业</span>
                    <p className="font-semibold text-slate-900">消费品 / 连锁餐饮</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">解决方案</span>
                    <p className="font-semibold text-slate-900 text-sm leading-relaxed">一体化数字经营底座</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">
                <span>项目背景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">精品咖啡数字化升级</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                M Stand以咖啡、烘焙食品、轻食、饮品为核心产品，业务覆盖多门店、多平台运营场景。随着规模持续扩张，亟需构建统一、高效、可扩展的ERP平台。
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-amber-600 mb-1">多系统集成</div>
                <p className="text-sm text-slate-600">POS、供应链、会员、外卖平台打通</p>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-2xl font-bold text-slate-800 mb-1">自动化对账</div>
                <p className="text-sm text-slate-600">多平台交易流水自动核对</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
