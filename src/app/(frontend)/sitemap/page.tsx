import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Briefcase, BarChart3, Users, Building2, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '网站地图 - 泊冉软件',
  description: '上海泊冉软件有限公司网站地图，快速查找产品、解决方案、案例等内容。',
  keywords: '网站地图, 站点导航, 泊冉软件',
}

export default function SitemapPage() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white pt-32 pb-16 border-b border-gray-200">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">网站地图</h1>
            <p className="text-gray-600 max-w-2xl">
              快速浏览和访问我们网站的所有页面和资源
            </p>
          </div>
        </header>

        <main className="container px-4 py-16 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 产品中心 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">产品中心</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/products/yonsuite" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>YonSuite 成长型云服务</Link></li>
                <li><Link href="/products/collaborative-office" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>协同办公</Link></li>
                <li><Link href="/solution/business/digital-modeling" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>数字化建模</Link></li>
                <li><Link href="/solution/business/aip-intelligent-apps" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>AI 智能应用</Link></li>
              </ul>
            </section>

            {/* 业务解决方案 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">业务解决方案</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/solution/business/finance-cloud" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>智能财务</Link></li>
                <li><Link href="/solution/business/s2p" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>供应链管理</Link></li>
                <li><Link href="/solution/business/mes" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>智能制造</Link></li>
                <li><Link href="/solution/business/hrm" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>人力资源</Link></li>
                <li><Link href="/solution/business/p2c-project-to-cost" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>项目管理</Link></li>
                <li><Link href="/solution/business/revenue-cloud" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>营销增长</Link></li>
                <li><Link href="/solution/business/eam" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>资产管理</Link></li>
                <li><Link href="/solution/business/r2r" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>智能报账</Link></li>
                <li><Link href="/solution/business/trm" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>税务管理</Link></li>
                <li><Link href="/solution/business/tes" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>费控管理</Link></li>
              </ul>
            </section>

            {/* 行业解决方案 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">行业解决方案</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/solution/industry/manufacturing" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>制造业</Link></li>
                <li><Link href="/solution/industry/retail" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>零售与消费品</Link></li>
                <li><Link href="/solution/industry/services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>专业服务</Link></li>
                <li><Link href="/solution/industry/biopharmaceutical" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>生物医药</Link></li>
                <li><Link href="/solution/industry/food" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>食品饮料</Link></li>
              </ul>
            </section>

            {/* 成功案例 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">成功案例</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/cases" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>查看所有案例</Link></li>
                <li><Link href="/cases/tims" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>Tims 天天咖啡</Link></li>
                <li><Link href="/cases/costa" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>Costa 咖啡</Link></li>
                <li><Link href="/cases/sumitomo" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>住友电工</Link></li>
                <li><Link href="/cases/jtekt" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>JTEKT</Link></li>
              </ul>
            </section>

            {/* 关于我们 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">关于我们</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>公司简介</Link></li>
                <li><Link href="/posts" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>新闻动态</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>联系我们</Link></li>
              </ul>
            </section>

            {/* 联系与资源 */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">联系与资源</h2>
              </div>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>在线咨询</Link></li>
                <li><Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>知识资源</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>隐私政策</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>服务条款</Link></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">客服热线</p>
                <p className="text-xl font-bold text-gray-900">400-9955-161</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
