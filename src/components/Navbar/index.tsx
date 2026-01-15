import Link from 'next/link'
import { NavbarClient } from './NavbarClient'
import type { Contact } from '@/payload-types'

// 主菜单项 - static data, no client-side interactivity needed
const menuItems = [
  {
    label: '解决方案',
    href: '/solution',
    hasDropdown: true,
    isMegaMenu: true,
  },
  {
    label: '核心产品',
    href: '/products',
    hasDropdown: true,
    isMegaMenu: true,
  },
  { label: '客户案例', href: '/cases' },
  { label: '泊冉观察', href: '/posts' },
  { label: '关于我们', href: '/about' },
]

interface NavbarProps {
  onOpenDemo?: () => void
  contactData?: Contact
}

export function Navbar({ onOpenDemo, contactData }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-xl font-heading font-black text-[#1F2329] tracking-tight">泊冉软件</span>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
              BORAN SOFTWARE
            </span>
          </div>
          <div className="h-6 w-px bg-slate-200 mx-1"></div>
          <span className="px-2 py-0.5 rounded text-xs font-semibold text-[#E60012] bg-red-50 border border-red-100 group-hover:bg-[#E60012] group-hover:text-white transition-colors duration-300">
            用友铂金级合作伙伴
          </span>
        </Link>

        {/* Center & Right: Interactive Client Component (includes mega menus via Portal) */}
        <NavbarClient menuItems={menuItems} contactData={contactData} onOpenDemo={onOpenDemo} />
      </div>
    </header>
  )
}

export default Navbar
