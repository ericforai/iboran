#!/bin/bash
# Boran.com 一键迁移到阿里云
# 本地运行此脚本

set -e

echo "==================================="
echo "  Boran.com 一键迁移脚本"
echo "==================================="

# ============================================
# 配置区域
# ============================================
SERVER_IP="${SERVER_IP:-}"
SERVER_USER="${SERVER_USER:-root}"

# 检查配置
if [ -z "$SERVER_IP" ]; then
    echo "错误: 请设置 SERVER_IP 环境变量"
    echo "使用方式: SERVER_IP=你的服务器IP ./migrate.sh"
    exit 1
fi

echo "目标服务器: $SERVER_USER@$SERVER_IP"
echo ""

# ============================================
# 第一步：检查本地容器
# ============================================
echo ">>> [1/5] 检查本地容器..."

if ! docker ps | grep -q iboran; then
    echo "错误: iboran 容器未运行，请先启动: docker compose up -d"
    exit 1
fi

# 获取应用容器信息
APP_CONTAINER=$(docker ps --filter name=iboran-app --format "{{.Names}}" | head -1)
MONGO_CONTAINER=$(docker ps --filter name=iboran-mongo --format "{{.Names}}" | head -1)

echo "应用容器: $APP_CONTAINER"
echo "MongoDB容器: $MONGO_CONTAINER"

# ============================================
# 第二步：导出应用镜像
# ============================================
echo ""
echo ">>> [2/5] 导出应用 Docker 镜像..."

APP_IMAGE=$(docker inspect $APP_CONTAINER --format='{{.Image}}')
echo "应用镜像: $APP_IMAGE"

# 标记镜像为统一名称
docker tag $APP_IMAGE iboran-app:latest 2>/dev/null || true

echo "导出镜像到 iboran-app.tar..."
docker save iboran-app:latest -o iboran-app.tar

# ============================================
# 第三步：导出 MongoDB 数据
# ============================================
echo ""
echo ">>> [3/5] 导出 MongoDB 数据..."

echo "从 $MONGO_CONTAINER 导出数据库..."
docker exec $MONGO_CONTAINER mongodump --db=iboran --archive=/tmp/iboran_data.gz
docker cp $MONGO_CONTAINER:/tmp/iboran_data.gz ./iboran_data.gz

# 检查文件
if [ ! -f iboran_data.gz ]; then
    echo "错误: 数据导出失败"
    exit 1
fi

echo "数据文件大小: $(ls -lh iboran_data.gz | awk '{print $5}')"

# ============================================
# 第四步：生成服务器部署脚本
# ============================================
echo ""
echo ">>> [4/5] 生成服务器部署脚本..."

cat > server-import.sh << 'SERVER_SCRIPT_EOF'
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

SERVER_SCRIPT_EOF

chmod +x server-import.sh

# ============================================
# 第五步：打包上传到服务器
# ============================================
echo ""
echo ">>> [5/5] 打包并上传到服务器..."

echo "打包文件..."
tar -czf migrate-package.tar.gz \
    iboran-app.tar \
    iboran_data.gz \
    server-import.sh

PACKAGE_SIZE=$(ls -lh migrate-package.tar.gz | awk '{print $5}')
echo "打包完成: migrate-package.tar.gz ($PACKAGE_SIZE)"

# 上传
echo "上传到服务器 $SERVER_USER@$SERVER_IP..."
scp migrate-package.tar.gz $SERVER_USER@$SERVER_IP:/tmp/

# 在服务器上执行
echo ""
echo "在服务器上执行部署..."
echo "-----------------------------------"

ssh $SERVER_USER@$SERVER_IP << 'SSH_EOF'
set -e

echo "解压部署包..."
cd /tmp
tar -xzf migrate-package.tar.gz

echo "执行部署脚本..."
bash /tmp/server-import.sh

echo "清理临时文件..."
rm -f /tmp/migrate-package.tar.gz
rm -f /tmp/iboran-app.tar
rm -f /tmp/iboran_data.gz
rm -f /tmp/server-import.sh

echo "服务器端部署完成"
SSH_EOF

echo "-----------------------------------"
echo ""
echo "==================================="
echo "  迁移完成！"
echo "==================================="
echo ""
echo "清理本地临时文件..."
rm -f iboran-app.tar iboran_data.gz server-import.sh migrate-package.tar.gz

echo "完成！"
