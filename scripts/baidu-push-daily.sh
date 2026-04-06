#!/bin/bash

# Baidu URL Push Daily Task
# Scheduled by crontab: 0 10 * * *

# Set the working directory
PROJECT_ROOT="/Users/user/iboran"
cd "$PROJECT_ROOT" || exit 1

# Load NVM (Node Version Manager)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Select correct Node version if needed (optional since we'll use npx from the path)
# nvm use v22.16.0 

# Run the Baidu push script with --auto flag
# Use full path to npx from NVM bin directory
/Users/user/.nvm/versions/node/v22.16.0/bin/npx tsx scripts/baidu-push.ts --auto >> scripts/baidu-push.log 2>&1

echo "--- Daily Baidu Push Completed at $(date) ---" >> scripts/baidu-push.log
