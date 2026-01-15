---
description: "安全重置 Docker 环境（自动备份）"
---

# 安全重置工作流

本工作流用于安全地重置 Docker 开发环境。**强制在重置前创建备份**，防止数据丢失。

> ⚠️ **重要**: 请使用此工作流代替直接运行 `docker compose down -v`

## 何时使用

- 遇到无法解决的构建错误
- 需要清理 `.next` 缓存
- 依赖安装出现问题
- 需要完全重建容器

## 标准重置（保留数据）

// turbo-all

### 1. 执行安全重置

```bash
cd /Users/user/iboran && pnpm db:safe-reset
```

这将：
1. 检查数据库状态
2. **自动创建备份**
3. 停止并重建容器
4. 保留数据库数据

## 核弹级重置（清除所有数据）

> ⚠️ **警告**: 仅在确实需要完全清除数据时使用

```bash
cd /Users/user/iboran && pnpm db:safe-reset --nuclear
```

这将：
1. 检查数据库状态
2. **强制创建备份**（即使失败也会中止操作）
3. 停止容器并删除 volumes
4. 清除所有缓存
5. 完全重新构建

## 恢复数据

如果需要恢复数据：

```bash
cd /Users/user/iboran && pnpm db:restore
```

## 查看备份

```bash
cd /Users/user/iboran && pnpm db:list-backups
```

## 备份位置

所有备份保存在 `./backups/` 目录，格式为：
- `iboran_backup_YYYYMMDD_HHMMSS.archive` - 手动备份
- `pre_reset_YYYYMMDD_HHMMSS.archive` - 重置前自动备份
- `pre_restore_YYYYMMDD_HHMMSS.archive` - 恢复前安全备份
