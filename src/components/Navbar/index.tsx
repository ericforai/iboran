import Link from 'next/link'
import { NavbarClient } from './NavbarClient'
import Image from 'next/image'
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
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-end gap-0 group h-11">
          <div className="flex flex-col pr-2 pb-[2px]">
            <span className="text-2xl font-heading font-black text-[#1F2329] tracking-tight leading-none mb-0.5">泊冉软件</span>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter leading-none">
              BORAN SOFTWARE
            </span>
          </div>
          <div className="h-6 w-px bg-slate-200 mb-2 mx-1"></div>
          <div className="flex items-center pl-1 pb-[2px]">
            <Image
              src="/yongyoulogo.png"
              alt="用友合作伙伴"
              width={48}
              height={24}
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* Center & Right: Interactive Client Component (includes mega menus via Portal) */}
        <NavbarClient menuItems={menuItems} contactData={contactData} onOpenDemo={onOpenDemo} />
      </div>
    </header>
  )
}

export default Navbar
