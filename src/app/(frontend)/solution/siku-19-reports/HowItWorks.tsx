import { Workflow } from 'lucide-react'

const steps = [
  {
    title: '第一步：形成报送能力',
    desc: '依托现有总账和基础台账，梳理总账口径和核算规范，建立基础报送模板。',
    timeframe: '初期'
  },
  {
    title: '第二步：补齐关键口径',
    desc: '提高业务一致性与穿透能力，通过台账补齐合同、发票、票据等明细字段校验规则。',
    timeframe: '中期'
  },
  {
    title: '第三步：深化管理能力',
    desc: '业务量增长时触发自动化控制，构建专门系统实现审批预警和自动报送归档。',
    timeframe: '长期'
  }
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 text-slate-900 overflow-hidden relative border-t border-slate-100">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/30 blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
            <Workflow className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black md:text-4xl mb-6 break-keep text-slate-900">
            稳妥实施的三步走路径
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg text-balance">
            投入更可控，边界更清晰。先满足监管基础要求，再逐步平滑提升到事前事中干预能力。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step: any, idx: number) => (
            <div key={idx} className="flex gap-6 md:gap-12 relative mb-12 last:mb-0">
              {idx < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[39px] top-[60px] bottom-[-40px] w-0.5 bg-slate-200" />
              )}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white relative z-10 shadow-lg shadow-blue-200 text-white">
                  <span className="text-xl md:text-2xl font-black tracking-tighter">0{idx + 1}</span>
                </div>
              </div>
              <div className="pt-2 md:pt-4">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">{step.timeframe}</span>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium md:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
