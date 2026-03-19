const AIFAFAN_FALLBACK_URL =
  'https://affim.baidu.com/unique_52771578/chat?siteId=22949567&userId=52771578&siteToken=aac20df95e015006d1b11e4bd6e64a83'

const AIFAFAN_WIDGET_SELECTORS = [
  '#nb_icon_wrap',
  '.nb-icon-inner-wrap',
  '#lxb-container-icon',
  '.lxb-container',
  '#nb_invite_ok',
  '.nb-invite-ok',
]

export const openAifafanChat = () => {
  for (const selector of AIFAFAN_WIDGET_SELECTORS) {
    const element = document.querySelector(selector)
    if (element instanceof HTMLElement) {
      element.click()
      return
    }
  }

  window.open(AIFAFAN_FALLBACK_URL, '_blank', 'noopener,noreferrer')
}
