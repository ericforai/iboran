---
description: "启动项目开发环境（使用 Docker）"
---

# 项目启动工作流

本工作流用于在 Docker 环境中启动 iboran 项目的开发环境。

## 前置条件

- Docker Desktop 已安装并运行
- 项目根目录下存在 `.env` 文件

## 启动步骤

// turbo-all

### 1. 确保 Docker 正在运行

```bash
docker info > /dev/null 2>&1 && echo "Docker is running" || echo "Docker is not running"
```

### 2. 停止可能正在运行的旧容器

```bash
cd /Users/user/iboran && docker compose down
```

### 3. 启动 Docker 开发环境

```bash
cd /Users/user/iboran && docker compose up -d
```

### 4. 查看应用日志（可选）

```bash
cd /Users/user/iboran && docker compose logs -f app
```

### 5. 检查服务状态

```bash
docker compose ps
```

## 访问地址

- **前端应用**: http://localhost:3000
- **Payload CMS 后台**: http://localhost:3000/admin
- **MongoDB**: localhost:27018 (映射到容器内 27017)

## 常用命令

### 重启应用服务

```bash
cd /Users/user/iboran && docker compose restart app
```

### 查看实时日志

```bash
cd /Users/user/iboran && docker compose logs -f app
```

### 备份数据库

```bash
cd /Users/user/iboran && pnpm db:backup
```

### 查看现有备份

```bash
cd /Users/user/iboran && pnpm db:list-backups
```

### 恢复数据库

```bash
cd /Users/user/iboran && pnpm db:restore
```

### 完全停止（保留数据）

```bash
cd /Users/user/iboran && docker compose down
```

### 安全重置（推荐）

> ⚠️ **使用此命令代替 `docker compose down -v`**

```bash
cd /Users/user/iboran && pnpm db:safe-reset
```

### 重新构建并启动（代码有重大更改时）

```bash
cd /Users/user/iboran && pnpm db:safe-reset
```

## 故障排查

### MongoDB 连接失败

1. 检查 MongoDB 容器状态：
   ```bash
   docker compose ps mongo
   ```

2. 查看 MongoDB 日志：
   ```bash
   docker compose logs mongo
   ```

### 应用启动失败

1. 查看应用日志：
   ```bash
   docker compose logs app
   ```

2. 进入容器调试：
   ```bash
   docker compose exec app sh
   ```

## 注意事项

- `.env` 文件中的 `DATABASE_URI` 应为 `mongodb://mongo:27017/iboran`（使用 Docker 网络名）
- 端口 3000 和 27018 需要未被占用
- 首次启动会自动安装依赖，可能需要等待几分钟
