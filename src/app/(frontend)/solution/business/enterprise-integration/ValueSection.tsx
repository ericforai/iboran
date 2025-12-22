export default function ValueSection() {
  const values = [
    { label: '集成效率', value: '50%', suffix: '↑', desc: '缩短项目对接与部署周期' },
    { label: '接口安全', value: '100%', suffix: '', desc: '数据脱敏与全流程日志审计' },
    { label: '并发支撑', value: 'TB', suffix: '级', desc: '稳定支撑高并发数据交换' },
    { label: '预置连接', value: '100', suffix: '+', desc: '跨行业主流应用开箱即用' },
  ]

  return (
    <section className="py-24 bg-[#1F2329] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E60012]/10 blur-[120px] -z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">连接深度，决定数智高度</h2>
            <p className="text-slate-400">
              LINK 不仅是连接工具，更是企业数据治理与业务协同的基石
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#E60012] mb-3 flex items-baseline justify-center">
                  {item.value}
                  <span className="text-xl font-medium ml-1">{item.suffix}</span>
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="p-8 lg:p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-[#E60012]/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#E60012]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-[#E60012]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">企业集成资产中心</h3>
              <p className="text-slate-400 leading-relaxed">
                通过 LINK 平台，企业可以沉淀自己的 API 资产、数据模型和业务规则。每一次集成不再是从零开始，而是基于现有资产的快速拼装，极大降低了长期运维成本。
              </p>
            </div>
            
            <div className="p-8 lg:p-10 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-[#0052D9]/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#0052D9]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-full bg-[#0052D9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">混合云集成架构</h3>
              <p className="text-slate-400 leading-relaxed">
                无论业务部署在私有云还是公有云，LINK 都能提供统一的连接体验，帮助企业构建安全、可靠的混合集成体系，屏蔽底层环境复杂性。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
