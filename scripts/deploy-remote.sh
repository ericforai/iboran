#!/bin/bash
# Local deployment wrapper. GitHub push to main is the normal deploy path.
# Use this only as an emergency/manual fallback.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "Manual fallback deploy: syncing current working tree with the safe production deploy path."
exec ./deploy-prod.sh
