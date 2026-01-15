#!/bin/bash
set -e

echo "==================================="
echo "  服务器端部署脚本"
echo "==================================="

# ============================================
# 安装 Docker
# ============================================
if ! command -v docker &> /dev/null; then
    echo ">>> 安装 Docker..."
    apt-get update
    apt-get install -y ca-certificates curl gnupg

    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg

    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      tee /etc/apt/sources.list.d/docker.list > /dev/null

    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    systemctl enable docker
    systemctl start docker
    echo "Docker 安装完成"
else
    echo "Docker 已安装: $(docker --version)"
fi

# ============================================
# 创建项目目录
# ============================================
mkdir -p /opt/iboran
cd /opt/iboran

# ============================================
# 导入应用镜像
# ============================================
echo ">>> 导入应用镜像..."
docker load -i /tmp/iboran-app.tar

# ============================================
# 启动 MongoDB
# ============================================
echo ">>> 启动 MongoDB..."
docker run -d \
  --name iboran-mongo \
  --restart always \
  -p 27017:27017 \
  -v mongo_data:/data/db \
  mongo:7

echo "等待 MongoDB 启动..."
sleep 15

# 检查 MongoDB 是否就绪
until docker exec iboran-mongo mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; do
    echo "等待 MongoDB..."
    sleep 3
done
echo "MongoDB 已就绪"

# ============================================
# 导入数据
# ============================================
echo ">>> 导入数据库数据..."
docker cp /tmp/iboran_data.gz iboran-mongo:/iboran_data.gz
docker exec iboran-mongo mongorestore --db=iboran --archive=/iboran_data.gz
docker exec iboran-mongo rm /iboran_data.gz
echo "数据导入完成"

# ============================================
# 启动应用
# ============================================
echo ">>> 启动应用..."

# 生成 PAYLOAD_SECRET
PAYLOAD_SECRET=$(openssl rand -base64 32 2>/dev/null || echo "change-this-secret-in-production")

docker run -d \
  --name iboran-app \
  --restart always \
  -p 3000:3000 \
  -e MONGODB_URL=mongodb://localhost:27017/iboran \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  -e PAYLOAD_SECRET="$PAYLOAD_SECRET" \
  iboran-app:latest

echo "等待应用启动..."
sleep 10

# ============================================
# 安装配置 Nginx
# ============================================
echo ">>> 安装配置 Nginx..."

if ! command -v nginx &> /dev/null; then
    apt-get install -y nginx
fi

cat > /etc/nginx/sites-available/iboran << 'NGINX_CONFIG'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX_CONFIG

ln -sf /etc/nginx/sites-available/iboran /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t && systemctl restart nginx
systemctl enable nginx

# ============================================
# 配置防火墙（UFW）
# ============================================
if command -v ufw &> /dev/null; then
    echo ">>> 配置防火墙..."
    ufw allow 22/tcp
    ufw allow 80/tcp
    ufw --force enable
fi

# ============================================
# 完成
# ============================================
echo ""
echo "==================================="
echo "  部署完成！"
echo "==================================="

# 获取服务器 IP
SERVER_IP=$(curl -s ifconfig.me 2>/dev/null || curl -s icanhazip.com 2>/dev/null || echo "你的服务器IP")

echo ""
echo "访问地址: http://$SERVER_IP"
echo ""
echo "管理命令:"
echo "  查看日志: docker logs -f iboran-app"
echo "  重启应用: docker restart iboran-app"
echo "  查看状态: docker ps"
echo ""

