import { ShieldCheck, Lock, FileKey, Server } from 'lucide-react'

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: '权威资质认证',
    items: [
      '国家信息安全等级保护三级认证',
      'PCI DSS 全球支付卡行业数据安全标准',
      'ISO 27001 信息安全管理体系认证',
      '中国支付清算协会会员单位',
    ],
  },
  {
    icon: Lock,
    title: '全链路加密',
    items: [
      '国密算法加持，软硬一体加密机',
      'CFCA/银行 CA 双重身份认证',
      '全链路 SSL/TLS 加密传输',
      '敏感数据自动脱敏展示',
    ],
  },
  {
    icon: FileKey,
    title: '数据安全合规',
    items: [
      '基础信息加密存储，交易数据不做留存',
      '严格的数据权限管控与审计日志',
      '符合《数据安全法》与《个人信息保护法》',
      '定期进行第三方安全渗透测试',
    ],
  },
  {
    icon: Server,
    title: '高可用基础设施',
    items: [
      '两地三中心容灾架构',
      '金融级机房物理安全保障',
      '7x24 小时专业运维监控',
      '99.99% 系统可用性承诺',
    ],
  },
]

export default function SecuritySection() {
  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center px-3 py-1 bg-green-900/30 border border-green-800 rounded-full text-green-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              金融级安全保障
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              为每一笔资金交易<br />
              <span className="text-blue-400">保驾护航</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              用友银企联深耕金融科技领域，构建了从物理层到应用层的全方位防御体系，确保您的资金与数据万无一失。
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">0</div>
              <div className="text-slate-400">历史安全事故</div>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-6">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
