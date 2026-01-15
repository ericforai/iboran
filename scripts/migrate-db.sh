#!/bin/bash

# 泊冉软件 - 数据库迁移助手
# 用法: ./migrate-db.sh "mongodb://user:pass@host:port/dbname"

SOURCE_URI=$1
TARGET_CONTAINER="iboran-mongo-1"
BACKUP_DIR="/data/db/cloud_dump"

if [ -z "$SOURCE_URI" ]; then
    echo "❌ 错误: 请提供云数据库的连接字符串 (URI)"
    echo "用法: ./migrate-db.sh \"mongodb://user:pass@host:port/dbname\""
    exit 1
fi

echo "🚀 开始从云端导出数据..."
docker exec -it $TARGET_CONTAINER mongodump --uri="$SOURCE_URI" --out=$BACKUP_DIR

if [ $? -eq 0 ]; then
    echo "✅ 数据导出成功，准备还原到本地 Docker..."
    echo "⚠️  注意: 这将清空本地目前的数据库并替换为云端数据。"
    
    docker exec -it $TARGET_CONTAINER mongorestore --dir=$BACKUP_DIR --drop
    
    if [ $? -eq 0 ]; then
        echo "🎉 搬家成功！请重启开发环境: pnpm dev"
    else
        echo "❌ 还原失败。"
    fi
else
    echo "❌ 导出失败，请检查您的 URI 或网络连接。"
fi
