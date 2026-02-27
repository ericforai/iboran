import { expect, test } from '@playwright/test'

const closeModalByBackdrop = async (page: Parameters<typeof test>[0]['page']) => {
  const modal = page.locator('.fixed.inset-0.z-\\[201\\]').first()
  if (await modal.isVisible()) {
    const closeBtn = page.locator('.fixed.inset-0.z-\\[201\\] button').first()
    if (await closeBtn.isVisible()) {
      await closeBtn.click({ force: true })
    }
    await expect(modal).toBeHidden()
  }
}

test.describe('Management Accounting key paths', () => {
  test('cta buttons and links are clickable', async ({ page }) => {
    await page.route('**/api/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '{"ok":true}',
      })
    })

    await page.goto('/products/management-accounting', { waitUntil: 'domcontentloaded', timeout: 120000 })

    await page.getByRole('button', { name: '预约产品演示' }).click()
    await expect(page.getByText('预约专家演示')).toBeVisible()
    await closeModalByBackdrop(page)

    const heroWhitepaperLink = page.locator('a[href="/whitepapers/business-finance-strategic-restructuring"]').first()
    await expect(heroWhitepaperLink).toBeVisible()
    await heroWhitepaperLink.click()
    await expect(page).toHaveURL(/\/whitepapers\/business-finance-strategic-restructuring/)

    await page.goto('/products/management-accounting', { waitUntil: 'domcontentloaded', timeout: 120000 })
    await page.getByRole('button', { name: '立即预约演示' }).click()
    await expect(page.getByText('预约专家演示')).toBeVisible()
    await closeModalByBackdrop(page)

    await page.getByRole('button', { name: '联系技术顾问' }).click()
    await expect(page.getByText('在线专家咨询')).toBeVisible()
    await page.keyboard.press('Escape')

    await page.getByRole('link', { name: '查看更多资源' }).click()
    await expect(page).toHaveURL(/\/resources/)
  })
})
