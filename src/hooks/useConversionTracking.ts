'use client'

import { useCallback } from 'react'
import { useAnalytics } from '@/providers/Analytics'
import { useAttribution } from '@/providers/Attribution'

export interface ConversionData {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  referrer: string
  landingPage: string
  pageHistory: string[]
}

/**
 * 转化跟踪 Hook - 统一处理转化事件和数据获取
 *
 * 使用方式：
 * 1. 获取归因数据用于表单提交
 * 2. 发送转化事件到 GA4 和百度统计
 *
 * @example
 * const { getAttributionData, trackLeadSubmit, trackWeChatOpen, trackPhoneCall } = useConversionTracking()
 */
export const useConversionTracking = () => {
  const analytics = useAnalytics()
  const attribution = useAttribution()

  /**
   * 获取当前归因数据，用于表单提交
   */
  const getAttributionData = useCallback((): ConversionData => {
    return {
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content,
      utm_term: attribution.utm_term,
      referrer: attribution.referrer,
      landingPage: attribution.landing_page,
      pageHistory: attribution.history,
    }
  }, [attribution])

  /**
   * 跟踪表单提交转化
   * @param formType 表单类型：whitepaper, consultation, demo, contact
   * @param formId 表单标识
   */
  const trackLeadSubmit = useCallback((formType: string, formId?: string) => {
    analytics.trackConversion('generate_lead', {
      label: `${formType}${formId ? `:${formId}` : ''}`,
      form_type: formType,
    })
  }, [analytics])

  /**
   * 跟踪微信咨询打开
   * @param location 位置：header, footer, floating, modal
   */
  const trackWeChatOpen = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('contact_open', {
      label: `wechat:${location}`,
      contact_method: 'wechat',
    })
  }, [analytics])

  /**
   * 跟踪微信号复制
   * @param location 位置：modal, sidebar, hero
   */
  const trackWeChatCopy = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('wechat_copy', {
      label: `wechat_copy:${location}`,
      contact_method: 'wechat',
    })
  }, [analytics])

  /**
   * 跟踪电话拨号点击
   * @param location 位置：header, footer, hero, modal
   */
  const trackPhoneCall = useCallback((location: string = 'unknown') => {
    analytics.trackConversion('click_phone', {
      label: `phone:${location}`,
      contact_method: 'phone',
    })
  }, [analytics])

  /**
   * 跟踪通用事件
   * @param category 事件分类
   * @param action 事件动作
   * @param label 事件标签
   */
  const trackEvent = useCallback((category: string, action: string, label?: string) => {
    analytics.trackEvent({ category, action, label })
  }, [analytics])

  return {
    getAttributionData,
    trackLeadSubmit,
    trackWeChatOpen,
    trackWeChatCopy,
    trackPhoneCall,
    trackEvent,
  }
}
