'use client'

import { useEffect } from 'react'

export function ReactScan() {
  useEffect(() => {
    // 只在开发环境启用
    if (process.env.NODE_ENV === 'development') {
      import('react-scan').then(({ scan }) => {
        scan({
          enabled: true,
          log: true, // 在控制台输出渲染信息
        })
      })
    }
  }, [])

  return null
}
