# Aliyun Deployment Runbook

Use the root deployment guide at `docs/DEPLOYMENT.md` as the source of truth.

Short version:

```bash
git add .
git commit -m "fix: update site"
git push origin main
```

GitHub Actions will run `Deploy to Aliyun ECS (Docker)` automatically.

Emergency manual fallback:

```bash
./deploy-prod.sh
```

Or, on the server:

```bash
cd /opt/iboran
docker build --network host -t iboran-app:latest .
docker compose -f docker-compose.prod.yml up -d --no-build app
curl -I https://www.iboran.com/
```

Important:

- Build on Aliyun/Linux, not on local macOS.
- Do not upload `.next/standalone`.
- Do not use `Dockerfile.simple`.
- Do not replace compose with ad-hoc `docker run`.
- Keep `public/` assets in source so they are included in the server build.
