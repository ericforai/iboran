import { existsSync } from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const manifestPath = path.join(process.cwd(), '.next', 'routes-manifest.json')

if (!existsSync(manifestPath)) {
  console.warn('Missing .next/routes-manifest.json. Running `pnpm build` first...')
  execSync('pnpm build', { stdio: 'inherit' })
}
