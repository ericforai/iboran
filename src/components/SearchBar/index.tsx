'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import { useDebounce } from '@/utilities/useDebounce'
import { cn } from '@/utilities/ui'

export const SearchBar: React.FC<{
  className?: string
  placeholder?: string
  onSearch: (value: string) => void
}> = ({ className, placeholder = '搜索资源、方案或案例...', onSearch }) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue, onSearch])

  const clear = useCallback(() => {
    setValue('')
  }, [])

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-400"
        />
        {value && (
          <button 
            onClick={clear}
            className="absolute right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
