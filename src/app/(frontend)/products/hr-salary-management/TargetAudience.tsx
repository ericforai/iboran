import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle } from 'lucide-react'

export const TargetAudience = () => {
  const applicable = [
    { title: '集团化多组织企业', desc: '需要管理复杂组织架构、多套薪酬标准与多地社保缴纳的企事业单位' },
    { title: 'HR管理数字化转型期', desc: '希望通过 AI 自动化技术减少重复性劳动，提升组织效能的企业' },
    { title: '协同 OA 在用客户', desc: '对 OA 与 HR 系统深度集成有强诉求，追求办公管理一体化的组织' },
  ]

  const notApplicable = [
    { title: '初创极简团队', desc: '员工规模极小、无固定薪酬标准或社保合规需求的初创型企业' },
    { title: '纯离线作业单位', desc: '完全不需要移动办公、在线算薪或数字化招聘流程的机构' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">精准识别您的管理现状</h2>
          <p className="text-gray-600">并非所有组织都需要薪事力系统，我们更关注复杂管理场景下的交付价值</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 适用场景 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle2 className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">最适用的组织</h3>
            </div>
            <div className="space-y-6">
              {applicable.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 text-blue-600 font-bold">0{index + 1}.</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 不适用场景 */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 opacity-80">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">不适用的情况</h3>
            </div>
            <div className="space-y-6">
              {notApplicable.map((item, index) => (
                <div key={index} className="flex gap-4 grayscale">
                  <div className="mt-1 text-slate-400 font-bold">0{index + 1}.</div>
                  <div>
                    <h4 className="font-bold text-slate-400 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">典型痛点：您的 HR 工作是否深陷其中？</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-blue-100 text-sm">
              <li>• 算薪周期长达 [5-7] 天，且极易出现人工疏漏</li>
              <li>• 社保政策城市多、更新快，合规性管理难度大</li>
              <li>• 招聘、绩效、考勤数据孤岛化，难以形成闭环</li>
              <li>• 人事数据与 OA 分离，入转调离流程断层严重</li>
            </ul>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md whitespace-nowrap">
            诊断我的人力资源管理
          </Button>
        </div>
      </div>
    </section>
  )
}
