#!/bin/bash
# Compatibility wrapper for the safe production deploy path.
# Normal production deploys now run through GitHub Actions.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "deploy.sh now uses Docker production deployment, not PM2."
exec ./deploy-prod.sh
