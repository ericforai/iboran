export default function TrustProof() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            行业领袖的共同选择
          </h2>
          <p className="text-slate-600">
            30+ 年企业服务经验，承载全球众多顶尖企业的数智化创新。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-4xl font-bold text-[#E60012] mb-2">30+</div>
            <div className="text-slate-500 text-sm">年企业服务经验</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1F2329] mb-2">39,000+</div>
            <div className="text-slate-500 text-sm">大型/集团型客户</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1F2329] mb-2">TOP 1</div>
            <div className="text-slate-500 text-sm">亚太企业云服务市场占有率</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#1F2329] mb-2">10,000+</div>
            <div className="text-slate-500 text-sm">ISV 生态伙伴</div>
          </div>
        </div>

        {/* Logos Placeholder (Using Text for now or could use Images if available) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 grayscale opacity-60">
           {/* Placeholder for logos. Using div with text for representation */}
           {['中国建筑', '一汽集团', '国家电网', '三一重工', '蒙牛集团', '碧桂园'].map(name => (
             <div key={name} className="h-16 border border-slate-200 rounded flex items-center justify-center font-bold text-slate-400">
               {name}
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
