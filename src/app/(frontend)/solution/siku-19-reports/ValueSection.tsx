export default function ValueSection() {
  const metrics = [
    { value: '7+5+7', label: '分层处理机制', desc: '按业务成熟度进行梯次建设' },
    { value: '3 阶段', label: '平稳落地路径', desc: '全盘投资可控，按步验收' },
    { value: '100%', label: '司库报送合规', desc: '完全覆盖监管主体/发生额要求' },
    { value: '0 中断', label: '无缝业务演进', desc: '避免直接上线大系统导致的阵痛' }
  ]

  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-white/20 items-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
                {m.value}
              </div>
              <div className="text-xl font-bold mb-2 break-keep">{m.label}</div>
              <p className="text-blue-200 font-medium text-sm md:text-base px-4 break-keep">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
