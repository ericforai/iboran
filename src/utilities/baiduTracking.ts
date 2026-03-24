export const BAIDU_AGL_PRODUCTION_ID = '_f7L2XwGXjyszb4d1e2oxPybgD'

declare global {
  interface Window {
    _agl?: Array<unknown>
  }
}

export const trackBaiduConversionSuccess = () => {
  if (typeof window === 'undefined' || !Array.isArray(window._agl)) {
    return
  }

  window._agl.push(['track', ['success', { t: 3 }]])
}
