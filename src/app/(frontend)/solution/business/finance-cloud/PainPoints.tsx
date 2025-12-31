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
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">传统财务管理面临的困境</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-[#E60012] mb-6 group-hover:scale-110 transition-transform">
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
