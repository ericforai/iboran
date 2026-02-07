export default function ValueSection() {
  const metrics = [
    { value: '50%+', label: '合同起草效率提升' },
    { value: '70%', label: '平均签署周期缩短' },
    { value: '近100%', label: '履约执行动态监控' },
    { value: 'ZERO', label: '合规性校验风险漏洞' },
  ]

  return (
    <section className="py-24 bg-[#001D3D] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">业务价值：从“管文件”到“管经营”</h2>
        <p className="text-blue-100 mb-16 max-w-2xl mx-auto opacity-80 text-lg">
          通过全链路数智化工管理，助力企业实现精准的风控与高效的业财协同，
          让每一份合同都成为企业价值增长的基石。
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="text-4xl lg:text-5xl font-extrabold text-[#E60012] mb-4 group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="text-blue-50 font-medium opacity-90">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
