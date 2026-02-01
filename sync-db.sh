#!/bin/bash
# 数据库同步脚本 - 单独使用，不与代码部署混合
# 用法: ./sync-db.sh [local-to-remote|remote-to-local|backup]
# 默认: local-to-remote

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

SERVER="root@47.111.2.171"
LOCAL_CONTAINER="iboran-mongo-1"
REMOTE_CONTAINER="iboran-mongo-1"
ACTION=${1:-local-to-remote}

case $ACTION in
  local-to-remote)
    echo -e "${YELLOW}>>> 同步本地数据库 -> 服务器${NC}"

    # 导出本地
    echo -e "${GREEN}1. 导出本地数据...${NC}"
    docker exec $LOCAL_CONTAINER mongodump --db=iboran --archive=/tmp/iboran.dump 2>/dev/null
    docker cp $LOCAL_CONTAINER:/tmp/iboran.dump /tmp/iboran.dump

    # 上传并导入
    echo -e "${GREEN}2. 上传到服务器...${NC}"
    scp /tmp/iboran.dump $SERVER:/tmp/iboran.dump

    echo -e "${GREEN}3. 导入到服务器...${NC}"
    ssh $SERVER << EOF
# 备份服务器现有数据
docker exec $REMOTE_CONTAINER mongodump --db=iboran --archive=/tmp/iboran-backup.dump.gz --gzip 2>/dev/null

# 导入新数据
docker cp /tmp/iboran.dump $REMOTE_CONTAINER:/tmp/iboran.dump
docker exec $REMOTE_CONTAINER mongosh iboran --eval 'db.posts.drop()' --quiet 2>/dev/null || true
docker exec $REMOTE_CONTAINER mongorestore --db=iboran --archive=/tmp/iboran.dump 2>/dev/null

# 验证
echo "服务器文章数: \$(docker exec $REMOTE_CONTAINER mongosh iboran --eval 'db.posts.countDocuments()' --quiet)"

# 清理
docker exec $REMOTE_CONTAINER rm /tmp/iboran.dump 2>/dev/null
rm /tmp/iboran.dump
EOF

    rm -f /tmp/iboran.dump
    echo -e "${GREEN}✅ 同步完成${NC}"
    ;;

  remote-to-local)
    echo -e "${YELLOW}>>> 同步服务器数据库 -> 本地${NC}"

    ssh $SERVER << EOF
docker exec $REMOTE_CONTAINER mongodump --db=iboran --archive=/tmp/iboran.dump 2>/dev/null
EOF

    scp $SERVER:/tmp/iboran.dump /tmp/iboran.dump

    # 备份本地
    docker exec $LOCAL_CONTAINER mongodump --db=iboran --archive=/tmp/iboran-backup.dump.gz --gzip 2>/dev/null

    # 导入
    docker cp /tmp/iboran.dump $LOCAL_CONTAINER:/tmp/iboran.dump
    docker exec $LOCAL_CONTAINER mongosh iboran --eval 'db.posts.drop()' --quiet 2>/dev/null || true
    docker exec $LOCAL_CONTAINER mongorestore --db=iboran --archive=/tmp/iboran.dump 2>/dev/null

    echo "本地文章数: $(docker exec $LOCAL_CONTAINER mongosh iboran --eval 'db.posts.countDocuments()' --quiet)"

    rm -f /tmp/iboran.dump
    ssh $SERVER "rm -f /tmp/iboran.dump"
    echo -e "${GREEN}✅ 同步完成${NC}"
    ;;

  backup)
    echo -e "${YELLOW}>>> 备份服务器数据库${NC}"
    DATE=$(date +%Y%m%d_%H%M%S)
    ssh $SERVER "docker exec $REMOTE_CONTAINER mongodump --db=iboran --archive=/tmp/backup_\${DATE}.dump.gz --gzip 2>/dev/null && docker cp $REMOTE_CONTAINER:/tmp/backup_\${DATE}.dump.gz ~/backup_\${DATE}.dump.gz && echo '备份: ~/backup_\${DATE}.dump.gz'"
    ;;

  *)
    echo -e "${RED}用法: $0 [local-to-remote|remote-to-local|backup]${NC}"
    exit 1
    ;;
esac
