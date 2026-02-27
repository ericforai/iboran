import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import 'dotenv/config'

const e2eBaseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000'
process.env.NEXT_PUBLIC_SERVER_URL = e2eBaseURL
process.env.PAYLOAD_TEST_EMAIL = process.env.PAYLOAD_TEST_EMAIL || 'admin@boran.cn'
process.env.PAYLOAD_TEST_PASSWORD = process.env.PAYLOAD_TEST_PASSWORD || 'Boran123'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: e2eBaseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    },
  ],
  webServer: {
    command: `rm -rf .next && SMTP_HOST='' NEXT_PUBLIC_SERVER_URL=${e2eBaseURL} pnpm build && NEXT_PUBLIC_SERVER_URL=${e2eBaseURL} node .next/standalone/server.js`,
    reuseExistingServer: true,
    url: e2eBaseURL,
    timeout: 600000,
  },
})
