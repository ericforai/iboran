import { TrendingUp, Zap, FileCheck, BarChart3 } from 'lucide-react'

const metrics = [
  {
    value: "80%",
    label: "合并效率提升",
    icon: TrendingUp,
    color: "blue"
  },
  {
    value: "100%",
    label: "主表自动化率",
    icon: Zap,
    color: "green"
  },
  {
    value: "3,000+",
    label: "合并科目标准化",
    icon: FileCheck,
    color: "red"
  },
  {
    value: "136+",
    label: "自动生成报表",
    icon: BarChart3,
    color: "purple"
  }
]

const customers = [
  "牧原", "中国西电", "百丽国际", "开滦集团", 
  "大北农", "贵州茅台", "国投", "中信集团"
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">驱动财务管理价值重构</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            不仅是系统的上线，更是财务效率与决策质量的全面提升，助力企业赢在数字时代。
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                item.color === 'blue' ? 'bg-blue-50' :
                item.color === 'green' ? 'bg-green-50' :
                item.color === 'red' ? 'bg-red-50' : 'bg-purple-50'
              }`}>
                <item.icon className={`${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'green' ? 'text-green-600' :
                  item.color === 'red' ? 'text-[#E60012]' : 'text-purple-600'
                }`} size={32} />
              </div>
              <div className={`text-4xl font-extrabold mb-2 ${
                item.color === 'blue' ? 'text-blue-600' :
                item.color === 'green' ? 'text-green-600' :
                item.color === 'red' ? 'text-[#E60012]' : 'text-purple-600'
              }`}>
                {item.value}
              </div>
              <div className="text-slate-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#1F2329] mb-2">众多行业领先企业的选择</h3>
            <p className="text-slate-500 text-sm">涵盖农牧、电力、零售、能源、金融等多个行业</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {customers.map((customer, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 bg-slate-50 rounded-lg text-slate-600 font-medium hover:bg-[#0052D9] hover:text-white transition-colors duration-300 cursor-default"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
