
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl font-bold text-white tracking-tight">泊冉软件</div>
              <span className="text-[10px] font-semibold bg-red-600 text-white px-2 py-0.5 rounded-full tracking-wider uppercase">
                Platinum Partner
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              致力为高成长型企业提供领先的数智化解决方案。作为用友网络铂金合作伙伴，我们专注于通过技术创新推动企业数字化转型。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                <span className="group-hover:text-slate-200 transition-colors">上海市普陀区曹杨路1888号星光耀广场1号楼1005室</span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-blue-400 transition-colors" />
                <span className="font-mono text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">400-9955-161</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-white mb-6">产品中心</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/yonsuite" className="hover:text-white hover:translate-x-1 inline-block transition-all">YonSuite</Link></li>
              <li><Link href="/products/u8-cloud" className="hover:text-white hover:translate-x-1 inline-block transition-all">U8 Cloud</Link></li>
              <li><Link href="/products/u9-cloud" className="hover:text-white hover:translate-x-1 inline-block transition-all">U9 Cloud</Link></li>
              <li><Link href="/products/collaborative-office" className="hover:text-white hover:translate-x-1 inline-block transition-all">协同办公</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-white mb-6">解决方案</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solution/business/finance-cloud" className="hover:text-white hover:translate-x-1 inline-block transition-all">智能财务</Link></li>
              <li><Link href="/solution/business/s2p" className="hover:text-white hover:translate-x-1 inline-block transition-all">供应链管理</Link></li>
              <li><Link href="/solution/business/hrm" className="hover:text-white hover:translate-x-1 inline-block transition-all">人力资源</Link></li>
              <li><Link href="/solution/business/mes" className="hover:text-white hover:translate-x-1 inline-block transition-all">智能制造</Link></li>
              <li><Link href="/solution/business/p2c-project-to-cost" className="hover:text-white hover:translate-x-1 inline-block transition-all">项目管理</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-white mb-6">关于我们</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">公司简介</Link></li>
              <li><Link href="/posts" className="hover:text-white hover:translate-x-1 inline-block transition-all">新闻动态</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">加入我们</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">联系我们</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6">订阅动态</h4>
            <p className="text-xs text-slate-500 mb-4">获取最新的产品更新与行业洞察</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
              <button className="absolute right-1.5 top-1.5 p-1 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-sm">支</span>
               </div>
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-sm">微</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500 text-center md:text-left">
            <p>© 2024 上海泊冉软件有限公司 All rights reserved.</p>
            <p className="mt-1 hover:text-slate-400 transition-colors cursor-pointer">沪ICP备13039056号</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-white transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-white transition-colors">网站地图</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

