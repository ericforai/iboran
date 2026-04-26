# Deployment Knowledge

This file used to describe the older PM2 deployment path. That path is deprecated.

Use `docs/DEPLOYMENT.md` as the source of truth.

Current production model:

- Server: `root@47.111.2.171`
- App directory: `/opt/iboran`
- App container: `iboran-app`
- Mongo container: `iboran-mongo-1`
- Primary deploy: push to `main`, then GitHub Actions runs `Deploy to Aliyun ECS (Docker)`
- Manual fallback: `./deploy-prod.sh`

Manual server deploy:

```bash
cd /opt/iboran
docker build --network host -t iboran-app:latest .
docker compose -f docker-compose.prod.yml up -d --no-build app
curl -I https://www.iboran.com/
```

Do not upload local `.next/standalone`, use PM2, or build `Dockerfile.simple`.
