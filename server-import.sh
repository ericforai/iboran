#!/bin/bash
# Deprecated. Do not use the old image/database import deployment flow.
# Production deploys now run through GitHub Actions:
# push to main -> Deploy to Aliyun ECS (Docker).

set -euo pipefail

cat <<'MESSAGE'
server-import.sh is deprecated and intentionally disabled.

Use one of these instead:

  1. Normal deploy:
     git push origin main

  2. Emergency manual fallback:
     ./deploy-prod.sh

Do not import local app images or MongoDB dumps as part of code deployment.
MESSAGE

exit 1
