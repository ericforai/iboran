#!/bin/bash
# Boran.com 一键部署脚本
# 本地运行此脚本即可自动更新服务器

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# ================================
# 配置
# ================================
SERVER="root@47.111.2.171"

echo -e "${YELLOW}===================================${NC}"
echo -e "${YELLOW}  Boran.com 一键部署${NC}"
echo -e "${YELLOW}===================================${NC}"

# ================================
# 1. 本地构建
# ================================
echo ""
echo -e "${GREEN}>>> [1/6] 本地构建...${NC}"
pnpm build

# ================================
# 2. 导出数据库
# ================================
echo ""
echo -e "${GREEN}>>> [2/6] 导出数据库...${NC}"
docker exec iboran-mongo-1 mongodump --db=iboran --archive=/tmp/iboran_data.gz
docker cp iboran-mongo-1:/tmp/iboran_data.gz ./iboran_data.gz

# ================================
# 3. 打包
# ================================
echo ""
echo -e "${GREEN}>>> [3/6] 打包文件...${NC}"
tar -czf /tmp/iboran-deploy.tar.gz .next/standalone .next/static public iboran_data.gz
ls -lh /tmp/iboran-deploy.tar.gz | awk '{print "大小: " $5}'

# ================================
# 4. 上传
# ================================
echo ""
echo -e "${GREEN}>>> [4/6] 上传到服务器...${NC}"
scp /tmp/iboran-deploy.tar.gz $SERVER:~/deploy.tar.gz

# ================================
# 5. 服务器部署
# ================================
echo ""
echo -e "${GREEN}>>> [5/6] 服务器部署...${NC}"

ssh $SERVER << 'REMOTE_EOF'
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

# 修正 DATABASE_URI（自动）
sleep 3
docker exec iboran-app sh -c 'sed -i "s/DATABASE_URI=mongodb:\/\/localhost:27018\//DATABASE_URI=mongodb:\/\/mongo:27017\//" .env'
docker restart iboran-app

# 清理
rm ~/deploy.tar.gz

echo "服务器部署完成"
REMOTE_EOF

# ================================
# 6. 验证
# ================================
echo ""
echo -e "${GREEN}>>> [6/6] 验证部署...${NC}"
sleep 5

HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/)
POSTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/posts)

echo "首页: $HOME_STATUS"
echo "Posts: $POSTS_STATUS"

if [ "$HOME_STATUS" = "200" ] && [ "$POSTS_STATUS" = "200" ]; then
    echo ""
    echo -e "${GREEN}===================================${NC}"
    echo -e "${GREEN}  部署成功！${NC}"
    echo -e "${GREEN}===================================${NC}"
else
    echo ""
    echo -e "${YELLOW}警告: 部署可能有问题，请检查${NC}"
fi

# 清理本地文件
rm -f iboran_data.gz /tmp/iboran-deploy.tar.gz
