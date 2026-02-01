#!/bin/bash
#
# Server Initialization Script
#
# Run this ONCE on your Alibaba Cloud ECS server to set up:
# - Node.js + pnpm
# - PM2 process manager
# - Clone the repository
# - Set up proper directory structure
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/your-username/iboran/main/scripts/init-server.sh | bash
# Or download and run:
#   bash init-server.sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
REPO_URL="https://github.com/your-username/iboran.git"  # TODO: Update this
APP_DIR="/home/iboran"

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}  Boran Server Initialization${NC}"
echo -e "${YELLOW}========================================${NC}"

# Detect OS
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    echo -e "${RED}Cannot detect OS${NC}"
    exit 1
fi

echo -e "\n${GREEN}Detected OS: $OS${NC}"

# 1. Install Node.js
echo -e "\n${GREEN}[1/5]${NC} Installing Node.js..."
if command -v node &> /dev/null; then
    echo "Node.js already installed: $(node -v)"
else
    case $OS in
        alpine)
            apk add --no-cache nodejs npm
            ;;
        ubuntu|debian)
            curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
            apt-get install -y nodejs
            ;;
        centos|rhel)
            curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
            yum install -y nodejs
            ;;
        *)
            echo -e "${RED}Unsupported OS, please install Node.js manually${NC}"
            exit 1
            ;;
    esac
fi

# 2. Install pnpm
echo -e "\n${GREEN}[2/5]${NC} Installing pnpm..."
corepack enable
corepack prepare pnpm@latest --activate

# 3. Install PM2
echo -e "\n${GREEN}[3/5]${NC} Installing PM2..."
npm install -g pm2
pm2 install pm2-logrotate

# 4. Clone repository
echo -e "\n${GREEN}[4/5]${NC} Cloning repository..."
if [ -d "$APP_DIR" ]; then
    echo "Directory exists, updating..."
    cd "$APP_DIR"
    git pull
else
    echo "Cloning fresh copy..."
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# 5. Install dependencies
echo -e "\n${GREEN}[5/5]${NC} Installing dependencies..."
mkdir -p logs
pnpm install

# 6. Start MongoDB (Docker)
if command -v docker &> /dev/null; then
    echo -e "\n${GREEN}[Docker]${NC} Starting MongoDB..."
    docker compose up -d mongo
else
    echo -e "\n${YELLOW}Warning: Docker not found. Please install Docker first.${NC}"
    echo -e "Or use external MongoDB service."
fi

# Setup PM2 startup script
pm2 startup
echo -e "\n${YELLOW}Run the command above to enable PM2 auto-start on boot${NC}"

# Done
echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}  Initialization complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "\nNext steps:"
echo -e "  1. Copy your ${YELLOW}.env${NC} file to ${APP_DIR}"
echo -e "  2. Run: ${YELLOW}cd $APP_DIR && pnpm build${NC}"
echo -e "  3. Run: ${YELLOW}pm2 start ecosystem.config.js${NC}"
echo -e "  4. Run: ${YELLOW}pm2 save${NC}"
echo -e "\nFor future deployments, run: ${YELLOW}./deploy.sh${NC}\n"
