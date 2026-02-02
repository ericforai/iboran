# 部署指南 (PM2 + Docker 混合模式)

> **最后更新**: 2026-02-02
> **重大更新**: 从纯 Docker 部署切换到 PM2 + Docker 混合部署模式
> **自动部署**: GitHub Actions 配置完成，构建时使用临时 MongoDB

---

## 架构概述

### 部署架构

```
┌─────────────────────────────────────────────────────────┐
│                   阿里云 ECS 服务器                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │   PM2 → Next.js 应用 (源码部署)                 │   │
│  │   - 通过 tar 传输 .next 构建产物                │   │
│  │   - pm2 restart 重启应用                          │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │   Docker → MongoDB 7 (数据持久化)               │   │
│  │   - 端口映射: 27018:27017                       │   │
│  │   - Volume: iboran_mongo_data                   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              GitHub Actions (自动构建)                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │   MongoDB Service (临时) → 用于构建时连接       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │   Build → .next → SSH 传输 → 服务器更新          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 日常部署

### 自动部署（推荐）

```bash
git add .
git commit -m "feat: 新功能"
git push
```

推送后 GitHub Actions 自动：
1. 启动临时 MongoDB
2. 构建应用（需要数据库连接）
3. SSH 传输 `.next` 到服务器
4. PM2 重启应用

全程约 3-4 分钟。

---

## GitHub Actions 配置

### Secrets 配置

访问：https://github.com/ericforai/iboran/settings/secrets/actions

| Secret 名称 | 值 | 说明 |
|-------------|-----|------|
| `SSH_PRIVATE_KEY` | 服务器私钥 | 用于 SSH 连接 |
| `SERVER_HOST` | `47.111.2.171` | 服务器 IP |
| `SERVER_USER` | `root` | 服务器用户名 |
| `PAYLOAD_SECRET` | Payload 密钥 | Payload CMS 需要 |
| `CRON_SECRET` | CRON 密钥 | 定时任务需要 |
| `PREVIEW_SECRET` | 预览密钥 | 页面预览需要 |

### Deploy Key 配置

访问：https://github.com/ericforai/iboran/settings/keys

- **Title**: Production Server
- **Key**: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGTFvgusy5IlgqeB1Yx5w0kRH6xJLmsWolXTaky/JAt5 github-deploy-iboran`
- ✅ Allow write access

### Workflow 文件

```yaml
name: Deploy to Aliyun ECS (PM2 Mode)

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    services:
      mongo:
        image: mongo:7
        ports:
          - 27018:27017

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install pnpm
        run: corepack enable pnpm && pnpm -v

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build application
        run: pnpm build
        env:
          NEXT_PUBLIC_SERVER_URL: https://www.iboran.com
          PAYLOAD_SECRET: ${{ secrets.PAYLOAD_SECRET }}
          DATABASE_URI: mongodb://localhost:27018/iboran
          CRON_SECRET: ${{ secrets.CRON_SECRET }}
          PREVIEW_SECRET: ${{ secrets.PREVIEW_SECRET }}

      - name: Configure SSH
        run: |
          mkdir -p ~/.ssh
          chmod 700 ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan ${{ secrets.SERVER_HOST }} >> ~/.ssh/known_hosts 2>/dev/null

      - name: Deploy to server
        run: |
          tar -czf - .next public package.json pnpm-lock.yaml ecosystem.config.cjs | \
          ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }} \
          "cd /home/iboran && tar -xzf - && pm2 restart iboran"

      - name: Cleanup
        if: always()
        run: rm -f ~/.ssh/deploy_key
```

---

## 服务器信息

- **IP**: 47.111.2.171
- **User**: root
- **App Dir**: /home/iboran
- **Next.js Port**: 3000
- **MongoDB Port**: 27018 (外部) / 27017 (容器)

---

## 环境变量配置

```bash
# 服务器 .env 文件位置
/home/iboran/.env

# 关键配置
DATABASE_URI=mongodb://localhost:27018/iboran
NEXT_PUBLIC_SERVER_URL=https://www.iboran.com
LEAD_EMAIL_TO=user1@qq.com,user2@qq.com  # 多收件人逗号分隔
```

---

## 更新记录

### 2026-02-02 - GitHub Actions 自动部署成功

**变更**：
1. 在 GitHub Actions 上构建（使用临时 MongoDB）
2. 只传输 `.next` 构建产物到服务器
3. PM2 重启应用

**解决问题**：
- 服务器无法访问 GitHub（网络问题）
- 构建时需要数据库连接

**最终方案**：
- GitHub Actions services 添加 MongoDB
- 通过 SSH tar 传输构建产物
- 不需要服务器 git pull

---

## 相关链接

- GitHub 仓库：https://github.com/ericforai/iboran
- GitHub Actions：https://github.com/ericforai/iboran/actions
- 网站地址：https://www.iboran.com
