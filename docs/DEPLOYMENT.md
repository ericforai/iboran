# 部署指南 (PM2 + Docker 混合模式)

> **最后更新**: 2026-02-02
> **重大更新**: 从纯 Docker 部署切换到 PM2 + Docker 混合部署模式

---

## 架构概述

### 部署架构

```
┌─────────────────────────────────────────────────────────┐
│                   阿里云 ECS 服务器                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │   PM2 → Next.js 应用 (源码部署)                 │   │
│  │   - 通过 git pull 更新代码                      │   │
│  │   - 本地 pnpm build 构建                        │   │
│  │   - pm2 管理进程                                │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │   Docker → MongoDB 7 (数据持久化)               │   │
│  │   - 端口映射: 27018:27017                       │   │
│  │   - Volume: iboran_mongo_data                   │   │
│  │   - 数据安全，不受代码部署影响                  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 部署模式对比

| 组件 | 部署方式 | 说明 |
|------|----------|------|
| Next.js 应用 | PM2 | 源码直接部署，快速迭代 |
| Payload CMS | PM2 | 与 Next.js 同进程 |
| MongoDB | Docker | 数据持久化，独立管理 |

---

## 服务器环境

### 系统要求

- **OS**: Ubuntu / Debian
- **Node.js**: 20.x
- **pnpm**: 10.x
- **PM2**: 最新版
- **Docker**: 最新版

### 端口分配

| 服务 | 端口 | 说明 |
|------|------|------|
| Next.js | 3000 | 应用端口 |
| MongoDB | 27018 | 对外映射端口 (容器内 27017) |

---

## 首次部署

### 1. 安装基础环境

```bash
# 安装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 启用 pnpm
corepack enable
corepack prepare pnpm@latest --activate

# 安装 PM2
npm install -g pm2
pm2 install pm2-logrotate

# 验证安装
node -v   # v20.20.0
pnpm -v   # 10.x
pm2 -v    # 6.x
```

### 2. 克隆代码

```bash
cd /home
git clone https://github.com/ericforai/iboran.git iboran
cd iboran
```

### 3. 配置环境变量

```bash
# 复制或创建 .env 文件
vi /home/iboran/.env
```

**环境变量配置**：

```bash
# 数据库
DATABASE_URI=mongodb://localhost:27018/iboran

# Payload 密钥
PAYLOAD_SECRET=your-payload-secret

# 站点 URL (重要！用于 Sitemap)
NEXT_PUBLIC_SERVER_URL=https://www.iboran.com

# CRON 密钥
CRON_SECRET=your-cron-secret
PREVIEW_SECRET=your-preview-secret

# Email / SMTP Settings
SMTP_HOST=smtp.qq.com
SMTP_USER=your@qq.com
SMTP_PASS=your-authorization-code
SMTP_PORT=465
SMTP_FROM=your@qq.com
LEAD_EMAIL_TO=receiver@qq.com,another@qq.com
```

### 4. 启动 MongoDB

```bash
cd /home/iboran
docker compose up -d mongo

# 验证
docker ps | grep mongo
# 应显示: 0.0.0.0:27018->27017/tcp
```

### 5. 安装依赖并构建

```bash
cd /home/iboran
pnpm install
pnpm build
```

### 6. 启动应用

```bash
# 方式一：使用 PM2 命令
pm2 start "pnpm start" --name iboran

# 方式二：使用配置文件
pm2 start ecosystem.config.cjs

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
# 按提示执行输出的命令
```

### 7. 验证部署

```bash
# 检查应用状态
pm2 status
# 应显示: online

# 检查网站访问
curl -I http://localhost:3000
# 应返回: HTTP/1.1 200 OK

# 检查 Sitemap
curl https://www.iboran.com/sitemap.xml
# 应显示完整的 sitemap
```

---

## 日常部署

### 方式一：GitHub Actions 自动部署（推荐）

**配置完成后的标准流程**：

```bash
# 本地
git add .
git commit -m "feat: 新功能"
git push
```

推送后 GitHub Actions 自动执行部署，约 3-4 分钟完成。

查看部署状态：
```
https://github.com/ericforai/iboran/actions
```

---

### 方式二：手动 SSH 部署

```bash
# 本地执行
ssh root@47.111.2.171 "cd /home/iboran && git pull && pnpm install && pnpm build && pm2 restart iboran"
```

---

### 方式三：服务器上直接操作

```bash
# SSH 到服务器
ssh root@47.111.2.171

# 部署
cd /home/iboran
git pull
pnpm install
pnpm build
pm2 restart iboran
pm2 save
```

---

## GitHub Actions 配置

### Secrets 配置

访问：https://github.com/ericforai/iboran/settings/secrets/actions

| Secret 名称 | 值 | 说明 |
|-------------|-----|------|
| `SSH_PRIVATE_KEY` | 本地私钥完整内容 | 见下方生成方法 |
| `SERVER_HOST` | `47.111.2.171` | 服务器 IP |
| `SERVER_USER` | `root` | 服务器用户名 |

### SSH 密钥对生成

```bash
# 本地生成专用密钥
ssh-keygen -t ed25519 -C "github-actions-iboran" -f ~/.ssh/github_actions_iboran -N ""

# 复制公钥到服务器
ssh-copy-id -i ~/.ssh/github_actions_iboran.pub root@47.111.2.171

# 或手动添加
cat ~/.ssh/github_actions_iboran.pub | ssh root@47.111.2.171 "cat >> ~/.ssh/authorized_keys"

# 复制私钥内容（用于 GitHub Secret）
cat ~/.ssh/github_actions_iboran
```

**私钥格式**（必须完整）：
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
...
-----END OPENSSH PRIVATE KEY-----
```

### Workflow 文件

位置：`.github/workflows/deploy.yml`

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

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan ${{ secrets.SERVER_HOST }} >> ~/.ssh/known_hosts 2>/dev/null

      - name: Test SSH connection
        run: ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }} "echo 'SSH connection successful' && pwd"

      - name: Deploy
        run: ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }} "cd /home/iboran && git pull && pnpm install && pnpm build && pm2 restart iboran"

      - name: Cleanup
        if: always()
        run: rm -f ~/.ssh/deploy_key
```

---

## PM2 管理

### 常用命令

```bash
# 查看状态
pm2 status

# 查看日志
pm2 logs iboran

# 实时监控
pm2 monit

# 重启应用
pm2 restart iboran

# 停止应用
pm2 stop iboran

# 删除应用
pm2 delete iboran

# 保存配置
pm2 save

# 开机自启
pm2 startup
```

### PM2 配置文件

位置：`ecosystem.config.cjs`

```javascript
module.exports = {
  apps: [
    {
      name: 'iboran',
      script: 'pnpm',
      args: 'start',
      cwd: '/home/iboran',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
```

---

## MongoDB 管理

### 常用命令

```bash
# 查看状态
docker ps | grep mongo

# 查看日志
docker logs iboran-mongo-1

# 重启
docker compose restart mongo

# 停止
docker compose stop mongo

# 启动
docker compose up -d mongo
```

### 数据备份

```bash
# 备份
docker exec iboran-mongo-1 mongodump --db=iboran --out=/backup/$(date +%Y%m%d)

# 恢复
docker exec iboran-mongo-1 mongorestore --db=iboran /backup/20240201
```

### Volume 管理

```bash
# 查看 volumes
docker volume ls | grep mongo

# 查看 volume 详情
docker inspect iboran_mongo_data

# 删除 volume (危险！会删除数据)
docker volume rm iboran_mongo_data
```

---

## 故障排查

### 应用无法启动

```bash
# 1. 检查 PM2 日志
pm2 logs iboran --lines 100

# 2. 检查端口占用
lsof -i :3000

# 3. 重建并启动
cd /home/iboran
pnpm build
pm2 delete iboran
pm2 start "pnpm start" --name iboran
pm2 save
```

### MongoDB 连接失败

```bash
# 1. 检查 MongoDB 状态
docker ps | grep mongo

# 2. 检查端口映射
docker port iboran-mongo-1

# 3. 测试连接
mongosh --port 27018

# 4. 重启 MongoDB
docker compose restart mongo
```

### 邮件发送失败

```bash
# 1. 检查环境变量
cat /home/iboran/.env | grep SMTP

# 2. 查看 PM2 日志中的邮件信息
pm2 logs iboran | grep -i email

# 3. 测试 SMTP 连接
telnet smtp.qq.com 465
```

### GitHub Actions 部署失败

1. **SSH 连接失败 (exit code 255)**
   - 检查 GitHub Secrets 是否正确
   - 确认私钥格式完整（包含 BEGIN 和 END 行）
   - 测试本地 SSH 连接

2. **构建失败**
   - 检查服务器上代码是否最新
   - 查看 pnpm build 日志

3. **PM2 重启失败**
   - 检查应用是否已运行：`pm2 status`
   - 查看错误日志：`pm2 logs`

---

## 更新记录

### 2026-02-02 - 重大架构更新

**变更内容**：

1. **部署方式变更**
   - ❌ 旧方式：Docker 镜像构建 + 容器运行
   - ✅ 新方式：PM2 进程管理 + 源码直接部署

2. **部署效率提升**
   - 构建 Docker 镜像：10-15 分钟
   - PM2 源码部署：2-3 分钟

3. **MongoDB 独立**
   - 继续使用 Docker 容器运行
   - 数据与应用完全分离

4. **自动化部署**
   - 配置 GitHub Actions 自动部署
   - 推送代码后自动触发

5. **环境配置更新**
   - `NEXT_PUBLIC_SERVER_URL`: `http://localhost:3000` → `https://www.iboran.com`
   - `LEAD_EMAIL_TO`: 支持多个收件人（逗号分隔）

6. **数据迁移**
   - 从旧 Docker volume 迁移到新 volume
   - 保留所有现有数据

**迁移步骤**：
1. 停止旧容器
2. 复制 MongoDB 数据到新 volume
3. 安装 Node.js/pnpm/PM2
4. 构建并启动应用
5. 配置 GitHub Actions

---

## 目录结构

```
/home/iboran/
├── .env                    # 环境变量
├── ecosystem.config.cjs    # PM2 配置
├── deploy.sh               # 部署脚本
├── docker-compose.yml      # MongoDB 配置
├── logs/                   # PM2 日志
├── .next/                  # Next.js 构建产物
├── node_modules/           # 依赖
└── src/                    # 源代码
```

---

## 相关链接

- GitHub 仓库：https://github.com/ericforai/iboran
- GitHub Actions：https://github.com/ericforai/iboran/actions
- 网站地址：https://www.iboran.com
- Payload Admin：https://www.iboran.com/admin
