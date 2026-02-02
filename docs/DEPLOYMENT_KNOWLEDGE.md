# iboran.com 部署完全指南

> **知识类型**: 部署运维
> **最后更新**: 2026-02-02
> **项目**: iboran.com
> **维护者**: 单人维护

---

## 1. 基础架构决策

### 1.1 部署模式选择

**问题**：每次改一行代码都要构建 Docker 镜像（10-15分钟）

**环境**：
- 服务器：阿里云 ECS
- 维护者：单人
- 源码：不保密，无合规要求

**决策**：**PM2 源码部署 + MongoDB Docker 混合模式**

**原因**：
1. 部署效率：2-3分钟 vs 10-15分钟
2. 单人维护：不需要环境隔离
3. 数据安全：MongoDB 独立运行
4. 操作简单：git push 即可部署

---

## 2. 服务器配置

### 2.1 服务器信息

```
IP: 47.111.2.171
User: root
App Dir: /home/iboran
```

### 2.2 端口分配

| 服务 | 端口 | 说明 |
|------|------|------|
| Next.js | 3000 | 应用端口 |
| MongoDB | 27018 (外部) / 27017 (容器) | 数据库端口 |

### 2.3 目录结构

```
/home/iboran/
├── .env                    # 环境变量
├── ecosystem.config.cjs    # PM2 配置
├── docker-compose.yml      # MongoDB 配置
├── logs/                   # PM2 日志
├── .next/                  # Next.js 构建产物
├── node_modules/           # 依赖
└── src/                    # 源代码
```

---

## 3. GitHub Actions 自动部署

### 3.1 配置完成时间

2026-02-02，经过多次尝试后成功配置。

### 3.2 工作流程

```
git push
  ↓
GitHub Actions 触发
  ↓
1. 启动临时 MongoDB Service (端口 27018)
2. 安装依赖
3. 构建应用（需要数据库连接）
4. SSH 连接服务器
5. tar 传输 .next public 到服务器
6. PM2 重启应用
```

### 3.3 GitHub Secrets 配置

**访问**：https://github.com/ericforai/iboran/settings/secrets/actions

| Secret 名称 | 值 | 用途 |
|-------------|-----|------|
| `SSH_PRIVATE_KEY` | 服务器私钥（完整 BEGIN/END 行） | SSH 连接 |
| `SERVER_HOST` | `47.111.2.171` | 服务器 IP |
| `SERVER_USER` | `root` | 服务器用户名 |
| `PAYLOAD_SECRET` | `d587beaf9532cb1c89f3945e` | Payload CMS 密钥 |
| `CRON_SECRET` | `66a90a270c90ed5ff2e5c5846167f0ae4fccb7ad278a2c250e28cbd3cf71c018` | 定时任务 |
| `PREVIEW_SECRET` | `95db2bc4ecd75fa370efd73ed24b3168145e8051c1a08168ef19d02ade9caa20` | 页面预览 |

### 3.4 Deploy Key 配置

**访问**：https://github.com/ericforai/iboran/settings/keys

```
Title: Production Server
Type: Deploy Key
Key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGTFvgusy5IlgqeB1Yx5w0kRH6xJLmsWolXTaky/JAt5 github-deploy-iboran
✅ Allow write access
```

### 3.5 Workflow 文件

位置：`.github/workflows/deploy.yml`

**关键配置**：
- MongoDB Service 用于构建时数据库连接
- SSH 使用 Deploy Key 连接
- 只传输构建产物，不传输源码

---

## 4. 服务器环境配置

### 4.1 基础软件

```bash
Node.js: 20.x
pnpm: 10.x
PM2: 6.x
Docker: latest
```

### 4.2 安装命令

```bash
# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# pnpm
corepack enable
corepack prepare pnpm@latest --activate

# PM2
npm install -g pm2
pm2 install pm2-logrotate
```

### 4.3 PM2 应用启动

```bash
cd /home/iboran
pm2 start "pnpm start" --name iboran
pm2 save
pm2 startup  # 开机自启
```

### 4.4 MongoDB Docker 容器

```bash
cd /home/iboran
docker compose up -d mongo
```

---

## 5. 环境变量配置

### 5.1 .env 文件位置

```
/home/iboran/.env
```

### 5.2 关键配置

```bash
# 数据库
DATABASE_URI=mongodb://localhost:27018/iboran

# Payload CMS
PAYLOAD_SECRET=d587beaf9532cb1c89f3945e

# Sitemap URL（重要！）
NEXT_PUBLIC_SERVER_URL=https://www.iboran.com

# 邮件多收件人（逗号分隔）
LEAD_EMAIL_TO=hzwyz@qq.com,13761778461@qq.com

# SMTP 邮箱配置
SMTP_HOST=smtp.qq.com
SMTP_USER=hzwyz@qq.com
SMTP_PASS=susdxerzwupfcaii  # QQ邮箱授权码，不是密码
SMTP_PORT=465
```

---

## 6. 部署流程

### 6.1 日常部署

**自动部署（推荐）**：
```bash
git add .
git commit -m "feat: 新功能"
git push
```

### 6.2 紧急手动部署

```bash
ssh root@47.111.2.171 "cd /home/iboran && git pull && pnpm install && pnpm build && pm2 restart iboran"
```

### 6.3 服务器上直接操作

```bash
ssh root@47.111.2.171
cd /home/iboran
git pull
pnpm build
pm2 restart iboran
pm2 save
```

---

## 7. 故障排查

### 7.1 GitHub Actions 部署失败

**问题：exit code 255**
- **原因**：SSH_PRIVATE_KEY 格式问题或为空
- **解决**：删除 Secret 重新创建，确保包含完整的 BEGIN/END 行

**问题：构建失败 - MongoDB 连接失败**
- **原因**：构建时需要数据库连接
- **解决**：GitHub Actions 配置中添加了 MongoDB service

**问题：Secret 显示为空**
- **原因**：GitHub 已知问题
- **解决**：删除并重新创建 Secret

### 7.2 应用无法启动

```bash
pm2 logs iboran --lines 100   # 查看日志
lsof -i :3000                   # 检查端口
pnpm build                      # 重新构建
pm2 restart iboran              # 重启
```

### 7.3 MongoDB 连接失败

```bash
docker ps | grep mongo                     # 查看状态
docker port iboran-mongo-1                 # 检查端口
docker logs iboran-mongo-1                  # 查看日志
docker compose restart mongo              # 重启
```

### 7.4 邮件发送失败

```bash
cat /home/iboran/.env | grep SMTP           # 检查配置
pm2 logs iboran | grep -i email           # 查看日志
```

---

## 8. 数据管理

### 8.1 备份

```bash
docker exec iboran-mongo-1 mongodump --db=iboran --out=/backup/$(date +%Y%m%d)
```

### 8.2 恢复

```bash
docker exec iboran-mongo-1 mongorestore --db=iboran /backup/20240201
```

### 8.3 Volume 管理

```bash
docker volume ls | grep mongo              # 查看 volumes
docker inspect iboran_mongo_data          # 查看详情
```

---

## 9. 重要经验总结

### 9.1 部署效率

| 方式 | 时间 | 复杂度 |
|------|------|--------|
| Docker 镜像构建 | 10-15分钟 | 高 |
| PM2 源码部署 | 2-3分钟 | 低 |
| GitHub Actions 自动化 | 3-4分钟 | 中（设置一次） |

### 9.2 关键决策点

1. **不使用 Docker 构建镜像**
   - 原因：构建太慢
   - 替代：GitHub Actions 上构建

2. **服务器不访问 GitHub**
   - 原因：网络问题，无法 git clone
   - 替代：SSH 传输构建产物

3. **构建时需要数据库**
   - 原因：Payload CMS 静态页面生成需要数据库
   - 替代：GitHub Actions 添加 MongoDB service

### 9.3 避坑指南

1. **SSH_PRIVATE_KEY 必须包含完整的 BEGIN/END 行**
2. **GitHub Secrets 会莫名变空** - 需要定期检查
3. **NEXT_PUBLIC_SERVER_URL 必须是真实域名** - 否则 Sitemap 错误
4. **SMTP_PASS 是授权码不是 QQ 密码**
5. **多收件人用逗号分隔**

---

## 10. 相关文档

- **CLAUDE.md**: 项目主文档（底部有部署部分）
- **docs/DEPLOYMENT.md**: 详细部署指南
- **.github/workflows/deploy.yml**: GitHub Actions 配置

---

## 更新日志

| 日期 | 更新内容 |
|------|----------|
| 2026-02-02 | GitHub Actions 自动部署成功配置 |
| 2026-02-02 | PM2 + Docker 混合部署架构 |
| 2026-02-02 | Sitemap 域名配置 |
| 2026-02-02 | 邮件多收件人配置 |
