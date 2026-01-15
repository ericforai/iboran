#!/bin/bash
# =============================================================================
# MongoDB Backup Script - Enhanced Version
# =============================================================================
# Features:
# - Automatic backup with timestamp
# - Retention policy (auto-cleanup old backups)
# - Backup verification
# - Statistics output
#
# Usage:
#   ./backup-local-db.sh           # Normal backup
#   ./backup-local-db.sh --verify  # Backup and verify
#   ./backup-local-db.sh --list    # List existing backups
# =============================================================================

set -e

# Configuration
CONTAINER_NAME="iboran-mongo-1"
DB_NAME="iboran"
BACKUP_DIR="./backups"
RETENTION_DAYS=7
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILENAME="iboran_backup_${TIMESTAMP}.archive"
CONTAINER_BACKUP_PATH="/tmp/${BACKUP_FILENAME}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  MongoDB Backup Tool - iboran${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

list_backups() {
    echo -e "${YELLOW}📂 Available Backups:${NC}"
    if [ -d "$BACKUP_DIR" ] && [ "$(ls -A $BACKUP_DIR 2>/dev/null)" ]; then
        ls -lh "$BACKUP_DIR"/*.archive 2>/dev/null | awk '{print "  " $9 " (" $5 ")"}'
        echo ""
        BACKUP_COUNT=$(ls -1 "$BACKUP_DIR"/*.archive 2>/dev/null | wc -l | tr -d ' ')
        TOTAL_SIZE=$(du -sh "$BACKUP_DIR" 2>/dev/null | cut -f1)
        echo -e "  Total: ${GREEN}${BACKUP_COUNT}${NC} backups, ${GREEN}${TOTAL_SIZE}${NC}"
    else
        echo -e "  ${YELLOW}No backups found${NC}"
    fi
}

cleanup_old_backups() {
    echo -e "${YELLOW}🧹 Cleaning up backups older than ${RETENTION_DAYS} days...${NC}"
    if [ -d "$BACKUP_DIR" ]; then
        DELETED_COUNT=$(find "$BACKUP_DIR" -name "*.archive" -type f -mtime +${RETENTION_DAYS} 2>/dev/null | wc -l | tr -d ' ')
        find "$BACKUP_DIR" -name "*.archive" -type f -mtime +${RETENTION_DAYS} -delete 2>/dev/null
        if [ "$DELETED_COUNT" -gt 0 ]; then
            echo -e "  ${GREEN}✓ Deleted ${DELETED_COUNT} old backup(s)${NC}"
        else
            echo -e "  ${GREEN}✓ No old backups to delete${NC}"
        fi
    fi
}

check_container() {
    if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        echo -e "${RED}❌ Error: Container '${CONTAINER_NAME}' is not running${NC}"
        echo -e "   Run: ${YELLOW}docker compose up -d${NC}"
        exit 1
    fi
}

get_db_stats() {
    echo -e "${YELLOW}📊 Database Statistics:${NC}"
    STATS=$(docker exec "$CONTAINER_NAME" mongosh "$DB_NAME" --quiet --eval "
        const stats = db.stats();
        const collections = db.getCollectionNames();
        let postCount = 0;
        try { postCount = db.posts.countDocuments(); } catch(e) {}
        print('  Collections: ' + collections.length);
        print('  Posts: ' + postCount);
        print('  Data Size: ' + (stats.dataSize / 1024 / 1024).toFixed(2) + ' MB');
    " 2>/dev/null || echo "  Unable to get stats")
    echo "$STATS"
}

verify_backup() {
    local backup_file="$1"
    echo -e "${YELLOW}🔍 Verifying backup...${NC}"
    
    # Check file exists and has content
    if [ ! -f "$backup_file" ]; then
        echo -e "  ${RED}❌ Backup file not found!${NC}"
        return 1
    fi
    
    FILE_SIZE=$(stat -f%z "$backup_file" 2>/dev/null || stat -c%s "$backup_file" 2>/dev/null)
    if [ "$FILE_SIZE" -lt 100 ]; then
        echo -e "  ${RED}❌ Backup file too small (${FILE_SIZE} bytes) - likely corrupted${NC}"
        return 1
    fi
    
    # Quick content check
    if file "$backup_file" | grep -q "data"; then
        echo -e "  ${GREEN}✓ Backup file format valid${NC}"
        echo -e "  ${GREEN}✓ File size: $(ls -lh "$backup_file" | awk '{print $5}')${NC}"
        return 0
    else
        echo -e "  ${RED}❌ Invalid backup format${NC}"
        return 1
    fi
}

do_backup() {
    # Ensure backup directory exists
    mkdir -p "$BACKUP_DIR"
    
    echo -e "${YELLOW}🚀 Starting backup...${NC}"
    echo -e "  Database: ${GREEN}${DB_NAME}${NC}"
    echo -e "  Container: ${GREEN}${CONTAINER_NAME}${NC}"
    echo ""
    
    # Get stats before backup
    get_db_stats
    echo ""
    
    # 1. Run mongodump inside container
    echo -e "${YELLOW}📦 Dumping database...${NC}"
    if docker exec "$CONTAINER_NAME" mongodump --db "$DB_NAME" --archive="$CONTAINER_BACKUP_PATH" 2>/dev/null; then
        echo -e "  ${GREEN}✓ Dump successful${NC}"
    else
        echo -e "  ${RED}❌ Dump failed!${NC}"
        exit 1
    fi
    
    # 2. Copy backup from container to host
    echo -e "${YELLOW}📥 Copying to host...${NC}"
    if docker cp "${CONTAINER_NAME}:${CONTAINER_BACKUP_PATH}" "${BACKUP_DIR}/${BACKUP_FILENAME}"; then
        echo -e "  ${GREEN}✓ Copy successful${NC}"
    else
        echo -e "  ${RED}❌ Copy failed!${NC}"
        exit 1
    fi
    
    # 3. Cleanup container
    docker exec "$CONTAINER_NAME" rm "$CONTAINER_BACKUP_PATH" 2>/dev/null || true
    
    # 4. Verify if requested
    if [ "$VERIFY_BACKUP" = true ]; then
        echo ""
        verify_backup "${BACKUP_DIR}/${BACKUP_FILENAME}"
    fi
    
    # 5. Cleanup old backups
    echo ""
    cleanup_old_backups
    
    # 6. Summary
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}🎉 Backup completed successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "  📁 Location: ${BLUE}${BACKUP_DIR}/${BACKUP_FILENAME}${NC}"
    echo -e "  📊 Size: $(ls -lh "${BACKUP_DIR}/${BACKUP_FILENAME}" | awk '{print $5}')"
    echo ""
}

# Parse arguments
VERIFY_BACKUP=false
for arg in "$@"; do
    case $arg in
        --verify)
            VERIFY_BACKUP=true
            ;;
        --list)
            print_header
            list_backups
            exit 0
            ;;
        --help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --verify    Verify backup after creation"
            echo "  --list      List existing backups"
            echo "  --help      Show this help message"
            exit 0
            ;;
    esac
done

# Main
print_header
check_container
do_backup
