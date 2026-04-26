#!/bin/bash
# Deprecated. Do not use the old one-shot migration/deployment flow.
# It exported local Docker images and MongoDB data together, which is not the
# production deploy model anymore.

set -euo pipefail

cat <<'MESSAGE'
deploy/migrate.sh is deprecated and intentionally disabled.

Production deploys now work like this:

  git add .
  git commit -m "fix: update site"
  git push origin main

GitHub Actions will run "Deploy to Aliyun ECS (Docker)" and build the image on
the Aliyun Linux server.

For emergency manual deploy only:

  ./deploy-prod.sh

Do not upload local app images, .next/standalone output, or MongoDB dumps as
part of normal code deployment.
MESSAGE

exit 1
