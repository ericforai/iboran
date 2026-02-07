import React from 'react'

const values = [
  {
    label: "质量合规",
    value: "近100%",
    desc: "符合 GMP/GSP 监管要求",
  },
  {
    label: "交付周期",
    value: "-40%",
    desc: "大幅缩短项目周期",
  },
  {
    label: "核算时效",
    value: "+30%",
    desc: "自动化业财一体核算",
  },
  {
    label: "资源利用",
    value: "+25%",
    desc: "物料与人力精准调度",
  }
]

export function ValueSection() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-blue-100 font-bold mb-2">{item.label}</div>
              <p className="text-blue-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
