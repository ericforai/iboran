'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  ShieldCheck, 
  Database,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Filter,
  FileText,
  BadgeCheck,
  TrendingUp
} from 'lucide-react'

// --- Sub-Components (Mockup Widgets) ---

const DemandWidget = () => (
  <div className="p-6 space-y-4">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">近期实时标讯</h4>
      <div className="flex gap-2">
        <div className="px-2 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 rounded">AI 智能匹配</div>
      </div>
    </div>
    {[
      { title: '某市智慧政务大厅扩建项目', budget: '￥450W', match: 98, time: '2分钟前' },
      { title: '全国电力数字化集采项目', budget: '￥1.2B', match: 92, time: '15分钟前' },
      { title: '大型银行云平台二期工程', budget: '￥850W', match: 88, time: '1小时前' },
      { title: '省级算力中心建设项目', budget: '￥5,600W', match: 95, time: '3小时前' }
    ].map((item, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between shadow-sm hover:border-blue-200 transition-colors"
      >
        <div className="flex flex-col gap-1">
          <span className="text-sm font-extrabold text-slate-900 line-clamp-1">{item.title}</span>
          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
            <span className="text-blue-600 font-bold">{item.budget}</span>
            <span>{item.time}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-black text-slate-900">{item.match}%</span>
          </div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Match</span>
        </div>
      </motion.div>
    ))}
  </div>
)

const ExecutionWidget = () => (
  <div className="p-6 h-full flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">投标任务看板</h4>
      <Filter size={14} className="text-slate-400" />
    </div>
    <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-4 flex-1">
      {[
        { label: '待处理 (Draft)', count: 2, items: [{ t: '资质文件汇总', p: 40 }] },
        { label: '执行中 (Doing)', count: 4, items: [{ t: '技术偏离表确认', p: 75 }, { t: '报价模型测算', p: 20 }] },
        { label: '已提交 (Done)', count: 12, items: [{ t: '某智慧工厂标书', p: 100 }] }
      ].map((col, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{col.label}</span>
            <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 rounded-full">{col.count}</span>
          </div>
          <div className="flex-1 bg-slate-50/50 rounded-2xl p-2 space-y-2 border border-slate-100">
            {col.items.map((item, j) => (
              <div key={j} className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                <p className="text-[11px] font-extrabold text-slate-800 mb-2 leading-tight">{item.t}</p>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.p === 100 ? 'bg-emerald-500' : 'bg-blue-600'} rounded-full`} style={{ width: `${item.p}%` }} />
                </div>
              </div>
            ))}
            <div className="h-20 border-2 border-dashed border-slate-100 rounded-xl flex items-center justify-center">
               <span className="text-[10px] text-slate-300 font-medium">+ 添加任务</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const QualityWidget = () => (
  <div className="p-6 h-full flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">AI 合规合规审计</h4>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-emerald-600 uppercase">Scanning...</span>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
      </div>
    </div>
    <div className="flex-1 flex gap-6">
      <div className="flex-1 bg-slate-50/50 rounded-2xl border border-slate-100 p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="space-y-3 relative">
           <div className="h-3 w-3/4 bg-slate-200 rounded" />
           <div className="h-3 w-full bg-slate-100 rounded" />
           <div className="h-3 w-1/2 bg-red-100 border-l-2 border-red-400 rounded-r" />
           <div className="h-20 w-full border-2 border-red-200 bg-red-50/30 rounded-xl flex flex-col p-3 gap-2">
              <div className="flex items-center gap-2">
                <AlertCircle size={12} className="text-red-500" />
                <span className="text-[9px] font-black text-red-500 uppercase">检测到评分红线</span>
              </div>
              <p className="text-[10px] text-red-700 font-medium leading-relaxed italic">
                “技术部分第4.2节关于原厂授权的表述不符合招标文件 P38 的刚性要求...”
              </p>
           </div>
           <div className="h-3 w-4/5 bg-slate-100 rounded" />
        </div>
      </div>
      <div className="w-48 space-y-3">
        {[
          { label: '资质原件核对', status: 'pass' },
          { label: '财务报表审计', status: 'pass' },
          { label: '技术偏离分析', status: 'warn' },
          { label: '专家委员会评审', status: 'pending' }
        ].map((check, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
            <span className="text-[10px] font-bold text-slate-700">{check.label}</span>
            {check.status === 'pass' && <BadgeCheck size={14} className="text-emerald-500" />}
            {check.status === 'warn' && <AlertCircle size={14} className="text-red-500" />}
            {check.status === 'pending' && <Clock size={14} className="text-slate-300" />}
          </div>
        ))}
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">一键修正标书</button>
      </div>
    </div>
  </div>
)

const KnowledgeWidget = () => (
  <div className="p-6 h-full">
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">企业投标资产库</h4>
      <div className="flex items-center gap-3">
        <Search size={14} className="text-slate-400" />
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px]">智</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6">
      {[
        { label: '企业资质 (Quals)', count: 24, last: '2h ago', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: '项目案例 (Cases)', count: 156, last: '昨日更新', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: '标书范本 (Templates)', count: 48, last: '1wk ago', icon: Database, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: '人员简历 (Bios)', count: 85, last: '刚刚', icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-50' }
      ].map((asset, i) => (
        <div key={i} className="p-6 bg-white border border-slate-100 rounded-[28px] shadow-sm hover:shadow-md transition-all group cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 rounded-xl ${asset.bg} ${asset.color}`}>
              <asset.icon size={20} />
            </div>
            <span className="text-[10px] font-bold text-slate-400">{asset.last}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{asset.count}</span>
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">{asset.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const BrowserFrame = ({ children, title }: { children: React.ReactNode, title: string }) => (
  <div className="w-full h-full bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
    <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-5 gap-2 shrink-0">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
      </div>
      <div className="flex-1 max-w-[400px] min-w-0 h-6 bg-white border border-slate-200/60 rounded-full mx-auto flex items-center px-3 justify-between gap-2">
         <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest truncate">smart-bid-pro.boran.ai/{title.toLowerCase()}</span>
         <Clock size={10} className="text-slate-200" />
      </div>
    </div>
    <div className="flex-1 relative bg-white overflow-hidden p-0">
      {children}
    </div>
  </div>
)

const features = [
  {
    id: 'demand',
    icon: Search,
    title: '机会与标讯 (Demand)',
    description: '全网招采数据秒级更新，多源聚合采集与 AI 深度清洗，自动判别商机契合度。',
    component: DemandWidget
  },
  {
    id: 'execution',
    icon: Briefcase,
    title: '投标项目与生成 (Execution)',
    description: '集成 AI 标书自动生成引擎，基于大模型一键产出大纲与初稿，并支持 PDCA 标准三步协同作业。',
    component: ExecutionWidget
  },
  {
    id: 'quality',
    icon: ShieldCheck,
    title: '文档与合规 (Quality)',
    description: '内置 AI 合规扫描引擎，针对招标文件“评分陷阱”提供前置预警与质量把关。',
    component: QualityWidget
  },
  {
    id: 'knowledge',
    icon: Database,
    title: '知识资产 (Knowledge)',
    description: '构建组织的“投标大脑”，将散落的资质、成功案例与标书沉淀为可检索库。',
    component: KnowledgeWidget
  }
]

export const Capabilities = () => {
  const [activeTab, setActiveTab] = useState(features[0].id)
  const activeFeature = features.find(f => f.id === activeTab) || features[0]

  return (
    <section id="capabilities" className="py-16 md:py-32 bg-white px-4 sm:px-6 border-b border-slate-100 overflow-hidden">
            {/* AI Scraper Friendly Content (GEO) */}
            <div className="sr-only">
                {features.map((item, i) => (
                    <div key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.problem || item.description || item.desc || ""}</p>
                        <p>{item.solution || ""}</p>
                        <p>{item.outcome || ""}</p>
                        {item.features && <ul>{item.features.map((f, fi) => <li key={fi}>{f}</li>)}</ul>}
                        {item.benefits && <ul>{item.benefits.map((b, bi) => <li key={bi}>{b}</li>)}</ul>}
                        {item.metrics && <p>Metrics: {item.metrics.join(', ')}</p>}
                    </div>
                ))}
            </div>
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 px-2 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            全场景核心产品力
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            从单一工具交付全面转向“体系化治理交付”，<br className="hidden md:block" />
            让投标能力成为企业的差异化竞争优势。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Left: Tab selectors */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id)}
                className={`w-full text-left p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[32px] border transition-all relative overflow-hidden group touch-manipulation ${
                  activeTab === f.id 
                    ? 'bg-blue-50 border-blue-200 shadow-xl shadow-blue-600/5' 
                    : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200 shadow-sm'
                }`}
              >
                {activeTab === f.id && (
                    <motion.div 
                        layoutId="active-marker"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                    />
                )}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 transition-colors ${activeTab === f.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                    <f.icon size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-extrabold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 leading-snug ${activeTab === f.id ? 'text-slate-900' : 'text-slate-800'}`}>{f.title}</h3>
                    <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed transition-colors ${activeTab === f.id ? 'text-slate-600' : 'text-slate-500'}`}>
                      {f.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Mockup display */}
          <div className="lg:col-span-7 relative min-h-[min(420px,72dvh)] h-[min(520px,75dvh)] sm:h-[500px] lg:aspect-[4/3] lg:h-auto lg:min-h-[560px]">
            <div className="relative w-full h-full min-h-0 bg-slate-50/50 rounded-3xl sm:rounded-[48px] p-3 sm:p-4 md:p-8 border border-slate-100 shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]" />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full relative z-10"
                >
                  <BrowserFrame title={activeFeature.id}>
                     <div className="w-full h-full min-h-0 transform origin-top scale-[0.96] sm:scale-[0.98]">
                        <activeFeature.component />
                     </div>
                  </BrowserFrame>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/5 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-600/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

