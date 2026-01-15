import { Quote, CheckCircle2 } from 'lucide-react'

const cases = [
  {
    company: '蒙牛乳业',
    industry: '乳制品',
    challenge: '牧场设备多样且数据分散，缺乏统一的预警和预测机制，难以实现按需产奶。',
    solution: '实施蒙牛数智奶源系统，实现繁育、健康、产奶、饲料、品质及兽药的一体化纵向集成。',
    result: '牧场设备数据自动采集。奶量预测准确率大幅提升。核心业务流程全流程数智化。'
  }
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Customer Success
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            行业先进实践案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid gap-12 max-w-5xl mx-auto">
          {cases.map((cs, idx) => (
            <div 
              key={idx}
              className="relative bg-[#F7F8FA] rounded-3xl p-8 lg:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote size={80} className="text-[#0052D9]" />
              </div>
              
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm mb-4 border border-blue-50">
                  <span className="text-sm font-bold text-[#0052D9]">{cs.industry}</span>
                </div>
                <h3 className="text-3xl font-black text-[#1F2329] mb-4">
                  {cs.company}
                </h3>
              </div>
              
              <div className="lg:w-2/3 space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                       面临挑战
                    </h4>
                    <p className="text-[#1F2329] font-medium leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0052D9] uppercase tracking-widest mb-3 flex items-center gap-2">
                       数智方案
                    </h4>
                    <p className="text-[#1F2329] font-medium leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <CheckCircle2 className="w-5 h-5" /> 核心价值
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cs.result.split('。').filter(s => s).map((res, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{res}。</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
