#!/bin/bash
# Compatibility wrapper for the safe production deploy path.
# Normal production deploys now run through GitHub Actions.

set -euo pipefail

echo "deploy/update.sh now uses the safe production deploy path."
exec "$(dirname "$0")/../deploy-prod.sh"
