#!/bin/bash
# Compatibility wrapper. Normal production deploys now run through GitHub Actions.
# Do not recreate Dockerfile.simple or run uploaded standalone artifacts.

set -euo pipefail

echo "deploy-fast-fix.sh now uses the safe production deploy path."
exec "$(dirname "$0")/deploy-prod.sh"
