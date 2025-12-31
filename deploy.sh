#!/bin/bash

# Stop on error
set -e

echo "🚀 Starting Deployment to Alibaba Cloud..."

# Pull latest code (assuming this script is run after git pull manually or via CI)
# If running manually on server:
# git pull origin main

# Build and start services
echo "📦 Building and starting containers..."
docker compose -f docker-compose.prod.yml up -d --build

# Prune unused images to save space
echo "🧹 Cleaning up..."
docker image prune -f

echo "✅ Deployment Complete! App should be running on port 3000."
