#!/bin/bash
#
# Production Deployment Script (PM2 Mode)
#
# Usage:
#   ssh user@server "/home/iboran/deploy.sh"
#
# Or create a local alias:
#   alias deploy="ssh user@server '/home/iboran/deploy.sh'"

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# App directory
APP_DIR="/home/iboran"
LOG_DIR="$APP_DIR/logs"

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}  Starting deployment...${NC}"
echo -e "${YELLOW}========================================${NC}"

# Navigate to app directory
cd "$APP_DIR"

# Create logs directory if not exists
mkdir -p "$LOG_DIR"

# 1. Pull latest code
echo -e "\n${GREEN}[1/5]${NC} Pulling latest code..."
git fetch origin
git reset --hard origin/main  # Use --hard to ensure clean state

# 2. Install dependencies
echo -e "\n${GREEN}[2/5]${NC} Installing dependencies..."
corepack enable
pnpm install --prod=false  # Install all dependencies (needed for build)

# 3. Build application
echo -e "\n${GREEN}[3/5]${NC} Building application..."
pnpm build

# 4. Restart PM2 process
echo -e "\n${GREEN}[4/5]${NC} Restarting application..."
if pm2 describe iboran > /dev/null 2>&1; then
  pm2 restart iboran
else
  pm2 start ecosystem.config.js
fi
pm2 save

# 5. Ensure MongoDB is running (Docker)
echo -e "\n${GREEN}[5/5]${NC} Ensuring MongoDB is running..."
docker compose up -d mongo

# Done
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}  Deployment complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "\nApp running at: ${YELLOW}http://localhost:3000${NC}"
echo -e "View logs: ${YELLOW}pm2 logs iboran${NC}"
echo -e "Monitor: ${YELLOW}pm2 monit${NC}\n"
