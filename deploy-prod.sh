#!/bin/bash
# Emergency/manual fallback deploy. Normal production deploys should use
# GitHub Actions: push to main and let "Deploy to Aliyun ECS (Docker)" run.
# Usage: ./deploy-prod.sh

set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SERVER="${SERVER:-root@47.111.2.171}"
APP_DIR="${APP_DIR:-/opt/iboran}"
IMAGE_NAME="${IMAGE_NAME:-iboran-app}"
SITE_URL="${SITE_URL:-https://www.iboran.com}"

echo -e "${YELLOW}===================================${NC}"
echo -e "${YELLOW}  Boran production deploy${NC}"
echo -e "${YELLOW}===================================${NC}"

echo -e "${GREEN}>>> [1/4] Local TypeScript check${NC}"
if command -v pnpm >/dev/null 2>&1; then
  pnpm exec tsc --noEmit --pretty false
else
  echo "pnpm not found locally; skipping local TypeScript check"
fi

echo -e "${GREEN}>>> [2/4] Sync source to server${NC}"
rsync -az --delete \
  --exclude='.git' \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.pnpm-store' \
  --exclude='tmp' \
  --exclude='backups' \
  --exclude='*.log' \
  --exclude='*.tar' \
  --exclude='*.tar.gz' \
  --exclude='*.zip' \
  ./ "$SERVER:$APP_DIR/"

echo -e "${GREEN}>>> [3/4] Build image on server and restart app${NC}"
ssh "$SERVER" <<ENDSSH
set -euo pipefail
cd "$APP_DIR"

test -f .env
test -f Dockerfile
test -f docker-compose.prod.yml

# Build on Aliyun/Linux. --network host is required because Next/Payload
# collects static page data from MongoDB at localhost:27018 during build.
docker build --network host \
  --build-arg NEXT_PUBLIC_SERVER_URL="$SITE_URL" \
  -t "$IMAGE_NAME:latest" \
  .

docker compose -f docker-compose.prod.yml up -d --no-build app
sleep 8
docker ps --filter "name=$IMAGE_NAME" --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"
ENDSSH

echo -e "${GREEN}>>> [4/4] Verify production${NC}"
HOME_STATUS=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 30 "$SITE_URL/")
POSTS_STATUS=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 30 "$SITE_URL/posts")
LOGO_STATUS=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 30 "$SITE_URL/assets/images/boran-logo.png")
STAFF_AI_STATUS=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 30 "$SITE_URL/products/staff-ai")

echo "Home: $HOME_STATUS"
echo "Posts: $POSTS_STATUS"
echo "Logo: $LOGO_STATUS"
echo "Staff AI: $STAFF_AI_STATUS"

if [ "$HOME_STATUS" = "200" ] && [ "$POSTS_STATUS" = "200" ] && [ "$LOGO_STATUS" = "200" ]; then
  echo -e "${GREEN}Deployment complete.${NC}"
else
  echo -e "${YELLOW}Deployment verification failed.${NC}"
  exit 1
fi
