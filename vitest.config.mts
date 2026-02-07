import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/int/**/*.int.spec.ts', 'tests/int/**/*.int.spec.tsx', 'tests/unit/**/*.spec.ts'],
    // Container and Payload bootstrap can exceed the 10s Vitest defaults.
    // Keep a stable baseline to avoid flaky false negatives in CI/local Docker.
    hookTimeout: 30000,
    testTimeout: 30000,
  },
})
