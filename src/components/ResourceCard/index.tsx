'use client'
import React from 'react'
import { FileText, Download, Lock, Eye, ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import type { Resource } from '@/payload-types'

export const ResourceCard: React.FC<{
  className?: string
  resource: Resource
  variant?: 'vertical' | 'horizontal'
}> = ({ className, resource, variant = 'vertical' }) => {
  const { title, summary, gated, url, filesize, contentType, slug } = resource

  const fileSizeString = filesize
    ? `${(filesize / 1024 / 1024).toFixed(2)} MB `
    : ''

  const isWebpage = contentType === 'webpage'
  const resourceSlug = slug || ''

  // 网页版白皮书的链接
  const webPageUrl = isWebpage && resourceSlug ? `/resources/${resourceSlug}` : null
  const fileUrl = url || '#'

  // 解锁状态检查
  const [isUnlocked, setIsUnlocked] = React.useState(false)

  React.useEffect(() => {
    if (isWebpage && resourceSlug) {
      try {
        const unlockedData = localStorage.getItem('unlocked-whitepapers')
        if (unlockedData) {
          const unlocked: Record<string, boolean> = JSON.parse(unlockedData)
          if (unlocked[resource.id] || unlocked[resourceSlug]) {
            setIsUnlocked(true)
          }
        }
      } catch {
        // ignore
      }
    }
  }, [isWebpage, resourceSlug, resource.id])

  const handleClick = (e: React.MouseEvent) => {
    if (isWebpage && webPageUrl) {
      // 网页版白皮书直接跳转
      return
    }

    if (gated) {
      e.preventDefault()
      alert('此资料需要留资。功能开发中，请稍后。')
      return
    }
    if (fileUrl === '#') {
      e.preventDefault()
      alert('文件尚未上传或链接无效。')
    }
  }

  if (variant === 'horizontal') {
    return (
      <div className={cn(
        "group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6",
        className
      )}>
        <div className="w-16 h-16 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {isWebpage ? <Eye size={28} /> : <FileText size={28} />}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex items-start gap-3 mb-1">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
            {gated && !isUnlocked && (
              <span className="flex-shrink-0 mt-1 flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded">
                <Lock size={10} /> 需留资
              </span>
            )}
          </div>
          {summary && <p className="text-gray-500 text-sm truncate">{summary}</p>}
          <div className="text-xs text-gray-400 mt-1">
            {isWebpage ? '网页阅读' : fileSizeString}
          </div>
        </div>

        {isWebpage && webPageUrl ? (
          <Link
            href={webPageUrl}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <span>{isUnlocked ? '继续阅读' : '开始阅读'}</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <a
            href={fileUrl}
            download={!gated}
            onClick={handleClick}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <span>{gated ? '申请' : '下载'}</span>
            <Download size={16} />
          </a>
        )}
      </div>
    )
  }

  // Default Vertical Layout
  return (
    <div className={cn(
      "group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full",
      className
    )}>
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {isWebpage ? <Eye size={24} /> : <FileText size={24} />}
        </div>
        {gated && !isUnlocked && (
          <div className="flex items-center gap-1.5 px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded uppercase tracking-wider">
            <Lock size={10} />
            <span>需留资</span>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {summary && (
          <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-4">
            {summary}
          </p>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs text-gray-400 font-medium">
          {isWebpage ? '网页阅读' : fileSizeString}
        </span>

        {isWebpage && webPageUrl ? (
          <Link
            href={webPageUrl}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-red-500 transition-colors"
          >
            <span>{isUnlocked ? '继续阅读' : '开始阅读'}</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <a
            href={fileUrl}
            download={!gated}
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-red-500 transition-colors"
          >
            <span>{gated ? '申请下载' : '立即下载'}</span>
            <Download size={16} />
          </a>
        )}
      </div>
    </div>
  )
}
