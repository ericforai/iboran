#!/bin/bash
# Deprecated. This project no longer uses the old PM2 setup flow.

set -euo pipefail

cat <<'EOF'
scripts/init-server.sh is deprecated.

Current production deployment is Docker-based:

  cd /opt/iboran
  docker build --network host -t iboran-app:latest .
  docker compose -f docker-compose.prod.yml up -d --no-build app

Use docs/DEPLOYMENT.md for the current runbook.
EOF
