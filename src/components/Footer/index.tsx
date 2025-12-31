
import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] text-[#424245] border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl font-bold text-[#1D1D1F] tracking-tight">泊冉软件</div>
              <span className="text-[10px] font-semibold border border-red-600 text-red-600 px-2 py-0.5 rounded-full tracking-wider uppercase">
                Platinum Partner
              </span>
            </div>
            <p className="text-[#86868B] text-sm leading-relaxed mb-6 max-w-sm">
              致力为高成长型企业提供全面的数智化解决方案。作为用友网络铂金合作伙伴，我们专注于通过技术创新推动企业数字化转型。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5 group-hover:text-[#004499] transition-colors" />
                <span className="group-hover:text-[#1D1D1F] transition-colors">上海市普陀区曹杨路1888号星光耀广场1号楼1005室</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-[#0066CC] shrink-0 group-hover:text-[#004499] transition-colors" />
                <span className="font-mono text-lg font-semibold text-[#1D1D1F] group-hover:text-[#0066CC] transition-colors">400-9955-161</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#1D1D1F] mb-6">产品中心</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/yonsuite" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">YonSuite 成长型云服务</Link></li>
              <li><Link href="/products/u9-cloud" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">U9 Cloud 制造云</Link></li>
              <li><Link href="/products/u8-cloud" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">U8 Cloud 创新云</Link></li>
              <li><Link href="/products/collaborative-office" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">协同办公</Link></li>
              <li><Link href="/solution/business/digital-modeling" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">数字化建模</Link></li>
              <li><Link href="/solution/business/aip-intelligent-apps" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">AI 智能应用</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#1D1D1F] mb-6">核心领域</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solution/business/finance-cloud" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">智能财务</Link></li>
              <li><Link href="/solution/business/s2p" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">供应链管理</Link></li>
              <li><Link href="/solution/business/mes" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">智能制造</Link></li>
              <li><Link href="/solution/business/hrm" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">人力资源</Link></li>
              <li><Link href="/solution/business/p2c-project-to-cost" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">项目管理</Link></li>
              <li><Link href="/solution/business/revenue-cloud" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">营销增长</Link></li>
              <li><Link href="/solution/business/eam" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">资产管理</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#1D1D1F] mb-6">关于我们</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">公司简介</Link></li>
              <li><Link href="/posts" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">新闻动态</Link></li>
              <li><Link href="/about" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">加入我们</Link></li>
              <li><Link href="/about" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">联系我们</Link></li>
              <li><Link href="/solution/business/global-operations" className="hover:text-[#1D1D1F] hover:underline decoration-1 underline-offset-4 transition-all">全球经营</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-[#1D1D1F] mb-6">订阅动态</h4>
            <p className="text-xs text-[#86868B] mb-4">获取最新的产品更新与行业洞察</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="w-full bg-white border border-gray-300 text-[#1D1D1F] text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors placeholder:text-gray-400"
              />
              <button className="absolute right-1.5 top-1.5 p-1 bg-[#0066CC] hover:bg-[#004499] text-white rounded-md transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#86868B] text-center md:text-left">
            <p>© 2024 上海泊冉软件有限公司 All rights reserved.</p>
            <p className="mt-1 hover:text-[#1D1D1F] transition-colors cursor-pointer">沪ICP备13039056号</p>
          </div>
          <div className="flex gap-6 text-xs text-[#86868B]">
            <Link href="#" className="hover:text-[#1D1D1F] hover:underline transition-colors">隐私政策</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-[#1D1D1F] hover:underline transition-colors">服务条款</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-[#1D1D1F] hover:underline transition-colors">网站地图</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

