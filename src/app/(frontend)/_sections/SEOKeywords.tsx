import React from 'react'

export const SEOKeywords = () => {
  const keywords = [
    '用友实施商',
    '上海 ERP 定制',
    '业财一体化方案',
    '企业数智化转型',
    'YonBIP',
    'YonSuite',
    '协同办公定制',
    '数字化建模',
    '供应链优化',
    '集团财务管理'
  ]

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {keywords.map((kw, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium text-slate-400 hover:text-[#0052D9] transition-colors cursor-default"
            >
              # {kw}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
