'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  solutionByBusiness,
  solutionByIndustryCategory,
  type BusinessSolutionItem,
  type IndustrySolutionItem,
} from '@/data/solutions'
import { productCategories } from '@/data/products'
import type { Contact } from '@/payload-types'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ConsultationModal } from '@/components/ConsultationModal'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface NavbarClientProps {
  menuItems: Array<{
    label: string
    href: string
    hasDropdown?: boolean
    isMegaMenu?: boolean
  }>
  contactData?: Contact
  onOpenDemo?: () => void
}

// Shared state context for navbar interactions
const NavbarStateContext = React.createContext<{
  activeDropdown: string | null
  setActiveDropdown: (label: string | null) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  mobileActiveDropdown: string[]
  setMobileActiveDropdown: (items: string[]) => void
  megaMenuTab: 'business' | 'industry'
  setMegaMenuTab: (tab: 'business' | 'industry') => void
  mobileSolutionTab: 'business' | 'industry'
  setMobileSolutionTab: (tab: 'business' | 'industry') => void
  isDemoModalOpen: boolean
  setIsDemoModalOpen: (open: boolean) => void
  isConsultModalOpen: boolean
  setIsConsultModalOpen: (open: boolean) => void
  handleMenuEnter: (label: string) => void
  handleMenuLeave: () => void
  handleOpenDemo: () => void
  handlePhoneClick: () => void
} | null>(null)

function useNavbarState() {
  const context = React.useContext(NavbarStateContext)
  if (!context) {
    throw new Error('useNavbarState must be used within NavbarStateProvider')
  }
  return context
}

// Provider component to manage shared state
function NavbarStateProvider({ children, menuItems, contactData, onOpenDemo }: NavbarClientProps & { children: React.ReactNode }) {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string[]>([])
  const [megaMenuTab, setMegaMenuTab] = useState<'business' | 'industry'>('business')
  const [mobileSolutionTab, setMobileSolutionTab] = useState<'business' | 'industry'>('business')
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { trackWeChatOpen, trackPhoneCall } = useConversionTracking()

  // Close menu on route change
  useEffect(() => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close menu on ESC key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [activeDropdown])



  // Close mobile menu on resize
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

  // Handle mounting state for portals
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMenuEnter = React.useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(label)
  }, [])

  const handleMenuLeave = React.useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  const handleOpenDemo = React.useCallback(() => {
    setIsMobileMenuOpen(false)
    if (onOpenDemo) {
      onOpenDemo()
    } else {
      setIsDemoModalOpen(true)
    }
  }, [onOpenDemo])

  const handleOpenConsult = React.useCallback(() => {
    setIsMobileMenuOpen(false)
    trackWeChatOpen('navbar')
    setIsConsultModalOpen(true)
  }, [trackWeChatOpen])

  const handlePhoneClick = React.useCallback(() => {
    trackPhoneCall('navbar')
  }, [trackPhoneCall])

  const toggleMobileDropdown = React.useCallback((label: string) => {
    setMobileActiveDropdown((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }, [])

  const contextValue = React.useMemo(() => ({
    activeDropdown,
    setActiveDropdown,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    mobileActiveDropdown,
    setMobileActiveDropdown,
    megaMenuTab,
    setMegaMenuTab,
    mobileSolutionTab,
    setMobileSolutionTab,
    isDemoModalOpen,
    setIsDemoModalOpen,
    isConsultModalOpen,
    setIsConsultModalOpen,
    handleMenuEnter,
    handleMenuLeave,
    handleOpenDemo,
    handlePhoneClick,
  }), [
    activeDropdown,
    isMobileMenuOpen,
    mobileActiveDropdown,
    megaMenuTab,
    mobileSolutionTab,
    isDemoModalOpen,
    isConsultModalOpen,
    handleMenuEnter,
    handleMenuLeave,
    handleOpenDemo,
    handlePhoneClick,
  ])

  return (
    <NavbarStateContext.Provider value={contextValue}>
      {children}
      {isMounted && (
        <>
          <NavbarMegaMenus
            handleMenuEnter={handleMenuEnter}
            handleMenuLeave={handleMenuLeave}
            handleOpenDemo={handleOpenDemo}
          />
          <NavbarMobileMenu
            menuItems={menuItems}
            toggleMobileDropdown={toggleMobileDropdown}
            handleOpenDemo={handleOpenDemo}
            handleOpenConsult={handleOpenConsult}
            contactData={contactData}
          />
          {!onOpenDemo && <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />}
          <ConsultationModal isOpen={isConsultModalOpen} onClose={() => setIsConsultModalOpen(false)} data={contactData} />
        </>
      )}
    </NavbarStateContext.Provider>
  )
}

// Inline navigation and actions component
const InlineNavbar = React.memo(function InlineNavbar({ menuItems, contactData }: NavbarClientProps) {
  const { activeDropdown, setActiveDropdown, handleMenuEnter, handleMenuLeave, setIsMobileMenuOpen, isMobileMenuOpen, handleOpenDemo, handlePhoneClick } = useNavbarState()
  const phone = contactData?.phone || '400-9955-161'

  return (
    <>
      {/* Desktop Navigation */}
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
              onClick={() => setActiveDropdown(null)}
              className="flex items-center gap-1 text-sm font-heading font-bold text-[#1F2329] hover:text-[#0052D9] transition-colors relative group py-2"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0052D9] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        ))}
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 lg:gap-6">
        <Link
          href={`tel:${phone.replace(/\s+/g, '')}`}
          onClick={handlePhoneClick}
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
          预约专家评估
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
    </>
  )
})

// Mega menus component (rendered via Portal)
const NavbarMegaMenus = React.memo(function NavbarMegaMenus({
  handleMenuEnter,
  handleMenuLeave,
  handleOpenDemo,
}: {
  handleMenuEnter: (label: string) => void
  handleMenuLeave: () => void
  handleOpenDemo: () => void
}) {
  const { activeDropdown, setActiveDropdown, megaMenuTab, setMegaMenuTab } = useNavbarState()
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown, setActiveDropdown])

  const SolutionItem = ({
    item,
    onClick,
  }: {
    item: BusinessSolutionItem | IndustrySolutionItem
    onClick?: () => void
  }) => {
    const IconComponent = item.icon
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="group flex items-start gap-4 p-3 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-[#0052D9] flex items-center justify-center border border-slate-100 transition-all duration-300">
          <IconComponent className="w-5 h-5 text-[#0052D9] group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-heading font-bold text-[#1F2329] text-[13px] group-hover:text-[#0052D9] transition-colors leading-snug whitespace-nowrap tracking-tight">
            {item.label}
          </div>
          <div className="text-[10px] font-mono font-bold text-slate-400 mt-0.5 line-clamp-1 uppercase tracking-tighter">
            {item.desc}
          </div>
        </div>
      </Link>
    )
  }

  return createPortal(
    <>
      {/* Core Products Mega Menu */}
      {activeDropdown === '核心产品' && (
        <div
          ref={menuRef}
          className="hidden lg:block fixed top-20 inset-x-0 mx-auto w-full lg:max-w-6xl bg-white backdrop-blur-md rounded-b-2xl border-x border-b border-gray-100 shadow-xl z-[100] max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar"
          onMouseEnter={() => handleMenuEnter('核心产品')}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-gray-100">
              {productCategories.map((category) => (
                <div key={category.name} className="flex flex-col md:pl-8 first:pl-0">
                  <div className="mb-6">
                    <h3 className="text-sm font-heading font-black text-[#1F2329] flex items-center gap-3 mb-2">
                      <span className="w-1.5 h-4 bg-[#E60012] rounded-full"></span>
                      {category.name}
                    </h3>
                    <p className="text-[10px] font-mono font-bold text-slate-400 pl-4 uppercase tracking-tighter">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {category.items.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-50 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center transition-all">
                            <IconComponent className="w-4 h-4 text-[#E60012]" />
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <div className="font-medium text-[#1F2329] text-sm group-hover:text-[#E60012] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
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

            {/* Bottom CTA Bar */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <div className="flex gap-6">
                <Link
                  href="/products"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2329] hover:text-[#E60012] transition-colors"
                >
                  产品总览
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2329] hover:text-[#E60012] transition-colors"
                >
                  价格体系
                </Link>
              </div>
              <button
                onClick={handleOpenDemo}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E60012] hover:text-red-700 transition-colors group"
              >
                预约产品演示
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown - Solutions */}
      <AnimatePresence>
        {activeDropdown === '解决方案' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            ref={menuRef}
            className="hidden lg:block fixed top-20 inset-x-0 mx-auto w-full lg:max-w-6xl bg-white backdrop-blur-md rounded-b-2xl border-x border-b border-gray-100 shadow-xl z-[100] max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar"
            onMouseEnter={() => handleMenuEnter('解决方案')}
            onMouseLeave={handleMenuLeave}
          >
            <div className="container mx-auto px-6 py-5">
              {/* Header with Tab Switcher and Close Button */}
              <div className="flex items-center justify-between mb-5">
                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-slate-50 border border-slate-200 rounded-xl w-fit">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setMegaMenuTab('business'); }}
                    className={`relative px-8 py-2.5 rounded-lg text-xs font-mono font-black transition-colors duration-200 uppercase tracking-tighter ${
                      megaMenuTab === 'business' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {megaMenuTab === 'business' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#0052D9] rounded-lg shadow-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">按业务</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setMegaMenuTab('industry'); }}
                    className={`relative px-8 py-2.5 rounded-lg text-xs font-mono font-black transition-colors duration-200 uppercase tracking-tighter ${
                      megaMenuTab === 'industry' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {megaMenuTab === 'industry' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#0052D9] rounded-lg shadow-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">按行业</span>
                  </button>
                </div>
                
                {/* Close Button */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="关闭菜单"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="pr-2 -mr-2">
                {/* Business Categories Grid */}
                {megaMenuTab === 'business' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-12 gap-x-6 items-start"
                  >
                    <div className="col-span-9 grid grid-cols-3 gap-x-6 pr-6 border-r border-slate-100">
                      <div className="space-y-1">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                          财务管控
                        </h3>
                        <div className="space-y-0.5">
                          {solutionByBusiness
                            .find((c) => c.name === '财务管控')
                            ?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} onClick={() => setActiveDropdown(null)} />
                            ))}
                        </div>
                      </div>

                      <div className="col-span-2 space-y-1">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                          业务管控
                        </h3>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                          {solutionByBusiness
                            .find((c) => c.name === '业务管控')
                            ?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} onClick={() => setActiveDropdown(null)} />
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-3 pl-4">
                      <div className="bg-slate-50/50 border border-slate-100/50 rounded-2xl p-5">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                          数智底座与基础平台
                        </h3>

                        <div className="space-y-0.5">
                          {solutionByBusiness
                            .find((c) => c.name === '平台')
                            ?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} onClick={() => setActiveDropdown(null)} />
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-200">
                          <p className="text-[10px] text-slate-400 leading-relaxed">
                            基于微服务架构的共享服务平台，支撑企业业务模式创新与持续敏捷迭代。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Industry Categories Grid */}
                {megaMenuTab === 'industry' && (
                  <motion.div
                    key="industry-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-4 gap-x-8 gap-y-12 pr-4 pt-1 items-start max-h-[60vh] overflow-y-auto"
                  >
                    {[0, 1, 2, 3].map((colIdx) => (
                      <div key={colIdx} className="space-y-10">
                        {[colIdx, colIdx + 4]
                          .map((idx) => solutionByIndustryCategory[idx])
                          .filter(Boolean)
                          .map((category) => (
                            <div key={category.name} className="space-y-4">
                              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                                {category.name}
                              </h3>
                              <div className="space-y-1">
                                {category.items.map((item) => (
                                  <SolutionItem key={item.href} item={item} onClick={() => setActiveDropdown(null)} />
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Bottom CTA Bar */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/solution"
                  onClick={() => setActiveDropdown(null)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  )
})

// Mobile menu component (rendered via Portal)
const NavbarMobileMenu = React.memo(function NavbarMobileMenu({
  menuItems,
  toggleMobileDropdown,
  handleOpenDemo,
  handleOpenConsult,
  contactData,
}: {
  menuItems: NavbarClientProps['menuItems']
  toggleMobileDropdown: (label: string) => void
  handleOpenDemo: () => void
  handleOpenConsult: () => void
  contactData?: Contact
}) {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    mobileActiveDropdown,
    mobileSolutionTab,
    setMobileSolutionTab,
    handlePhoneClick,
  } = useNavbarState()

  const phone = contactData?.phone || '400-9955-161'

  if (!isMobileMenuOpen && mobileActiveDropdown.length === 0) return null

  return createPortal(
    <>
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
                    <div
                      className="flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      <span className="flex-1 px-6 py-4 text-base font-medium text-[#1F2329]">
                        {item.label}
                      </span>
                      <div className="px-4 py-4 text-slate-400 hover:text-[#0052D9] transition-colors">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileActiveDropdown.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                    <div className="bg-slate-50 pb-2">
                      {mobileActiveDropdown.includes(item.label) && (
                        <>
                          {item.label === '解决方案' && (
                            <>
                              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
                                <button
                                  onClick={() => setMobileSolutionTab('industry')}
                                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                    mobileSolutionTab === 'industry'
                                      ? 'bg-[#0052D9] text-white shadow-sm'
                                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                  }`}
                                >
                                  按行业
                                </button>
                                <button
                                  onClick={() => setMobileSolutionTab('business')}
                                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                    mobileSolutionTab === 'business'
                                      ? 'bg-[#0052D9] text-white shadow-sm'
                                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                  }`}
                                >
                                  按业务
                                </button>
                              </div>

                              {mobileSolutionTab === 'industry' && (
                                <div className="max-h-[50vh] overflow-y-auto">
                                  {solutionByIndustryCategory.map((category) => (
                                    <div key={category.name} className="pt-3 first:pt-2">
                                      <div className="px-6 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        {category.name}
                                      </div>
                                      {category.items.map((item) => {
                                        const IconComponent = item.icon
                                        return (
                                          <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition-colors"
                                          >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                              <IconComponent className="w-4 h-4 text-[#0052D9]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="font-medium text-[#1F2329] text-sm">
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
                                  ))}
                                </div>
                              )}

                              {mobileSolutionTab === 'business' && (
                                <div className="max-h-[50vh] overflow-y-auto">
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
                                              <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                                {dropItem.desc}
                                              </div>
                                            </div>
                                          </Link>
                                        )
                                      })}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                          {item.label === '核心产品' && (
                            <div className="max-h-[50vh] overflow-y-auto">
                              {productCategories.map((category) => (
                                <div key={category.name} className="pt-3 first:pt-2">
                                  <div className="px-6 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1 h-3 bg-[#E60012] rounded-full"></span>
                                    {category.name}
                                  </div>
                                  {category.items.map((prodItem) => {
                                    const IconComponent = prodItem.icon
                                    return (
                                      <Link
                                        key={prodItem.href}
                                        href={prodItem.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-6 py-3 hover:bg-slate-100 transition-colors"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                                          <IconComponent className="w-4 h-4 text-[#E60012]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-[#1F2329] text-sm">
                                            {prodItem.label}
                                          </div>
                                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                            {prodItem.desc}
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  })}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
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
              onClick={() => {
                setIsMobileMenuOpen(false)
                handlePhoneClick()
              }}
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
              预约专家评估
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
})

// Main exported component
export function NavbarClient(props: NavbarClientProps) {
  return (
    <NavbarStateProvider {...props}>
      <InlineNavbar {...props} />
    </NavbarStateProvider>
  )
}
