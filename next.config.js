import { withPayload } from '@payloadcms/next/withPayload'


// Force restart
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  outputFileTracingExcludes: {
    '*': [
      'node_modules/typescript/**/*',
      'node_modules/@types/**/*',
      'node_modules/esbuild/**/*',
      'node_modules/sass/**/*',
      'node_modules/terser/**/*',
      'node_modules/webpack/**/*',
      'node_modules/@swc/core/**/*',
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
