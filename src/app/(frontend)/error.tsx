'use client'

import React, { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="p-4 bg-red-50 rounded-full mb-6">
        <AlertCircle className="w-12 h-12 text-red-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">出错了</h2>
      <p className="text-slate-500 mb-8 max-w-md">
        抱歉，加载页面时遇到了一些问题。请尝试刷新或联系支持团队。
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
        >
          重试
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
