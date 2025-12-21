'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ConsultationModal } from '@/components/ConsultationModal'
import { solutionByBusiness, solutionByIndustry } from '@/data/solutions'
import type { Contact } from '@/payload-types'

// 主菜单项
const menuItems = [
  {
    label: '解决方案',
    href: '/solution',
    hasDropdown: true,
    isMegaMenu: true,
  },
  { label: '核心产品', href: '/products' },
  { label: '客户案例', href: '/cases' },
  { label: '泊冉观察', href: '/posts' },
  { label: '关于我们', href: '/about' },
]

interface NavbarProps {
  onOpenDemo?: () => void
  contactData?: Contact
}

export function Navbar({ onOpenDemo, contactData }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const [megaMenuTab, setMegaMenuTab] = useState<'business' | 'industry'>('business')
  
  // Timer ref for delayed menu close to prevent hover gap issue
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const phone = contactData?.phone || '400-9955-161'

  // Open dropdown immediately, cancel any pending close
  const handleMenuEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(label)
  }

  // Close dropdown with a delay to allow mouse to transition to mega menu
  const handleMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay gives time to move to mega menu
  }

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleOpenDemo = () => {
    setIsMobileMenuOpen(false)
    if (onOpenDemo) {
      onOpenDemo()
    } else {
      setIsDemoModalOpen(true)
    }
  }

  const handleOpenConsult = () => {
    setIsMobileMenuOpen(false)
    setIsConsultModalOpen(true)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1F2329] tracking-tight">泊冉软件</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                BORAN SOFTWARE
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-1"></div>
            <span className="px-2 py-0.5 rounded text-xs font-semibold text-[#E60012] bg-red-50 border border-red-100 group-hover:bg-[#E60012] group-hover:text-white transition-colors duration-300">
              用友铂金伙伴
            </span>
          </Link>

          {/* Center: Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMenuEnter(item.label)}
                onMouseLeave={handleMenuLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#1F2329] hover:text-[#0052D9] transition-colors relative group py-2"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0052D9] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

        {/* Mega Menu Dropdown - Below header, full width */}
        {activeDropdown === '解决方案' && (
          <div 
            className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50"
            onMouseEnter={() => handleMenuEnter('解决方案')}
            onMouseLeave={handleMenuLeave}
          >
            <div className="container mx-auto px-6 py-6">
              {/* Tab Switcher */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setMegaMenuTab('business')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    megaMenuTab === 'business' 
                      ? 'bg-[#0052D9] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  按业务
                </button>
                <button
                  onClick={() => setMegaMenuTab('industry')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    megaMenuTab === 'industry' 
                      ? 'bg-[#0052D9] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  按行业
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="max-h-[60vh] overflow-y-auto pr-2 -mr-2">
                {/* Business Categories Grid */}
                {megaMenuTab === 'business' && (
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
                    {solutionByBusiness.map((category) => (
                      <div key={category.name}>
                        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                          {category.name}
                        </h3>
                        <div className="space-y-1">
                          {category.items.map((item) => {
                            const IconComponent = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-slate-50 transition-all duration-150"
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                  <IconComponent className="w-4 h-4 text-[#0052D9]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-[#1F2329] text-sm group-hover:text-[#0052D9] transition-colors">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Industry Categories Grid - Simple cards linking to /solutions */}
                {megaMenuTab === 'industry' && (
                  <div className="grid grid-cols-5 gap-4">
                    {solutionByIndustry.map((category) => {
                      const CategoryIcon = category.icon
                      return (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="group p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 flex items-center justify-center mb-3 transition-all">
                            <CategoryIcon className="w-6 h-6 text-[#0052D9]" />
                          </div>
                          <h3 className="font-semibold text-[#1F2329] group-hover:text-[#0052D9] transition-colors mb-1">
                            {category.name}
                          </h3>
                          <p className="text-xs text-slate-500 line-clamp-2">
                            {category.desc}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
              
              {/* Bottom CTA Bar */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <Link 
                  href="/solution"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0052D9] hover:text-blue-700 transition-colors group"
                >
                  查看全部解决方案
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={handleOpenDemo}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all hover:shadow-md active:scale-95"
                >
                  预约专家演示
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right: Actions - positioned inside header */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="hidden xl:flex items-center gap-2 text-sm font-semibold text-[#1F2329] hover:text-[#0052D9] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#0052D9]" />
            </div>
            <span>{phone}</span>
          </Link>
          <button
            onClick={handleOpenDemo}
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all hover:shadow-md active:scale-95"
          >
            预约专家演示
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1F2329]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1F2329]" />
            )}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-[#1F2329]">泊冉软件</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="关闭菜单"
            >
              <X className="w-5 h-5 text-[#1F2329]" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-base font-medium text-[#1F2329] hover:bg-slate-50 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                          mobileActiveDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileActiveDropdown === item.label && (
                      <div className="bg-slate-50 pb-2 max-h-[60vh] overflow-y-auto">
                        {solutionByBusiness.map((category) => (
                          <div key={category.name} className="pt-3 first:pt-2">
                            <div className="px-6 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              {category.name}
                            </div>
                            {category.items.map((dropItem) => {
                              const IconComponent = dropItem.icon
                              return (
                                <Link
                                  key={dropItem.href}
                                  href={dropItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <IconComponent className="w-4 h-4 text-[#0052D9]" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-[#1F2329] text-sm">
                                      {dropItem.label}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{dropItem.desc}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-base font-medium text-[#1F2329] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-100 space-y-3">
            <Link
              href="tel:4009955161"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#0052D9] hover:bg-blue-50 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phone}</span>
            </Link>
            <button
              onClick={handleOpenConsult}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#0052D9] hover:bg-blue-50 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>在线咨询 (企业微信)</span>
            </button>
            <button
              onClick={handleOpenDemo}
              className="w-full py-3 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all"
            >
              预约专家演示
            </button>
          </div>
        </div>
      </div>

      {/* Self-managed Demo Modal (fallback) */}
      {!onOpenDemo && (
        <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      )}

      <ConsultationModal 
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        data={contactData}
      />
    </>
  )
}

export default Navbar
