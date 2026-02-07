
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export const Footer = () => {
    return (
      <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-24 pb-20">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-y-12 lg:gap-8 mb-20">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1 lg:col-span-6 space-y-8 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-heading font-black text-slate-900 dark:text-white tracking-tight">泊冉软件</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 border border-amber-200/50 shadow-sm whitespace-nowrap dark:from-amber-900/30 dark:to-amber-950/30 dark:text-amber-400 dark:border-amber-700/50">
                    用友合作伙伴
                  </span>
                </div>
                <p className="text-sm leading-relaxed max-w-sm text-slate-500 dark:text-slate-400">
                  致力为高成长型企业提供全面的数智化解决方案。作为用友网络合作伙伴，我们专注于通过技术创新推动企业数字化转型。
                </p>
              </div>
  
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium pt-1.5 transition-colors group-hover:text-slate-900 dark:group-hover:text-slate-200">
                    上海市普陀区曹杨路1888号星光耀广场1号楼1005室
                  </span>
                </div>
  
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg font-mono font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    400-9955-161
                  </span>
                </div>
              </div>
            </div>
  
            {/* Links Columns Group (Mobile Col 1) */}
            <div className="col-span-1 flex flex-col gap-10 md:contents">
              <div className="lg:col-span-2 md:col-span-1 lg:order-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">产品中心</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/products/yonsuite" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>YonSuite 成长型云服务</span></Link></li>
                  <li><Link href="/products/collaborative-office" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>协同办公</span></Link></li>
                  <li><Link href="/solution/business/digital-modeling" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>数字化建模</span></Link></li>
                  <li><Link href="/solution/business/aip-intelligent-apps" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>AI 智能应用</span></Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2 md:col-span-1 lg:order-4">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">关于我们</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>公司简介</span></Link></li>
                  <li><Link href="/posts" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>新闻动态</span></Link></li>
                  <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>加入我们</span></Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>联系我们</span></Link></li>
                </ul>
              </div>
            </div>
  
            <div className="lg:col-span-2 md:col-span-1 lg:order-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">核心领域</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/solution/business/finance-cloud" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>智能财务</span></Link></li>
                <li><Link href="/solution/business/s2p" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>供应链管理</span></Link></li>
                <li><Link href="/solution/business/mes" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>智能制造</span></Link></li>
                <li><Link href="/solution/business/hrm" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>人力资源</span></Link></li>
                <li><Link href="/solution/business/p2c-project-to-cost" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>项目管理</span></Link></li>
                <li><Link href="/solution/business/revenue-cloud" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>营销增长</span></Link></li>
                <li><Link href="/solution/business/eam" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"><span className="w-0 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:mr-1 text-blue-600 dark:text-blue-400">•</span> <span>资产管理</span></Link></li>
              </ul>
            </div>
  
            {/* About Us moved up to wrapper */}
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 text-center md:text-left">
              <p>© 2026 上海泊冉软件有限公司 版权所有</p>
              <p className="mt-1 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">沪ICP备13039056号</p>
            </div>
            <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-500 lg:pr-64">
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">隐私政策</Link>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">服务条款</Link>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <Link href="/sitemap" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">网站地图</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
