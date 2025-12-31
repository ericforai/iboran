'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserPlus, 
  Users, 
  Wallet, 
  TrendingUp, 
  Share2,
  CheckCircle2
} from 'lucide-react'

const featureTabs = [
  {
    id: 'recruitment',
    label: '人才招聘',
    icon: UserPlus,
    title: '全渠道智能招聘管理',
    desc: '从职位发布到入职入库的全流程数智化，通过 AI 技术提升选才精准度，加速人才供应。',
    features: [
      { title: 'AI 简历智能筛选', desc: '基于大模型的岗位匹配度分析，自动识别高潜人才，筛选效率提升 300%。' },
      { title: '多渠道职位发布', desc: '一键发布至主流招聘网站，简历自动归集，统一管理渠道效果。' },
      { title: '智能面试协同', desc: '自动预约面试时间，线上评价闭环，候选人体验提升 50%。' },
      { title: '电子签章/入职', desc: '全程无纸化，入职手续 10 分钟快速办理，HR 事务负担减少 60%。' }
    ],
    metric: { label: '招聘周期缩短', value: '40%' }
  },
  {
    id: 'talent',
    label: '人才管理',
    icon: Users,
    title: '精准人才画像与梯队建设',
    desc: '构建动态人才库，通过多维盘点和职业发展规划，打造可持续的人才供应链。',
    features: [
      { title: '动态人才画像', desc: '全维度标签体系，实时掌握人才分布、技能和绩效轨迹。' },
      { title: '数智人才盘点', desc: '九宫格及多维对比分析，科学识别「北极星」人才，辅助晋升决策。' },
      { title: '任职资格管理', desc: '标准化职等职级体系，明确人才标准，畅通双通道发展路径。' },
      { title: '继任计划管理', desc: '自动发现关键岗位缺口，建立人才池，确保核心岗位不间断供应。' }
    ],
    metric: { label: '人才识别精准度', value: '95%' }
  },
  {
    id: 'compensation',
    label: '全面薪酬',
    icon: Wallet,
    title: '敏捷合规的薪资福利体系',
    desc: '支持多币种、多法人、全球化发薪，实现薪酬策略与业务目标的深度对齐。',
    features: [
      { title: '复杂薪资核算', desc: '支持多套薪规并行，自动对接社保个税、考勤数据，核算效率提升 70%。' },
      { title: '奖金分配模型', desc: '基于绩效达成度自动计算梯度奖金，激励成本更精准可控。' },
      { title: '全球薪酬合规', desc: '内置多国税收与合规策略，支持属地化发薪与多币种自动兑换。' },
      { title: '弹性福利平台', desc: '满足不同代际员工的个性化福利需求，提升员工认同感与留存率。' }
    ],
    metric: { label: '发薪自动化率', value: '90%' }
  },
  {
    id: 'performance',
    label: '绩效管理',
    icon: TrendingUp,
    title: '目标驱动的高绩效组织',
    desc: '支持 OKR、KPI、360度 等多种评估模式，打通目标分解到即时回馈的全过程。',
    features: [
      { title: '战略目标分解', desc: '上下同欲，将公司大目标层层分解至个人，确保员工努力方向一致。' },
      { title: '即时反馈沟通', desc: '打破年终「一考定终身」，通过持续反馈提升员工绩效，管理效率提升 40%。' },
      { title: '绩效分析洞察', desc: '智能分析团队与个人能力短板，自动生成针对性改进建议。' },
      { title: '多维评价体系', desc: '上级、同事、下属、客户全方位评估，确保评价结果客观公平。' }
    ],
    metric: { label: '管理效能提升', value: '25%' }
  },
  {
    id: 'shared-services',
    label: '人力共享',
    icon: Share2,
    title: '卓越运营的共享服务中心',
    desc: '将事务性工作标准化、流程化，通过数智员工实现高效的人力资源服务交付。',
    features: [
      { title: '标准化作业平台', desc: '全级次任务分流与协作，确保全国乃至全球服务标准高度统一。' },
      { title: '数智员工 (RPA)', desc: '自动处理社保申报、流程预警、证明开具等重复工作，零差错率。' },
      { title: '智能客服助理', desc: '7×24 小时在线，通过语音或文字解答政策问询，自助服务覆盖率 100%。' },
      { title: '精益运营分析', desc: '监控每个任务的处理时长与质量，持续优化共享资源配置，降低成本。' }
    ],
    metric: { label: '人均服务效能', value: '+30%' }
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id)
  const currentTab = featureTabs.find(tab => tab.id === activeTab) || featureTabs[0]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">HRM 核心管理能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建人力资源全生命周期数智化管理体系，加速人力运营从事务型向战略型转型。
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 px-2">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F8FA] rounded-[2rem] p-8 lg:p-12 border border-slate-100"
          >
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0052D9] shadow-sm mb-8">
                  <currentTab.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2329] mb-4">{currentTab.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {currentTab.desc}
                </p>
                <div className="bg-[#0052D9] text-white p-6 rounded-2xl">
                  <div className="text-3xl font-bold mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{currentTab.metric.value}</div>
                  <div className="text-sm opacity-80">{currentTab.metric.label}</div>
                </div>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                {currentTab.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0052D9] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <h4 className="font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
