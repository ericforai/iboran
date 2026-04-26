#!/bin/bash
# Compatibility wrapper. Normal production deploys now run through GitHub Actions.
# The old fast deploy uploaded local .next/standalone output and can break
# Linux-only dependencies such as sharp.

set -euo pipefail

echo "deploy-fast.sh now uses the safe production deploy path."
exec "$(dirname "$0")/deploy-prod.sh"
