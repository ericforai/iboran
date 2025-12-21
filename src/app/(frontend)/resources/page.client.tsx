'use client'
import React, { useState, useMemo } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { ResourceCard } from '@/components/ResourceCard'
import type { Resource } from '@/payload-types'

export default function ResourcesClient({ initialResources }: { initialResources: Resource[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { label: '全部资料', value: 'all' },
    { label: '白皮书', value: 'whitepaper' },
    { label: '成功案例', value: 'case-study' },
    { label: '产品手册', value: 'manual' },
    { label: '培训课件', value: 'training' },
  ]

  const filteredResources = useMemo(() => {
    return initialResources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           res.summary?.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'all' || res.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory, initialResources])

  return (
    <>
      <div className="bg-white border-b border-gray-100 py-12 sticky top-[64px] z-20 shadow-sm shadow-gray-50/50">
        <div className="container px-4">
          <SearchBar onSearch={setSearchQuery} className="mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2rem] border border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">未找到相关资料</h3>
            <p className="text-gray-500">换个关键词试试，或者联系我们的专家获取帮助。</p>
          </div>
        )}
      </div>
    </>
  )
}
