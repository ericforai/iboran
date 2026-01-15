'use client'

import React from 'react'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'

export const HeaderNav: React.FC<{ data: any }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map((item: any, i: number) => {
        if (item.blockType === 'singleLink') {
             return <CMSLink key={i} {...item.link} appearance="link" />
        }
        
        if (item.blockType === 'navGroup') {
            return <NavGroupItem key={i} item={item} />
        }

        if (item.blockType === 'collectionMenu') {
            return <CollectionMenuItem key={i} item={item} />
        }
        
        return null
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
      <Link
        href="/demo"
        className="bg-[#E60012] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-red-700 transition-colors"
      >
        预约演示
      </Link>
    </nav>
  )
}

const NavGroupItem = ({ item }: { item: any }) => {
    return (
        <div className="relative group z-50">
            <button className="flex items-center gap-1 px-2 py-1 text-sm font-medium hover:text-primary transition-colors">
                {item.label}
                <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block min-w-64 max-w-sm">
                <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-md p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
                     {item.items?.map((subItem: any, k: number) => (
                         <NavSubItem key={k} item={subItem} />
                     ))}
                </div>
            </div>
        </div>
    )
}

const NavSubItem = ({ item }: { item: any }) => {
    if (item.blockType === 'singleLink') {
        return <CMSLink {...item.link} appearance="link" className="block w-full text-left text-sm" />
    }
    if (item.blockType === 'collectionMenu') {
        return (
            <div className="">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">{item.linkLabel}</div>
                <CollectionSubMenu item={item} />
            </div>
        )
    }
    if (item.blockType === 'navSubGroup') {
        return (
            <div className="">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">{item.label}</div>
                <div className="flex flex-col gap-1 pl-2 border-l border-zinc-100 dark:border-zinc-800">
                    {item.items?.map((child: any, j: number) => (
                        <NavSubItem key={j} item={child} />
                    ))}
                </div>
            </div>
        )
    }
    return null
}

const CollectionMenuItem = ({ item }: { item: any }) => {
     return (
        <div className="relative group z-50">
            <button className="flex items-center gap-1 px-2 py-1 text-sm font-medium hover:text-primary transition-colors">
                {item.linkLabel}
                <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64">
                <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-md p-4 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                     <CollectionSubMenu item={item} />
                </div>
            </div>
        </div>
    )
}

const CollectionSubMenu = ({ item }: { item: any }) => {
    const getHref = (slug: string) => {
        if (item.collectionSlug === 'industry-solutions') return `/solution/industry/${slug}`
        if (item.collectionSlug === 'success-stories') return `/success-stories/${slug}`
        return `/${item.collectionSlug}/${slug}`
    }

    return (
        <div className="flex flex-col gap-1">
             {item.docs?.map((doc: any, i: number) => (
                 <Link key={i} href={getHref(doc.slug)} className="text-sm px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-primary block transition-colors">
                     {doc.title}
                 </Link>
             ))}
             {!item.docs?.length && <span className="text-xs text-muted-foreground px-2">No items found.</span>}
        </div>
    )
}