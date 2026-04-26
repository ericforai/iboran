#!/bin/bash
set -e

SERVER="root@47.111.2.171"
PROJECT_DIR="/Users/user/iboran"

echo ">>> 清理旧构建..."
rm -rf .next

echo ">>> 构建项目..."
pnpm build

echo ">>> 打包文件 (排除 pnpm 递归目录)..."
tar --exclude='.pnpm-store' -czf /tmp/iboran-update.tar.gz .next/standalone .next/static public

echo ">>> 上传到服务器..."
scp /tmp/iboran-update.tar.gz $SERVER:~/

echo ">>> 服务器更新..."
ssh $SERVER << 'REMOTE_EOF'
cd /opt/iboran
docker stop iboran-app || true
rm -rf .next/standalone .next/static public
tar -xzf ~/iboran-update.tar.gz
# 使用官方推荐的 Dockerfile.simple 重建
docker build -f Dockerfile.simple -t iboran-app:latest . -q
docker rm iboran-app || true
docker run -d --name iboran-app --restart always -p 3000:3000 --link iboran-mongo:mongo iboran-app:latest
rm ~/iboran-update.tar.gz
echo "服务器更新完成!"
REMOTE_EOF

echo ">>> 清理本地临时文件..."
rm /tmp/iboran-update.tar.gz

echo ">>> 部署成功!"
