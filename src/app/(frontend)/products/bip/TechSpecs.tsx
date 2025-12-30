import { CloudCog, Lock, Network, Database } from 'lucide-react'

export default function TechSpecs() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1F2329] mb-6">
              企业级技术架构与集成
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              基于云原生微服务架构，支持高并发、高可用，满足大型集团对系统性能与安全的严苛要求。
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CloudCog className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2329] mb-2">部署灵活性</h3>
                  <div className="flex flex-wrap gap-2">
                    {['公有云', '私有云 (On-Premise)', '混合云'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2329] mb-2">开放集成能力 (LINK)</h3>
                  <p className="text-sm text-slate-600 mb-2">提供标准 Open API 与 预置集成连接器。</p>
                  <div className="flex flex-wrap gap-2">
                    {['RestAPI', 'WebHook', 'ETL', '消息队列 ESB'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2329] mb-2">安全与合规</h3>
                  <p className="text-sm text-slate-600 mb-2">全面适配国产化软硬件环境 (信创)。</p>
                  <div className="flex flex-wrap gap-2">
                    {['三级等保', 'ISO 27001', '数据加密', '审计追踪'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium border border-green-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[80px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                技术栈兼容性
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Database</div>
                  <div className="flex flex-wrap gap-2">
                    {['Oracle', 'SQL Server', 'MySQL', '达梦', '人大金仓'].map(t => (
                      <span key={t} className="px-3 py-1 border border-slate-700 rounded text-sm text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">OS</div>
                  <div className="flex flex-wrap gap-2">
                    {['Windows Server', 'Linux (RedHat/CentOS)', '麒麟', '统信 UOS'].map(t => (
                      <span key={t} className="px-3 py-1 border border-slate-700 rounded text-sm text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Middleware</div>
                  <div className="flex flex-wrap gap-2">
                    {['Tomcat', 'WebLogic', '东方通', '宝兰德'].map(t => (
                      <span key={t} className="px-3 py-1 border border-slate-700 rounded text-sm text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
