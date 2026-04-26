'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Workflow, 
  Cpu, 
  RefreshCcw, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  TrendingUp,
  FileSearch,
  Users
} from 'lucide-react'

const features = [
  {
    pillar: '智能 IP 企划与孵化',
    tagline: '用数据驱动创意，变热度为价值',
    description: '在周边衍生品开发初期，将感性转化为理性，通过全维度的分级与风险预测，确保每一项投入都具备商业确定性。',
    items: [
      { title: '多维分级引擎', desc: '根据 41 个维度（热度、难度等）自动对产品进行 S/A/B/C 级评定' },
      { title: '风险评估矩阵', desc: '立项阶段预警库存积压、开发逾期或品质合规风险' },
      { title: '结构化业务案例', desc: '强制性市场逻辑录入，告别“拍脑袋”的随机开发决策' }
    ],
    icon: BarChart3,
    color: 'blue'
  },
  {
    pillar: '聚合询价与协同打样',
    tagline: '全球优质产能，触手可及',
    description: '建立了透明的询价机制，并将所有核心部门（品控、财务、法务、仓储、采购）拉入同一协同链路。',
    items: [
      { title: '智能供应商画像', desc: '基于外部征信与内部绩效评分（良品率、交付率）智能筛选工厂' },
      { title: '多部门联动评审', desc: '五大职能部门在线联动，实现合规性前置，杜绝事后风险' },
      { title: '样品数字化日志', desc: '每一版样品的照片、成本偏离度与质检报告均全链路可追溯' }
    ],
    icon: Workflow,
    color: 'red'
  },
  {
    pillar: '生产数字孪生与实时协同',
    tagline: '让“黑盒”生产变得透明可见',
    description: '通过数字孪生技术，将物理工厂的每一道工序映射到数字看板，实现工序级别的进度与品质监控。',
    items: [
      { title: '工序级进度追踪', desc: '从开模、印刷、拼装到成品，实时展示任务完成百分比' },
      { title: '移动端边缘质检 (Edge-QC)', desc: '驻场质检员通过 App 录入缺陷，系统自动生成 PDCA 改善建议' },
      { title: '发货协同中脑', desc: '自动计算箱数、体积与物流配载，同步 3PL 后端数据' }
    ],
    icon: Cpu,
    color: 'indigo'
  },
  {
    pillar: '自适应补货与全生命周期循环',
    tagline: '不仅管理销售，更管理再生',
    description: 'NexSCM 不仅根据销势预测补货，更关注产品的“终局”——无论是爆款加码还是长尾处置。',
    items: [
      { title: 'AI 智能补货推荐', desc: '根据销量、库存与产能动态分析，一键生成采购申请 (PR)' },
      { title: '售后反馈闭环', desc: '将客诉及售后反馈直接关联至 SKU 生产批次，反哺下一轮企划' },
      { title: '可视化库存看板', desc: '实时监控全国仓网库存周转率，预报长尾积压与爆款缺货风险' }
    ],
    icon: RefreshCcw,
    color: 'orange'
  }
]

export default function Features() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <div className="max-w-3xl">
            <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <Layers size={16} />
              CORE PILLARS OF NexSCM
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2329] leading-tight">
              四大核心支柱<br />
              <span className="text-[#0052D9]">重新定义周边供应链底层设施</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-slate-100 pl-6 lg:pl-0 lg:pr-6 italic">
            我们不仅仅提供软件，我们正在构建一套行业标准的端到端操作系统。
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((f: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-[#F7F9FC] hover:bg-white border-2 border-transparent hover:border-slate-100 transition-all duration-500 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-5 rounded-3xl bg-white shadow-xl shadow-slate-200/50 text-${f.color}-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                  <f.icon className="w-8 h-8" />
                </div>
                <div className="text-slate-300 font-mono text-4xl font-black opacity-30 select-none">
                  0{i + 1}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-[#1F2329] mb-2">{f.pillar}</h3>
                <p className={`text-sm font-bold text-${f.color}-600 mb-4 tracking-wide uppercase`}>{f.tagline}</p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {f.description}
                </p>
              </div>

              <div className="mt-auto space-y-4 pt-8 border-t border-slate-200/60">
                {f.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="mt-1.5 shrink-0">
                      <CheckCircle2 className={`w-4 h-4 text-${f.color}-500 opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1F2329] mb-0.5">{item.title}</div>
                      <div className="text-xs text-slate-500 group-hover/item:text-slate-700 transition-colors">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
