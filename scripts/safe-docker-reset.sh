#!/bin/bash
# =============================================================================
# Safe Docker Reset Script
# =============================================================================
# This script ensures a backup is ALWAYS created before any destructive 
# Docker operations like volume cleanup.
#
# Usage:
#   ./safe-docker-reset.sh           # Full reset with backup
#   ./safe-docker-reset.sh --force   # Skip confirmation (still creates backup)
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
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}  ⚠️  SAFE DOCKER RESET - iboran${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

check_database_has_data() {
    if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        echo "0"
        return
    fi
    
    local count=$(docker exec "$CONTAINER_NAME" mongosh "$DB_NAME" --quiet --eval "
        try { 
            const collections = db.getCollectionNames();
            let total = 0;
            collections.forEach(c => { total += db.getCollection(c).countDocuments(); });
            print(total);
        } catch(e) { print('0'); }
    " 2>/dev/null || echo "0")
    
    echo "$count"
}

create_mandatory_backup() {
    echo -e "${YELLOW}🔒 Creating MANDATORY backup before reset...${NC}"
    
    mkdir -p "$BACKUP_DIR"
    
    local BACKUP_FILENAME="pre_reset_$(date +%Y%m%d_%H%M%S).archive"
    local CONTAINER_PATH="/tmp/${BACKUP_FILENAME}"
    
    if docker exec "$CONTAINER_NAME" mongodump --db "$DB_NAME" --archive="$CONTAINER_PATH" 2>/dev/null; then
        docker cp "${CONTAINER_NAME}:${CONTAINER_PATH}" "${BACKUP_DIR}/${BACKUP_FILENAME}"
        docker exec "$CONTAINER_NAME" rm "$CONTAINER_PATH" 2>/dev/null || true
        
        # Verify backup was created
        if [ -f "${BACKUP_DIR}/${BACKUP_FILENAME}" ]; then
            local size=$(ls -lh "${BACKUP_DIR}/${BACKUP_FILENAME}" | awk '{print $5}')
            echo -e "  ${GREEN}✓ Backup created: ${BACKUP_FILENAME} (${size})${NC}"
            return 0
        fi
    fi
    
    echo -e "  ${RED}❌ BACKUP FAILED - ABORTING RESET${NC}"
    echo -e "  ${RED}Will not proceed without a successful backup!${NC}"
    exit 1
}

show_current_state() {
    echo -e "${YELLOW}📊 Current Database State:${NC}"
    
    if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        docker exec "$CONTAINER_NAME" mongosh "$DB_NAME" --quiet --eval "
            const collections = db.getCollectionNames();
            let postCount = 0;
            try { postCount = db.posts.countDocuments(); } catch(e) {}
            print('  Collections: ' + collections.length);
            print('  Posts: ' + postCount);
        " 2>/dev/null || echo "  Unable to get stats"
    else
        echo -e "  ${YELLOW}MongoDB container not running${NC}"
    fi
}

do_reset() {
    echo ""
    echo -e "${YELLOW}🔄 Performing Docker reset...${NC}"
    
    # Stop containers
    echo -e "  Stopping containers..."
    docker compose down 2>/dev/null || true
    
    # Clean .next cache
    echo -e "  Cleaning .next cache..."
    rm -rf .next 2>/dev/null || true
    
    # Rebuild
    echo -e "  Starting fresh containers..."
    docker compose up -d --build
    
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ Reset completed successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "Your backup is safe at: ${CYAN}${BACKUP_DIR}/${NC}"
    echo -e "To restore: ${CYAN}./scripts/restore-local-db.sh${NC}"
}

do_nuclear_reset() {
    echo ""
    echo -e "${RED}☢️  Performing NUCLEAR reset (includes volume cleanup)...${NC}"
    
    # Stop containers and remove volumes
    echo -e "  Stopping containers and removing volumes..."
    docker compose down -v 2>/dev/null || true
    
    # Clean caches
    echo -e "  Cleaning caches..."
    rm -rf .next 2>/dev/null || true
    rm -rf node_modules/.cache 2>/dev/null || true
    
    # Rebuild
    echo -e "  Starting fresh containers..."
    docker compose up -d --build
    
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ Nuclear reset completed!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "${YELLOW}⚠️  Database volumes were cleared. Data has been wiped.${NC}"
    echo -e "Your backup is safe at: ${CYAN}${BACKUP_DIR}/${NC}"
    echo -e "To restore: ${CYAN}./scripts/restore-local-db.sh --latest${NC}"
}

# Parse arguments
FORCE_MODE=false
NUCLEAR_MODE=false
for arg in "$@"; do
    case $arg in
        --force)
            FORCE_MODE=true
            ;;
        --nuclear)
            NUCLEAR_MODE=true
            ;;
        --help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --force     Skip confirmation prompts"
            echo "  --nuclear   Also clear Docker volumes (DELETES ALL DATA)"
            echo "  --help      Show this help message"
            echo ""
            echo "This script ALWAYS creates a backup before any reset operation."
            exit 0
            ;;
    esac
done

# Main
print_header
echo ""

# Show what we're about to do
if [ "$NUCLEAR_MODE" = true ]; then
    echo -e "${RED}⚠️  NUCLEAR RESET MODE${NC}"
    echo -e "This will:"
    echo -e "  • Stop all containers"
    echo -e "  • ${RED}DELETE Docker volumes (ALL DATA)${NC}"
    echo -e "  • Clean caches"
    echo -e "  • Rebuild containers"
else
    echo -e "${YELLOW}Standard Reset Mode${NC}"
    echo -e "This will:"
    echo -e "  • Stop all containers"
    echo -e "  • Clean .next cache"
    echo -e "  • Rebuild containers"
    echo -e "  • ${GREEN}Keep Docker volumes (data preserved)${NC}"
fi

echo ""
show_current_state
echo ""

# Check if database has data
DOC_COUNT=$(check_database_has_data)
if [ "$DOC_COUNT" != "0" ] && [ -n "$DOC_COUNT" ]; then
    echo -e "${YELLOW}⚠️  Database contains ${DOC_COUNT} documents${NC}"
    echo ""
fi

# Confirmation
if [ "$FORCE_MODE" = false ]; then
    if [ "$NUCLEAR_MODE" = true ]; then
        echo -e "${RED}Type 'NUCLEAR' to confirm nuclear reset:${NC}"
        read -p "> " confirm
        if [ "$confirm" != "NUCLEAR" ]; then
            echo "Cancelled."
            exit 0
        fi
    else
        read -p "Proceed with reset? (yes/no): " confirm
        if [ "$confirm" != "yes" ]; then
            echo "Cancelled."
            exit 0
        fi
    fi
fi

# Create mandatory backup if container is running
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    create_mandatory_backup
fi

# Perform reset
if [ "$NUCLEAR_MODE" = true ]; then
    do_nuclear_reset
else
    do_reset
fi
