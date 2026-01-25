# 部署文档

## 概述

iboran.com 使用本地构建 + 远程部署的方式，将 Next.js 应用部署到阿里云 ECS 服务器。

## 架构

```
本地开发环境                    远程生产服务器
┌──────────────────┐          ┌──────────────────┐
│  pnpm build      │          │  Docker          │
│  ↓               │  SCP     │  ├── iboran-app  │
│  .next/standalone │ ───────> │  ├── iboran-mongo│
│  .next/static    │          │  └── Dockerfile  │
└──────────────────┘          └──────────────────┘
```

## 前置条件

### 本地环境
- Docker Desktop 运行中
- MongoDB 容器运行（端口 27018）
- `pnpm` 已安装

### 远程服务器
- 阿里云 ECS: `47.111.2.171`
- SSH 访问: `root@47.111.2.171`
- Docker 已安装

## 部署步骤

### 方法一：使用部署脚本（推荐）

```bash
bash deploy-remote.sh
```

脚本会自动执行以下步骤：
1. 本地构建 (`pnpm build`)
2. 导出本地数据库
3. 打包部署文件
4. 上传到服务器
5. 服务器部署
6. 验证部署

### 方法二：手动部署

#### 1. 本地构建

```bash
# 确保容器运行
docker compose up -d
docker stop iboran-app-1  # 停止应用容器，保留 MongoDB

# 构建生产版本
pnpm build
```

#### 2. 导出数据库

```bash
docker exec iboran-mongo-1 mongodump --db=iboran --archive=/tmp/iboran_data.gz
docker cp iboran-mongo-1:/tmp/iboran_data.gz ./iboran_data.gz
```

#### 3. 打包文件

```bash
tar -czf /tmp/iboran-deploy.tar.gz .next/standalone .next/static public iboran_data.gz
```

#### 4. 上传到服务器

```bash
scp /tmp/iboran-deploy.tar.gz root@47.111.2.171:~/deploy.tar.gz
```

#### 5. 服务器部署

```bash
ssh root@47.111.2.171 << 'EOF'
cd /opt/iboran

# 停止并删除旧容器
docker stop iboran-app 2>/dev/null || true
docker rm iboran-app 2>/dev/null || true

# 解压新文件
rm -rf .next/standalone .next/static public iboran_data.gz
tar -xzf ~/deploy.tar.gz

# 导入数据库
docker cp iboran_data.gz iboran-mongo:/tmp/iboran_data.gz
docker exec iboran-mongo mongorestore --db=iboran --archive=/tmp/iboran_data.gz
docker exec iboran-mongo rm /tmp/iboran_data.gz

# 重建镜像
docker build -f Dockerfile.simple -t iboran-app:latest . -q

# 启动容器
docker run -d --name iboran-app --restart always -p 3000:3000 \
  --link iboran-mongo:mongo \
  iboran-app:latest

# 修正 DATABASE_URI（容器内使用 mongo:27017）
sleep 3
docker exec iboran-app sh -c 'sed -i "s/DATABASE_URI=mongodb:\/\/localhost:27018\//DATABASE_URI=mongodb:\/\/mongo:27017\//" .env'
docker restart iboran-app

# 清理
rm ~/deploy.tar.gz
EOF
```

#### 6. 验证部署

```bash
curl -s -o /dev/null -w "首页: %{http_code}\n" http://47.111.2.171/
curl -s -o /dev/null -w "Posts: %{http_code}\n" http://47.111.2.171/posts
```

#### 7. 清理本地文件

```bash
rm -f iboran_data.gz /tmp/iboran-deploy.tar.gz
```

#### 8. 恢复本地开发环境

```bash
docker compose up -d
```

## 故障排查

### 构建失败

#### MongoDB 连接错误
```
Error: cannot connect to MongoDB: connect ECONNREFUSED 127.0.0.1:27018
```

**原因**: MongoDB 容器未运行

**解决**:
```bash
docker compose up -d
```

#### TypeScript 类型错误
```
Type error: Type 'string' is not assignable to type 'xxx'
```

**原因**: useState 泛型类型缺失

**解决**: 添加明确的类型注解
```typescript
// 修复前
const [activeTab, setActiveTab] = useState(features[0].id)

// 修复后
const [activeTab, setActiveTab] = useState<"type1" | "type2">("type1")
```

### 本地开发服务无法访问

#### ELOOP 错误
```
Error: ELOOP: too many symbolic links encountered
```

**原因**: `.next/standalone` 目录包含循环符号链接，与开发服务器冲突

**解决**:
```bash
docker compose down
rm -rf .next node_modules/.cache
docker compose up -d
```

#### 容器运行但服务无响应
```bash
# 检查容器日志
docker logs iboran-app-1

# 重启容器
docker compose restart
```

### 部署后远程服务异常

#### 检查容器状态
```bash
ssh root@47.111.2.171 'docker ps'
ssh root@47.111.2.171 'docker logs iboran-app'
```

#### 重新部署
如果部署出现问题，重新执行部署步骤。

## 注意事项

### 1. 构建顺序
```
1. docker compose up -d      # 启动 MongoDB
2. docker stop iboran-app-1  # 停止应用容器
3. pnpm build                # 构建生产版本
4. 部署
5. docker compose up -d      # 恢复开发环境
```

### 2. 端口映射
| 服务 | 本地端口 | 远程端口 |
|------|----------|----------|
| MongoDB | 27018 | 27017 |
| App (开发) | 3009 | 3000 |
| App (生产) | - | 3000 |

### 3. 数据库连接
- **本地**: `mongodb://localhost:27018/iboran`
- **远程容器**: `mongodb://mongo:27017/iboran`

部署脚本会自动修正 `.env` 中的 `DATABASE_URI`。

### 4. 不要在部署前清理 `.next`
```bash
# ❌ 错误：删除后开发服务器会出问题
rm -rf .next

# ✅ 正确：只删除 node_modules/.cache
rm -rf node_modules/.cache
```

## 文件说明

```
deploy-remote.sh     # 一键部署脚本
deploy.sh            # 服务器端部署脚本（已废弃）
Dockerfile.simple    # 远程服务器使用的 Dockerfile
docker-compose.yml   # 本地开发环境配置
```

## 快速命令参考

```bash
# 完整部署
bash deploy-remote.sh

# 仅构建
pnpm build

# 本地开发
docker compose up -d

# 查看日志
docker logs iboran-app-1

# 重启服务
docker compose restart

# 进入容器
docker compose exec app sh
```
