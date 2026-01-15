'use client'

import { Split, Hourglass, FileWarning } from 'lucide-react'

const painPoints = [
  {
    icon: Split,
    title: "业财分离，数据脱节",
    desc: "业务与财务系统各自为政，口径不一。财务需手工核对业务单据，无法实时追踪业务源头，导致核算滞后，无法真实反映即时经营状况。"
  },
  {
    icon: Hourglass,
    title: "开票繁琐，合规风险",
    desc: "进项采集难、销项开票慢。面对海量票据，手工验真与防重效率低下。六号令合规压力大，电子发票重复报销与虚假入账风险难以根控。"
  },
  {
    icon: FileWarning,
    title: "档案碎片，检索极其困难",
    desc: "纸电凭证双重管理，存储成本高且易丢失。审计与税务抽查时，附件调阅耗时耗力。缺乏统一的数字化档案管理体系，数智化水平低。"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4 tracking-tight">传统财务管理面临的困境</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-blue-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-sm shadow-blue-100">
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-4 group-hover:text-[#2563EB] transition-colors">{point.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
