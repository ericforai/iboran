# 部署指南 (PM2 方案)

## 概述

本文档说明如何将代码部署到阿里云 ECS 服务器。

**架构**：
- Next.js 应用：PM2 进程管理（源码部署）
- MongoDB：Docker 容器（数据持久化）

## 首次设置（服务器端）

### 1. 登录服务器

```bash
ssh root@your-server-ip
```

### 2. 运行初始化脚本

```bash
# 下载脚本
curl -o init-server.sh https://raw.githubusercontent.com/your-username/iboran/main/scripts/init-server.sh

# 运行（记得先修改 REPO_URL）
bash init-server.sh
```

初始化脚本会自动安装：
- Node.js 20
- pnpm
- PM2
- 克隆代码仓库

### 3. 配置环境变量

```bash
cd /home/iboran
cp .env.example .env
vi .env  # 编辑配置
```

### 4. 首次启动

```bash
pnpm build
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # 按提示执行命令，设置开机自启
```

## 日常部署

### 方式一：本地一键部署（推荐）

```bash
# 修改 scripts/deploy-remote.sh 中的服务器信息
./scripts/deploy-remote.sh
```

### 方式二：手动部署

```bash
# 1. 推送代码
git push

# 2. SSH 到服务器部署
ssh root@your-server
cd /home/iboran
./deploy.sh
```

### 方式三：GitHub Actions 自动部署

推送到 `main` 分支后自动触发部署。

需要先配置 GitHub Secrets：
- `SSH_PRIVATE_KEY`: SSH 私钥
- `SERVER_HOST`: 服务器 IP
- `SERVER_USER`: 服务器用户名

## 服务器管理

### 查看 PM2 状态

```bash
pm2 status          # 查看进程状态
pm2 logs iboran     # 查看日志
pm2 monit           # 实时监控
```

### 重启应用

```bash
pm2 restart iboran
```

### MongoDB 管理

```bash
# 查看 MongoDB 状态
docker ps | grep mongo

# 重启 MongoDB
docker compose restart mongo

# 备份数据库
mongodump --host=localhost:27018 --db=iboran --out=/backup/$(date +%Y%m%d)

# 恢复数据库
mongorestore --host=localhost:27018 --db=iboran /backup/20240101
```

## 故障排查

### 应用无法启动

```bash
# 检查日志
pm2 logs iboran --lines 100

# 检查端口占用
lsof -i :3000

# 重建并启动
pnpm build
pm2 delete iboran
pm2 start ecosystem.config.js
```

### MongoDB 连接失败

```bash
# 检查 MongoDB 是否运行
docker ps | grep mongo

# 查看 MongoDB 日志
docker logs mongo

# 重启 MongoDB
docker compose up -d mongo
```

## 目录结构

```
/home/iboran/
├── .env                 # 环境变量
├── ecosystem.config.js  # PM2 配置
├── deploy.sh            # 部署脚本
├── logs/                # 日志目录
├── .next/               # Next.js 构建产物
└── src/                 # 源代码
```
