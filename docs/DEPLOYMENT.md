# Production Deployment

Last updated: 2026-04-27

Production runs on Aliyun ECS at `/opt/iboran` with Docker:

- App container: `iboran-app`
- Mongo container: `iboran-mongo-1`
- Public site: `https://www.iboran.com`
- Server: `root@47.111.2.171`
- GitHub repo: `ericforai/iboran`

## Golden Rule

GitHub is the source of truth. Normal production deploys happen from the `main` branch through GitHub Actions.

The production Docker image must still be built on the Aliyun/Linux server. GitHub Actions only checks the code, syncs source files to `/opt/iboran`, and asks the server to run the Docker build/restart.

Do not upload local `.next/standalone`, `.next/static`, or a locally built image from macOS. Native dependencies such as `sharp` are platform-specific; local macOS build output can break the Linux container.

## Normal Deploy

Use this flow for everyday changes:

```bash
git status
git add .
git commit -m "fix: update site"
git push origin main
```

After the push, GitHub automatically runs:

- Workflow: `Deploy to Aliyun ECS (Docker)`
- Trigger: push to `main`, or manual `workflow_dispatch`
- Actions page: `https://github.com/ericforai/iboran/actions`

The workflow:

1. Checks out the pushed code.
2. Installs dependencies and runs `pnpm exec tsc --noEmit --pretty false`.
3. Syncs source files and `public/` assets to `/opt/iboran`.
4. Builds `iboran-app:latest` on Aliyun with `docker build --network host`.
5. Restarts the app with `docker compose -f docker-compose.prod.yml up -d --no-build app`.
6. Verifies the home page, posts page, and logo asset.

## Manual GitHub Deploy

To redeploy the latest `main` without a new commit:

1. Open `https://github.com/ericforai/iboran/actions`.
2. Select `Deploy to Aliyun ECS (Docker)`.
3. Click `Run workflow`.
4. Choose branch `main`.

## Required GitHub Settings

Actions secrets:

- `SSH_PRIVATE_KEY`: private key that can SSH into the server
- `SERVER_HOST`: `47.111.2.171`
- `SERVER_USER`: `root`

The workflow does not need database secrets because production `.env` stays on the server and is never overwritten by rsync.

## Emergency Local Fallback

Use this only when GitHub Actions is unavailable:

```bash
./deploy-prod.sh
```

The fallback script runs the same safe deploy path: local TypeScript check, source sync to `/opt/iboran`, server-side Docker build, compose restart, and HTTP verification.

## Manual Server Commands

If you are already on the server:

```bash
cd /opt/iboran
docker build --network host \
  --build-arg NEXT_PUBLIC_SERVER_URL=https://www.iboran.com \
  -t iboran-app:latest \
  .
docker compose -f docker-compose.prod.yml up -d --no-build app
curl -I https://www.iboran.com/
curl -I https://www.iboran.com/posts
curl -I https://www.iboran.com/products/staff-ai
curl -I https://www.iboran.com/assets/images/boran-logo.png
```

`--network host` is required because `next build`/Payload collects page data from MongoDB at `localhost:27018` during the build.

## Deprecated Paths

These are intentionally deprecated and must not be reintroduced:

- GitHub Actions uploading local `.next/standalone`
- Local scripts uploading `.next/standalone` or `.next/static`
- Building `Dockerfile.simple` from uploaded standalone output
- `docker run --link iboran-mongo:mongo`
- PM2 production app deploys
- Hard-coding `SMTP_PASS` in deploy scripts
- Replacing the compose-managed app container with ad-hoc `docker run`
- One-shot migration scripts that export/import the app image and MongoDB together

Compatibility wrapper scripts now call `./deploy-prod.sh`:

- `deploy-fast.sh`
- `deploy-custom.sh`
- `deploy-fast-fix.sh`
- `deploy-remote.sh`
- `deploy/update.sh`
- `scripts/deploy-remote.sh`

Disabled legacy workflows/scripts:

- `.github/workflows/deploy-with-db.yml`
- `deploy/migrate.sh`
- `server-import.sh`

## Mongo Watchdog

Production MongoDB is `iboran-mongo-1`, with host port `27018` mapped to container port `27017`.

Useful checks:

```bash
docker ps --filter name=iboran-mongo-1
docker exec iboran-mongo-1 mongosh --eval 'db.adminCommand("ping")'
systemctl status iboran-mongo-watchdog.timer
journalctl -u iboran-mongo-watchdog.service -n 100 --no-pager
```

## Verification Checklist

```bash
curl -I https://www.iboran.com/
curl -I https://www.iboran.com/posts
curl -I https://www.iboran.com/products/staff-ai
curl -I https://www.iboran.com/assets/images/boran-logo.png
ssh root@47.111.2.171 'docker logs --tail=80 iboran-app'
```

Expected result: page and asset checks return `200`. The current known non-blocking issue is SMTP authentication failure until the QQ mail authorization code is refreshed.
