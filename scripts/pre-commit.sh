#!/bin/bash
# Pre-commit hook for architecture validation
# J3: CLOSED RULES - Build process enforces rules
# J4: REFLEX - Violations block commits
#
# Usage:
# 1. Copy this to .git/hooks/pre-commit (already executable)
# 2. Or use with Husky: npm install -D husky && npx husky set .husky/pre-commit 'bash scripts/pre-commit.sh'

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Running architecture validation..."

# Get list of staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx)$' || true)

# If no TypeScript/JavaScript files changed, skip architecture check
if [ -z "$STAGED_FILES" ]; then
  echo "ℹ️  No TypeScript/JavaScript files staged. Skipping architecture check."
  exit 0
fi

# Run dependency-cruiser check on staged files
echo "Checking dependency rules for staged files..."

# Create a temp file with the list of staged files
TEMP_FILE=$(mktemp)
echo "$STAGED_FILES" > "$TEMP_FILE"

# Run dependency-cruiser
if npm run architecture:check --silent; then
  echo "✅ ${GREEN}Architecture validation passed${NC}"

  # Optional: Run linting (only errors, not warnings)
  echo "🔍 Running linting..."
  LINT_OUTPUT=$(npm run lint 2>&1 || true)
  if echo "$LINT_OUTPUT" | grep -q "error"; then
    echo ""
    echo "❌ ${RED}Linting failed with errors${NC}"
    echo "$LINT_OUTPUT" | grep "error"
    echo "Run 'npm run lint:fix' to auto-fix issues."
    rm -f "$TEMP_FILE"
    exit 1
  fi
  # Only warnings are OK
  if echo "$LINT_OUTPUT" | grep -q "Warning"; then
    echo "⚠️  ${YELLOW}Linting passed with warnings (existing code)${NC}"
  else
    echo "✅ ${GREEN}Linting passed${NC}"
  fi

  rm -f "$TEMP_FILE"
  exit 0
else
  echo ""
  echo "❌ ${RED}Architecture violations detected!${NC}"
  echo ""
  echo "${YELLOW}Available commands:${NC}"
  echo "  npm run architecture:check:html    - Detailed HTML report"
  echo "  npm run architecture:check:archi   - Architecture visualization"
  echo "  npm run architecture:visualize     - Dependency graph (SVG)"
  echo ""
  echo "${YELLOW}Quick fixes:${NC}"
  echo "1. Review violations: npm run architecture:check"
  echo "2. Generate report: npm run architecture:check:html"
  echo "3. Open architecture-report.html in your browser"
  echo "4. Fix violations and stage changes again"
  echo ""

  rm -f "$TEMP_FILE"
  exit 1
fi
