#!/bin/bash
# =============================================================================
# MongoDB Restore Script
# =============================================================================
# Features:
# - List available backups
# - Interactive backup selection
# - Pre-restore safety backup
# - Restore verification
#
# Usage:
#   ./restore-local-db.sh                    # Interactive mode
#   ./restore-local-db.sh --list             # List backups only
#   ./restore-local-db.sh --file <filename>  # Restore specific file
#   ./restore-local-db.sh --latest           # Restore latest backup
# =============================================================================

set -e

# Configuration
CONTAINER_NAME="iboran-mongo-1"
DB_NAME="iboran"
BACKUP_DIR="./backups"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  MongoDB Restore Tool - iboran${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

check_container() {
    if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        echo -e "${RED}❌ Error: Container '${CONTAINER_NAME}' is not running${NC}"
        echo -e "   Run: ${YELLOW}docker compose up -d${NC}"
        exit 1
    fi
}

list_backups() {
    echo -e "${YELLOW}📂 Available Backups:${NC}"
    echo ""
    if [ -d "$BACKUP_DIR" ] && [ "$(ls -A $BACKUP_DIR/*.archive 2>/dev/null)" ]; then
        local i=1
        for backup in $(ls -t "$BACKUP_DIR"/*.archive 2>/dev/null); do
            local filename=$(basename "$backup")
            local size=$(ls -lh "$backup" | awk '{print $5}')
            local date=$(echo "$filename" | sed 's/iboran_backup_\([0-9]*\)_\([0-9]*\).archive/\1/')
            local time=$(echo "$filename" | sed 's/iboran_backup_\([0-9]*\)_\([0-9]*\).archive/\2/')
            
            # Format date nicely
            local formatted_date="${date:0:4}-${date:4:2}-${date:6:2}"
            local formatted_time="${time:0:2}:${time:2:2}:${time:4:2}"
            
            echo -e "  ${CYAN}[$i]${NC} $filename"
            echo -e "      📅 ${formatted_date} ${formatted_time}  📊 ${size}"
            ((i++))
        done
        echo ""
        return 0
    else
        echo -e "  ${YELLOW}No backups found in ${BACKUP_DIR}${NC}"
        return 1
    fi
}

get_backup_files() {
    ls -t "$BACKUP_DIR"/*.archive 2>/dev/null
}

create_pre_restore_backup() {
    echo -e "${YELLOW}🔒 Creating safety backup before restore...${NC}"
    
    local SAFETY_FILENAME="pre_restore_$(date +%Y%m%d_%H%M%S).archive"
    local CONTAINER_PATH="/tmp/${SAFETY_FILENAME}"
    
    if docker exec "$CONTAINER_NAME" mongodump --db "$DB_NAME" --archive="$CONTAINER_PATH" 2>/dev/null; then
        docker cp "${CONTAINER_NAME}:${CONTAINER_PATH}" "${BACKUP_DIR}/${SAFETY_FILENAME}"
        docker exec "$CONTAINER_NAME" rm "$CONTAINER_PATH" 2>/dev/null || true
        echo -e "  ${GREEN}✓ Safety backup: ${BACKUP_DIR}/${SAFETY_FILENAME}${NC}"
    else
        echo -e "  ${YELLOW}⚠ Could not create safety backup (database may be empty)${NC}"
    fi
}

do_restore() {
    local backup_file="$1"
    
    if [ ! -f "$backup_file" ]; then
        echo -e "${RED}❌ Backup file not found: $backup_file${NC}"
        exit 1
    fi
    
    local filename=$(basename "$backup_file")
    echo -e "${YELLOW}🔄 Restoring from: ${CYAN}${filename}${NC}"
    echo ""
    
    # Copy backup to container
    echo -e "${YELLOW}📤 Copying backup to container...${NC}"
    docker cp "$backup_file" "${CONTAINER_NAME}:/tmp/restore.archive"
    
    # Restore
    echo -e "${YELLOW}📥 Restoring database...${NC}"
    if docker exec "$CONTAINER_NAME" mongorestore --archive=/tmp/restore.archive --drop 2>/dev/null; then
        echo -e "  ${GREEN}✓ Restore successful${NC}"
    else
        echo -e "  ${RED}❌ Restore failed!${NC}"
        docker exec "$CONTAINER_NAME" rm /tmp/restore.archive 2>/dev/null || true
        exit 1
    fi
    
    # Cleanup
    docker exec "$CONTAINER_NAME" rm /tmp/restore.archive 2>/dev/null || true
    
    # Verify
    echo ""
    echo -e "${YELLOW}📊 Verifying restore:${NC}"
    docker exec "$CONTAINER_NAME" mongosh "$DB_NAME" --quiet --eval "
        const collections = db.getCollectionNames();
        let postCount = 0;
        try { postCount = db.posts.countDocuments(); } catch(e) {}
        print('  Collections: ' + collections.length);
        print('  Posts: ' + postCount);
    " 2>/dev/null || echo "  Unable to verify"
    
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}🎉 Restore completed successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

interactive_restore() {
    if ! list_backups; then
        exit 1
    fi
    
    local backups=($(get_backup_files))
    local count=${#backups[@]}
    
    echo -e "Enter backup number to restore (1-${count}), or 'q' to quit:"
    read -p "> " selection
    
    if [ "$selection" = "q" ] || [ "$selection" = "Q" ]; then
        echo "Cancelled."
        exit 0
    fi
    
    if ! [[ "$selection" =~ ^[0-9]+$ ]] || [ "$selection" -lt 1 ] || [ "$selection" -gt "$count" ]; then
        echo -e "${RED}Invalid selection${NC}"
        exit 1
    fi
    
    local selected_backup="${backups[$((selection-1))]}"
    
    echo ""
    echo -e "${YELLOW}⚠️  WARNING: This will REPLACE all current data!${NC}"
    echo -e "Selected: ${CYAN}$(basename "$selected_backup")${NC}"
    echo ""
    read -p "Are you sure? (yes/no): " confirm
    
    if [ "$confirm" != "yes" ]; then
        echo "Cancelled."
        exit 0
    fi
    
    echo ""
    create_pre_restore_backup
    echo ""
    do_restore "$selected_backup"
}

# Parse arguments
for arg in "$@"; do
    case $arg in
        --list)
            print_header
            list_backups
            exit 0
            ;;
        --latest)
            print_header
            check_container
            LATEST=$(ls -t "$BACKUP_DIR"/*.archive 2>/dev/null | head -1)
            if [ -z "$LATEST" ]; then
                echo -e "${RED}No backups found${NC}"
                exit 1
            fi
            create_pre_restore_backup
            echo ""
            do_restore "$LATEST"
            exit 0
            ;;
        --file)
            RESTORE_FILE="$2"
            shift
            ;;
        --help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --list           List available backups"
            echo "  --latest         Restore the latest backup"
            echo "  --file <path>    Restore specific backup file"
            echo "  --help           Show this help message"
            echo ""
            echo "Without options, runs in interactive mode."
            exit 0
            ;;
    esac
done

# Main
print_header
check_container

if [ -n "$RESTORE_FILE" ]; then
    create_pre_restore_backup
    echo ""
    do_restore "$RESTORE_FILE"
else
    interactive_restore
fi
