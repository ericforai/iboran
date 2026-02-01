/**
 * PM2 Ecosystem Configuration
 *
 * Production process management for Next.js + Payload CMS
 *
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 restart iboran
 *   pm2 logs iboran
 *   pm2 save
 */

module.exports = {
  apps: [
    {
      name: 'iboran',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/iboran',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/home/iboran/logs/pm2-error.log',
      out_file: '/home/iboran/logs/pm2-out.log',
      log_file: '/home/iboran/logs/pm2-combined.log',
      time: true,
      merge_logs: true,
    },
  ],
};
