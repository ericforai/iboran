'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowRightLeft,
  Search,
  LayoutGrid
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: '智能集成与数据闭环',
    description: '自动集成用友及外部异构系统凭证、余额、关联交易明细，实现从末端单位到集团报告的360°数据钻取。',
    metric: '数据采集效率提升 300%'
  },
  {
    icon: ArrowRightLeft,
    title: '一键对账与自动抵销',
    description: '内置明细级关联交易对账引擎，支持权益、损益、往来等复杂抵销业务呈现自动化处理，大幅减少人工干预。',
    metric: '自动抵销覆盖率达 98.2%'
  },
  {
    icon: Globe,
    title: '全球合并与多准则',
    description: '支持多币种灵活折算，内置多国会计准则转换引擎，一键生成符合不同国家监管要求的法定与管理报表。',
    metric: '支持 100+ 国家币种与准则'
  },
  {
    icon: ShieldCheck,
    title: '国资监管一键报送',
    description: '深度适配国资委及监管机构报送要求，支持多维数据到二维报表无缝转换，一键导出监管软件指定格式。',
    metric: '报送周期缩短 70%'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2329] mb-4">
              核心能力剖析
            </h2>
            <p className="text-slate-600 text-lg">
              依托多维数据库和可视化规则引擎，为全球化企业打造精细、实时、合规的报表体系。
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#0052D9] font-bold cursor-pointer hover:underline">
            <LayoutGrid size={20} /> 查看全功能视图
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
            >
              <div className="w-16 h-16 shrink-0 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-[#0052D9] group-hover:text-white transition-all duration-500">
                <feature.icon size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#0052D9] rounded-lg text-sm font-bold border border-blue-100">
                  <Zap size={14} className="animate-pulse" />
                  {feature.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Teaser */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#001529] to-[#002140] rounded-2xl flex flex-col md:flex-row items-center justify-between text-white border border-slate-800">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <Search size={24} className="text-slate-100" />
            </div>
            <div>
              <div className="text-lg font-bold">支持全流程审计钻取</div>
              <div className="text-slate-400 text-sm">从合并报表一键穿透至最底层业务凭证</div>
            </div>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20">
            了解钻取详情
          </Link>
        </div>
      </div>
    </section>
  )
}
