import { Layers, Database, Cpu } from 'lucide-react'

const features = [
  {
    title: '阶段 A: 总账直连快速提报',
    desc: '优先提取总账期的间、科目、币种、余额与发生额数据，快速覆盖最核心报表。',
    icon: Database,
    tables: ['银行贷款', '应付债券', '应付票据', '应收票据', '金融投资', '应收款项', '应付款项'],
    metric: '7大主表覆盖，缩短 70% 报送初期梳理耗时'
  },
  {
    title: '阶段 B: 台账补齐业务口径',
    desc: '用标准化业务台账补全关键属性（如合同号、发票状态、对方账号等），确保数据关联可穿透。',
    icon: Layers,
    tables: ['银行账户', '资金结算', '增值税发票', '合同', '客商信息'],
    metric: '涵盖 5 大重点领域的维度拼接'
  },
  {
    title: '阶段 C: 高维业务系统化升级',
    desc: '针对高频及高风险业务平滑演进到自动归口，加入状态流转、审批网络和多系统联动。',
    icon: Cpu,
    tables: ['担保', '信用证', '保函', '供应链金融', '财务公司', 'PPP项目', '衍生业务'],
    metric: '强化 100% 的过程业务预警与风控抓手'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl mb-6">
            根据报表分层特性，量身定制建设模块
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 break-keep tracking-tight">{feature.title}</h3>
              </div>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                {feature.desc}
              </p>
              
              <div className="mb-8">
                <div className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">覆盖报表范围</div>
                <div className="flex flex-wrap gap-2">
                  {feature.tables.map(table => (
                    <span key={table} className="px-3 py-1 bg-white text-slate-700 text-sm font-semibold rounded-md border border-slate-200">
                      {table}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <feature.icon className="w-5 h-5" />
                  <span>{feature.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
