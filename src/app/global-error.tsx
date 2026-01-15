'use client'

import React from 'react'

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">出错了</h2>
          <p className="text-slate-500 mb-8 max-w-md">
            抱歉，系统遇到严重错误。请尝试刷新。
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
          >
            刷新页面
          </button>
        </div>
      </body>
    </html>
  )
}
