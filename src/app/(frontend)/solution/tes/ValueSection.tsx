const metrics = [
  {
    value: '4倍+',
    label: '凭证生成效率提升',
    description: '通过事项驱动引擎，实现凭证全流程自动化生成，大幅减轻核算负荷。'
  },
  {
    value: '100%',
    label: '支付无人工干预率',
    description: '打通财务共享与资金通道，审批结束即到账，实现资金闭环管理。'
  },
  {
    value: '90%',
    label: '人工干预率降低',
    description: '结合 RPA 与智能规则引擎，减少大量重复、低价值性的手工核对工作。'
  },
  {
    value: '30%',
    label: '税务处理效率提升',
    description: '集成电档与税务云，实现发票查验、勾选认证及纳税申报的自动化。'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0052D9] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            助力企业实现业财转型
          </h2>
          <p className="text-blue-100 text-lg opacity-80">
            赋能财务人员从核算中心走向价值中心、管理中心
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold mb-4 text-white">
                {metric.value}
              </div>
              <div className="text-xl font-bold mb-3 text-blue-50">
                {metric.label}
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
