import { Building2, CheckCircle } from 'lucide-react'

const cases = [
  {
    company: '芯恩青岛',
    type: '12寸+8寸+MaskFab',
    scale: 'CIDM协同式集成电路制造',
    challenge: '三种类型工厂（12寸前道、8寸前道、光掩膜版）需统一智能化管理，系统复杂度高',
    solution: '部署MES、EAP、SPC、FMB、Report、RMS全套CIM解决方案，实现三厂统一管控',
    result: '12寸Auto3上线，月产3万片；8寸月产8万片；MaskFab年产2千片',
    highlight: '国内首个三类工厂统一CIM项目',
  },
  {
    company: '国微集成(嘉定厂)',
    type: '12寸前道+MaskFab',
    scale: '国家级集成电路研发中心',
    challenge: '从Auto1升级到Auto3全自动化，需要支持工艺研发和装备材料试验平台',
    solution: '部署MES、EAP、SPC、RMS解决方案，支持12英寸开放式集成电路工艺研发',
    result: 'Auto3上线，月产3000片，三期持续合作部署实施中',
    highlight: '从Auto1到Auto3全自动化升级',
  },
  {
    company: '华虹半导体(临港厂)',
    type: '12寸前道先导线',
    scale: '汽车电子芯片制造领军企业',
    challenge: '作为大陆首家通过VDA 6.3过程审核的A级汽车芯片供应商，对系统要求极高',
    solution: '部署MES、EAP、SPC、Report、RMS解决方案，建立符合汽车行业标准的制造体系',
    result: 'Auto1全线顺利上线并运行，满足汽车电子严苛品质要求',
    highlight: 'VDA 6.3 A级汽车芯片供应商',
  },
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            泊冉软件已成功服务多家头部半导体企业，成为国产12寸量产FAB线CIM的专业供应商
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0052D9] to-blue-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{caseItem.company}</h3>
                    <p className="text-blue-100 text-sm">{caseItem.type}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building2 size={24} className="text-white" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {caseItem.scale}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-red-600 mb-2">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">!</span>
                    挑战
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.challenge}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">→</span>
                    方案
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.solution}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600 mb-2">
                    <CheckCircle size={16} />
                    成果
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
              
              {/* Footer Highlight */}
              <div className="px-6 pb-6">
                <div className="bg-[#F7F8FA] rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-[#0052D9]">
                    ✨ {caseItem.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
