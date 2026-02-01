#!/bin/bash
# 快速增量部署脚本 - 只更新代码，不涉及数据库
# 用法: ./deploy-fast.sh

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SERVER="root@47.111.2.171"

echo -e "${YELLOW}===================================${NC}"
echo -e "${YELLOW}  快速增量部署 (仅代码)${NC}"
echo -e "${YELLOW}===================================${NC}"

# 1. 本地构建 (仅Next.js，不涉及数据库)
echo -e "${GREEN}>>> [1/4] 本地构建...${NC}"
pnpm build 2>&1 | grep -E "Build|Compiled|route|○|●|ƒ" || true

# 2. 只传输变更的文件
echo -e "${GREEN}>>> [2/4] 上传变更文件...${NC}"
rsync -avz --delete \
  --exclude='.pnpm-store' \
  --exclude='node_modules' \
  .next/standalone/ \
  $SERVER:/opt/iboran/.next/standalone/

rsync -avz --delete \
  .next/static/ \
  $SERVER:/opt/iboran/.next/static/

# 只传输public目录中的sitemap等静态文件
rsync -avz --include='sitemap*.xml' --include='robots*.txt' --exclude='*' \
  public/ \
  $SERVER:/opt/iboran/public/

# 3. 重启容器并确保文件正确
echo -e "${GREEN}>>> [3/4] 重启容器...${NC}"
ssh $SERVER << 'EOF'
# Copy .env into container
docker cp /opt/iboran/.env iboran-app:/app/.env

# Copy public files (sitemap, robots) into container
docker cp /opt/iboran/public/sitemap.xml iboran-app:/app/public/
docker cp /opt/iboran/public/sitemap-0.xml iboran-app:/app/public/

# Restart container
docker restart iboran-app
sleep 5
EOF

# 4. 验证
echo -e "${GREEN}>>> [4/4] 验证...${NC}"
HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.iboran.com/)
POSTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.iboran.com/posts)

echo "首页: $HOME_STATUS"
echo "Posts: $POSTS_STATUS"

# 验证 sitemap 域名
SITEMAP_URL=$(curl -s https://www.iboran.com/sitemap-0.xml | grep -o '<loc>[^<]*</loc>' | head -1)
if echo "$SITEMAP_URL" | grep -q "www.iboran.com"; then
    echo "Sitemap: ✅ $SITEMAP_URL"
else
    echo "Sitemap: ❌ $SITEMAP_URL (域名错误!)"
fi

if [ "$HOME_STATUS" = "200" ] && [ "$POSTS_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ 部署成功！${NC}"
else
    echo -e "${YELLOW}⚠️  部署可能有问题${NC}"
    exit 1
fi
