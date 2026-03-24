#!/usr/bin/env bash

set -euo pipefail

APP_DIR="/home/iboran"
ENV_FILE="$APP_DIR/.env"
COMPOSE_FILE="$APP_DIR/docker-compose.prod.yml"
CONTAINER_NAME="iboran-mongo-1"
APP_NAME="iboran"
APP_BASE_URL="http://127.0.0.1:3000"
APP_HEALTH_PATHS=("/" "/contact")
LOG_FILE="/var/log/iboran-mongo-watchdog.log"
PING_CMD='db.runCommand("ping").ok'

mkdir -p "$(dirname "$LOG_FILE")"

timestamp() {
  date '+%Y-%m-%d %H:%M:%S %Z'
}

log() {
  printf '[%s] %s\n' "$(timestamp)" "$*" | tee -a "$LOG_FILE"
}

load_env() {
  if [[ -f "$ENV_FILE" ]]; then
    set -a
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    set +a
  fi
}

send_alert() {
  local subject="$1"
  local message="$2"

  if [[ -z "${SMTP_HOST:-}" || -z "${SMTP_USER:-}" || -z "${SMTP_PASS:-}" || -z "${LEAD_EMAIL_TO:-}" ]]; then
    log "Alert skipped because SMTP configuration is incomplete"
    return 0
  fi

  python3 - <<'PY'
import os
import smtplib
from email.mime.text import MIMEText

subject = os.environ["WATCHDOG_ALERT_SUBJECT"]
message = os.environ["WATCHDOG_ALERT_MESSAGE"]
smtp_host = os.environ["SMTP_HOST"]
smtp_port = int(os.environ.get("SMTP_PORT", "465"))
smtp_user = os.environ["SMTP_USER"]
smtp_pass = os.environ["SMTP_PASS"]
smtp_from = os.environ.get("SMTP_FROM", smtp_user)
recipients = [item.strip() for item in os.environ["LEAD_EMAIL_TO"].split(",") if item.strip()]

msg = MIMEText(message, "plain", "utf-8")
msg["Subject"] = subject
msg["From"] = smtp_from
msg["To"] = ", ".join(recipients)

with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
    server.login(smtp_user, smtp_pass)
    server.sendmail(smtp_from, recipients, msg.as_string())
PY
}

ensure_restart_policy() {
  local policy

  policy="$(docker inspect --format '{{.HostConfig.RestartPolicy.Name}}' "$CONTAINER_NAME" 2>/dev/null || true)"
  if [[ "$policy" != "unless-stopped" ]]; then
    docker update --restart unless-stopped "$CONTAINER_NAME" >/dev/null
    log "Updated restart policy for $CONTAINER_NAME to unless-stopped"
  fi
}

app_online() {
  pm2 pid "$APP_NAME" 2>/dev/null | grep -Eq '^[1-9][0-9]*$'
}

http_path_healthy() {
  local path="$1"
  local status
  status="$(curl -s -o /dev/null -w '%{http_code}' "$APP_BASE_URL$path" || true)"
  [[ "$status" == "200" ]]
}

app_http_healthy() {
  local path

  for path in "${APP_HEALTH_PATHS[@]}"; do
    if ! http_path_healthy "$path"; then
      return 1
    fi
  done

  return 0
}

restart_app() {
  if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
    pm2 restart "$APP_NAME" >/dev/null
    log "Restarted PM2 app $APP_NAME"
  else
    cd "$APP_DIR"
    pm2 start ecosystem.config.cjs --only "$APP_NAME" >/dev/null
    log "Started PM2 app $APP_NAME"
  fi
}

wait_for_app() {
  local attempt

  for attempt in {1..40}; do
    if app_online && app_http_healthy; then
      return 0
    fi
    sleep 3
  done

  return 1
}

container_exists() {
  docker inspect "$CONTAINER_NAME" >/dev/null 2>&1
}

container_running() {
  [[ "$(docker inspect --format '{{.State.Status}}' "$CONTAINER_NAME" 2>/dev/null || true)" == "running" ]]
}

container_healthy() {
  local health

  health="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}no-healthcheck{{end}}' "$CONTAINER_NAME" 2>/dev/null || true)"
  [[ "$health" == "healthy" || "$health" == "no-healthcheck" ]]
}

can_ping_mongo() {
  docker exec "$CONTAINER_NAME" mongosh --quiet --eval "$PING_CMD" >/dev/null 2>&1
}

start_mongo() {
  if container_exists; then
    docker start "$CONTAINER_NAME" >/dev/null
    log "Started existing MongoDB container $CONTAINER_NAME"
  else
    docker compose -f "$COMPOSE_FILE" up -d mongo >/dev/null
    log "Created MongoDB container $CONTAINER_NAME via docker compose"
  fi
}

wait_for_mongo() {
  local attempt

  for attempt in {1..20}; do
    if container_running && container_healthy && can_ping_mongo; then
      return 0
    fi
    sleep 3
  done

  return 1
}

main() {
  load_env

  if ! command -v docker >/dev/null 2>&1; then
    log "docker command not found"
    exit 1
  fi

  ensure_restart_policy

  if container_running && container_healthy && can_ping_mongo; then
    log "MongoDB container is healthy"
  else
    local before_status
    before_status="$(docker inspect --format '{{.State.Status}}/{{if .State.Health}}{{.State.Health.Status}}{{else}}no-healthcheck{{end}}' "$CONTAINER_NAME" 2>/dev/null || echo 'missing')"
    log "MongoDB unhealthy or unavailable (status=$before_status); attempting recovery"

    start_mongo
    ensure_restart_policy

    if wait_for_mongo; then
      local success_message
      success_message="[$(timestamp)] MongoDB watchdog recovered $CONTAINER_NAME on $(hostname). Previous status: $before_status"
      log "$success_message"
      WATCHDOG_ALERT_SUBJECT="[iboran] MongoDB recovered on $(hostname)" \
      WATCHDOG_ALERT_MESSAGE="$success_message" \
        send_alert "[iboran] MongoDB recovered on $(hostname)" "$success_message"
    else
      local failure_message
      failure_message="[$(timestamp)] MongoDB watchdog could not recover $CONTAINER_NAME on $(hostname). Manual intervention required."
      log "$failure_message"
      WATCHDOG_ALERT_SUBJECT="[iboran] MongoDB recovery failed on $(hostname)" \
      WATCHDOG_ALERT_MESSAGE="$failure_message" \
        send_alert "[iboran] MongoDB recovery failed on $(hostname)" "$failure_message"
      exit 1
    fi
  fi

  if app_online && app_http_healthy; then
    log "Application $APP_NAME is healthy"
    exit 0
  fi

  log "Application $APP_NAME is unhealthy; attempting PM2 recovery"
  restart_app

  if wait_for_app; then
    local app_success_message
    app_success_message="[$(timestamp)] Application watchdog recovered $APP_NAME on $(hostname)."
    log "$app_success_message"
    WATCHDOG_ALERT_SUBJECT="[iboran] App recovered on $(hostname)" \
    WATCHDOG_ALERT_MESSAGE="$app_success_message" \
      send_alert "[iboran] App recovered on $(hostname)" "$app_success_message"
    exit 0
  fi

  local app_failure_message
  app_failure_message="[$(timestamp)] Application watchdog could not recover $APP_NAME on $(hostname). Manual intervention required."
  log "$app_failure_message"
  WATCHDOG_ALERT_SUBJECT="[iboran] App recovery failed on $(hostname)" \
  WATCHDOG_ALERT_MESSAGE="$app_failure_message" \
    send_alert "[iboran] App recovery failed on $(hostname)" "$app_failure_message"
  exit 1
}

main "$@"
