#!/usr/bin/env bash

# iboran MongoDB Intelligent Watchdog v2.1
# Added: Alert Throttling (30-min cooldown) and Recovery Detection.

set -euo pipefail

APP_DIR="/opt/iboran"
ENV_FILE="$APP_DIR/.env"
COMPOSE_FILE="$APP_DIR/docker-compose.prod.yml"
CONTAINER_NAME="iboran-mongo-1"
APP_NAME="iboran-app"
APP_BASE_URL="http://127.0.0.1:3000"
APP_HEALTH_PATHS=("/" "/contact")
LOG_FILE="/var/log/iboran-mongo-watchdog.log"
LOCK_FILE="/tmp/iboran-mongo-watchdog.lock"
ALERT_STATE_FILE="/tmp/iboran-mongo-watchdog-alert.state"
ALERT_COOLDOWN=1800 # 30 minutes in seconds
PING_CMD='db.runCommand("ping").ok'

mkdir -p "$(dirname "$LOG_FILE")"

timestamp() {
  date '+%Y-%m-%d %H:%M:%S %Z'
}

log() {
  printf '[%s] %s\n' "$(timestamp)" "$*" | tee -a "$LOG_FILE"
}

# --- Intelligent Diagnostics ---

log_diagnostics() {
  log "--- DIAGNOSTICS START ---"
  log "Disk Space:"
  df -h / | tee -a "$LOG_FILE"
  log "Memory Usage:"
  free -m | tee -a "$LOG_FILE"
  log "Container Status ($CONTAINER_NAME):"
  docker inspect "$CONTAINER_NAME" --format 'Status: {{.State.Status}}, Health: {{if .State.Health}}{{.State.Health.Status}}{{else}}N/A{{end}}, ExitCode: {{.State.ExitCode}}, Error: {{.State.Error}}' | tee -a "$LOG_FILE"
  log "Recent Mongo Logs (last 10 lines):"
  docker logs --tail 10 "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE"
  log "--- DIAGNOSTICS END ---"
}

# --- Intelligence Functions ---

is_mongo_recovering() {
  if docker logs --tail 100 "$CONTAINER_NAME" 2>&1 | grep -qE "WTRECOV|recovery|log replay|checkpoint|index build"; then
    return 0
  fi
  return 1
}

wait_for_mongo() {
  local attempt
  local max_attempts=60
  log "Waiting for MongoDB to become healthy (Max 3m)..."
  for attempt in $(seq 1 "$max_attempts"); do
    if container_running && container_healthy && can_ping_mongo; then
      return 0
    fi
    if is_mongo_recovering; then
      log "[Attempt $attempt] MongoDB is actively recovering..."
    fi
    sleep 3
  done
  return 1
}

# --- Alert Throttling ---

can_send_alert() {
  local type="$1"
  if [[ "$type" == "success" ]]; then
    return 0 # Always send success/recovery alerts
  fi
  
  if [[ -f "$ALERT_STATE_FILE" ]]; then
    local last_alert_time
    last_alert_time=$(cat "$ALERT_STATE_FILE")
    local now
    now=$(date +%s)
    local elapsed=$((now - last_alert_time))
    if [[ $elapsed -lt $ALERT_COOLDOWN ]]; then
      local remaining=$(( (ALERT_COOLDOWN - elapsed) / 60 ))
      log "Alert throttled: Last alert sent $((elapsed / 60)) min ago. Cooldown remains: ${remaining} min."
      return 1 # Throttled
    fi
  fi
  return 0
}

update_alert_state() {
  local type="$1"
  if [[ "$type" == "success" ]]; then
    rm -f "$ALERT_STATE_FILE"
  else
    date +%s > "$ALERT_STATE_FILE"
  fi
}

send_alert() {
  local type="$1"
  local subject="$2"
  local message="$3"

  if ! can_send_alert "$type"; then
    return 0
  fi

  if [[ -z "${SMTP_HOST:-}" || -z "${SMTP_USER:-}" || -z "${SMTP_PASS:-}" || -z "${LEAD_EMAIL_TO:-}" ]]; then
    log "Alert skipped because SMTP configuration is incomplete"
    return 0
  fi

  export WATCHDOG_ALERT_SUBJECT="$subject"
  export WATCHDOG_ALERT_MESSAGE="$message"

  python3 - <<'PY'
import os
import smtplib
from email.mime.text import MIMEText

subject = os.environ["WATCHDOG_ALERT_SUBJECT"]
message = os.environ["WATCHDOG_ALERT_MESSAGE"]
smtp_host = os.environ["SMTP_HOST"]
recipients = [item.strip() for item in os.environ["LEAD_EMAIL_TO"].split(",") if item.strip()]

msg = MIMEText(message, "plain", "utf-8")
msg["Subject"] = subject
msg["From"] = os.environ.get("SMTP_FROM", os.environ["SMTP_USER"])
msg["To"] = ", ".join(recipients)

try:
    with smtplib.SMTP_SSL(smtp_host, int(os.environ.get("SMTP_PORT", "465"))) as server:
        server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
        server.sendmail(msg["From"], recipients, msg.as_string())
except Exception as e:
    print(f"Failed to send email: {e}")
PY
  update_alert_state "$type"
}

# --- Core Functions ---

load_env() {
  if [[ -f "$ENV_FILE" ]]; then
    set -a
    source "$ENV_FILE"
    set +a
  fi
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
  [[ "$(docker inspect --format '{{.State.Status}}' "$APP_NAME" 2>/dev/null || true)" == "running" ]]
}

http_path_healthy() {
  local path="$1"
  local status
  status="$(curl -s -o /dev/null -k -w '%{http_code}' "$APP_BASE_URL$path" || true)"
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
  cd "$APP_DIR"
  docker compose -f "$COMPOSE_FILE" up -d --no-build app >/dev/null
  log "Restarted Docker app $APP_NAME via compose"
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

# --- Main ---

main() {
  load_env
  exec 9>"$LOCK_FILE"
  if ! flock -n 9; then
    log "Watchdog already running. Skipping."
    exit 0
  fi

  if ! command -v docker >/dev/null 2>&1; then
    log "docker command not found"; exit 1
  fi

  ensure_restart_policy

  if container_running && container_healthy && can_ping_mongo; then
    log "MongoDB container is healthy"
  else
    local before_status
    before_status="$(docker inspect --format '{{.State.Status}}/{{if .State.Health}}{{.State.Health.Status}}{{else}}no-healthcheck{{end}}' "$CONTAINER_NAME" 2>/dev/null || echo 'missing')"
    log "MongoDB unhealthy or unavailable (status=$before_status); attempting recovery"

    if is_mongo_recovering; then
        log "Detection: MongoDB is ALREADY recovering. Waiting."
    else
        start_mongo
    fi
    
    ensure_restart_policy

    if wait_for_mongo; then
      local success_message="[$(timestamp)] MongoDB watchdog recovered $CONTAINER_NAME on $(hostname). Previous status: $before_status"
      log "$success_message"
      send_alert "success" "[iboran] MongoDB recovered on $(hostname)" "$success_message"
    else
      log_diagnostics
      local failure_message="[$(timestamp)] MongoDB watchdog could not recover $CONTAINER_NAME on $(hostname) after 3 minutes. Manual intervention required."
      log "$failure_message"
      send_alert "failure" "[iboran] MongoDB recovery failed on $(hostname)" "$failure_message"
      exit 1
    fi
  fi

  if app_online && app_http_healthy; then
    log "Application $APP_NAME is healthy"
    exit 0
  fi

  log "Application $APP_NAME is unhealthy; attempting Docker compose recovery"
  restart_app

  if wait_for_app; then
    local app_success_message="[$(timestamp)] Application watchdog recovered $APP_NAME on $(hostname)."
    log "$app_success_message"
    send_alert "success" "[iboran] App recovered on $(hostname)" "$app_success_message"
    exit 0
  fi

  local app_failure_message="[$(timestamp)] Application watchdog could not recover $APP_NAME on $(hostname). Manual intervention required."
  log "$app_failure_message"
  send_alert "failure" "[iboran] App recovery failed on $(hostname)" "$app_failure_message"
  exit 1
}

main "$@"
