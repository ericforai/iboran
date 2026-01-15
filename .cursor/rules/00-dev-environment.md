# 开发环境配置

## Docker 环境

本项目运行在 Docker 容器中，**不是本地直接运行**。

### 端口映射

| 服务 | 容器端口 | 宿主机端口 | 访问地址 |
|------|----------|-----------|----------|
| Next.js App | 3000 | **3000** | `http://localhost:3000` |
| MongoDB | 27017 | **27018** | `mongodb://localhost:27018` |
| Payload Admin | 3000 | 3000 | `http://localhost:3000/admin` |

### 启动命令

```bash
# 启动开发环境
docker compose up

# 后台运行
docker compose up -d

# 查看日志
docker compose logs -f app

# 进入容器执行命令
docker compose exec app sh
```

### 在容器内执行命令

```bash
# 安装依赖（在容器内）
docker compose exec app sh -c "pnpm add [package]"

# 运行 lint
docker compose exec app sh -c "pnpm lint"

# 生成类型
docker compose exec app sh -c "pnpm generate:types"
```

---

## 环境变量

配置在 `.env` 文件中：

```env
DATABASE_URI=mongodb://mongo:27017/iboran
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

> [!NOTE]
> 容器内使用 `mongo` 作为主机名（Docker 网络）；宿主机访问使用 `localhost:27018`。

---

## 常用开发地址

| 功能 | 地址 |
|------|------|
| 首页 | http://localhost:3000 |
| 解决方案列表 | http://localhost:3000/solution |
| 营收云页面 | http://localhost:3000/solution/revenue-cloud |
| Payload 后台 | http://localhost:3000/admin |
| GraphQL Playground | http://localhost:3000/api/graphql-playground |

---

## 工作流中的端口使用

在所有工作流和文档中，使用以下标准：

```bash
# ✅ 正确
open http://localhost:3000/solution/[slug]

# ❌ 错误
open http://localhost:3001/solution/[slug]
```
