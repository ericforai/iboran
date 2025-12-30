export default function ValueSection() {
  const metrics = [
    { value: '2500+', label: '预制银行直连接口', desc: '覆盖国内外主流各级商业银行' },
    { value: '7天', label: '平均交付上线周期', desc: '基于成熟交付模型，快速投产' },
    { value: '1000+', label: '大型集团共同选择', desc: '助力千行百业实现数智司库' },
    { value: '100%', label: '合规安全保障', desc: '等级保护3级认证，交易不做留存' },
  ]

  return (
    <section className="py-24 bg-[#0052D9] relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-800 rounded-full blur-[128px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">业务价值：由繁化简，由表及里</h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl font-extrabold text-white mb-4">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-blue-100 mb-2">
                {metric.label}
              </div>
              <p className="text-sm text-blue-200">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-white text-lg opacity-90 leading-relaxed italic">
            “通过银企联，我们成功实现了全集团账户数据的实时穿透。对账不再是月底的噩梦，而是日常的即时管理。”
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse" />
            <div className="text-left">
              <div className="text-white font-bold text-sm">某世界500强企业</div>
              <div className="text-blue-200 text-xs">财务共享中心负责人</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
