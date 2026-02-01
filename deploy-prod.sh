#!/bin/bash
# 完整部署脚本 - 重建 Docker 镜像
# 用法: ./deploy-prod.sh

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SERVER="root@47.111.2.171"
IMAGE_NAME="iboran-app"
NEXT_PUBLIC_URL="https://www.iboran.com"

echo -e "${YELLOW}===================================${NC}"
echo -e "${YELLOW}  完整部署 (重建 Docker 镜像)${NC}"
echo -e "${YELLOW}===================================${NC}"

# 1. 确保本地 .env 正确
echo -e "${GREEN}>>> [1/5] 检查本地配置...${NC}"
if ! grep -q "NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_URL" .env; then
  echo "⚠️  .env 中的 NEXT_PUBLIC_SERVER_URL 不正确，正在修复..."
  sed -i "s|NEXT_PUBLIC_SERVER_URL=.*|NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_URL|" .env
fi
echo "✓ NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_URL"

# 2. 上传代码到服务器
echo -e "${GREEN}>>> [2/5] 上传代码到服务器...${NC}"
rsync -avz --delete \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.git' \
  ./ $SERVER:/opt/iboran/

# 3. 在服务器上构建镜像
echo -e "${GREEN}>>> [3/5] 在服务器上构建 Docker 镜像...${NC}"
ssh $SERVER << ENDSSH
cd /opt/iboran

# 设置构建参数
export NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_URL

# 构建镜像（使用 build arg）
docker build \
  --build-arg NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_URL \
  -t $IMAGE_NAME:latest \
  .

# 停止并删除旧容器
docker stop $IMAGE_NAME 2>/dev/null || true
docker rm $IMAGE_NAME 2>/dev/null || true

# 运行新容器
docker run -d \
  --name $IMAGE_NAME \
  --restart unless-stopped \
  -p 3000:3000 \
  --network iboran_default \
  -e DATABASE_URI=mongodb://172.18.0.2:27017/iboran \
  -e SMTP_PASS=sidhbegzhqolcafd \
  -e LEAD_EMAIL_TO="hzwyz@qq.com,13761778461@qq.com" \
  $IMAGE_NAME:latest

# 等待容器启动
sleep 10
ENDSSH

# 4. 验证服务
echo -e "${GREEN}>>> [4/5] 验证服务状态...${NC}"
HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/)
POSTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/posts)
SITEMAP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/sitemap.xml)

echo "首页: $HOME_STATUS"
echo "Posts: $POSTS_STATUS"
echo "Sitemap: $SITEMAP_STATUS"

# 5. 验证 sitemap 域名
echo -e "${GREEN}>>> [5/5] 验证 sitemap 域名...${NC}"
SITEMAP_CONTENT=$(curl -s http://47.111.2.171/sitemap.xml)
if echo "$SITEMAP_CONTENT" | grep -q "$NEXT_PUBLIC_URL"; then
  echo -e "${GREEN}✓ Sitemap 域名正确: $NEXT_PUBLIC_URL${NC}"
else
  echo -e "${YELLOW}⚠️  Sitemap 域名可能不正确${NC}"
  echo "$SITEMAP_CONTENT"
fi

if [ "$HOME_STATUS" = "200" ] && [ "$POSTS_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ 部署成功！${NC}"
else
    echo -e "${YELLOW}⚠️  部署可能有问题${NC}"
    exit 1
fi
