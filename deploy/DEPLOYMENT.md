# Boran.com 部署文档

## 服务器环境

| 项目 | 信息 |
|------|------|
| 服务器 | 阿里云 ECS |
| IP地址 | 47.111.2.171 |
| 操作系统 | Ubuntu 22.04.5 LTS |
| 架构 | AMD64 (linux/amd64) |

## 已安装软件

| 软件 | 版本 | 用途 |
|------|------|------|
| Docker | 29.1.4 | 容器运行 |
| Nginx | - | 反向代理 |
| MongoDB | 7 | 数据库 |

## 容器部署状态

| 容器名 | 镜像 | 端口 | 状态 |
|--------|------|------|------|
| iboran-mongo | mongo:7 | 27017 | 运行中 |
| iboran-app | iboran-app:latest | 3000 | 运行中 |

## 目录结构

```
/opt/iboran/                      # 项目目录
├── .next/                         # Next.js 构建产物
│   ├── standalone/                # 独立运行文件
│   └── static/                    # 静态资源
├── public/                        # 公共静态文件
├── Dockerfile.simple              # 简化版 Dockerfile
└── docker-compose.server.yml      # Docker Compose 配置
```

## 部署架构

```
Internet (80)
    ↓
Nginx (反向代理)
    ↓
localhost:3000
    ↓
iboran-app (Next.js + Payload CMS)
    ↓
iboran-mongo (MongoDB:27017)
```

## 访问地址

- **外网**: http://47.111.2.171 (需开放安全组80端口)
- **Payload Admin**: http://47.111.2.171/admin

---

## 更新部署流程

### 方式一：本地构建后更新（推荐）

```bash
# 1. 本地构建 Next.js
pnpm build

# 2. 打包构建产物
cd /Users/user/iboran
tar -czf /tmp/iboran-update.tar.gz .next/standalone .next/static public

# 3. 上传到服务器
scp /tmp/iboran-update.tar.gz root@47.111.2.171:~//

# 4. 服务器上更新
ssh root@47.111.2.171
cd /opt/iboran
rm -rf .next/standalone .next/static public
tar -xzf ~/iboran-update.tar.gz

# 5. 重建镜像并重启
docker build -f Dockerfile.simple -t iboran-app:latest .
docker stop iboran-app && docker rm iboran-app
docker run -d --name iboran-app --restart always -p 3000:3000 \
  --link iboran-mongo:mongo \
  iboran-app:latest
```

### 方式二：快速更新脚本

创建本地更新脚本 `deploy/update.sh`：

```bash
#!/bin/bash
set -e

SERVER="root@47.111.2.171"
PROJECT_DIR="/Users/user/iboran"

echo ">>> 构建项目..."
cd $PROJECT_DIR
pnpm build

echo ">>> 打包文件..."
tar -czf /tmp/iboran-update.tar.gz .next/standalone .next/static public

echo ">>> 上传到服务器..."
scp /tmp/iboran-update.tar.gz $SERVER:~/

echo ">>> 服务器更新..."
ssh $SERVER << 'REMOTE_EOF'
cd /opt/iboran
docker stop iboran-app
rm -rf .next/standalone .next/static public
tar -xzf ~/iboran-update.tar.gz
docker build -f Dockerfile.simple -t iboran-app:latest . -q
docker start iboran-app || docker run -d --name iboran-app --restart always -p 3000:3000 --link iboran-mongo:mongo iboran-app:latest
rm ~/iboran-update.tar.gz
echo "更新完成!"
REMOTE_EOF

echo ">>> 清理本地文件..."
rm /tmp/iboran-update.tar.gz

echo "更新完成!"
```

使用方式：
```bash
chmod +x deploy/update.sh
./deploy/update.sh
```

---

## 常用管理命令

### SSH 登录

```bash
ssh root@47.111.2.171
```

### 查看容器状态

```bash
docker ps
docker logs iboran-app -f      # 查看应用日志
docker logs iboran-mongo -f    # 查看 MongoDB 日志
```

### 重启服务

```bash
docker restart iboran-app
docker restart iboran-mongo
systemctl restart nginx
```

### 数据库备份

```bash
# 备份
docker exec iboran-mongo mongodump --db=iboran --archive=/tmp/backup.gz
docker cp iboran-mongo:/tmp/backup.gz ~/iboran-backup-$(date +%Y%m%d).gz

# 恢复
docker cp ~/iboran-backup.gz iboran-mongo:/tmp/backup.gz
docker exec iboran-mongo mongorestore --db=iboran --archive=/tmp/backup.gz
```

### Nginx 配置

```bash
# 配置文件位置
/etc/nginx/sites-available/iboran

# 修改后测试
nginx -t

# 重启
systemctl restart nginx
```

---

## 故障排查

### 网站无法访问

1. 检查安全组是否开放 80 端口
2. 检查容器状态: `docker ps`
3. 检查应用日志: `docker logs iboran-app`
4. 本地测试: `curl http://localhost:3000`

### 容器启动失败

```bash
# 查看详细错误
docker logs iboran-app

# 检查 MongoDB 连接
docker exec iboran-mongo mongosh --eval "db.adminCommand('ping')"

# 重建容器
docker stop iboran-app && docker rm iboran-app
docker run -d --name iboran-app --restart always -p 3000:3000 \
  --link iboran-mongo:mongo \
  iboran-app:latest
```

### 磁盘空间不足

```bash
# 查看空间使用
df -h

# 清理未使用的 Docker 资源
docker system prune -a

# 清理构建缓存
docker builder prune
```

---

## 安全建议

1. **定期更新系统**: `apt-get update && apt-get upgrade`
2. **配置防火墙**: `ufw allow 22 && ufw allow 80 && ufw enable`
3. **修改 SSH 密钥**: 使用密钥登录，禁用密码登录
4. **定期备份数据库**: 设置 cron 定时任务
5. **配置域名和 SSL**: 使用 Let's Encrypt 免费证书

---

## 重要配置说明

### Sharp 模块处理
Next.js standalone 构建不包含原生模块（如 sharp），需要在 Dockerfile 中单独安装：

```dockerfile
# 安装 sharp 依赖
RUN apk add --no-cache vips-dev
RUN corepack enable pnpm && pnpm add sharp --ignore-scripts
```

### 数据库连接配置
standalone 构建的 `.env` 文件中 `DATABASE_URI` 使用 `localhost:27018`，需要在构建时修正为 `mongodb://mongo:27017/iboran`（Docker 网络中的容器名）。

```dockerfile
RUN sed -i "s|localhost:27018|mongo:27017|" .env
```

### 完整 Dockerfile
`/opt/iboran/Dockerfile.simple`:

```dockerfile
FROM node:20-alpine

# 安装 sharp 依赖
RUN apk add --no-cache vips-dev

WORKDIR /app

# 复制 standalone 文件
COPY .next/standalone ./

# 使用 pnpm 安装 sharp
RUN corepack enable pnpm && pnpm add sharp --ignore-scripts

# 修正 .env 中的数据库连接
RUN sed -i "s|DATABASE_URI=mongodb://localhost:27018/iboran|DATABASE_URI=mongodb://mongo:27017/iboran|" .env

# 复制静态资源
COPY .next/static ./.next/static
COPY public ./public

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV MONGODB_URL=mongodb://mongo:27017/iboran

EXPOSE 3000

CMD node server.js
```

---

## 部署历史

| 日期 | 操作 |
|------|------|
| 2026-01-14 | 初始部署，Docker + Nginx + MongoDB |
| 2026-01-14 | 修复 sharp 模块缺失问题，修正 DATABASE_URI 配置 |
