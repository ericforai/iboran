export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Solution Overview
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            国资国企数智化转型&quot;1+N+M&quot;总体架构
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            构建以国资大数据中心为核心，连接国资监管端与企业运营端，实现&quot;横向互联，纵向互通&quot;的数智化生态体系。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 1: 国资大数据中心 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-black text-blue-900">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#0052D9] mb-4 relative z-10">
              1个 国资大数据中心
            </h3>
            <p className="text-slate-600 mb-6 relative z-10">
              汇聚国资委监管数据与企业经营数据，统一数据标准，构建数据资产地图，支撑智慧决策。
            </p>
            <ul className="space-y-2 text-sm text-slate-700 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                数据采集与交换
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                数据治理与质量管理
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                数据分析与可视化驾驶舱
              </li>
            </ul>
          </div>

          {/* N: 智慧监管应用 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-black text-red-900">N</span>
            </div>
            <h3 className="text-xl font-bold text-[#E60012] mb-4 relative z-10">
              N个 智慧监管应用
            </h3>
            <p className="text-slate-600 mb-6 relative z-10">
              面向国资监管机构，提供全覆盖、全过程、全视角的在线监管服务，提升监管效能。
            </p>
            <ul className="space-y-2 text-sm text-slate-700 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                &quot;三重一大&quot;决策运行监管
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                大额资金动态监测
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                投资项目全生命周期管理
              </li>
            </ul>
          </div>

          {/* M: 企业数字化服务 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-black text-emerald-900">M</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-600 mb-4 relative z-10">
              M个 企业数字化服务
            </h3>
            <p className="text-slate-600 mb-6 relative z-10">
              赋能国企集团及下属企业，构建人、财、物、产、供、销一体化的数字化运营平台。
            </p>
            <ul className="space-y-2 text-sm text-slate-700 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                财务共享与司库管理
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                人力资源数字化
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                国资云平台服务
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
