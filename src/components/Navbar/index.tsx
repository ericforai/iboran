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
import { motion, AnimatePresence } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ConsultationModal } from '@/components/ConsultationModal'
import { 
  solutionByBusiness, 
  solutionByIndustryCategory,
  type BusinessSolutionItem,
  type IndustrySolutionItem
} from '@/data/solutions'
import { productCategories } from '@/data/products'
import type { Contact } from '@/payload-types'

// 主菜单项
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

export const Navbar = React.memo(function Navbar({ onOpenDemo, contactData }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string[]>([])
  const [megaMenuTab, setMegaMenuTab] = useState<'business' | 'industry'>('business')
  const [mobileSolutionTab, setMobileSolutionTab] = useState<'business' | 'industry'>('industry')
  
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
    setMobileActiveDropdown(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }
  const SolutionItem = ({ item }: { item: BusinessSolutionItem | IndustrySolutionItem }) => {
    const IconComponent = item.icon
    return (
      <Link
        href={item.href}
        className="group flex items-start gap-3 p-2 -mx-2 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-[#0052D9] flex items-center justify-center transition-all duration-300">
          <IconComponent className="w-4.5 h-4.5 text-[#0052D9] group-hover:text-white transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[#1F2329] text-[13px] group-hover:text-[#0052D9] transition-colors leading-snug whitespace-nowrap tracking-tight">
            {item.label}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 opacity-70 group-hover:opacity-100 transition-opacity">
            {item.desc}
          </div>
        </div>
      </Link>
    )
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

        
        {/* Core Products Mega Menu */}
        {activeDropdown === '核心产品' && (
          <div 
            className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50"
            onMouseEnter={() => handleMenuEnter('核心产品')}
            onMouseLeave={handleMenuLeave}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
                {productCategories.map((category) => (
                  <div key={category.name} className="flex flex-col md:pl-8 first:pl-0">
                    <div className="mb-5">
                      <h3 className="text-base font-bold text-[#1F2329] flex items-center gap-2 mb-1">
                        <span className="w-1 h-4 bg-[#E60012] rounded-full"></span>
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500 pl-3">{category.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {category.items.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
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
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
                 <div className="flex gap-6">
                    <Link 
                      href="/products"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2329] hover:text-[#E60012] transition-colors"
                    >
                      产品总览
                    </Link>
                    <Link 
                      href="/pricing"
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

        {/* Mega Menu Dropdown - Below header, full width */}
        <AnimatePresence>
          {activeDropdown === '解决方案' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-2xl z-50"
              onMouseEnter={() => handleMenuEnter('解决方案')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="container mx-auto px-6 py-6">
                {/* Tab Switcher - Segmented Control Style */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit mb-8">
                  <button
                    onClick={() => setMegaMenuTab('business')}
                    className={`relative px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      megaMenuTab === 'business' ? 'text-[#0052D9]' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {megaMenuTab === 'business' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-lg shadow-sm"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">按业务</span>
                  </button>
                  <button
                    onClick={() => setMegaMenuTab('industry')}
                    className={`relative px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      megaMenuTab === 'industry' ? 'text-[#0052D9]' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {megaMenuTab === 'industry' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-lg shadow-sm"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">按行业</span>
                  </button>
                </div>

                {/* Scrollable Content Area - Optimized for Side-by-Side */}
                <div className="pr-2 -mr-2">
                  {/* Business Categories Grid - Final Optimized Layout */}
                  {megaMenuTab === 'business' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-6 gap-x-10 items-start"
                    >
                      {/* Left Side: Business Solutions (Cols 1-4) */}
                      <div className="col-span-4 pr-10 border-r border-slate-100">
                        {/* Nested Grid to ensure horizontal alignment across rows */}
                        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                          {/* ROW 1: Sales | R&D | Finance (span 2) */}
                          <div className="space-y-1 items-start">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              销售与收款
                            </h3>
                            {solutionByBusiness.find(c => c.name === '销售与收款')?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} />
                            ))}
                          </div>
                          <div className="space-y-1 items-start">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              研发与制造
                            </h3>
                            {solutionByBusiness.find(c => c.name === '研发与制造')?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} />
                            ))}
                          </div>
                          <div className="col-span-2">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              财务与资金
                            </h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {solutionByBusiness.find(c => c.name === '财务与资金')?.items.map((item) => (
                                <SolutionItem key={item.href} item={item} />
                              ))}
                            </div>
                          </div>

                          {/* ROW 2: Procurement | Human | Project (span 2) */}
                          <div className="space-y-1 items-start">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              采购与供应链
                            </h3>
                            {solutionByBusiness.find(c => c.name === '采购与供应链')?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} />
                            ))}
                          </div>
                          <div className="space-y-1 items-start">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              人力与资产
                            </h3>
                            {solutionByBusiness.find(c => c.name === '人力与资产')?.items.map((item) => (
                              <SolutionItem key={item.href} item={item} />
                            ))}
                          </div>
                          <div className="col-span-2">
                            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                              项目与成本
                            </h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                              {solutionByBusiness.find(c => c.name === '项目与成本')?.items.map((item) => (
                                <SolutionItem key={item.href} item={item} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Digital Base Sidebar (Cols 5-6) */}
                      <div className="col-span-2 pl-4">
                        <div className="bg-slate-50/50 border border-slate-100/50 rounded-2xl p-5">
                          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                            <span className="w-1 h-3 bg-[#0052D9] rounded-full"></span>
                            数智底座与基础平台
                          </h3>

                          {solutionByBusiness.filter(c => c.name === '智能平台').map((category) => {
                            const platformGroups = [
                              { title: '智能协作', keys: ['AIP', 'EOC'], desc: 'AI驱动效率' },
                              { title: '开发建模', keys: ['APP', 'DEV'], desc: '响应变革' },
                              { title: '连接集成', keys: ['LINK'], desc: '打破孤岛' },
                              { title: '数智底座', keys: ['DMP', 'CTP'], desc: '支撑转型' }
                            ]
                            return (
                              <div key={category.name} className="grid grid-cols-2 gap-x-4 gap-y-10">
                                {platformGroups.map((group) => (
                                  <div key={group.title} className="space-y-3">
                                    <div className="flex flex-col border-l-2 border-slate-200 pl-3">
                                      <h4 className="text-[12px] font-bold text-slate-700">{group.title}</h4>
                                      <p className="text-[10px] text-slate-400 mt-0.5">{group.desc}</p>
                                    </div>
                                    <div className="space-y-1">
                                      {category.items
                                        .filter(item => group.keys.some(key => item.label.startsWith(key)))
                                        .map((item) => (
                                          <SolutionItem key={item.href} item={item} />
                                        ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )
                          })}
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
                      className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10"
                    >
                      {solutionByIndustryCategory.map((category) => (
                        <div key={category.name} className="flex flex-col">
                          <h3 className="text-sm font-bold text-[#1F2329] mb-4 pb-2 border-b-2 border-slate-100 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-[#0052D9] rounded-full"></span>
                            {category.name}
                          </h3>
                          <div className="grid grid-cols-1 gap-1">
                            {category.items.map((item) => {
                              const IconComponent = item.icon
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group flex items-center gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
                                >
                                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-50 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center transition-all">
                                    <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-[#0052D9]" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-[#1F2329] text-[13px] group-hover:text-[#0052D9] transition-colors">
                                      {item.label}
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </motion.div>
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
            </motion.div>
          )}
        </AnimatePresence>

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
                    <div 
                      className="flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      <span
                        className="flex-1 px-6 py-4 text-base font-medium text-[#1F2329]"
                      >
                        {item.label}
                      </span>
                      <div
                        className="px-4 py-4 text-slate-400 hover:text-[#0052D9] transition-colors"
                      >
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
                            {/* 移动端标签切换器 */}
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

                            {/* 按行业内容 - 二级分类结构 */}
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
                                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.desc}</div>
                                          </div>
                                        </Link>
                                      )
                                    })}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 按业务内容 */}
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
                                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{prodItem.desc}</div>
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
})

export default Navbar
