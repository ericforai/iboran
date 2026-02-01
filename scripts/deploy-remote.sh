#!/bin/bash
#
# Local Deployment Script
#
# Run this from your LOCAL machine to deploy to server
#
# Usage: ./scripts/deploy-remote.sh

# Server configuration - update these
SERVER_USER="root"  # TODO: Update this
SERVER_HOST="your-server-ip"  # TODO: Update this
APP_DIR="/home/iboran"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}  Deploying to server...${NC}"
echo -e "${YELLOW}========================================${NC}"
echo ""
echo "Server: $SERVER_USER@$SERVER_HOST"
echo ""

# First, push to git
echo -e "${GREEN}[1/2]${NC} Pushing to git..."
git push

# Then, deploy on server
echo -e "${GREEN}[2/2]${NC} Deploying on server..."
ssh "$SERVER_USER@$SERVER_HOST" "cd $APP_DIR && ./deploy.sh"

echo -e "\n${GREEN}Done!${NC}"
