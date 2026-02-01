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

# 3. 重启容器（不重建镜像）
echo -e "${GREEN}>>> [3/4] 重启容器...${NC}"
ssh $SERVER << 'EOF'
docker restart iboran-app-1
sleep 5
EOF

# 4. 验证
echo -e "${GREEN}>>> [4/4] 验证...${NC}"
HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/)
POSTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://47.111.2.171/posts)

echo "首页: $HOME_STATUS"
echo "Posts: $POSTS_STATUS"

if [ "$HOME_STATUS" = "200" ] && [ "$POSTS_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ 部署成功！${NC}"
else
    echo -e "${YELLOW}⚠️  部署可能有问题${NC}"
    exit 1
fi
